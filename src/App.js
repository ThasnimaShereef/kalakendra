
// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
         <Navbar /> {/* Add Navbar at the top */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home component will render here */}
        <Route path="/portfolio" element={<Portfolio />} /> {/* Portfolio component will render here */}
        <Route path="/contact" element={<Contact />} /> {/* Contact component will render here */}
        <Route path="/about" element={<About />} /> {/* Portfolio component will render here */}
        <Route path="/services" element={<Services />} /> 
      </Routes>
    </Router>
  );
};

export default App;
