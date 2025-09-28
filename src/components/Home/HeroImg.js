import "./HeroImgStyles.css";
import React from "react";
import Img1 from "./home_images/Goated Robot Pics.png";

const HeroImg = () => {
    return (
        <div className = "hero">
            <div className="mask-img">
                <img className="bg-img" src={Img1} alt="Img1" />
            </div>
            <div className="content">
                <h1>ASCENSION ROBOTICS</h1>
                <h4>SFU RoboMaster</h4>
                <p>Building the Future, One Robot at a Time</p>
            </div>
        </div>
    );
};

export default HeroImg;