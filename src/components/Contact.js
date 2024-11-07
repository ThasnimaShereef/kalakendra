
import React from 'react';
import './Contact.css';
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Contact = () => {
  const whatsappNumber = '+919653998631';
  const whatsappMessage = 'Hello, I would like to inquire about your interior design services.';
  const phoneNumber = '+919653998631';
  const address = 'Kala Kendra, XYZ Street, Your City'; // Replace with actual address
  const googleMapsLink = `https://maps.app.goo.gl/fBSWgVEDR7A1tPBp7`;

  return (
    <div className="contact-container">
      <h1>CONTACT US</h1>

      <div className="image-buttons-wrapper">
        {/* Left Side: Intro and Buttons */}
        <div className="left-column">
          {/* First Row: Introductory Paragraph */}
          <h3> CONTACT INFORMATION</h3>
          <p className="contact-intro">
            We are here to help you! Reach out to us via phone, WhatsApp, or visit us at our location for personalized support. 
            Our team is always ready to assist with your inquiries.
          </p>

          {/* Second Row: Buttons in a Single Row */}
          <div className="contact-buttons-row">
            <div className="contact-button">
            
              <a href={`tel:${phoneNumber}`} className="button-text">
              <FaPhoneAlt className="contact-icon" /> <br></br>
              Call Us
              </a>
             
            </div>
            <div className="contact-button">
          
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="button-text">
                <FaWhatsapp className="contact-icon" />  <br></br>
                WhatsApp Us
              </a>
            </div>
            <div className="contact-button">
            
              <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="button-text">
              <FaMapMarkerAlt className="contact-icon" /> <br></br>
                Visit Us
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="right-column">
          <img src={`${process.env.PUBLIC_URL}/image/entrance/Entrance02/E3.jpg`} alt="Interior Design Showcase" className="contact-image" />
        </div>
      </div>

      {/* Form and Map Section */}
      <div className="form-map-wrapper">
        {/* Get in Touch Form */}
        <div className="contact-form">
          <h2>GET IN TOUCH</h2>
          <form action="mailto:thasnimashereef@gmail.com" method="post" encType="text/plain">
               <label>
                 Name:
                 <input type="text" name="name" required />
               </label>
               <div className="form-row">
                 <label>
                   Phone Number:
                   <input type="text" name="phone" required />
                 </label>
                 <label>
                   Email:
                   <input type="email" name="email" required />
                 </label>
               </div>
               <label>
                 Message:
                 <textarea name="message" required></textarea>
               </label>
              <button type="submit">Send Inquiry</button>
             </form>
        </div>

        {/* Map Section */}
        <div className="location-section">
          
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.34244811119!2d71.4165245!3d25.7592501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39443b93fc824cb5%3A0x720d6dab6c4ef7f3!2sKala%20Kendra%20Interior%20Design%20Studio!5e0!3m2!1sen!2sin!4v1729363028229!5m2!1sen!2sin" 
        width="600" 
        height="450" 
        style={{border:0}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
          <h2>OUR LOCATION</h2>

              {/* Social Media Links */}
                <div className="social-links">
            
            <div className="social-icons">
            <h3>FOLLOW US</h3>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDXXffLnVdkxxqSjmDBZtWQnbSqNDdMczNBsChQtrPCgbkMFBJFrBrMWcgqlvvkSCsXVXNr" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
                <FaEnvelope />
              </a>
              <a href="https://www.instagram.com/kala.kendraa?igsh=YmoyYjd2aGxkM2cy" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
