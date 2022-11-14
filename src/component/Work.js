import "./Work.css"
import React from 'react'
import {FaLongArrowAltRight  } from "react-icons/fa"
import WorkCard from "./WorkCard"
import WashingMachine from "../asset/machine-in-action.jpg";
import WeddingGown from "../asset/wedding gown.jpg";
import SteamingIron from "../asset/steaming iron.jpg";
import leather from "../asset/leather.jpg";
import Starched from "../asset/folded shirts.jpg";
import Sneakers from "../asset/sneakers.jpg";


const WorkCardData =  [
    {
        url: WashingMachine ,
        heading: "Wash and Fold",
        text:"We do your laundry for you so you can enjoy your free time. We pick up, wash and fold your laundry."
    },
    {
        url: SteamingIron ,
        heading: "Ironing and Folding",
        text:"This is the ideal service if you love neatly pressed laundry. Your garments would be neatly pressed and folded, ready for delivery"
    },
    
    {
        url:Starched,
        heading: "Washing , Ironing and Starching",
        text:"If you love your garments adequately starched then this is the ideal service for you. We would wash, iron,starch and fold your garments for you. "
    },
    {
        url:WeddingGown ,
        heading: "Wedding Gown Cleaning ",
        text:"We would help to remove the stains stains from your wedding gown with our expert cleaning services thereby making it look white and cleaner than ever, as if it were new."
    }
    ,
    {
        url:leather,
        heading: "Leather Cleaning",
        text:"We work with the best leather cleaning materials to ensure that your garments are thoroughly cleaned so that they look their best and last for years "
    },
    {
        url:Sneakers,
        heading: "Leather Cleaning",
        text:"We work with the best leather cleaning materials to ensure that your garments are thoroughly cleaned so that they look their best and last for years "
    }
    
]
const Work= () => {
  return (
      <div className="service" >
          <div className="heading">
              <p> What We Offer <FaLongArrowAltRight size={30} style={{color:" #c71585" , verticalAlign: "middle"}} /></p>
          <h2>Providing the Best Services  <br/>for Our Customers</h2>
          </div>
          <div className="services-container">
              {
                  WorkCardData.map((val, ind) => {
                      return (
                          <WorkCard
                              key={ind}
                              url={val.url}
                              heading={val.heading}
                              text={val.text}
                          />   
                      )
                          
                      
                  })
              }
              
            </div>
         
        </div>
    )
}

export default Work;