// src/components/Services.js
import React from 'react';
import { FaHome, FaBuilding, FaTools, FaDraftingCompass, FaCouch } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1>WHAT WE DO</h1>
      <h2>Curating & Designing Realities</h2>

      <div className="services-list">
        <div className="service-item">
          <FaHome className="service-icon" />
          <h3>Residential Design</h3>
          <p>Craft stylish and comfortable living spaces.</p>
        </div>

        <div className="service-item">
          <FaBuilding className="service-icon" />
          <h3>Commercial Design</h3>
          <p>Boost creativity with impactful & innovative business environments.</p>
        </div>

        <div className="service-item">
          <FaTools className="service-icon" />
          <h3>Renovations & Remodels</h3>
          <p>Refresh your space with expert renovations.</p>
        </div>

        <div className="service-item">
          <FaDraftingCompass className="service-icon" />
          <h3>Space Planning</h3>
          <p>Optimize layouts for maximum functionality.</p>
        </div>

        <div className="service-item">
          <FaCouch className="service-icon" />
          <h3>Custom Furniture & Fixtures</h3>
          <p>Tailor-made pieces to match your design vision.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
