import "./AboutUs.css"
import React from 'react'
import ClothesOnChair from "../asset/clothes on chair.jpg"
import SteamingIron from "../asset/steaming iron.jpg"

import { FaCheck,FaLongArrowAltRight} from "react-icons/fa"


const AboutUs = () => {
  return (
      <div className="about-us">
          <div className="about-us-container">
              <div className="about-us-image">
                  <div className="parent-image">
                    <img src={SteamingIron} alt="steaming iron" className="steaming-iron" />  
                  </div>
                  <img src={ClothesOnChair} alt="clothes on chair" className="clothes-on-chair" />               
              </div>
              <div className="about-us-text">
                  <span>company benefits <FaLongArrowAltRight size={30} style={{color:" #c71585" , verticalAlign: "middle"}} /></span>
                  <h2>Get to know about us</h2>
          <p> At Ordained, we work to provide one simple, consistent, high-quality solution to take care of everything in your closet. </p>
           <p> We are trusted experts in quality cleaning solutions. Our solutions are designed to take care of your laundry needs, leaving you free to focus on your core business </p>
                  <ul className="reasons">
                      <li><FaCheck size={23} style={{ color : " #c71585", verticalAlign :"middle", fontWeight:"100" , margin:" 0 0.5rem"}} />Highly rated cleaning</li>
                      <li><FaCheck size={23} style={{ color : " #c71585",verticalAlign :"middle",margin:" 0 0.5rem"}} />we are committed</li>
                      <li><FaCheck size={23} style={{ color : " #c71585",verticalAlign :"middle",margin:" 0 0.5rem"}} />efficient service</li>
                      <li><FaCheck size={23} style={{ color : " #c71585",verticalAlign :"middle",margin:" 0 0.5rem"}} />Home delivery</li>
                  </ul>
              </div>
          </div>
    </div>
  )
}

export default AboutUs