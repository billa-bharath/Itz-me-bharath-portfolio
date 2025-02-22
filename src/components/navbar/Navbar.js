import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Img from '../blogo.png';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState('light');

  // Toggle Theme Handler
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme preference
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Set Default Theme on Load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img className="navbar-logo" src={Img} alt="Logo" />
        <ul className={`navbar-links ${isMobile ? 'open' : ''}`}>
          <li>
            <Link to="/"  className="nav-item">Home</Link>
            <a href='#sliding-container' ></a>
          </li>
          <li>
            <Link to="/education" className="nav-item">Education</Link>
          </li>
          <li>
            <Link to="/project" className="nav-item">Project</Link>
          </li>
          <li>
            <Link to="/skill" className="nav-item">Skill</Link>
          </li>
          <li>
            <Link to="/hobbies" className="nav-item">Hobbies</Link>
          </li>
          <li><a href="./resume.pdf" className='nav-item'> Resume </a></li>
        </ul>
        
        <div className="navbar-actions">
          <button className="menu-icon" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? '✖️' : '☰'}
          </button>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
