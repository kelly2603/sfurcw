import React from "react";
import { Link } from "react-router-dom";
import "./TeamIntroStyles.css";

import Img1 from "./home_images/IMG_2375.jpg";
import Img2 from "./home_images/IMG_2375.jpg";

import Img3 from "./home_images/robot.png";
import Img4 from "./home_images/cnc.png";
import Img5 from "./home_images/programming.png";
import Img6 from "./home_images/computervision.png";


const TeamIntro = () => {
  return (
    <div className="main-container">
        {/* ================ Introduction section =============== */}
        <div className="section-container center">
            
            <div className="RM-container">
                <div className="img-container">
                    <img className="img" src={Img1} alt="Robomaster" />
                </div>
                <div className="desc-container">
                    <h4>What is RoboMaster?</h4>
                    <p>
                    RoboMaster is a robotics competition that blends engineering, programming, and 
                    competitive gameplay. Teams design, build, and program custom 
                    robots that engage in dynamic battles on a specialized battlefield. 
                    The objective is to score points by firing projectiles at opponent 
                    robots and designated targets while protecting their own base.
                    <br></br>
                    <br></br>
                    At Ascension Robotics, we combine expertise in mechanical design, 
                    electronics, and software development to engineer robots for the
                     RoboMaster competition. Join us as we shape an exciting future for our team!
                    
                    </p>
                    <Link to='/about' className="btn">see more</Link>
                </div>
            </div>
        </div>

        {/* ================ Video section =============== */}
        <div className="section-tertiary">
            <div className="section-container">
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
        </div>

        {/* ================ Why join section =============== */}
        <div className="section-container center">
            <h4>Why join us?</h4>
            <p className="subtitle">Learn valuable skills that are directly transferable to the industry</p>
            <div className="skills-container">
                <div className="SW-container col-container">
                    <h5>Design</h5>
                    <p>
                        The design team collaborate on initial ideas through hand-drawn sketches and concept discussions before developing detailed CAD models in SOLIDWORKS and other design software. These models are transformed into precise prototypes, often 3D printed for rapid testing and refinement. Through iterative feedback, designs are improved to ensure optimal performance before final manufacturing.
                    </p>
                    <img className="img" src={Img3} alt="Design" />
                </div>
                <div className="STM-container col-container">
                    <h5>Fabrication</h5>
                    <p>
                        The fabrication process at Ascension Robotics brings designs to life through waterjet cutting, CNC machining, and resin molding. Engineers gain hands-on experience assembling parts with professional tools, as well as developing electronics through PCB soldering, control system integration, and precise wiring management to ensure reliable robot performance.
                    </p>
                    <img className="img" src={Img4} alt="Fabrication" />
                </div>
                <div className="PL-container col-container">
                    <h5>Embedded Programming</h5>
                    <p>
                    The embedded controls team programs the robots using STM32CubeIDE and C programming. Our team makes custom CAN libraries and creates our own subfunctions that can be used globally across the robots for motor controls. We create optimized PIDS for unique motor situations and rapidly test code with robots on hand. Our controls team makes everything as easy as possible for the driver to control the robot, including individual buttons that turn on spin to win, have an automatic anti-jamming function for the projectile indexor, and have overheat protection to avoid damage. 
                    </p>
                    <img className="img" src={Img5} alt="Embedded Programming" />
                </div>
                <div className="PL-container col-container">
                    <h5>Computer Vision</h5>
                    <p>
                    The computer vision team develops custom machine learning detection models to track enemy units. These models enable the robots to aim at enemies on their own if necessary. The team also develops pathfinding algorithms for the sentry robot, allowing it to operate without human intervention by locating objects and the field using a LiDAR. Combined with embedded programming, the computer vision team can give drivers aim assist while they manually search for targets, sense robots where the camera might not be facing, and track down enemies and shoot them autonomously with the sentry robot.
                    </p>
                    <img className="img" src={Img6} alt="Camera Vision" />
                </div>
            </div>
            <a href="https://forms.gle/92ASYhvcLMh2gy2E7" target="_blank" rel="noopener noreferrer" className="btn">Join Now</a>
        </div>
    </div>
  )
}

export default TeamIntro;
