import React from 'react'
import { motion } from 'framer-motion'
import { Download, FileText, Eye, Calendar } from 'lucide-react'
import './Resume.css'

const Resume = () => {
  const handleDownload = () => {
    // Create a mock PDF download
    const link = document.createElement('a')
    link.href = '/resume-tutanekai-manuera.pdf' // You'll need to add your actual resume file
    link.download = 'Tutanekai_Manuera_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePreview = () => {
    // Open resume in a new tab for preview
    window.open('/resume-tutanekai-manuera.pdf', '_blank')
  }

  const resumeStats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "25+" },
    { label: "Technologies", value: "15+" },
    { label: "Client Satisfaction", value: "100%" }
  ]

  return (
    <section className="resume" id="resume">
      <div className="resume-content">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>My Resume</h2>
          <p>Download my complete professional profile and experience</p>
        </motion.div>

        <div className="resume-container">
          <motion.div 
            className="resume-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="resume-icon">
              <FileText size={48} />
            </div>
            
            <div className="resume-info">
              <h3>Professional Resume</h3>
              <p>Comprehensive overview of my skills, experience, and achievements in web development and software engineering.</p>
              
              <div className="resume-details">
                <span className="resume-pages">
                  <FileText size={16} />
                  2 Pages
                </span>
                <span className="resume-updated">
                  <Calendar size={16} />
                  Updated December 2024
                </span>
              </div>
            </div>

            <div className="resume-actions">
              <button 
                className="btn-primary resume-download"
                onClick={handleDownload}
              >
                <Download size={20} />
                Download PDF
              </button>
              <button 
                className="btn-secondary resume-preview"
                onClick={handlePreview}
              >
                <Eye size={20} />
                Quick Preview
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="resume-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4>Professional Highlights</h4>
            <div className="stats-grid">
              {resumeStats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="resume-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>Interested in collaborating?</h3>
          <p>Let's discuss how my skills and experience can contribute to your next project.</p>
          <a href="#contact" className="cta-button">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume