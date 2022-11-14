import React from 'react'
import Benefits from '../component/Benefits'
import Footer from '../component/Footer'
import Hero from '../component/Hero'
import Nav from '../component/Nav'
import Work from '../component/Work'

const Home = () => {
  return (
    <div>
     <Nav/> 
      <Hero />
      <Benefits />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home