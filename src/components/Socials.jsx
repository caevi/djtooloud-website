import React from 'react';
import { FaInstagram, FaTiktok, FaYoutube, FaMusic } from 'react-icons/fa';  // Use music as a placeholder
import './Socials.css';

const Socials = () => {
  return (
    <div className="socials">
      {/* Replace Twitter with Music icon as a placeholder */}
      <a href="https://soundcloud.com/carter-joel" target="_blank" rel="noopener noreferrer">
        <FaMusic className="social-icon" />
      </a>
      <a href="https://www.instagram.com/djtooloud_/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="social-icon" />
      </a>
      <a href="https://www.tiktok.com/@djtooloud" target="_blank" rel="noopener noreferrer">
        <FaTiktok className="social-icon" />
      </a>
      <a href="https://www.youtube.com/@djtooloudyt" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="social-icon" />
      </a>
    </div>
  );
};

export default Socials;
