import "./Navigation.css";
import {NavLink} from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {

    return (
        <nav id="main-nav">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/ford">Ford</NavLink></li>
                <li><NavLink to="/chevrolet">Chevrolet</NavLink></li>
                <li><NavLink to="/dodge">Dodge</NavLink></li>
                <li><NavLink to="/mercedes">Mercedes-Benz</NavLink></li>
            </ul>
        </nav>
    );
};
export default Navigation;