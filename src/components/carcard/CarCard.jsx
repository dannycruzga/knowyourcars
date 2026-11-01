import React from "react";
import "./CarCard.css";

const CarCard = ({ brand, model, year, price, type, image }) => {
    return (
        <div className="car-card">
            <img src={image} alt={`${brand} ${model}`} />
            <h3>{brand} {model}</h3>
            <p>Year: {year}</p>
            <p>Price: {price}</p>
            <p>Type: {type}</p>
        </div>
    );
};

export default CarCard;