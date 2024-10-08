import React, { useState } from 'react';
import './NavBar.css';
import logoImage from './images/image.png'; // Adjust the path as necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    window.location.href = 'https://www.lantoon.net/login'; // Redirect to the login page
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logoImage} alt="Lantoon Logo" className="logo-image" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'} {/* Toggle between hamburger and close icons */}
      </button>
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT US</a></li>
          <li><a href="/languages">LANGUAGES</a></li>
          <li><a href="/contact">CONTACT US</a></li>
        </ul>
      </nav>
      {/* Use button click event to navigate */}
      <button className="login-button" onClick={handleLoginClick}>
        Login 
      </button>
    </header>
  );
};

export default Navbar;
