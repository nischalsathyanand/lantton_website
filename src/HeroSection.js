import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Enquiry Website</h1>
        <p>Find the best solutions tailored to your needs.</p>
        <button className="cta-button">Explore More</button>
      </div>
    </section>
  );
};

export default HeroSection;
