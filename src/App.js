import "./Resources/CSS/Common.css";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Careers from "./Pages/Careers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Blog from "./Pages/Blog";
import Call from "./Pages/Call";
import Contact from "./Pages/Contact";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} style={{ background: "red" }} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/call" element={<Call />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
