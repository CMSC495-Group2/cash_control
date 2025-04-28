import React from "react";
import NavBar from "../components/NavBar";
import heroImage from "../assets/images/cash_control_hero.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="hero">
        <img src={heroImage} alt="Cash Control Hero" className="hero-image" />
      </div>
      <div className="hero-text">
        <h1>Take Control of Your Budget</h1>
        <p>
          Cash Control helps you manage your finances with ease—locally,
          securely, and without the cloud.
        </p>
        <Link to="/get-started" className="start-button">
          Get Started!
        </Link>
        {/*         <a href="#start" className="start-button">
          Get Started!
        </a> */}
      </div>
    </div>
  );
}

export default Home;
