import "./NavbarStyles.css"
import React, {useState} from "react";
import { Link,NavLink } from "react-router-dom";

import Img1 from "./images/Fluff_S_NBG_White.png";

const Navbar = () => {
    return (
        <div className = "header">
            <Link to="/">
            <div className="logo">
                <img className="logo-img" src={Img1} alt="Img1" />
                <h1>ASN</h1>
            </div>
            </Link>
            <ul className="nav-menu">
                <li>
                    <NavLink to="/" exact activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/robots" exact activeClassName="active">Our Robots</NavLink>
                </li>
                <li>
                    <NavLink to="/about" exact activeClassName="active">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" exact activeClassName="active">Contact Us</NavLink>
                </li>
                <li>
                <a href="https://donate.sfu.ca/page/149582/donate/1" target="_blank" rel="noopener noreferrer">Donate</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar