import "./Hero.css"
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
import Wool from "../asset/hero-bg.png"
import {  FaLongArrowAltRight } from "react-icons/fa";

const transition= {type:"spring",duration:3}
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">            
        <div className="hero-text">
          <div className="ordained"><p>Ordained Laundry  Services</p>
            <motion.span
              initial={{ left: "190px" }}
              whileInView={{ left: "1px" }}
              transition={{...transition, type:"tween"}}
            >
            </motion.span>
          </div>          
          <h2> <span>quality</span>
            Services guaranteed!</h2>
          <Link to="/contact" className="btn">
            Schedule a pick up
            <FaLongArrowAltRight size={20} style={{ color: "#fff", margin: "0 0.6rem", verticalAlign: "middle" }} />
          </Link>
        </div>
        <div className="hero-img">
          <img src={Wool} alt="washing machine" />
        </div>
      </div>
          
    </div>
  );
};

export default Hero