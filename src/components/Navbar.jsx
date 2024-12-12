import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src="loudlogo.png" alt="DJ Logo" className="logo-img" />
        <h1>DJ TOOLOUD</h1>
        <img src="santa.png" alt="DJ Logo" className="logo-img2" />
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Me</Link>
        </li>
        <li>
          <Link to="/videos" onClick={() => setMenuOpen(false)}>Videos</Link>
        </li>
        <li>
          <Link to="/mixes" onClick={()=> setMenuOpen(false)}>Mixes</Link>
        </li>
        <li>
          <Link to="/booking" onClick={() => setMenuOpen(false)}>Book an Event</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
