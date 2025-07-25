import React from 'react'
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className='overflow-x-hidden'>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
    
  )
}

export default App
