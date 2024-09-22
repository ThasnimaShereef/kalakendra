// export default Home;
import React from 'react';
import './Home.css'; // Add CSS for styling

const Home = () => {
  return (
    <div className="hero-page" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/background.jpg)` }}>
      <div className="content-container">
      <img src={`${process.env.PUBLIC_URL}/image/logo/lockup color green.png`} alt="Kala Kendra Logo" className="home-logo" />
        
        <p>
          Kala Kendra is an innovative interior design firm creating stylish, functional spaces that 
          reflect clients' unique tastes. We transform every project into a personalized masterpiece.
        </p>
        
        <a href="#portfolio" className="cta-button">Explore Our Work</a>
      </div>
    </div>
  );
};

export default Home;
