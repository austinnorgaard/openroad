import logo from '../../logo.svg';
import './Navbar.css';
import { LinkDiv, NavHamburger } from './Styles';
import { Link } from "react-router-dom";
import ScrollButton from '../ScrollButton/ScrollButton';
import React, {useState} from 'react'; 

const Navbar = () => {
    const [menuClicked, setMenuClicked] = useState(false);
    const [desktop, setDesktop] = useState(true);


    const toggleMenuClickedOn = () => {
        setMenuClicked(!menuClicked);
    };

    const toggleMenuClickedOff = () => {
        if (menuClicked) {
            setMenuClicked(!menuClicked);
        }
    };

    const toggleDesktop = () => {
        let width = window.innerWidth;
        if (width <= 768) {
            setDesktop(false);
        }
        else if (width > 768) {
            setDesktop(true);
        }
    }

    const handleMenuStyle = (isClicked, isDesktop) => {
        if (!isClicked && !isDesktop) {
            return {
                display: 'flex',
                zIndex: '1000',
                marginRight: '1rem',
            }
        }
        else {
            return {
                display: 'none',
            }
        }
    }

    const handleLinkDivStyle = (isClicked, isDesktop) => {
        const style = {};
        if (isClicked || isDesktop) {
            if (!isDesktop) {
                style.position = 'absolute';
                style.right = '0';
                style.flexDirection = 'column';
                style.paddingRight = '25vw';
                style.fontSize = 'calc(20px + 2vmin)';
                style.zIndex = '999';
                style.backgroundColor = 'white';
                style.minHeight = '100vh';
                style.maxHeight = '100vh';
                style.paddingTop = '8rem';
                style.paddingLeft = '1rem';
                style.borderLeft = '1px solid black';
                style.overflow = 'hidden';
            }
            style.display = 'flex';
            return style;
        }
        else if (!isClicked && !isDesktop) {
            style.display = 'none';
            return style;
        }
    }

    window.addEventListener('resize', toggleDesktop);

    return (
        <div className="navBar" onLoad={toggleDesktop}>
            <NavHamburger className="navHamburgerOpen"
            onClick={toggleMenuClickedOn}
            style={handleMenuStyle(menuClicked, desktop)}
            >
                <svg id="navHamburgerSVG" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"/></svg>
            </NavHamburger>
            <NavHamburger className="navHamburgerClose"
            onClick={toggleMenuClickedOff}
            style={handleMenuStyle(!menuClicked, desktop)}>
                <svg id="navXSVG" stroke="#000000" viewBox="0 0 40 40" width="50px" height="50px" xmlns="http://www.w3.org/2000/svg"><line stroke-width="4" x1="2" x2="30" y1="2" y2="30"/><line stroke-width="4" x1="2" x2="30" y1="30" y2="2"/></svg>
            </NavHamburger>
            <LinkDiv id="linkDiv"
            style={handleLinkDivStyle(menuClicked, desktop)}
            >
                <Link to="/"><div onClick={toggleMenuClickedOff}>Home</div></Link>
                <Link to="/events"><div onClick={toggleMenuClickedOff}>Events</div></Link>
                <Link to="/shop"><div onClick={toggleMenuClickedOff}>Shop</div></Link>
                <div id="SecondLinkDiv">
                    <Link to="/about"><div onClick={toggleMenuClickedOff}>About</div></Link>
                    <Link to="/contact"><div onClick={toggleMenuClickedOff}>Contact</div></Link>
                </div>
            </LinkDiv>
            <Link to="/" style={{left: menuClicked ? '1rem' : '', position: menuClicked ? 'fixed' : ''}}><img src={logo} onClick={toggleMenuClickedOff} className="logo" alt="logo" /></Link>
            <ScrollButton/>
        </div>
    );
  };
    
  export default Navbar;
