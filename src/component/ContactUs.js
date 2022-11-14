import "./ContactUs.css"

import React from 'react'
import { FaPhone, FaLandmark, FaWhatsapp, FaEnvelope, FaClock } from "react-icons/fa"
import { useRef } from "react"
import emailjs from "@emailjs/browser";

const ContactUs = () => {
 
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
        "service_pum0b2m", "template_54wlhdk", refForm.current, "ybYwGzkHIad4Vfuyv")
      .then(
        (result) => {
          alert("Message successfully sent!")
          console.log(result.text);
          window.location.reload(false)
        }, (error) => {
          alert("Failed to send the message, please try again")
          console.log(error.text)
        }
      );
  };

  return (
    <div className="contact-us">
      <div className="contact-details">
        <h2> 
            Ordained Laundry and Dry Cleaning Services
        </h2>
        <ul>
          <li>
            <FaLandmark size={22} style={{verticalAlign:"middle", margin:"0 0.5rem 0 0"}} />  Beside CAC Oke-ayo 2,<br/> off Alubata road, <br/>Ariyibi  Apete, <br/>Ibadan,Nigeria.
          </li>
          <li>
            <FaEnvelope size={22} style={{verticalAlign:"middle", margin:"0 0.5rem 0 0" }} />ordainedlaundry@gmail.com
          </li>
          <li>
           <FaPhone size={20} style={{verticalAlign:"middle", margin:"0 0.5rem 0 0"}} /> +234-816-554-4580
          </li>        
          <li>
            <FaWhatsapp size={22} style={{verticalAlign:"middle", margin:"0 0.5rem 0 0"}} />  +234-816-554-4580
          </li>
        </ul>
        <ul className="working-hours">
          <p><FaClock size={22} style={{ verticalAlign: "middle", margin: "0 0.5rem 0 0" }} /> Working Hours</p>
          <li>
            Mon-Sat: 7:30 AM to 9:00 AM 
          </li>
          <li>
            Sun: Closed
          </li>
        </ul>
      </div>
      <form
        ref={refForm}
        onSubmit={sendEmail}
        className="contact-form">
          <label className="half">
            <input type="text" id="first-name" name="first-name" placeholder=" First Name" required/>        
            <input type="text" id="last-name" name="last-name" placeholder="Last Name" required/>
          </label>
            <input type="email" className="email"  id="email" name="email" placeholder="Email" required />
            
            <input type="phone" className="email" placeholder="Phone number" id="phone" name="phone"  required />
            <textarea id ="message" name="message"placeholder="Message" required />
        <input type="submit" className="btn button" value="Submit"
          
        />
      </form>
      
    </div>
  )
}

export default ContactUs