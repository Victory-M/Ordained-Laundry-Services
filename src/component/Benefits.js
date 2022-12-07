import "./Benefits.css"

import Wool from "../asset/folded wool.jpg"
import Reading from "../asset/reading.jpg"
import Phone from "../asset/phone.jpg"
import Iron from "../asset/steaming iron.jpg"

const Benefits = () => {
  return (
    <div className="benefits">
           
      <div className="benefits-container">

                <div className=" benefit-card">
                  <div className="img-container">
                      <img src={Phone} alt="" />
                  </div>
                  <div className="benefits-text">
                      <h3> Schedule a pickup any day of the week</h3>
                      <p>Schedule via text,Whatsapp, the web or via a phone call</p>
                  </div>
                </div>  
                <div className="benefit-card">
                  <div className="img-container">
                      <img src={Reading} alt="" />
                  </div>
                  <div className="benefits-text">
                      <h3> Enjoy outsourcing your least favorite chore </h3>
                      <p>You get 3 extra hours in your week and clothing care from experts who are masters of their craft </p>
                  </div>
                </div>  
                <div className="benefit-card">
                  <div className="img-container">
                      <img src={Wool} alt="" />
                  </div>
                  <div className="benefits-text">
                      <h3> Enjoy always having fresh, clean clothes </h3>
                      <p>We deliver your clothes clean, crisp and ready to wear.</p>
                  </div>
                </div>  
          </div>
         
        </div>
    )
}

export default Benefits