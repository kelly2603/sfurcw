import React from "react";
import "./TeamIntroStyles.css";

import Img1 from "./home_images/IMG_2375.jpg";
import Img2 from "./home_images/IMG_2375.jpg";

import Img3 from "./home_images/solidworks.JPG";
import Img4 from "./home_images/cubeMX.PNG";
import Img5 from "./home_images/code.png";

import Img6 from "./home_images/sqare himr_logo-2024_main_high_quality.png";
import Img7 from "./home_images/SolidWorks-Logo.png";
import Img8 from "./home_images/Altium___Black_Logo.jpg";

const TeamIntro = () => {
  return (
    <div className="main-container">
        {/* ================ Introduction section =============== */}
        <div className="section-container center">
            <h4>What are the teams?</h4>
            <div className="teams-container">

                <div className="RM-container col-container">
                    <div className="img-container">
                        <img className="img" src={Img1} alt="Robomaster" />
                    </div>
                    <h5>Robomaster</h5>
                    <p>
                        RoboMaster is a robotics competition on projectile combat.
                        Robots fire projectiles and attempt to hit plates on the opponent 
                        robots and structures in order to win. These games requires both 
                        teamwork and technical expertise in skills such as solid works to be successful.
                    </p>
                    <button className="btn">see more</button>
                </div>

                <div className="VU-container col-container">
                    <div className="img-container">
                        <img className="img" src={Img2} alt="VexU" />
                    </div>
                    <h5>VEX-U</h5>
                    <p>
                        Content goes here Content goes here Content goes here Content goes here
                        Content goes here Content goes here Content goes here Content goes here
                        Content goes here Content goes here Content goes here Content goes here
                        Content goes here Content goes here Content goes here Content goes here
                    </p>
                    <button className="btn">see more</button>
                </div>

            </div>
        </div>

        {/* ================ Video section =============== */}
        <div className="section-container section-secondary">
            
            <div className="team-video-container">
                <div className="video-desc">
                    <h4>A video of what we do:</h4>
                    <p className="subtitle">
                        A peek into our Robomaster NA Recap
                    </p>
                </div>
                <div className="video-container">
                    <iframe 
                        width="1080" 
                        height="610" 
                        src="https://www.youtube.com/embed/fKDmlxtG4wA?si=DfFzR2rNYtnHbJnC" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>
                </div>
                
            </div>
        </div>

        {/* ================ Why join section =============== */}
        <div className="section-container center">
            <h4>Why join us?</h4>
            <p className="subtitle">Learn valuable skills that are directly transferable to the industry</p>
            <div className="skills-container">
                <div className="SW-container col-container">
                    <h5>SolidWorks</h5>
                    <p>
                        You will get to learn SolidWorks, an industry standard cading 
                        software that we use to design our robots.
                    </p>
                    <img className="img" src={Img3} alt="solidworks" />
                </div>
                <div className="STM-container col-container">
                    <h5>STM32</h5>
                    <p>
                        Our robots run on the STM32 platform, which takes care of CAN 
                        bus communication, PID calculations, IMU & magnometer interfacing, 
                        etc. concurrently via the use of FreeRTOS.
                    </p>
                    <img className="img" src={Img4} alt="VexU" />
                </div>
                <div className="PL-container col-container">
                    <h5>Programming</h5>
                    <p>
                        We use a variety of programming languages to code our robots 
                        including C#. From the robot's movement to its sensors, you will 
                        get to learn a variety of ways to program functions of a robot.
                    </p>
                    <img className="img" src={Img5} alt="VexU" />
                </div>
            </div>
        </div>

        {/* ================ Sponsors section =============== */}
        <div className="section-container center">
        <h4>Our Sponsors</h4>
        <p className="subtitle">Thank you!</p>
        <div className="sponsors-container">
            <div className="sp">
                <a href="https://humaninmotion.com/" target="_blank">
                    <img src={Img6} alt="HumanInMotion" style={{ width: "300px", height: "auto" }} />
                </a>
            </div>
            <div className="sp">
                <a href="https://www.solidworks.com/" target="_blank">
                    <img src={Img7} alt="SolidWorks" style={{ width: "300px", height: "auto" }} />
                </a>
            </div>
            <div className="sp">
                <a href="https://www.solidworks.com/" target="_blank">
                    <img src={Img8} alt="Altium" style={{ width: "300px", height: "auto" }} />
                </a>
            </div>
        </div>
        <button className="btn">Sign up to be one</button>
    </div>

    </div>
  )
}

export default TeamIntro;
