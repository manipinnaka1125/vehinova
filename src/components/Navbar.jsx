import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Import styles for Navbar
import  mainimg from '../mainimg.jpg'; // Adjust the path as necessary

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={mainimg} alt="Vehinova Logo" className="logo-img" />
        </Link>
      </div>
      <ul className={`nav-links ${isActive ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/internships">Internships</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/verify">Verify</Link></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
