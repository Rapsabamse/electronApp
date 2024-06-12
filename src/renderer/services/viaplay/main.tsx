import { Link } from 'react-router-dom';
import React from 'react';
import icon from './images/icon.png';
import './main.css';

export function Icon() {
  return (
    <div className="viaplayIcon">
      <Link to="/viaplay">
        <img width="300" alt="icon" src={icon} />
      </Link>
    </div>
  );
}

export function Website() {
  return (
    <div className="viaplayIframe">
      <iframe
        id="iFrameExample"
        title="iFrame Example"
        src="https://viaplay.se/"
        width="2560px"
        height="1440px"
      />
    </div>
  );
}
