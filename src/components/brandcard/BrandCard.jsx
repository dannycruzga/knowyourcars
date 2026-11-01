import React from "react";
import { Link } from "react-router-dom";
import "./BrandCard.css";

const BrandCard = ({ name, image, description, link }) => {
    return (
        <div className="brand-card">
            <img src={image} alt={name} />
            <p>{description}</p>
            <Link to={link}>
                <button>Explore {name}</button>
            </Link>
        </div>
    );
};

export default BrandCard;