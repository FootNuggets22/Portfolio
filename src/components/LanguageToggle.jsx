import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'en' ? 'Te Reo Māori' : 'English'}`}
    >
      <div className="toggle-container">
        <div className={`toggle-option ${language === 'en' ? 'active' : ''}`}>
          EN
        </div>
        <div className={`toggle-option ${language === 'mi' ? 'active' : ''}`}>
          MI
        </div>
        <div className={`toggle-slider ${language === 'mi' ? 'slide-right' : ''}`} />
      </div>
    </button>
  );
};

export default LanguageToggle;