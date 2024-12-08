import React from 'react';
import './Videos.css'; // Import styles for the videos component
import Socials from './Socials';
const Videos = () => {
  return (
    <div className="videos">
      <h1></h1>
      <div class="video-container">
  <iframe 
    width="600" 
    height="400" 
    src="https://www.youtube.com/embed/mIAdpmObvlU?si=vuVOXley10aFY5Km" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen>
  </iframe>
</div>
      </div>

  );
};

export default Videos;
