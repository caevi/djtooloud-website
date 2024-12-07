import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src="loudlogo.png" alt="DJ Logo" className="logo" />
      <h1>
      DJ TOOLOUD
        </h1>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        <li><Link to="/booking">Book an Event</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
