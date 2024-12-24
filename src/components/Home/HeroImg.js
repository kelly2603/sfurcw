import "./HeroImgStyles.css";
import React from "react";
import Img1 from "./images/image.png";

const HeroImg = () => {
    return (
        <div className = "hero">
            <div className="mask-img">
                <img className="bg-img" src={Img1} alt="Img1" />
            </div>
            <div className="content">
                <h1>SFU ROBOTICS CLUB</h1>
                <p>slogan go here slogan go here slogan go here</p>
            </div>
        </div>
    );
};

export default HeroImg;