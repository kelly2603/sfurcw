import "./FooterStyles.css";
import React from "react";

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="contacts-container">
                    <div className="left">
                        <div>
                            <div className="location">
                                <p>13450 102 Ave #250, <br></br> Surrey, BC, V3T 0A3</p>
                            </div>
                            <div className="email">
                                <p>emailhere@sfu.ca</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="social">
                            <p>Discord</p>
                            <p>Instagram</p>
                        </div>
                    </div>
                    
                </div>
                <div className="copyright-container">
                    <p> &copy; Copyright 2025 Simon Fraser Robotics Club</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;
