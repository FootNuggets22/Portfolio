import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'
import logo from '../assets/logo.png'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    } else if (page === 'home' && !sectionId) {
      setCurrentPage('home')
      // Scroll to top of the page when home is clicked
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)
    } else {
      setCurrentPage(page)
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-left">
          <div className="logo" onClick={() => handleNavClick('home')}>
            <img src={logo} alt="Tutanekai Manuera" className="logo-image" />
          </div>
        </div>
        
        <div className="header-right">
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('home') }}
            className={currentPage === 'home' ? 'active' : ''}
          >
            {t.nav.home}
          </a>
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); handleNavClick('home', 'about') }}
          >
            {t.nav.about}
          </a>
          <a 
            href="#skills" 
            onClick={(e) => { e.preventDefault(); handleNavClick('skills') }}
            className={currentPage === 'skills' ? 'active' : ''}
          >
            {t.nav.skills}
          </a>
          <a 
            href="#pepeha" 
            onClick={(e) => { e.preventDefault(); handleNavClick('pepeha') }}
            className={currentPage === 'pepeha' ? 'active' : ''}
          >
            {t.nav.pepeha}
          </a>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); handleNavClick('home', 'contact') }}
          >
            {t.nav.contact}
          </a>
        </nav>

          <div className="header-controls">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header