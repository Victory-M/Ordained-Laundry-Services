import "./WorkCard.css"


const WorkCard = ({url,heading, text}) => {
  return (
    <div className="work-card" >
      <div className="serviceCard">
          <div className="service-img">
          <img src={url} alt="service picture" />
        </div>     
          <div className="service-text">
           <h3>{heading}</h3>
           <p>{text}</p>
          </div>
      </div>
          
    </div>
  )
}

export default WorkCard