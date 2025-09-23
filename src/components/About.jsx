import React from "react";
import { motion } from "framer-motion";
import { User, Heart, Target } from "lucide-react";
import "./About.css";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2>About Me</h2>
            <p>Get to know me better</p>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <div className="text-content">
                <h3>Hello! I'm Tu, a passionate developer</h3>
                <p>
                  I am a bilingual programmer fluent in Te Reo Māori and
                  English. I enjoy building applications that combine technical
                  skill with creativity and cultural understanding, whether
                  that's designing intuitive user interfaces, developing
                  AI-powered tools, or crafting apps that make learning and
                  everyday tasks simpler.
                </p>
                <p>
                  I've worked on projects ranging from AI-driven mock interview
                  assistants to product comparison platforms and Māori language
                  learning tools. I'm especially passionate about creating
                  solutions that are both people-focused and technically robust
                  — bridging modern technology with meaningful, real-world
                  impact.
                </p>
                <p>
                  Outside of coding, I'm driven by curiosity and
                  problem-solving. I thrive on learning new technologies,
                  turning ideas into working prototypes, and refining them into
                  practical, user-friendly products.
                </p>
              </div>
            </motion.div>

            <motion.div className="about-stats" variants={itemVariants}>
              <div className="stats-grid">
                <div className="stat-card">
                  <User className="stat-icon" />
                  <div>
                    <h4>2+</h4>
                    <p>Years Experience</p>
                  </div>
                </div>
                <div className="stat-card">
                  <Target className="stat-icon" />
                  <div>
                    <h4>10+</h4>
                    <p>Projects Completed</p>
                  </div>
                </div>
                <div className="stat-card">
                  <Heart className="stat-icon" />
                  <div>
                    <h4>100%</h4>
                    <p>Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div className="values" variants={itemVariants}>
            <h3>What I Value</h3>
            <div className="values-grid">
              <div className="value-item">
                <h4>Clean Code</h4>
                <p>
                  Writing maintainable, readable, and efficient code that stands
                  the test of time.
                </p>
              </div>
              <div className="value-item">
                <h4>User Experience</h4>
                <p>
                  Creating intuitive and delightful experiences that users love
                  to interact with.
                </p>
              </div>
              <div className="value-item">
                <h4>Continuous Learning</h4>
                <p>
                  Staying updated with the latest technologies and best
                  practices in development.
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
