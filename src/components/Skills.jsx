import React from 'react'
import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skills = {
    "Frontend": [
      { name: "JavaScript", level: 95 },
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 85 },
      { name: "CSS", level: 85 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML", level: 80 }
    ],
    "Backend": [
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
    "Tools & Technologies": [
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
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>Skills & Technologies</h2>
            <p>The tools and technologies I work with</p>
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
            <h3>Certifications & Learning</h3>
            <div className="cert-grid">
              <div className="cert-item">
                <h4>Diploma in Digital Technology Development and Design</h4>
                <p>2025</p>
              </div>
              <div className="cert-item">
                <h4>Certificate in Tech Career Exploration and Development</h4>
                <p>2025</p>
              </div>
              <div className="cert-item">
                <h4>Certificate in Technology Product Development Essentials</h4>
                <p>2024</p>
              </div>
              
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills