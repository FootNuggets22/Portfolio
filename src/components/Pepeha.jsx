import React from 'react'
import { motion } from 'framer-motion'
import './Pepeha.css'

const Pepeha = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="pepeha-page">
      <div className="container">
        <motion.div
          className="pepeha-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h1>Taku Pepeha</h1>
            <p>My introduction in Te Reo Māori</p>
          </motion.div>

          <motion.div className="pepeha-card" variants={itemVariants}>
            <div className="pepeha-text">
              <div className="pepeha-line">
                <span className="maori-text">Ko Te Arawa, Ngatokimatawhaorua, Nukutaememeha nga waka</span>
                <span className="english-text">Te Arawa, Ngatokimatawhaorua, Nukutaememeha are my canoes</span>
              </div>
              
              <div className="pepeha-line">
                <span className="maori-text">Ko Tuturu, Tarawera, Maunga Taniwha, Hikurangi nga maunga</span>
                <span className="english-text">Tuturu, Tarawera, Maunga Taniwha, Hikurangi are my mountains</span>
              </div>
              
              <div className="pepeha-line">
                <span className="maori-text">Ko Puarenga, Tarawera, Tapapa, Waiapu nga awa</span>
                <span className="english-text">Puarenga, Tarawera, Tapapa, Waiapu are my rivers</span>
              </div>
              
              <div className="pepeha-line">
                <span className="maori-text">Ko Te Pakira, Hinemihi, Ngapuhi, Iritekura nga marae</span>
                <span className="english-text">Te Pakira, Hinemihi, Ngapuhi, Iritekura are my marae</span>
              </div>
              
              <div className="pepeha-line">
                <span className="maori-text">Ko Tuhourangi, Te Arawa, Ngapuhi, Ngati Porou nga iwi</span>
                <span className="english-text">Tuhourangi, Te Arawa, Ngapuhi, Ngati Porou are my tribes</span>
              </div>
              
              <div className="pepeha-line">
                <span className="maori-text">Ko Ngati Wahiao, Ngati Rangitihi, Te Urimahoe, Iritekura nga hapu</span>
                <span className="english-text">Ngati Wahiao, Ngati Rangitihi, Te Urimahoe, Iritekura are my subtribes</span>
              </div>
              
              <div className="pepeha-line">
                <span className="maori-text">Ko Tutanekai Manuera ahau</span>
                <span className="english-text">I am Tutanekai Manuera</span>
              </div>
            </div>
            
            <div className="pepeha-explanation">
              <h3>About Pepeha</h3>
              <p>
                A pepeha is a traditional Māori introduction that connects me to my whakapapa (genealogy) 
                and tūrangawaewae (places of belonging). It establishes my identity through my connections 
                to the natural world and ancestral places that have shaped my people for generations.
              </p>
              
              <h3>My Whakapapa</h3>
              <p>
                My pepeha reflects the richness of my heritage, connecting me to multiple waka (canoes), 
                maunga (mountains), awa (rivers), marae (meeting grounds), iwi (tribes), and hapū (subtribes). 
                From the geothermal landscapes of Te Arawa to the coastal regions of Ngāti Porou, 
                my ancestry spans across Aotearoa, bringing diverse perspectives and cultural knowledge.
              </p>
              
              <h3>Cultural Connection in Development</h3>
              <p>
                As a bilingual programmer fluent in Te Reo Māori and English, I bring this rich cultural 
                understanding to my work. My multi-tribal heritage teaches me the value of collaboration, 
                respect for diverse perspectives, and the importance of building bridges between communities 
                through technology.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Pepeha