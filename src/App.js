import "./Resources/CSS/Common.css";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Careers from "./Pages/Careers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Careers />} />
      </Routes>
    </Router>
  );
}

export default App;
