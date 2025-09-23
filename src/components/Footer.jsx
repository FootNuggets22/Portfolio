import React from 'react'
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>Tutanekai Manuera</h3>
              <p>Building digital experiences with passion and precision.</p>
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
                <h4>Navigation</h4>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
              </div>

            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              <p>
                Made with <Heart size={16} className="heart" /> by Tu © {currentYear}. 
                All rights reserved.
              </p>
            </div>
            
            <button className="scroll-top" onClick={scrollToTop}>
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer