import "./Header.css";
import logo from "./images/logo.png"
import Navigation from "../navigation/Navigation";

const Header = () => {

    return (
        <header className="main-header">
            <div className="main-logo">
                <h2>Know<span>YourCars</span></h2>
                <p>Drive Knowledge Further</p>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;