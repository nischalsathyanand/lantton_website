
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Enquiry Website. All rights reserved.</p>
      <div className="social-links">
        <a
          href="https://www.facebook.com/people/Lantoon-speak-native/100063756437415/?mibextid=ZbWKwL" // Replace with your Facebook link
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="social-button"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.instagram.com/lantoon20/?igsh=eDVzZDEzZzVtenl3" // Replace with your Instagram link
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="social-button"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.youtube.com/@lantoonspeaknative6941" // Replace with your YouTube link
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="social-button"
        >
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
