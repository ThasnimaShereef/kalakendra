
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

        <section id="about">
          <About />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="reviews">
          <Reviews />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
