import React from 'react'
import Benefits from '../component/Benefits'
import Footer from '../component/Footer'
import Hero from '../component/Hero'
import Nav from '../component/Nav'
import Work from '../component/Work'
import AboutUs from './../component/AboutUs';

const Home = () => {
  return (
    <div>
     <Nav/> 
      <Hero />
      <AboutUs/>
      <Benefits />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home