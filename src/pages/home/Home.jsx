import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <main>
            <section id="hero">
                <h1>
                    Explore the Cars
                    <br />
                    <span>That Made History</span>
                </h1>
                <p>
                    Discover popular car brands and explore their first
                    models, newest vehicles, fastest cars, and more.
                </p>
                <a href="#brands">
                    <button>Explore Car Brands</button>
                </a>
            </section>

            <section id="brands">
                <h4>POPULAR BRANDS</h4>
                <h2>Explore Car Brands</h2>
                <p>
                    Learn about the history, iconic models,
                    and what makes each brand unique.
                </p>
            </section>
        </main>
    );
};

export default Home;