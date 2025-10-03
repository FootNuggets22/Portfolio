import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Pepeha from './components/Pepeha'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AIChatbot from './components/AIChatbot'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'pepeha':
        return <Pepeha />
      case 'home':
      default:
        return (
          <>
            <Hero />
            <About />
            <Skills />
            <Contact />
          </>
        )
    }
  }

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
      <AIChatbot />
    </div>
  )
}

export default App
