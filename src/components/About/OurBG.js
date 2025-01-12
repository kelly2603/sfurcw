import React from 'react'
import "./OurBGStyles.css"
import Img1 from "./about_images/DSC02894.jpg"


const OurBG = () => {
  return (
    <div className='main-container'>
        <div className='OBG-container section-container'>
            <div className='desc-container'>
                <h4>Our Background</h4>
                <p>
                    SFU Robotics Club (SFURC) was made out of a pure 
                    passion for robotics and spreading knowledge. Our 
                    goals, ambitions and inspirations have come together 
                    to form a truly amazing club that all of us are proud 
                    to be a part of.
                    <br></br>
                    <br></br>
                    Since the club was founded in 2023, we have became the 
                    fastest growing and the leading robotics club at SFU. 
                    We aim to provide a learning experience to students of 
                    all skill levels and give them opportunities to participate 
                    in world wide competitions. Explore the rest of our site to 
                    learn more about what we do, and get in touch with us.
                </p>
            </div>
            <div className='img-container'>
                <img className="img" src={Img1} alt='Img1'></img>
            </div>
        </div>
    </div>
  )
}

export default OurBG