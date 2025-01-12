import "./HeroImg2Styles.css"

import React from 'react'

const HeroImg2 =({heading, image}) => {
    return (
        <div className="hero2">
            <div className="mask-img2">
                <img className="bg-img2" src={image} alt="Img1" />
            </div>
            <div className="heading">
                <h1>{heading}</h1>
            </div>
        </div>
        
      )
}

export default HeroImg2