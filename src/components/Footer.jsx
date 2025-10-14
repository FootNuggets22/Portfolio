import React from 'react'
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'
import './Footer.css'

const Footer = ({ currentPage, setCurrentPage }) => {
  const { language } = useLanguage()
  const t = translations[language]
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (page, sectionId = null) => {
    if (page === 'home' && sectionId) {
      setCurrentPage('home')
      // Small delay to ensure the home page renders first
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      setCurrentPage(page)
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 onClick={() => handleNavClick('home')} style={{cursor: 'pointer'}}>
                Tutanekai Manuera
              </h3>
              <p>{t.footer.tagline}</p>
              <div className="social-links">
                <a href="https://github.com/FootNuggets22" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/tutanekai-manuera-289870357/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:tutanekaitapiata@gmail.com">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>{t.footer.navigation}</h4>
                <button 
                  onClick={() => handleNavClick('home')}
                  className="footer-link"
                >
                  {t.nav.home}
                </button>
                <button 
                  onClick={() => handleNavClick('home', 'about')}
                  className="footer-link"
                >
                  {t.nav.about}
                </button>
                <button 
                  onClick={() => handleNavClick('skills')}
                  className="footer-link"
                >
                  {t.nav.skills}
                </button>
                <button 
                  onClick={() => handleNavClick('pepeha')}
                  className="footer-link"
                >
                  {t.nav.pepeha}
                </button>
                <button 
                  onClick={() => handleNavClick('home', 'contact')}
                  className="footer-link"
                >
                  {t.nav.contact}
                </button>
              </div>

            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              <p>
                {t.footer.madeWith} <Heart size={16} className="heart" /> {t.footer.by} {currentYear}. 
                All rights reserved.
              </p>
            </div>
            
            <button className="scroll-top" onClick={scrollToTop} aria-label={t.footer.backToTop}>
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer