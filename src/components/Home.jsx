// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';
import Socials from './Socials';

const Home = () => {
  return (
    <div className="home">
      {/* Main Content */}
      <div className="home-content">
        <div className="home-image">
          <img src="tooloud.jpg" alt="DJ TOOLOUD" className="dj-image" />
        </div>
        <div className="home-text">
          <h1>DJ TOOLOUD</h1>
          <p>Explore incredible mixes, learn more about the DJ, and book your next event.</p>
          
          <Link to="/about">
            <button className="learn-more-btn">Learn More About Me</button>
          </Link>
        </div>
      </div>
      
      {/* Socials Component with specific class for home page */}
      <div className="home-socials">
        <Socials />
      </div>
    </div>
  );
};

export default Home;
