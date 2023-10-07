import logo from '../../logo.svg';
import './Navbar.css';
import { Link } from "react-router-dom";
import ScrollButton from '../ScrollButton/ScrollButton';

const Navbar = () => {
    return (
        <div className="navBar">
            <button className="navHamburger"><svg id="navHamburgerSVG" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"/></svg></button>
            <div id="linkDivFirst">
                <Link to="/">Home</Link>
                <Link to="/events">Events</Link>
                <Link to="/shop">Shop</Link>
            </div>
            <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
            <div id="linkDivLast">
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <ScrollButton/>
        </div>
    );
  };
    
  export default Navbar;
