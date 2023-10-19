import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  
  // import Home component
  import Home from "./components/Home/Home";
  // import About component
  import About from "./components/About/About";

  import Navbar from "./components/Navbar/Navbar";

  import IntroSlide from "./components/IntroSlide/IntroSlide";

  import Contact from "./components/Contact/Contact";

  import Events from "./components/Events/Events";

  import Shop from "./components/Shop/Shop";

const App = () => {
    return (
        <BrowserRouter>
            <title>Open Road Energy</title>
            <Navbar />
            <IntroSlide />
            <Routes id="Pages">
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
      </BrowserRouter>
    );
  };
    
  export default App;