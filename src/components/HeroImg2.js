import "./HeroImg2Styles.css"

import React from 'react'

const HeroImg2 =({text,heading}) => {
    return (
        <div className="hero-img">
            <div className="mask-img">
                {/* <img className="bg-img" src={image} alt="Img1" /> */}
            </div>
            <div className="heading">
                <h1>{heading}</h1>
                <p>{text}</p>
            </div>
        </div>
        
      )
}

export default HeroImg2