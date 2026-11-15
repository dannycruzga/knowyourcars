import React, { useState } from "react";
import "./AddCar.css";

const AddCar = ({ onCarAdded }) => {

  const [preview, setPreview] = useState("");
  const [result, setResult] = useState("");

  const uploadImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const addCar = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setResult("Sending...");

    const formData = new FormData(form);

    for (const field of ["brand", "model", "price", "type"]) {
        
      if (!formData.get(field).trim()) {
        setResult("Please fill out all fields.");
        return;
      }
    }

    try {
      const response = await fetch(
        "https://hello-world-tnh4.onrender.com/api/cars",
        {
          method: "POST",
          body: formData,
        },
      );

      if (response.ok) {
        const car = await response.json();
        onCarAdded(car);
        setResult("Car successfully added!");
        form.reset();
        setPreview("");
      } else {
        setResult("Error adding car.");
      }
    } catch (error) {
      setResult("Error connecting to server.");
    }
  };

  return (
    <div id="add-car">
      <h2>Add a New Car</h2>

      <form onSubmit={addCar}>
        <label>Brand:</label>
        <input name="brand" type="text" required />

        <label>Model:</label>
        <input name="model" type="text" required />

        <label>Year:</label>
        <input name="year" type="number" step="1" required />

        <label>Price:</label>
        <input name="price" type="text" required />

        <label>Type:</label>
        <input name="type" type="text" required />

        <label>Car Image:</label>
        <input name="img" type="file" accept="image/*" onChange={uploadImage} />

        {preview && <img src={preview} alt="Car preview" width="200" />}

        <button type="submit">Add Car</button>
        <p>{result}</p>
      </form>
    </div>
  );
};

export default AddCar;
