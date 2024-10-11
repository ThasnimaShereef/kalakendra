
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  // Function to track the section in view
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset; // Get the current scroll position

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 70; // Adjust for navbar height
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(section.getAttribute('id')); // Set the current active section
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/Untitled-1.png)` }}>
      <div className="navbar-brand">
        <Link to="/">
          <a href="#home">
            <img src={`${process.env.PUBLIC_URL}/image/logo/icon green.png`} alt="Kala Kendra Logo" className="navbar-logo" />
          </a>
        </Link>
      </div>

      <ul className="navbar-links">
        <li>
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>HOME</a>
        </li>
        <li>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>ABOUT</a>
        </li>
        <li>
          <a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}>PORTFOLIO</a>
        </li>
        <li>
          <a href="#services" className={activeSection === 'services' ? 'active' : ''}>SERVICES</a>
        </li>
        <li>
          <a href="#reviews" className={activeSection === 'reviews' ? 'active' : ''}>REVIEWS</a>
        </li>
        <li>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

