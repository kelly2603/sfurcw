import "./Navbar.css"

import React, {useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className = "header">
            <Link to="/">
                <h1>SFURC</h1>
            </Link>
            <ul className="nav-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/teams">Teams</Link>
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