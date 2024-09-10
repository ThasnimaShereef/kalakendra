// src/components/Contact.js
import React from 'react';
import './Contact.css'; // Add some styling
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter , FaWhatsapp} from 'react-icons/fa';

const Contact = () => {
  // Replace this phone number with the designer's actual WhatsApp number
  const whatsappNumber = '+917060879876';
  const whatsappMessage = 'Hello, I would like to inquire about your interior design services.';

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      
      <div className="contact-section">
        <h2>Email Us</h2>
        <form className="contact-form">
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Send Inquiry</button>
        </form>
      </div>

      <div className="contact-section">
        <h2>Chat with Us on WhatsApp</h2>
        <p>You can also reach out to us directly on WhatsApp for quick inquiries.</p>
        <a 
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} 
          className="whatsapp-link" 
          target="_blank" 
          rel="noopener noreferrer">
             <FaWhatsapp />
          Chat on WhatsApp
        </a>
      </div>
      <div className="social-links">
        <h3>Connect with Us</h3>
        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Contact;
