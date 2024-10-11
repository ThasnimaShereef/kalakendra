
// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import './App.css';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Function to handle scroll and detect the active section
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset + 100; // Adding 100 to offset for fixed navbar height

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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter> {/* Wrap your app with BrowserRouter */}
      <div className="App">
        {/* Navbar */}
        <Navbar activeSection={activeSection} />

        {/* Sections */}
        <section id="home">
          <Home />
        </section>

        <section id="about" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/textureb.jpg)` }}>
          <About />
        </section>

        <section id="portfolio" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/texturebeige.jpg)` }}>
          <Portfolio />
        </section>

        <section id="services" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/textureb.jpg)` }}>
          <Services />
        </section>

        <section id="reviews" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/texturebeige.jpg)` }}>
          <Reviews />
        </section>

        <section id="contact" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/textureb.jpg)` }}>
          <Contact />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
