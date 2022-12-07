import "./Nav.css"
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState,useEffect } from "react";
    
const Nav = () => {
    const [click,setClick] = useState(false);
    const clickHandler= () =>{
       setClick(!click);
    }
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const bgColorHandler = () => {
            if (window.scrollY >= 100) {
                setScrolled(!scrolled)
            } else {
                setScrolled(scrolled)
            }
        }
        window.addEventListener("scroll", bgColorHandler);

        return () => {
            window.removeEventListener("scroll", bgColorHandler);
        };
    }, []);
    

  return (
      <div className={scrolled ? "header header-bg" :"header"}>
          <Link to="/">
              <h1> <span>O</span>rdained</h1>
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
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
          <div className="hamburger" onClick={clickHandler}>
              {
                  click ? <FaTimes size={24} style={{ color: "#464d53", verticalAlign:"middle" }} /> :
                      <FaBars size={24} style={{ color: "#464d53",verticalAlign:"middle"  }} />  
              }
                
          </div>
        </div>
  )
}

export default Nav