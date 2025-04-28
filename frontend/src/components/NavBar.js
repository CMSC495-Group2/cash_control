import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/cash_control_dark_logo.png";
import github from "../assets/images/github-brands.svg";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Cash Control Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/get-started">Get Started</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/user-portal">User Portal</Link>
        </li>
        <li>
          <a
            href="https://github.com/CMSC495-Group2"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              alt="github logo"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
