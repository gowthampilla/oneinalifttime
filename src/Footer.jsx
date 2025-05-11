import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container"  id="footer">
        {/* Product Section */}
        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            <li><a href="#use-cases">Use Cases</a></li>
            <li><a href="#learning-development">Learning & Development</a></li>
            <li><a href="#sales-marketing">Sales & Marketing</a></li>
            <li><a href="#customer-support">Customer Support</a></li>
            <li><a href="#mass-awareness">Mass Awareness</a></li>
            <li><a href="#human-resources">Human Resources</a></li>
            <li><a href="#hospitality">Hospitality</a></li>
          </ul>
        </div>
        
        {/* Resources Section */}
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="#investor-portal">Investor Portal</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>
        
        {/* Company Section */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#ethics">Ethics</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms-conditions">Terms & Conditions</a></li>
            <li><a href="#impressum">Impressum</a></li>
          </ul>
        </div>
        
        {/* Offices Section */}
        <div className="footer-column">
          <h3>Offices</h3>
          <ul>
            <li>Amsterdam: Piet Heinkade 95B, 1019 GM, Amsterdam, The Netherlands</li>
            <li>Barcelona: C. de Pere IV, 128, 08005, Barcelona, Cataluña, Spain</li>
            <li>Perth: 202/37 Barrack St, 6000, Perth, WA, Australia</li>
          </ul>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2025 Copyright UNITH. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
