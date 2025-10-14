import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get language from localStorage or default to English
    return localStorage.getItem('portfolio-language') || 'en';
  });

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'mi' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage);
  };

  const value = {
    language,
    toggleLanguage,
    isEnglish: language === 'en',
    isMaori: language === 'mi'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};