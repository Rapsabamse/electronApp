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
    <div className="iframe">
      <iframe
        id="iFrameExample"
        title="iFrame Example"
        src="https://viaplay.se/"
      />
    </div>
  );
}
