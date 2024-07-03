import "./App.css";
import Home from "./Components/Home";

import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import About from "./Components/About";


function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <Contact/>
      <Footer/>
      <Testimonial/>
      <Work/>
    
      
    </div>
  );
}

export default App;