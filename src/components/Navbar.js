// // src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // We'll add some styling here

// const Navbar = () => {
//   return (
//     <nav className="navbar" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/Untitled-1.png)` }}>

//       <div className="navbar-brand">
//       <Link to="/">
//       <img src={`${process.env.PUBLIC_URL}/image/logo/icon green.png`} alt="Kala Kendra Logo" className="navbar-logo" />

//         </Link>
//       </div>
//       <ul className="navbar-links">
//         <li>
//           <Link to="/">HOME</Link>
//         </li>
//         <li>
//           <Link to="/portfolio">PORTFOLIO</Link>
//         </li>
//         <li>
//           <Link to="/about">ABOUT</Link>
//         </li>
//         <li>
//           <Link to="/services">SERVICES</Link>
//         </li>
//         <li>
//           <Link to="/review">REVIEWS</Link>
//         </li>
//         <li>
//           <Link to="/contact">CONTACT</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/logo/Untitled-1.png)` }}>
<<<<<<< HEAD

      <div className="navbar-brand">
      <Link to="/">
      <img src={`${process.env.PUBLIC_URL}/image/logo/icon green.png`} alt="Kala Kendra Logo" className="navbar-logo" />

        </Link>
=======
      <div className="navbar-brand">
        <a href="#home"> <img src={`${process.env.PUBLIC_URL}/image/logo/icon green.png`} alt="Kala Kendra Logo" className="navbar-logo" /></a>
>>>>>>> d9c722d (Add .gitignore and remove build files)
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

