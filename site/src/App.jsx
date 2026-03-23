import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Platforms from "./pages/Platforms/Platforms"
import Blogs from "./pages/Blogs/Blogs"
import Contact from "./pages/Contact/Contact"
import Navbar from "./components/Navbar/Navbar";
import CxoAdvisory from "./pages/CxoAdvisory/CxoAdvisory";
import Approach from "./pages/Approach/Approach"

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/approach" element={<Approach />} />
        
        <Route path="/platforms" element={<Platforms />} />

        <Route path="/advisory" element={<CxoAdvisory />} />

        <Route path="/blogs" element={<Blogs />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App