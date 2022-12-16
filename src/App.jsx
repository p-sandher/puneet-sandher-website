import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'

import Skill from './components/skill/Skill'
import Experiences from './components/experiences/Experiences'
import Portfolio from './components/portfolio/Portfolio'

import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import './index.css'
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skill />
      <Experiences />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App