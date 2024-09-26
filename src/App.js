import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Menu from "../src/components/Menu.jsx";
import Wellness from "../src/components/Wellness.jsx";
import Contact from "../src/components/Contact.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
