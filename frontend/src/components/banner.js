import React from 'react';
import '../App.css';

function Banner() {
  return (
    <div className="banner">
        <div className="banner-title">
          <h3> Compete with your friends this week! </h3>
        </div>
        <div className="reset">
          <h4>
          <span className="reset-text">Resets in: </span> <span className="reset-time">4 days</span>
          </h4>
        </div>
    </div>
  );
}

export default Banner;
