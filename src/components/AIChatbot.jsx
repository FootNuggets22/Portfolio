import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, RotateCcw, Bot, User } from 'lucide-react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import './AIChatbot.css'

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Kia Ora! I'm Tu's AI assistant. I can help you navigate the portfolio and answer questions about Tu's skills, experience, and projects. How can I help you today?",
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [useGemini, setUseGemini] = useState(false)
  const messagesEndRef = useRef(null)
  const textareaRef = useRef(null)

  // Initialize Gemini AI
  const [genAI, setGenAI] = useState(null)
  const [model, setModel] = useState(null)

  useEffect(() => {
    const initializeGemini = async () => {
      try {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY
        // console.log('API Key check:', apiKey ? `Key found (length: ${apiKey.length})` : 'Key not found')
        
        if (!apiKey) {
          // console.log('No API key found, using local AI responses')
          return
        }
        
        const genAIInstance = new GoogleGenerativeAI(apiKey)
        const modelInstance = genAIInstance.getGenerativeModel({ model: "models/gemini-2.5-flash-preview-05-20" })
        
        setGenAI(genAIInstance)
        setModel(modelInstance)
        setUseGemini(true)
        // console.log('Gemini AI initialized successfully with gemini-2.5-flash-preview-05-20')
      } catch (error) {
        // console.log('Using local AI responses due to API limitations:', error.message)
      }
    }
    
    initializeGemini()
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const autoResizeTextarea = () => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = Math.min(textarea.scrollHeight, 150) + 'px'
    }
  }

  const handleInputChange = (e) => {
    setInputMessage(e.target.value)
    autoResizeTextarea()
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    try {
      let botResponse
      if (useGemini && model) {
        botResponse = await generateGeminiResponse(inputMessage)
      } else {
        // Use enhanced local AI-like responses
        botResponse = await getEnhancedResponse(inputMessage)
      }
      
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Error getting AI response:', error)
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: "I'm here to help you learn about Tu's portfolio! Try asking about skills, experience, or contact information.",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const formatLinksInText = (text) => {
    // Convert URLs to clickable links
    const urlRegex = /(https?:\/\/[^\s]+)/g
    return text.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">$1</a>')
  }

  const generateGeminiResponse = async (input) => {
    // Check if model is initialized
    if (!model) {
      // console.warn('Gemini model not initialized, using fallback responses')
      return getEnhancedResponse(input)
    }

    // Check for off-topic questions first (only clearly unrelated topics)
    const offTopicKeywords = [
      'weather', 'politics', 'news', 'sports', 'food', 'recipe', 'movie', 'music', 
      'game', 'shopping', 'travel', 'health', 'medicine', 'joke', 'story', 
      'homework', 'assignment', 'celebrity', 'gossip', 'meme', 'tiktok', 'instagram'
    ]
    
    const inputLower = input.toLowerCase()
    const hasOffTopicKeywords = offTopicKeywords.some(keyword => inputLower.includes(keyword))
    const hasPortfolioKeywords = [
      'tu', 'tutanekai', 'skill', 'experience', 'contact', 'about', 'github', 'project', 
      'work', 'portfolio', 'developer', 'code', 'tech', 'javascript', 'react', 'hire', 
      'email', 'values', 'value', 'clean code', 'problem solving', 'learning', 'background',
      'bilingual', 'māori', 'maori', 'programming', 'development', 'client', 'satisfaction'
    ].some(keyword => inputLower.includes(keyword))
    
    // Only trigger off-topic if it's clearly unrelated AND has no portfolio keywords
    if (hasOffTopicKeywords && !hasPortfolioKeywords && input.length > 20) {
      return "I'm specifically designed to help with Tu's portfolio! I can tell you about Tu's technical skills, development experience, completed projects, or how to get in touch. What would you like to know about Tu's work as a developer?"
    }

    const portfolioContext = `You are Tu's AI assistant on his portfolio website. 

ABOUT TU MANUERA:
- Bilingual programmer (Te Reo Māori & English)
- Full-stack developer with 2+ years experience
- 10+ completed projects, 100% client satisfaction
- Email: tutanekaitapiata@gmail.com
- GitHub: https://github.com/FootNuggets22
- LinkedIn: https://www.linkedin.com/in/tutanekai-manuera-289870357/

WHAKAPAPA (CULTURAL HERITAGE):
- Waka: Te Arawa, Ngatokimatawhaorua, Nukutaememeha
- Maunga: Tuturu, Tarawera, Maunga Taniwha, Hikurangi  
- Awa: Puarenga, Tarawera, Tapapa, Waiapu
- Marae: Te Pakira, Hinemihi, Ngapuhi, Iritekura
- Iwi: Tuhourangi, Te Arawa, Ngapuhi, Ngati Porou
- Hapu: Ngati Wahiao, Ngati Rangitihi, Te Urimahoe, Iritekura

SKILLS: JavaScript (95%), React (90%), Node.js (90%), Express.js (90%), TypeScript (85%), Next.js (85%), CSS (90%), Tailwind CSS (85%), Python (80%), MongoDB (85%), Git (90%), API Development (85%)

PORTFOLIO SECTIONS:
- Home: Hero section with introduction
- About: Background, values, and experience details
- Skills: Dedicated page showcasing technical skills with proficiency levels
- Pepeha: Traditional Māori introduction with cultural connections and whakapapa
- Contact: Contact form and information

INSTRUCTIONS: 
- Only discuss Tu's portfolio, skills, experience, cultural background, and contact info
- Be friendly and helpful
- Keep responses under 150 words
- DO NOT use markdown formatting (no **, __, [], etc.)
- Use plain text only
- You can include clickable links in format: https://example.com
- If asked about unrelated topics, redirect to portfolio content

User: ${input}
Assistant:`

    try {
      // console.log('Sending request to Gemini API...')
      
      const result = await model.generateContent(portfolioContext)
      const response = await result.response
      
      let text
      if (typeof response.text === 'function') {
        text = response.text()
      } else {
        text = response.text || response.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I had trouble processing that. Please ask about Tu\'s skills, experience, or contact information!'
      }
      
      // Clean up any markdown formatting that might slip through and format links
      text = text
        .replace(/\*\*(.*?)\*\*/g, '$1')  // Remove bold **text**
        .replace(/\*(.*?)\*/g, '$1')      // Remove italic *text*
        .replace(/__(.*?)__/g, '$1')      // Remove bold __text__
        .replace(/_(.*?)_/g, '$1')        // Remove italic _text_
        .replace(/`(.*?)`/g, '$1')        // Remove code `text`
        .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove markdown links but keep text
        .replace(/#+\s*/g, '')            // Remove headers
        .replace(/^\s*[-*+]\s*/gm, '')    // Remove bullet points
        .replace(/^\s*\d+\.\s*/gm, '')    // Remove numbered lists
      
      // Convert plain URLs to clickable links
      text = formatLinksInText(text)
      
      // console.log('Gemini API response received successfully')
      return text
    } catch (error) {
      // console.error('Gemini API error:', error.message)
      // console.log('Falling back to enhanced responses')
      return getEnhancedResponse(input)
    }
  }

  const getEnhancedResponse = async (input) => {
    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000))
    
    const inputLower = input.toLowerCase()
    
    // Greeting responses
    if (inputLower.includes('hello') || inputLower.includes('hi') || inputLower.includes('hey') || inputLower.includes('kia ora')) {
      const greetings = [
        "Kia ora! Welcome to Tu's portfolio! I'm excited to help you explore Tu's work and skills. What would you like to know?",
        "Hello there! Thanks for visiting Tu's portfolio. I can tell you about Tu's technical skills, experience, or how to get in touch. What interests you most?",
        "Hi! Great to meet you! I'm here to guide you through Tu's portfolio and answer any questions about Tu's development expertise. How can I help?"
      ]
      return greetings[Math.floor(Math.random() * greetings.length)]
    }

    // Skills and technology questions
    if (inputLower.includes('skill') || inputLower.includes('technology') || inputLower.includes('tech') || inputLower.includes('programming') || inputLower.includes('language')) {
      const skillResponses = [
        "Tu has impressive technical skills! The strongest areas are JavaScript (95%), React (90%), and Node.js (90%). Tu also excels in Express.js (90%), TypeScript (85%), Next.js (85%), CSS (90%), Tailwind CSS (85%), Python (80%), MongoDB (85%), Git & GitHub (90%), and API Development (85%). You can see the full breakdown with visual progress bars in the Skills section below!",
        "Great question about Tu's technical expertise! Tu specializes in modern web development with JavaScript, React, and Node.js as core strengths. The tech stack also includes TypeScript for type safety, Next.js for full-stack applications, various CSS frameworks, Python for backend work, and MongoDB for databases. Check out the Skills section to see proficiency levels for each technology!",
        "Tu's technical skillset is quite comprehensive! Frontend development with React and modern JavaScript, backend development with Node.js and Express, database work with MongoDB, and version control with Git. Tu also works with TypeScript, Next.js, and various CSS frameworks. The Skills section below shows exact proficiency percentages for each technology!"
      ]
      return skillResponses[Math.floor(Math.random() * skillResponses.length)]
    }

    // Experience and background
    if (inputLower.includes('experience') || inputLower.includes('about') || inputLower.includes('background') || inputLower.includes('work')) {
      const experienceResponses = [
        "Tu brings over 2 years of passionate development experience to the table! With 10+ completed projects and 100% client satisfaction, Tu has proven expertise in building quality applications. Tu values clean code, excellent user experience, and continuous learning. Tu is also bilingual in Te Reo Māori and English, bringing unique cultural perspective to development work. You can learn more in the About section!",
        "Tu's background is quite impressive! As a bilingual developer fluent in both Te Reo Māori and English, Tu brings 2+ years of experience in full-stack development. Tu has successfully completed 10+ projects with perfect client satisfaction. Tu's approach focuses on clean, maintainable code and creating meaningful user experiences. The About section has more details about Tu's journey and values!",
        "Tu has built a strong foundation with 2+ years in development and an impressive track record of 10+ successful projects. What makes Tu stand out is the commitment to quality - 100% client satisfaction speaks volumes! Tu combines technical skills with cultural understanding as a bilingual programmer, and values continuous learning and clean code practices. Check out the About section for the full story!"
      ]
      return experienceResponses[Math.floor(Math.random() * experienceResponses.length)]
    }

    // Contact and hiring
    if (inputLower.includes('contact') || inputLower.includes('email') || inputLower.includes('reach') || inputLower.includes('hire') || inputLower.includes('work with')) {
      const contactResponses = [
        "Tu is available for exciting opportunities! You can reach out through the Contact section below, which has a convenient contact form. For direct communication, Tu's email is tutanekaitapiata@gmail.com. Tu is open to freelance projects, full-time opportunities, and collaborations. Don't hesitate to get in touch!",
        "Great that you're interested in working with Tu! The easiest way to connect is through the Contact section on this page - there's a contact form that goes directly to Tu. You can also email tutanekaitapiata@gmail.com directly. Tu is currently available for new projects and opportunities, so reach out anytime!",
        "Tu welcomes new opportunities and collaborations! Head down to the Contact section where you'll find a contact form, or reach out directly at tutanekaitapiata@gmail.com. Whether it's freelance work, full-time positions, or just a chat about potential projects, Tu is always happy to connect with fellow developers and potential clients!"
      ]
      return contactResponses[Math.floor(Math.random() * contactResponses.length)]
    }

    // Projects and GitHub
    if (inputLower.includes('project') || inputLower.includes('github') || inputLower.includes('portfolio') || inputLower.includes('code') || inputLower.includes('work')) {
      const projectResponses = [
        "Tu's work is showcased on GitHub at https://github.com/FootNuggets22! You can explore various projects there, from AI-powered applications to full-stack web development. There's also a 'View My Work' button in the hero section above that takes you directly to the GitHub profile. Tu has worked on everything from mock interview assistants to product comparison platforms!",
        "You can check out Tu's projects on GitHub! The profile https://github.com/FootNuggets22 has a collection of work including AI-driven tools, web applications, and interesting experiments. Tu has built mock interview assistants, product comparison platforms, and various other applications. Click 'View My Work' in the hero section to explore the code!",
        "Tu's GitHub portfolio at https://github.com/FootNuggets22 showcases a diverse range of projects! You'll find everything from AI-powered applications to full-stack web development work. Tu has created tools like mock interview assistants and product comparison platforms, demonstrating both technical skill and practical problem-solving. The 'View My Work' button above will take you straight there!"
      ]
      return formatLinksInText(projectResponses[Math.floor(Math.random() * projectResponses.length)])
    }

    // Navigation help
    if (inputLower.includes('navigate') || inputLower.includes('section') || inputLower.includes('where') || inputLower.includes('find')) {
      return "This portfolio is organized into several key sections: <strong>Home</strong> (the hero section with introduction), <strong>About</strong> (Tu's background, values, and experience), <strong>Skills</strong> (technical skills with proficiency levels), and <strong>Contact</strong> (get in touch form and information). You can scroll down to explore each section, or use the navigation menu at the top of the page. What specific information are you looking for?"
    }

    // Off-topic detection
    const offTopicKeywords = ['weather', 'politics', 'news', 'sports', 'food', 'recipe', 'movie', 'music', 'game', 'shopping', 'travel', 'health', 'medicine', 'joke', 'story', 'calculate', 'math', 'homework']
    const isOffTopic = offTopicKeywords.some(keyword => inputLower.includes(keyword))
    
    if (isOffTopic) {
      return "I focus on helping visitors learn about Tu's portfolio, skills, and experience. I'd be happy to tell you about Tu's technical expertise, development background, projects, or how to get in touch. What aspect of Tu's work interests you most?"
    }

    // Default responses
    const defaultResponses = [
      "That's an interesting question! I'm here to help you explore Tu's portfolio. I can tell you about Tu's technical skills, development experience, projects, or how to contact Tu. What would you like to know more about?",
      "I'd love to help you learn more about Tu! You can ask me about technical skills, work experience, projects on GitHub, or how to get in touch. Tu has quite an impressive background in full-stack development. What catches your interest?",
      "Thanks for your question! I'm designed to help visitors understand Tu's capabilities and background. Feel free to ask about programming skills, development experience, completed projects, or contact information. What aspect of Tu's portfolio would you like to explore?",
      "Great question! I can guide you through Tu's portfolio and share information about technical expertise, professional experience, project work, or how to connect. Tu is a skilled full-stack developer with some really interesting projects. What would you like to discover?"
    ]
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const resetChatHistory = () => {
    setMessages([
      {
        id: 1,
        type: 'bot',
        content: "Kia Ora! I'm Tu's AI assistant. I can help you navigate the portfolio and answer questions about Tu's skills, experience, and projects. How can I help you today?",
        timestamp: new Date()
      }
    ])
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="chatbot-container">
      {/* Chat Button - Only Visible When Closed */}
      {!isOpen && (
        <motion.div
          className="chatbot-button"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle size={24} />
          <div className="pulse-indicator"></div>
        </motion.div>
      )}

      {/* Chat Window - Toggleable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="header-info">
                <Bot size={20} />
                <div>
                  <h4>Tu's AI Assistant</h4>
                  <span>Online • Ready to help</span>
                </div>
              </div>
              <div className="header-actions">
                <button onClick={resetChatHistory} className="reset-btn" title="Reset chat">
                  <RotateCcw size={16} />
                </button>
                <button onClick={() => setIsOpen(false)} className="close-btn">
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              {messages.map((message) => (
                <div key={message.id} className={`message ${message.type}`}>
                  <div className="message-avatar">
                    {message.type === 'bot' ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div className="message-content">
                    <div dangerouslySetInnerHTML={{ __html: message.content }} />
                    <span className="message-time">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="message bot typing">
                  <div className="message-avatar">
                    <Bot size={16} />
                  </div>
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="chatbot-input">
              <textarea
                ref={textareaRef}
                value={inputMessage}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Tu's website"
                rows="1"
                disabled={isTyping}
              />
              <button 
                onClick={handleSendMessage} 
                disabled={!inputMessage.trim() || isTyping}
                className="send-btn"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AIChatbot