import React from "react";
import "./SponsorsStyles.css";
import Img1 from "./images/sqare himr_logo-2024_main_high_quality.png";
import Img2 from "./images/SolidWorks-Logo.png";
import Img3 from "./images/Altium___Black_Logo.jpg";

const Sponsors = () => {
  return (
    <div className="main-container">
        <div className="section-container center">
            <h4>Our Sponsors</h4>
            <div className="sponsors-container">
                <div className="sp">
                    <a href="https://humaninmotion.com/" target="_blank">
                        <img src={Img1} alt="HumanInMotion" style={{ width: "300px", height: "auto" }} />
                    </a>
                </div>
                <div className="sp">
                    <a href="https://www.solidworks.com/" target="_blank">
                        <img src={Img2} alt="SolidWorks" style={{ width: "300px", height: "auto" }} />
                    </a>
                </div>
                <div className="sp">
                    <a href="https://www.solidworks.com/" target="_blank">
                        <img src={Img3} alt="Altium" style={{ width: "300px", height: "auto" }} />
                    </a>
                </div>
            </div>
            <button className="btn">Sign up to be one</button>
        </div>

    </div>
  )
}

export default Sponsors