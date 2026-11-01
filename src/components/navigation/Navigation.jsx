import "./Navigation.css";
import {NavLink} from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleNav = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav id="main-nav">
            <a id="toggle-nav" onClick={toggleNav} href="#">
                {menuOpen ? (<p>&#8963;</p>) : (<p>&#8964;</p>)}
            </a>

            <ul className={menuOpen ? "" : "hide-small"}>
                <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
                <li><NavLink to="/ford" onClick={() => setMenuOpen(false)}>Ford</NavLink></li>
                <li><NavLink to="/chevrolet" onClick={() => setMenuOpen(false)}>Chevrolet</NavLink></li>
                <li><NavLink to="/dodge" onClick={() => setMenuOpen(false)}>Dodge</NavLink></li>
                <li><NavLink to="/mercedes" onClick={() => setMenuOpen(false)}>Mercedes-Benz</NavLink></li>
            </ul>
        </nav>
    );
};
export default Navigation;