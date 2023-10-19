import './Home.css';
import mainImage from '../../assets/FillingDrink1.JPG'
import logoImage from '../../assets/Logo2.JPG'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="Page" id="Home">
          <body>
            <div id="Home1">
              <h1>Welcome to Open Road Energy</h1>
              <h2>Check Out Some of Our Recent Event Media</h2>
              <img src={mainImage}></img>
            </div>
            <div id="Home2">
              <h1>Merchandise</h1>
              <div id="MerchImages">
                <div id="Row1">
                  <Link to="/shop" class="img" id="itm1"><img src={logoImage}></img></Link>
                  <Link to="/shop" class="img" id="itm2"><img src={logoImage}></img></Link>
                  <Link to="/shop" class="img" id="itm3"><img src={logoImage}></img></Link>
                  <Link to="/shop" class="img" id="itm4"><img src={logoImage}></img></Link>
                  <Link to="/shop" class="img" id="itm5"><img src={logoImage}></img></Link>
                </div>
                <div id="Row2">
                  <Link to="/shop" class="img"><img src={logoImage}></img></Link>
                  <Link to="/shop" class="img"><img src={logoImage}></img></Link>
                  <Link to="/shop" class="img"><img src={logoImage}></img></Link>
                  <Link to="/shop" class="img"><img src={logoImage}></img></Link>
                  <Link to="/shop" class="img"><img src={logoImage}></img></Link>
                </div>
              </div>
            </div>
            <div id="Home3">
              <h1>Drink Menu</h1>
              <div id="MainItems">
                <h2>Flavor Infused Energy Drinks</h2>
                <div id="Row1">
                  <ul>
                    <p>16oz</p>
                    <p>20oz</p>
                    <p>24oz</p>
                  </ul>
                </div>
                <div id="Row2">
                  <ul>
                    <p>Redbull</p>
                    <p>Rockstar</p>
                  </ul>
                </div>
              </div>
              <div id="SpecialtyItems">
                <h2>Italian Sodas</h2>
                <div id="Row1">
                  <ul>
                    <p>16oz</p>
                    <p>20oz</p>
                    <p>24oz</p>
                  </ul>
                </div>
              </div>
              <div id="Flavors">
                <h2>Flavor List</h2>
                <div id="Row1">
                  <ul>
                    <li>Raspberry*</li>
                    <li>Watermelon</li>
                    <li>Coconut</li>
                    <li>Blackberry</li>
                    <li>Peach*</li>
                  </ul>
                </div>
                <div id="Row2">
                  <ul>
                    <li>Strawberry</li>
                    <li>Cherry</li>
                    <li>Pomegranate</li>
                    <li>Orange</li>
                    <li>Blue Raspberry</li>
                  </ul>
                </div>
              </div>
              <h2>*Sugar Free Option Available</h2>
            </div>
          </body>
      </div>
    );
  };
    
  export default Home;
