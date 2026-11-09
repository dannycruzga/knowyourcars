import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import BrandCard from "../../components/brandcard/BrandCard";
import CarCard from "../../components/carcard/CarCard";
import {Tooltip} from "react-tooltip";

import ford from "./images/ford.png";
import chevrolet from "./images/chevrolet.png";
import dodge from "./images/dodge.png";
import mercedes from "./images/mercedes.png";
import fordm from "./images/fordm.jpg";
import chevroletcor from "./images/chevroletcor.jpeg";
import dodgehc from "./images/dodgehc.avif";
import mercedesamg from "./images/mercedesamg.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const response = await axios.get("https://hello-world-tnh4.onrender.com/api/cars");
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    loadCars();
  }, []);

  const slides = [
    { image: fordm, name: "Ford Mustang" },
    { image: chevroletcor, name: "Chevrolet Corvette" },
    { image: dodgehc, name: "Dodge Hellcat" },
    { image: mercedesamg, name: "Mercedes-Benz AMG" },
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <main>
      <section id="hero">
        <h1>
          Explore the Cars
          <br />
          <span>That Made History</span>
        </h1>
        <p>
          Discover popular car brands and explore their first models, newest
          vehicles, fastest cars, and more.
        </p>
        <a href="#brands">
          <button>Explore Car Brands</button>
        </a>
      </section>

      <section id="brands">
        <h4>POPULAR BRANDS</h4>
        <h2>Explore Car Brands</h2>
        <p>
          Learn about the history, iconic models, and what makes each brand
          unique.
        </p>
        <div className="brand-cards">
          <BrandCard
            name="Ford"
            image={ford}
            description="American innovation and performance."
            link="/ford"
          />
          <BrandCard
            name="Chevrolet"
            image={chevrolet}
            description="Explore Chevrolet's iconic vehicles."
            link="/chevrolet"
          />
          <BrandCard
            name="Dodge"
            image={dodge}
            description="Discover powerful Dodge vehicles."
            link="/dodge"
          />
          <BrandCard
            name="Mercedes-Benz"
            image={mercedes}
            description="Explore luxury and innovation."
            link="/mercedes"
          />
        </div>
      </section>

      <section id="slideshow">
        <h4>EXPLORE MORE</h4>
        <h2 data-tooltip-id="car-tooltip" data-tooltip-content="Explore some of our favorite cars!">
          Featured Cars
        </h2>
        <Tooltip id="car-tooltip" />
        <div className="slideshow-container">
          <button onClick={previousSlide} className="slide-btn">
            &#10094;
          </button>
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].name}
          />
          <button onClick={nextSlide} className="slide-btn">
            &#10095;
          </button>
        </div>
        <h3>{slides[currentSlide].name}</h3>
      </section>

      <section id="cars">
        <h2>Explore Our Cars</h2>
        <div id="car-list">
          {cars.map((car) => (
            <CarCard
              key={car._id}
              brand={car.brand}
              model={car.model}
              year={car.year}
              price={car.price}
              type={car.type}
              image={`https://hello-world-tnh4.onrender.com/${car.main_image}`}
            />
          ))}
        </div>
      </section>

      <section id="more">
        <h4 className="discover">DISCOVER MORE</h4>
        <h2>More Than Just Car Brands</h2>
        <div className="info-boxes">
          <div className="info">
            <h3>⚙ First Models</h3>
            <p>See where each manufacturer's story began.</p>
          </div>
          <div className="info">
            <h3>📅 Latest Models</h3>
            <p>Discover some of their newest vehicles.</p>
          </div>
          <div className="info">
            <h3>🏁 Fastest Cars</h3>
            <p>Explore high-performance vehicles.</p>
          </div>
          <div className="info">
            <h3>💰 Price Extremes</h3>
            <p>Explore the least and most expensive cars.</p>
          </div>
        </div>
      </section>

      <section id="featured">
        <h4 className="featvehicle">FEATURED VEHICLE</h4>
        <h2>2026 Ford Mustang</h2>
        <p>
          The 2026 Ford Mustang continues the legacy of one of Ford’s most
          recognizable cars. It combines its classic muscle car design with
          modern technology, strong performance, and updated features. The
          Mustang has changed throughout the years while still keeping the style
          and power that made it popular.
        </p>

        <a
          href="https://www.ford.com/cars/mustang/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Learn More</button>
        </a>
      </section>

      <section id="about-home">
        <h4 className="aboutknow">
          ABOUT <span>KNOW</span>
          <span>YOURCARS</span>
        </h4>
        <h2>Built for Car Enthusiasts</h2>
        <p>
          KnowYourCars makes it easy to learn about some of the most popular car
          brands around the world. Visitors can explore the history of each
          brand and discover how their vehicles have changed over time. The
          website highlights first models, latest vehicles, fastest cars, and
          different price ranges. It also provides information about what makes
          each car brand unique. Whether you are a car enthusiast or just
          curious about cars, KnowYourCars has something for everyone.
        </p>
        <Link to="/about">
          <button>Learn More About Us</button>
        </Link>
      </section>
    </main>
  );
};

export default Home;