import "./FooterStyles.css";
import React from "react";
import {FaDiscord, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="contacts-container">
                    <div className="left">
                        <div className="location">
                            <p>10285 University Dr <br></br> Surrey, BC V3T 0N1</p>
                        </div>
                        <div className="email">
                            <p>sfurc@sfu.ca</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="social">
                            <a href="https://discord.com/invite/XsfVH5xZgH" target="_blank" rel="noopener noreferrer">
                                <FaDiscord size={30} />
                            </a>
                            <a href="https://www.instagram.com/ascension_robotics/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} />
                            </a>
                            <a href="https://www.youtube.com/@ascension_robotics" target="_blank" rel="noopener noreferrer">
                                <FaYoutube size={30} />
                            </a>
                            <a href="https://www.linkedin.com/company/ascension-robotics/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} />
                            </a>
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
