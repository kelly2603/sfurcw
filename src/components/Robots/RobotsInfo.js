import React from 'react'
import "./RobotsInfoStyles.css"
import Img1 from "./robots_images/IMG_2346.jpg"

const RobotsInfo = () => {
  return (
    <div className='main-container'>
        <div className='section-container'>

          <div className='robot-container'>
            <div className='sentry-container'>
              <div className='desc-container'> 
                <h4>Sentry Robot</h4>
                <p>
                  Insert text here Insert text here Insert text here Insert text here 
                  Insert text here Insert text here Insert text here Insert text here
                  Insert text here Insert text here Insert text here Insert text here 
                  Insert text here Insert text here Insert text here Insert text here
                </p>
              </div>
              <div className='image-container'>
                <img className="img" src={Img1} alt="Sentry" />
              </div>
            </div>

            <div className='hero-container'>
              <div className='image-container'>
                <img className="img" src={Img1} alt="Sentry" />
              </div>
              <div className='desc-container'> 
                <h4>Hero Robot</h4>
                <p>
                  Insert text here Insert text here Insert text here Insert text here 
                  Insert text here Insert text here Insert text here Insert text here
                  Insert text here Insert text here Insert text here Insert text here 
                  Insert text here Insert text here Insert text here Insert text here
                </p>
              </div>
              
            </div>

            <div className='standard-container'>
              <div className='desc-container'> 
                <h4>Standard Robot</h4>
                <p>
                  Insert text here Insert text here Insert text here Insert text here 
                  Insert text here Insert text here Insert text here Insert text here
                  Insert text here Insert text here Insert text here Insert text here 
                  Insert text here Insert text here Insert text here Insert text here
                </p>
              </div>
              <div className='image-container'>
                <img className="img" src={Img1} alt="Sentry" />
              </div>
            </div>
          </div>

          
        </div>
    </div>
  )
}

export default RobotsInfo