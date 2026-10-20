import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Project from './Project'
import Certifications from './Certifications'
import Footer from './Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Certifications/>
      <Footer/>
    </>
  )
}

export default App
