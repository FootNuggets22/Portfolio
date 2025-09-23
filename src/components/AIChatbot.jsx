import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, RotateCcw, Bot, User } from 'lucide-react'
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
  const messagesEndRef = useRef(null)
  const textareaRef = useRef(null)

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

    // Simulate AI response (you can replace this with actual AI integration)
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage.toLowerCase())
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const generateBotResponse = (input) => {
    // Simple keyword-based responses based only on portfolio content
    if (input.includes('skill') || input.includes('technology') || input.includes('tech')) {
      return "I can see Tu's skills in the portfolio! Tu specializes in JavaScript (95%), React (90%), Node.js (90%), Express.js (90%), and many other technologies including TypeScript, Next.js, CSS, Tailwind CSS, Python, MongoDB, and more. You can scroll down to the Skills section to see the complete breakdown with proficiency levels!"
    }
    
    if (input.includes('experience') || input.includes('about') || input.includes('background')) {
      return "From the About section, Tu is a passionate full-stack developer with 3+ years of experience and has completed 50+ projects with 100% client satisfaction. Tu values clean code, great user experience, and continuous learning. You can learn more in the About section of this portfolio!"
    }
    
    if (input.includes('contact') || input.includes('email') || input.includes('reach') || input.includes('hire')) {
      return "You can contact Tu through the Contact section below! Tu is currently available for freelance projects and full-time opportunities. You can use the contact form or reach out directly at tutanekaitapiata@gmail.com"
    }
    
    if (input.includes('github') || input.includes('project') || input.includes('work') || input.includes('code')) {
      return "You can view Tu's work on GitHub! Click the 'View My Work' button in the hero section above, or visit <a href='https://github.com/FootNuggets22' target='_blank' rel='noopener noreferrer'>https://github.com/FootNuggets22</a> to see all the projects and code!"
    }
    
    if (input.includes('navigate') || input.includes('section') || input.includes('go to') || input.includes('where')) {
      return "This portfolio has these main sections: <br/>• <strong>Home</strong> - The hero section with introduction<br/>• <strong>About</strong> - Tu's background and values<br/>• <strong>Skills</strong> - Technical skills and proficiency levels<br/>• <strong>Contact</strong> - Get in touch form and information<br/><br/>Just scroll down or use the navigation menu at the top!"
    }
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! Welcome to Tu's portfolio! I'm here to help you explore and learn about Tu's skills, experience, and how to get in touch. What would you like to know about?"
    }

    if (input.includes('linkedin') || input.includes('social')) {
      return "You can connect with Tu on LinkedIn at <a href='https://www.linkedin.com/in/tutanekai-manuera-289870357/' target='_blank' rel='noopener noreferrer'>LinkedIn Profile</a> or check out the social links in the hero section and footer!"
    }

    if (input.includes('download') || input.includes('cv') || input.includes('resume')) {
      return "There's a 'Download CV' button in the hero section at the top of the page. You can click it to get Tu's resume!"
    }
    
    // Check for off-topic questions
    const offTopicKeywords = [
      'weather', 'politics', 'news', 'sports', 'food', 'recipe', 'movie', 'music', 
      'game', 'shopping', 'travel', 'health', 'medicine', 'joke', 'story', 
      'calculate', 'math', 'homework', 'assignment', 'personal life', 'family',
      'relationship', 'dating', 'money', 'investment', 'stock', 'crypto'
    ]
    
    const isOffTopic = offTopicKeywords.some(keyword => input.includes(keyword))
    const hasPortfolioKeywords = ['skill', 'experience', 'contact', 'about', 'github', 'project', 'work', 'tu', 'portfolio', 'developer', 'code', 'tech', 'javascript', 'react'].some(keyword => input.includes(keyword))
    
    if (isOffTopic || (!hasPortfolioKeywords && input.length > 5)) {
      return "Sorry, I can only give information based on this webpage. I'm here to help you learn about Tu's portfolio, skills, experience, and how to get in touch. Is there anything about Tu's work or this portfolio I can help you with?"
    }
    
    // Default responses focused on portfolio content
    const defaultResponses = [
      "I can help you explore Tu's portfolio! Try asking about skills, experience, contact information, or navigation. What interests you most?",
      "This portfolio showcases Tu's expertise in full-stack development. Would you like me to guide you to a specific section like Skills, About, or Contact?",
      "Tu has created this portfolio to showcase development skills and experience. You can explore the different sections or ask me specific questions about what's here!",
      "I can help you navigate through the Skills, About, and Contact sections, or tell you about Tu's GitHub work. What would you like to explore?"
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