import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa'; // Import social media icons
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-details">
          {/* Clickable phone number for dial pad */}
          <p><strong>Contact:</strong> <a href="tel:7538855921">7538855921</a></p>
          {/* Clickable email to open default email client */}
          <p><strong>Email:</strong> <a href="mailto:bharathdharmendiran2002@gmail.com">bharathdharmendiran2002@gmail.com</a></p>
          {/* Display address as normal text */}
          <p><strong>Address:</strong> 1/374, Mariyamman Kovil, Thanjavur, India</p>
        </div>
        <div className="footer-social">
          <p><strong>Follow Me:</strong></p>
          <ul className="footer-links">
            {/* Instagram link */}
            <li><a href="https://www.instagram.com/itz_bhara_th" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a></li>
            {/* LinkedIn link */}
            <li><a href="https://www.linkedin.com/in/bharath1307" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a></li>
            {/* Facebook link */}
            <li><a href="https://www.facebook.com/Bharath.Bharath" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a></li>
            {/* GitHub link */}
            <li><a href="https://github.com/billa-bharath" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          {/* <p>&copy; 2024 My Portfolio</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
