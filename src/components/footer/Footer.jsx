import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import instagram from "./images/instagram.png";
import facebook from "./images/facebook.png";
import x from "./images/x.png";

const Footer = () => {
    return (
        <footer>
            <div className="footer-title">
                <h2>Know<span>YourCars</span></h2>
                <p>Drive Knowledge Further</p>
            </div>

            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/ford">Ford</Link>
                <Link to="/chevrolet">Chevrolet</Link>
                <Link to="/dodge">Dodge</Link>
                <Link to="/mercedes">Mercedes-Benz</Link>
            </div>

            <div className="footer-socials">
                <div className="social-icons">
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <img src={instagram} alt="Instagram" />
                    </a>

                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <img src={facebook} alt="Facebook" />
                    </a>

                    <a href="https://x.com/" target="_blank" rel="noreferrer">
                        <img src={x} alt="X" />
                    </a>
                </div>

                <p>© 2026 KnowYourCars<br />All rights reserved.</p>
            </div>

            <div className="footer-message">
                <p>Cars connect people.<br />Knowledge keeps them alive.</p>
            </div>
        </footer>
    );
};

export default Footer;