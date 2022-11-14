import "./Hero.css"
import { Link } from "react-router-dom";
import WashingMachine from "../asset/machine-in-action.jpg"
import Bubble from "../asset/bubble-bg.png"
import {  FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
      <div className="hero">
          <div className="hero-content">
             
          <div className="hero-text">
              <p> welcome to ordained <br /> laundry services</p>
              <h2>quality cleaning guaranteed! </h2>
              <Link to="/contact" className="btn">
                      Schedule a pick up
                      <FaLongArrowAltRight size={20} style={{ color: "#fff" , margin: "0 0.6rem",verticalAlign:"middle"}} />
              </Link>
              </div>
               <div className="hero-img">
             <img src={WashingMachine} alt="washing machine" />        
          </div>
               <div className="bubble-img">
             <img src={Bubble} alt="Bubble" />        
               </div>
          </div>
          
    </div>
  )
}

export default Hero