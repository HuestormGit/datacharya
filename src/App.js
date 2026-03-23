// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ComingSoon from "./components/ComingSoon/ComingSoon";
// import ComingSoon from "./components/comming/ComingSoon";
import About from "./pages/About/About"
import Platforms from "./pages/Platforms/Platforms"
import Blogs from "./pages/Blogs/Blogs"
import CxoAdvisory from "./pages/CxoAdvisory/CxoAdvisory";
import Approach from "./pages/Approach/Approach"

// import Contact from "./pages/Contact/Contact";

import './App.css';

function App() {
  return (
    <div className="App">
      
      // <ComingSoon />
      {/* <Contact /> */}
    <BrowserRouter>
    <Routes>

  {/* <Route path="/" element={<Home />} /> */}
    <Route path="/" element={<ComingSoon />} />

        <Route path="/about" element={<About />} />

        <Route path="/approach" element={<Approach />} />
        
        <Route path="/platforms" element={<Platforms />} />

        <Route path="/advisory" element={<CxoAdvisory />} />

        <Route path="/blogs" element={<Blogs />} />

{/* <Route path="/contact" element={<Contact />} /> */}

      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
