import "./NavbarStyles.css";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Img1 from "./images/Fluff_S_NBG_White.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <img className="logo-img" src={Img1} alt="Img1" />
          <h1>ASN</h1>
        </div>
      </Link>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>

      {/* Nav menu */}
      <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
        <li>
          <NavLink to="/" exact="true" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/robots" exact="true" activeclassname="active">
            Our Robots
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" exact="true" activeclassname="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" exact="true" activeclassname="active">
            Contact Us
          </NavLink>
        </li>
        <li>
          <a
            href="https://donate.sfu.ca/page/149582/donate/1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
