import React from 'react'
import Footer from '../component/Footer'
import HeroImg2 from '../component/HeroImg2'
import Nav from '../component/Nav'
import FoldedWool from '../asset/folded wool.jpg'
import Work from '../component/Work'

const Services = () => {
  return (
    <div>
      <Nav />
      <HeroImg2 url={FoldedWool} heading="Our Services" />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Services