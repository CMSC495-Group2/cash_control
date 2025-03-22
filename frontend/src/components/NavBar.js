import React from "react";
import logo from "../assets/images/cash_control_dark_logo.png";

function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Cash Control Logo"/>
            </div>
            <ul className="navbar-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#start">Get Started</a></li>
                <li><a href="https://github.com/CMSC495-Group2" target="_blank" rel="noreferrer">Github</a></li>
            </ul>
        </nav>
    )
};

export default NavBar;