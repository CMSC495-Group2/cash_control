import React from "react";
import logo from "../assets/images/cash_control_dark_logo.png";
import github from "../assets/images/github-brands.svg"

function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Cash Control Logo"/>
            </div>
            <ul className="navbar-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#start">Get Started</a></li>
                <li><a href="https://github.com/CMSC495-Group2" target="_blank" rel="noreferrer"><img src={github} alt="github logo" style={{ width: "24px", height: "24px" }}/></a></li>
            </ul>
        </nav>
    )
};

export default NavBar;