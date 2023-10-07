import './IntroSlide.css';
import logo from '../../logo.svg';

const IntroSlide = () => {
    return (
        <div className="Intro">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Welcome to Open Road Energy!
        </p>
  </div>
    );
  };
    
  export default IntroSlide;