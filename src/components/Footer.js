import "./FooterStyles.css";
import React from "react";

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <p>Surrey, BC, Canada</p>
                    </div>
                    <div className="email">
                        <p>emailhere@sfu.ca</p>
                    </div>
                </div>
                <div className="right">
                    <div className="social">
                        <p>Discord</p>
                        <p>Instagram</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;
