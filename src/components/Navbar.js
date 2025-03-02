import "./NavbarStyles.css"
import React, {useState} from "react";
import { Link } from "react-router-dom";

import Img1 from "./images/Fluff_S_NBG_White.png";

const Navbar = () => {
    return (
        <div className = "header">
            <Link to="/">
            <div className="logo">
                <img className="logo-img" src={Img1} alt="Img1" />
                <h1>SFURC</h1>
            </div>
            </Link>
            <ul className="nav-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/robots">Robots</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                <a href="https://donate.sfu.ca/page/149582/donate/1" target="_blank" rel="noopener noreferrer">Donate</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar