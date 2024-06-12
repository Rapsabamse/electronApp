import { Link } from 'react-router-dom';
import React from 'react';
import icon from './images/icon.png';
import './main.css';

export function Icon() {
  return (
    <div className="tv4Icon">
      <Link to="/tv4">
        <img width="300" alt="icon" src={icon} />
      </Link>
    </div>
  );
}

export function Website() {
  return (
    <div className="tv4Iframe">
      <iframe
        id="iFrameExample"
        title="iFrame Example"
        src="https://www.tv4play.se/"
        width="2560px"
        height="1440px"
      />
    </div>
  );
}
