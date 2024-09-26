import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/menu">Meniul zilei</Link>
        </li>
        <li className="navbar-item">
          <Link to="/wellness">Programe de wellness</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
