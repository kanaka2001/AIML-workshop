import React from 'react'
import DevBanner from './components/DevBanner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import About from './components/About'
import Rounds from './components/Rounds'
import Schedule from './components/Schedule'
import Prizes from './components/Prizes'
import Partners from './components/Partners'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <>
      <DevBanner />
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Rounds />
        <Schedule />
        <Prizes />
        <Partners />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
