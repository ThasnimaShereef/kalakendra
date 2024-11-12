// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import AdminLogin from './components/AdminLogin';
import Bedroom from './components/PortfolioSections/Bedroom';
import Entrance from './components/PortfolioSections/Entrance';
import Exterior from './components/PortfolioSections/Exterior';
import HallnDining from './components/PortfolioSections/HallnDining';
import KidsRoom from './components/PortfolioSections/KidsRoom';
import Kitchen from './components/PortfolioSections/Kitchen';
import Office from './components/PortfolioSections/Office';
import PujaRoom from './components/PortfolioSections/PujaRoom';
import Washroom from './components/PortfolioSections/Washroom';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset + 100;

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
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/textureb.jpg)` }}>
        <Navbar activeSection={activeSection} />
        <Routes>
          {/* Admin Login Route */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/bedroom" element={<Bedroom />} />
          <Route path="/entrance" element={<Entrance />} />
          <Route path="/exterior" element={<Exterior />} />
          <Route path="/living-room" element={<HallnDining />} />
          <Route path="/kids-room" element={<KidsRoom />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/office" element={<Office />} />
          <Route path="/puja-room" element={<PujaRoom />} />
          <Route path="/washroom" element={<Washroom />} />
 

          {/* Home Route - Contains Sections */}
          <Route
            path="/kalakendra"
            element={
              <>
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
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
