
// src/components/Home.js
import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if the admin is logged in by looking up local storage
    const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    setIsAdmin(isAdminLoggedIn);
  }, []);

  return (
    <div className="hero-page" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/background.jpg)` }}>
      <div className="content-container">
        <img src={`${process.env.PUBLIC_URL}/image/logo/lockup color green.png`} alt="Kala Kendra Logo" className="home-logo" />
        
        {/* Conditionally render the admin welcome message */}
        {isAdmin && <h2 className="admin-welcome">Welcome, Admin!</h2>}

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
