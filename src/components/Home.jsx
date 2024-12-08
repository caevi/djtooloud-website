import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';
import Socials from './Socials'; // Import Socials component

const Home = () => {
  return (
    <div className="home">
      {/* Main Content */}
      <div className="home-content">
        {/* Image Section */}
        <div className="home-image">
          <img src="tooloud.jpg" alt="DJ TOOLOUD" className="dj-image" />
        </div>

        {/* Text Section */}
        <div className="home-text">
          <h1>DJ TOOLOUD</h1>
          <p>Explore incredible mixes, learn more about the DJ, and book your next event.</p>
          
          {/* Learn More Button */}
          <Link to="/about">
            <button className="learn-more-btn">Learn More About Me</button>
          </Link>
        </div>
      </div>
      
      {/* Socials Component */}
      <Socials /> 
    </div>
  );
};

export default Home;
