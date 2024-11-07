
// // src/App.js
// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Services from './components/Services';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Reviews from './components/Reviews';
// import AdminLogin from './components/AdminLogin';
// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// function App() {
//   const [activeSection, setActiveSection] = useState('home');

//   const handleScroll = () => {
//     const sections = document.querySelectorAll('section');
//     const scrollPosition = window.pageYOffset + 100; // Offset for fixed navbar height

//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.offsetHeight;
//       const sectionId = section.getAttribute('id');

//       if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//         setActiveSection(sectionId);
//       }
//     });
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Navbar activeSection={activeSection} />
//         <Routes>
//           <Route path="/admin-login" element={<AdminLogin />} />
//           <Route path="/kalakendra" element={
//             <>
//               <section id="home">
//                 <Home />
//               </section>
//               <section id="about" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/textureb.jpg)` }}>
//                 <About />
//               </section>
//               <section id="portfolio" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/texturebeige.jpg)` }}>
//                 <Portfolio />
//               </section>
//               <section id="services" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/textureb.jpg)` }}>
//                 <Services />
//               </section>
//               <section id="reviews" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/texturebeige.jpg)` }}>
//                 <Reviews />
//               </section>
//               <section id="contact" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/textureb.jpg)` }}>
//                 <Contact />
//               </section>
//             </>
//           } />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

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
      <div className="App">
        <Navbar activeSection={activeSection} />
        <Routes>
          {/* Admin Login Route */}
          <Route path="/admin-login" element={<AdminLogin />} />

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
