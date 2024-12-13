import React from 'react';
import './Videos.css'; // Import styles for the videos component
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Socials from './Socials';

const Videos = () => {
  return (
    <div className="videos">
      <div className="video-container">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Vsr70INp-GM?si=usMCcwd6iQ61jNF9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
