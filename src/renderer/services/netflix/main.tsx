import { Link } from 'react-router-dom';
import React from 'react';
import icon from './images/icon.png';
import './main.css';

export function Icon() {
  return (
    <div className="netflixIcon">
      <Link to="/netflix">
        <img width="300" alt="icon" src={icon} />
      </Link>
    </div>
  );
}

export function Website() {
  return (
    <div className="iframeNetflix">
      <iframe
        id="iFrameNetflix"
        title="iFrameNetflix"
        src="https://www.netflix.com//"
        width={screen.width + 7}
      />
    </div>
  );
}
