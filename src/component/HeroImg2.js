import "./HeroImg2.css"


const HeroImg2 = ({ url,heading,text}) => {
  return (
    <div className="hero2">
      <div className="hero2-img">
       <img src= {url} alt=" steaming iron" />
      </div>
      <div className="hero2-text">
        <h1 style={{textTransform:"capitalize" , fontSize:"1.5rem"}}>{heading}</h1>
      </div>
    </div>
  )
}

export default HeroImg2