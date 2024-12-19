import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  )
}

export default App