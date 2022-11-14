import React from 'react'
import Footer from '../component/Footer'
import HeroImg2 from '../component/HeroImg2'
import Nav from '../component/Nav'
import WashingMachines from "../asset/washing machines.jpg"
import AboutUs from '../component/AboutUs'

const About = () => {
  return (
    <div>
      <Nav />
      <HeroImg2 url={WashingMachines} heading = "get to know us"  />
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default About