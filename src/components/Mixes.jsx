import React from 'react';
import './Mixes.css'; // Ensure you have relevant styles for this component.
import Socials from './Socials';
const Mixes = () => {
  return (
    <div className="mixes">
      <h1>DJ TooLoud's SoundCloud Mixes</h1>
      
      {/* First Mixtape Player */}
      <div className="mix-container">
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1967151375&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <div className="mix-attribution">
          <a
            href="https://soundcloud.com/carter-joel"
            title="tooloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            tooloud
          </a>{' '}
          ·{' '}
          <a
            href="https://soundcloud.com/carter-joel/dancehall-classics"
            title="dancehall bangers"
            target="_blank"
            rel="noopener noreferrer"
          >
            dancehall bangers
          </a>
        </div>
      </div>

      {/* Second Mixtape Player */}
      <div className="mix-container">
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1911717989&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <div className="mix-attribution">
          <a
            href="https://soundcloud.com/carter-joel"
            title="tooloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            tooloud
          </a>{' '}
          ·{' '}
          <a
            href="https://soundcloud.com/carter-joel/firstinline"
            title="FirstInLine"
            target="_blank"
            rel="noopener noreferrer"
          >
            FirstInLine
          </a>
        </div>
      </div>

      {/* Third Mixtape Player */}
      <div className="mix-container">
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1969771679&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <div className="mix-attribution">
          <a
            href="https://soundcloud.com/carter-joel"
            title="tooloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            tooloud
          </a>{' '}
          ·{' '}
          <a
            href="https://soundcloud.com/carter-joel/easyonmyears"
            title="easyonmyears"
            target="_blank"
            rel="noopener noreferrer"
          >
            easyonmyears
          </a>
        </div>
      </div>
      <Socials /> 
    </div>
  );
};

export default Mixes;
