import "./Footer.css"
import { FaHome,FaPhone,FaEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <div className="footer">
          <div className="footer-container">
              <ul className="footer-nav">
               <Link to="/">
              <h1> <span>O</span>rdained</h1>
          </Link>
          
              <li>
                  <Link to="/">
                  Home
                  </Link>
              </li>          
              <li>
                  <Link to="/services">
                  Services
                  </Link>
              </li>
              <li>
                  <Link to="/about">
                  About
                  </Link>
              </li>
              <li>
                  <Link to="/contact">
                 Contact
                  </Link>
              </li>
          </ul>
              <ul className="location">
                  <h3>Get in touch</h3>
                  <li> <FaHome size={22} style={{ color: "#eee" }} /> Beside CAC Oke-ayo 2,<br/> off Alubata road, <br/>Ariyibi  Apete, <br/>Ibadan,Nigeria.</li>
                  <li><FaPhone size={18} style={{ color: "#eee" }} /> +234-816-554-4580</li>
                  <li><FaEnvelope size={22} style={{ color: "#eee" }} /> ordained@gmail.com</li>
                  
              </ul>
              <div className="about-footer">
                  <h3>Say Goodbye to Laundry Day</h3>
                   <p>We would pick up ,clean and deliver your laundry and dry cleaning. We work to provide one simple, consistent, high-quality solution to take care of everything in your closet.</p>
              </div>
          </div>
      </div>
  )
}

export default Footer