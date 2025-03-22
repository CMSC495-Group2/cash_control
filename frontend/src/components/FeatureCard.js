import React from "react";

function FeatureCard({title, description, image}){
    return(
        <div className="feature-card">
            <div className="card-front">
                <img src={image} alt={title}/>
                <h3>{title}</h3>
            </div>
            <div className="card-back">
                <p>{description}</p>
            </div>
        </div>
    )
};

export default FeatureCard;