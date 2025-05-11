import React, { useState } from 'react';
import './App.css';
import logoImg from './components/imgs/httpsapp.lottiefiles.comanimationba426f13-0a4c-4488-b7e4-3306491954c2-removebg-preview.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo">
          <a href="#home" className="logo-link">
            <img src={logoImg} alt="Eterna Logo" className="logo-image" />
            <span className="brand-name">Eterna</span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${open ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          {/* Updated link to go to the footer section */}
          <a href="#footer">Contact us</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
