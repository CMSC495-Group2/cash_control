import React from "react";
import NavBar from "../components/NavBar";
import FeatureCard from "../components/FeatureCard";

import img1 from "../assets/images/feature1.png";
import img2 from "../assets/images/feature2.png";
import img3 from "../assets/images/feature3.png";
import img4 from "../assets/images/feature4.png";

function Features(){
    const features = [
        {
            title: "Track Income & Expenses",
            description: "Easily add, edit, and categorize your transactions to stay on top of your financial activity.",
            image: img1,
          },
          {
            title: "Filter by Date & Type",
            description: "Quickly narrow down your transactions by date range or type to focus on what matters.",
            image: img2,
          },
          {
            title: "Local Data Storage",
            description: "Your financial data stays safe and private — stored securely on your own device.",
            image: img3,
          },
          {
            title: "Simple Financial Summaries",
            description: "See clear summaries and visual breakdowns of your spending across categories.",
            image: img4,
          },
    ];

    return(
        <div className="features-page">
            <NavBar/>
            <h1 className="features-heading">Explore Our Features</h1>
            <div className="features-grid">
                {features.map((feature, index)=>(
                    <FeatureCard key={index} {...feature}/>
                ))}
            </div>
            <div className="hero-text">
                    <h1>Take Control of Your Budget</h1>
                    <p>Cash Control helps you manage your finances with ease—locally, securely, and without the cloud.</p>
                    <a href="/get-started" className="start-button">Get Started!</a>
                </div>
        </div>
    );
}

export default Features;