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
    <div className="iframeTv4">
      <iframe id="iFrameTv4" title="iFrameTv4" src="https://www.tv4play.se/" />
    </div>
  );
}
