import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'
import './Contact.css'

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.subtitle}</p>
          </motion.div>

          <div className="contact-grid">
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>{t.contact.projectTitle}</h3>
              <p>
                {t.contact.projectDescription}
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>{t.contact.info.email}</h4>
                    <p>tutanekaitapiata@gmail.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4>{t.contact.info.phone}</h4>
                    <p>+64 210771464</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4>{t.contact.info.location}</h4>
                    <p>Rotorua, New Zealand</p>
                  </div>
                </div>
              </div>

              <div className="availability">
                <h4>{t.contact.availability.title}</h4>
                <p>{t.contact.availability.status}</p>
                <div className="status">
                  <div className="status-indicator"></div>
                  <span>{t.contact.availability.response}</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="contact-form-container" variants={itemVariants}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t.contact.form.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t.contact.form.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">{t.contact.form.subject}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.form.subjectPlaceholder}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t.contact.form.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder={t.contact.form.messagePlaceholder}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitted ? 'submitted' : ''}`}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      {t.contact.form.messageSent}
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      {t.contact.form.send}
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact