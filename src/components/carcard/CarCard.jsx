import React, { useState } from "react";
import "./CarCard.css";

const CarCard = ({ brand, model, year, price, type, image }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="car-card" onClick={() => setShowDetails(true)}>
        {image && <img src={image} alt={`${brand} ${model}`} />}
        <h3>
          {brand} {model}
        </h3>
        <p>Year: {year}</p>
        <p>Price: {price}</p>
        <p>Type: {type}</p>
        <button type="button">View Details</button>
      </div>

      {showDetails && (
        <div className="car-overlay">
          <div className="car-details">
            <button onClick={() => setShowDetails(false)}>X</button>
            <h2>
              {brand} {model}
            </h2>
            {image && <img src={image} alt={model} />}
            <p>Year: {year}</p>
            <p>Price: {price}</p>
            <p>Type: {type}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CarCard;
