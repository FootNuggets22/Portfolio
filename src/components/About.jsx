import React from "react";
import { motion } from "framer-motion";
import { User, Heart, Target } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import "./About.css";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>{t.about.title}</h2>
            <p>{t.about.subtitle}</p>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <div className="text-content">
                <h3>{t.about.intro}</h3>
                <p>
                  {t.about.description1}
                </p>
                <p>
                  {t.about.description2}
                </p>
                <p>
                  {t.about.description3}
                </p>
              </div>
            </motion.div>

            <motion.div className="about-stats" variants={itemVariants}>
              <div className="stats-grid">
                <div className="stat-card">
                  <User className="stat-icon" />
                  <div className="stat-content">
                    <h4>3+</h4>
                    <p>{t.about.stats.experience}</p>
                  </div>
                </div>
                <div className="stat-card">
                  <Target className="stat-icon" />
                  <div className="stat-content">
                    <h4>10+</h4>
                    <p>{t.about.stats.projects}</p>
                  </div>
                </div>
                <div className="stat-card">
                  <Heart className="stat-icon" />
                  <div className="stat-content">
                    <h4>100%</h4>
                    <p>{t.about.stats.satisfaction}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div className="values" variants={itemVariants}>
            <h3>{t.about.values.title}</h3>
            <div className="values-grid">
              <div className="value-item">
                <h4>{t.about.values.cleanCode.title}</h4>
                <p>
                  {t.about.values.cleanCode.description}
                </p>
              </div>
              <div className="value-item">
                <h4>{t.about.values.problemSolving.title}</h4>
                <p>
                  {t.about.values.problemSolving.description}
                </p>
              </div>
              <div className="value-item">
                <h4>{t.about.values.learning.title}</h4>
                <p>
                  {t.about.values.learning.description}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
