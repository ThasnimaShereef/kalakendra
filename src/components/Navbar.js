
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
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
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#portfolio">PORTFOLIO</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#services">SERVICES</a>
        </li>
        <li>
          <a href="#reviews">REVIEWS</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


