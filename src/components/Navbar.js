
// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset + 70; // Offset for fixed navbar height

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(sectionId);
      }
    });
  };

  useEffect(() => {
    // Check if admin is logged in on component mount
    const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    setIsAdmin(isAdminLoggedIn);

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run only on mount and unmount

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    setIsAdmin(false);
    navigate('/admin-login'); // Redirect to login page
  };

  return (
    <nav className="navbar" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/Untitled-1.png)` }}>
      <div className="navbar-brand">
        <Link to="/admin-login">
          <img src={`${process.env.PUBLIC_URL}/image/logo/icon green.png`} alt="Kala Kendra Logo" className="navbar-logo" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li><HashLink smooth to="/kalakendra#home" className={activeSection === 'home' ? 'active' : ''}>HOME</HashLink></li>
        <li><HashLink smooth to="/kalakendra#about" className={activeSection === 'about' ? 'active' : ''}>ABOUT</HashLink></li>
        <li><HashLink smooth to="/kalakendra#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}>PORTFOLIO</HashLink></li>
        <li><HashLink smooth to="/kalakendra#services" className={activeSection === 'services' ? 'active' : ''}>SERVICES</HashLink></li>
        <li><HashLink smooth to="/kalakendra#reviews" className={activeSection === 'reviews' ? 'active' : ''}>REVIEWS</HashLink></li>
        <li><HashLink smooth to="/kalakendra#contact" className={activeSection === 'contact' ? 'active' : ''}>CONTACT</HashLink></li>

        {/* Show Logout button if admin is logged in */}
        {isAdmin && (
          <li>
            <Link to="/admin-login" onClick={handleLogout} className="navbar-logout">LOGOUT</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
