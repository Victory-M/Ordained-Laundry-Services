import "./AboutUs.css"
import React from 'react'
import { Link } from "react-router-dom";
import ClothesOnChair from "../asset/clothes on chair.jpg"
import SteamingIron from "../asset/steaming iron.jpg"
import Linecloths from "../asset/clothes on a line.jpg"
import Machine from "../asset/machine.jpg"


import { FaCheck,FaLongArrowAltRight} from "react-icons/fa"


const AboutUs = () => {
  return (
      <div className="about">
      <div className="about-img">
         <img src={Machine} alt="clothes on chair"  /> 
       
                    <img src={SteamingIron} alt="steaming iron"  />     
                     
                   
                  <img src={Linecloths} alt="clothes on chair"  />   
                     <img src={ClothesOnChair} alt="clothes on chair"  />          
              </div>
              <div className="about-text">
                  <span>Reasons  <FaLongArrowAltRight size={30} style={{color:" #f48915" , verticalAlign: "middle"}} /></span>
                  <h2> <span>Why</span>Choose Us?</h2>
          <p> At Ordained, we work to provide one simple, consistent, high-quality solution to take care of everything in your closet. </p>
           <p> We are trusted experts in quality cleaning solutions. Our solutions are designed to take care of your laundry needs, leaving you free to focus on your core business </p>
                  <ul >
                      <li><FaCheck size={23} style={{ color : "#f48915", verticalAlign :"middle", fontWeight:"100" , margin:" 0 0.5rem"}} />Highly rated cleaning</li>
                      <li><FaCheck size={23} style={{ color : " #f48915",verticalAlign :"middle",margin:" 0 0.5rem"}} />we are committed</li>
                      <li><FaCheck size={23} style={{ color : " #f48915",verticalAlign :"middle",margin:" 0 0.5rem"}} />efficient service</li>
                      <li><FaCheck size={23} style={{ color : " #f48915",verticalAlign :"middle",margin:" 0 0.5rem"}} />Home delivery</li>
                      <li><Link to="/contact" className="btn " style={{backgroundColor:"#f48915"}}>
            Hire Us
            <FaLongArrowAltRight size={20} style={{ color: "#fff", margin: "0 0.6rem", verticalAlign: "middle" }} />
          </Link></li>
        </ul>
         
              </div>
          </div>
    
  )
}

export default AboutUs