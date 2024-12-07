import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import './AboutMe.css';
import Socials from './Socials'; // Import Socials component

const AboutMe = () => {
  return (
    <div className="about-me">
      <h1>About DJ TOOLOUD</h1>
      <p className="description">
        DJ TOOLOUD is known for his energetic mixes and ability to get any crowd moving. Whether it's a club, a festival, or a private event, he's sure to bring the heat and keep the music pumping all night long.
      </p>
      <div className="content">
        {/* Image Section */}
        <div className="image-container">
          <img src="dj.jpg" alt="DJ" />
        </div>

        {/* Text Section */}
        <div className="text-container">
          <p>
            With years of experience, DJ TOOLOUD has curated a unique blend of high-energy tracks that combine various genres, ensuring there's always something for everyone.
          </p>

          {/* Button for Listening to Latest Video */}
          <div className="listen-button-container">
            {/* Link to Videos component */}
            <Link to="/videos">
              <button className="listen-button">
                Listen to Latest Video
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Socials Component */}
      <Socials />
    </div>
  );
};

export default AboutMe;
