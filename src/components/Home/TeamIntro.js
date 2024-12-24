import React from "react";
import "./TeamIntroStyles.css";
import Img1 from "./images/baa36a77228821d2ce6af728db0bcb17.jpg";

const TeamIntro = () => {
  return (
    <div className="main-container">
        {/* ================ Introduction section =============== */}
        <div className="section-container">
            <h4>What are the teams?</h4>
            <div className="teams-container">

                <div className="RM-container">
                    <div className="img-container">
                        <img className="bg-img" src={Img1} alt="Img1" />
                    </div>
                    <h5>Robomaster</h5>
                    <p>
                        Content goes here Content goes here Content goes here Content goes here
                        Content goes here Content goes here Content goes here Content goes here
                        Content goes here Content goes here Content goes here Content goes here
                        Content goes here Content goes here Content goes here Content goes here
                    </p>
                    <button className="btn">see more</button>
                </div>

                <div className="VU-container">
                    <div className="img-container">
                        <img className="bg-img" src={Img1} alt="Img1" />
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
                    <p>
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
        <div className="section-container">
            <h4>Why join us?</h4>
            <div className="skills-container">
                <p>insert text here</p>
            </div>
        </div>

    </div>
  )
}

export default TeamIntro;
