// src/components/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <h2>Curating & Designing Realities</h2>
      
      <div className="services-list">
        <div className="service-item">
          <h3>Residential Design</h3>
          <p>Craft stylish and comfortable living spaces.</p>
        </div>
        
        <div className="service-item">
          <h3>Commercial Design</h3>
          <p>Boost creativity with impactful & innovative business environments.</p>
        </div>
        
        <div className="service-item">
          <h3>Renovations & Remodels</h3>
          <p>Refresh your space with expert renovations.</p>
        </div>
        
        <div className="service-item">
          <h3>Space Planning</h3>
          <p>Optimize layouts for maximum functionality.</p>
        </div>
        
        <div className="service-item">
          <h3>Custom Furniture & Fixtures</h3>
          <p>Tailor-made pieces to match your design vision.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
