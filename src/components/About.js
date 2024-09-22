
// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Image on the left */}
        <div className="about-image">
          <img src={`${process.env.PUBLIC_URL}/image/logo/dp.jpg`} alt="Gunjan Choudhary" />
        </div>

        {/* Text on the right */}
        <div className="about-text">
          <h1>The Kalakar</h1>
          <p>
            Excited to introduce myself, Gunjan Choudhary, as the Principal Designer at Kala Kendra! 
            Specializing in interior design, furniture design, and home decor, I adore turning spaces 
            into cozy, stylish havens. From detailed 3D models to the final charming touches, I'm here 
            to make your design dreams come true. Follow along for inspiration and a glimpse into my creative world!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
