import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'
import './Skills.css'

const Skills = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const skills = {
    [t.skills.categories.frontend]: [
      { name: "JavaScript", level: 95 },
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 85 },
      { name: "CSS", level: 85 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML", level: 80 }
    ],
    [t.skills.categories.backend]: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "JSON", level: 90 },
      { name: "Strapi.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "MongoDB", level: 75 },
      { name: "REST APIs", level: 75 },
      { name: "Jest", level: 75 },
      { name: "MySQL", level: 70 }
    ],
    [t.skills.categories.tools]: [
      { name: "Gemini AI", level: 90 },
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Azure", level: 65 }
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut" }
    })
  }

  return (
    <div className="skills-page">
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h1>{t.skills.title}</h1>
            <p>{t.skills.subtitle}</p>
          </motion.div>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div 
                key={category} 
                className="skill-category"
                variants={itemVariants}
              >
                <h3>{category}</h3>
                <div className="skill-list">
                  {skillList.map((skill, index) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <motion.div
                          className="progress-fill"
                          variants={progressVariants}
                          custom={skill.level}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="certifications" variants={itemVariants}>
            <h3>{t.skills.certifications.title}</h3>
            <div className="cert-grid">
              <div className="cert-item">
                <h4>Diploma in Digital Technology Development and Design</h4>
                <p>2025</p>
              </div>
              <div className="cert-item">
                <h4>Certification in Applied Digital Technology Product Solutions</h4>
                <p>2025</p>
              </div>
              <div className="cert-item">
                <h4>Certificate in Technology Product Development Essentials</h4>
                <p>2025</p>
              </div>
              <div className="cert-item">
                <h4>Certificate in Tech Career Exploration and Development</h4>
                <p>2024</p>
              </div>
              <div className="cert-item">
                <h4>Certificate in 3D Design and Robotics</h4>
                <p>2023</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills