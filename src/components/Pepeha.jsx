import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'
import './Pepeha.css'

const Pepeha = () => {
  const { language } = useLanguage()
  const t = translations[language]
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
            <h1>{t.pepeha.title}</h1>
            <p>{t.pepeha.subtitle}</p>
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
              <h3>{t.pepeha.explanation.title}</h3>
              <p>
                {t.pepeha.explanation.description}
              </p>
              
              <h3>{t.pepeha.whakapapaTitle}</h3>
              <p>
                {t.pepeha.whakapapaDescription}
              </p>
              
              <h3>{t.pepeha.connectionTitle}</h3>
              <p>
                {t.pepeha.connectionDescription}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Pepeha