import React from 'react';
import './Videos.css'; // Import styles for the videos component
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Socials from './Socials';

const Videos = () => {
  return (
    <div className="videos">
      <div className="video-container">
        <iframe 
          width="600" 
          height="400" 
          src="https://www.youtube.com/embed/mIAdpmObvlU?si=vuVOXley10aFY5Km" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>

      {/* "Check Out My Mixes" Button */}
      <div className="check-out-mixes-container">
        <Link to="/mixes">
          <button className="check-out-mixes-button">
            Check Out My Mixes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Videos;
