import React, { useState } from "react";
import "./EditCar.css";

const EditCar = ({ car, onSave, onClose }) => {
  const [result, setResult] = useState("");

  const editCar = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    for (const field of ["brand", "model", "price", "type"]) {
      if (!formData.get(field).trim()) {
        setResult("Please fill out all fields.");
        return;
      }
    }

    try {
      const response = await fetch(
        `https://hello-world-tnh4.onrender.com/api/cars/${car._id}`,
        {
          method: "PUT",
          body: formData,
        },
      );

      if (response.status === 200) {
        const updatedCar = await response.json();
        onSave(updatedCar);
        setResult("Car updated successfully!");
      } else {
        setResult("Error updating car.");
      }
    } catch (error) {
      setResult("Error updating car.");
    }
  };

  return (
    <div id="edit-car">
      <h2>Edit Car</h2>

      <form onSubmit={editCar}>
        <label>Brand:</label>
        <input name="brand" defaultValue={car.brand} required />

        <label>Model:</label>
        <input name="model" defaultValue={car.model} required />

        <label>Year:</label>
        <input
          name="year"
          type="number"
          step="1"
          defaultValue={car.year}
          required
        />

        <label>Price:</label>
        <input name="price" defaultValue={car.price} required />

        <label>Type:</label>
        <input name="type" defaultValue={car.type} required />

        <label>New Image (Optional):</label>
        <input name="img" type="file" accept="image/*" />

        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>

        <p>{result}</p>
      </form>
    </div>
  );
};

export default EditCar;
