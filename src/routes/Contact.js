import React from 'react'
import Footer from '../component/Footer'
import HeroImg2 from '../component/HeroImg2'
import Nav from '../component/Nav'
import OfficialShirts from '../asset/official shirts on rack.jpg'
import ContactUs from '../component/ContactUs'

const Contact = () => {
  return (
    <div>
      <Nav />
      <HeroImg2 url={OfficialShirts} heading="Get in Touch"/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Contact