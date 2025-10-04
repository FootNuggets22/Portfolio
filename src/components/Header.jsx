import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'
import logo from '../assets/logo.png'
import ThemeToggle from './ThemeToggle'

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); handleNavClick('home', 'about') }}
          >
            About
          </a>
          <a 
            href="#skills" 
            onClick={(e) => { e.preventDefault(); handleNavClick('skills') }}
            className={currentPage === 'skills' ? 'active' : ''}
          >
            Skills
          </a>
          <a 
            href="#pepeha" 
            onClick={(e) => { e.preventDefault(); handleNavClick('pepeha') }}
            className={currentPage === 'pepeha' ? 'active' : ''}
          >
            Pepeha
          </a>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); handleNavClick('home', 'contact') }}
          >
            Contact
          </a>
        </nav>

          <ThemeToggle />

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