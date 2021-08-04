import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <div className="nav-logo">
          <Link to="/" className="link">logo</Link>
        </div>
        <div className="nav-links-section">
          <div className="nav-links">
            <Link to="/" className="link">link 1</Link>
          </div>
          <div className="nav-links">
            <Link to="/" className="link">link 2</Link>
          </div>
          <div className="nav-links">
            <Link to="/" className="link">link 3</Link>
          </div>
          <div className="nav-links">
            <Link to="/" className="link">link 4</Link>
          </div>
        </div>
        <div className="nav-menu">hello</div>
      </div>
    </div>
  );
}

export default Navbar;
