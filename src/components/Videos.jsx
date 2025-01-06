import React from 'react';
import './Videos.css'; // Import styles for the videos component
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Videos = () => {
  return (
    <div className="videos">


      {/* Video Container */}
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/5LN2kEQv_q0?si=vRqlbnNa4X_37lM8"
          title="YouTube video player"
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
