import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './AboutMe.css';
import Socials from './Socials'; // Import Socials component

const AboutMe = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen width is less than or equal to 480px
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Run the function on component mount and resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="about-me">
      <div className="about-me-top">
        {/* Video background stays in the background */}
        {!isMobile && (
          <video autoPlay muted loop className="background-video" playsInline>
            <source src="/tiktok.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="overlay-content">
          <h1>About DJ TOOLOUD</h1>
          <p className="description">
          I am a DJ based out of Toronto. I am passionate about music and through mixing I hope to spread good vibes across the world. I make it a statement to keep learning and progressing with new techniques and genres. I have experience of formal events, school events, and parties. 
          </p>
        </div>
      </div>
      <div className="content">
        {/* Image Section */}
        <div className="image-container">
          <img src="dj.jpg" alt="DJ" />
        </div>

        {/* Text Section */}
        <div className="text-container">
          <p>
          I hope to always surpass my previous self and give my crowds an experience they will always remember. I hope to see you at the next gig!'
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
