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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
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
                  solutions that are both people-focused and technically robust, bridging modern technology with meaningful, real-world
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
                  <div className="stat-content">
                    <h4>2+</h4>
                    <p>Years Experience</p>
                  </div>
                </div>
                <div className="stat-card">
                  <Target className="stat-icon" />
                  <div className="stat-content">
                    <h4>10+</h4>
                    <p>Projects Completed</p>
                  </div>
                </div>
                <div className="stat-card">
                  <Heart className="stat-icon" />
                  <div className="stat-content">
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
                  For me, writing clean code is about making things clear and
                  easy to understand. I want my work to be something that others
                  can read without confusion and continue to build on in the
                  future. That means choosing good names, keeping logic simple,
                  and avoiding unnecessary complexity. Code written this way
                  lasts longer and is much easier to maintain and improve.
                </p>
              </div>
              <div className="value-item">
                <h4>Problem Solving</h4>
                <p>
                  I enjoy breaking down complex problems and finding simple,
                  effective solutions. For me, solving problems is not just
                  about getting things to work but doing so in a way that is
                  efficient and reliable. I like to step back, think through
                  different approaches, and choose the one that makes the most
                  sense long term. There is real satisfaction in turning
                  something challenging into something that feels
                  straightforward.
                </p>
              </div>
              <div className="value-item">
                <h4>Continuous Learning</h4>
                <p>
                  I enjoy learning new things and see it as an important part of
                  being a developer. Technology is always changing, and I like
                  the challenge of keeping up with those changes. Every new tool
                  or skill I pick up helps me build better solutions and solve
                  problems in new ways. Each project gives me a chance to grow
                  and push myself further.
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
