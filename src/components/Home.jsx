import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';
import Socials from './Socials';  // Import Socials component

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-image">
          <img src="tooloud.jpg" alt="DJ" className="dj-image" />
        </div>
        <div className="home-text">
          <h1>DJ TOOLOUD</h1>
          <p>Explore incredible mixes, learn more about the DJ, and book your next event.</p>
          
          {/* Learn More About Me Button */}
          <Link to="/about">
            <button className="learn-more-btn">Learn More About Me</button>
          </Link>
        </div>
      </div>
      
      {/* Add Socials Component at the bottom */}
      <Socials /> 
    </div>
  );
};

export default Home;
