import "./Navigation.css";
import {NavLink} from "react-router-dom";
import {HashLink} from "/react-router-hash-link";

const Navigation = () => {

    return (
        <nav id="main-nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Ford</a></li>
                <li><a href="#">Chevrolet</a></li>
                <li><a href="#">Dodge</a></li>
                <li><a href="#">Mercedes-Benz</a></li>
            </ul>
        </nav>
    );
};
export default Navigation;