import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'
import './Hero.css'

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/Tutanekai-Manuera-Resume.pdf'
    link.download = 'Tutanekai-Manuera-Resume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.hero.greeting} <span className="highlight">{t.hero.name}</span>{language === 'mi' ? ' ahau' : ''}
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.hero.title}
          </motion.p>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t.hero.description}
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a 
              href="https://github.com/FootNuggets22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button primary"
            >
              {t.hero.viewWork}
            </a>
            <button className="cta-button primary" onClick={downloadCV}>
              {t.hero.downloadCV}
            </button>
          </motion.div>

          <motion.div 
            className="social-links"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a href="https://github.com/FootNuggets22" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/tutanekai-manuera-289870357/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:tutanekaitapiata@gmail.com">
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            onClick={scrollToAbout}
          >
            <ArrowDown size={24} />
            <span>{t.hero.scrollText}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero