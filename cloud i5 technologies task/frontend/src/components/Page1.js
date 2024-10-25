import React from 'react';
import './Page1.css'; 
import logo from './cloudi5logo.png'

const Page1 = () => {
  return (
    <div className="page1-container">
      <div className="overlay">
        <div className="content">
          <img
            src={logo}
            alt="Cloudi5 Logo"
            className="logo"
          />
          <h1>Crafting Digital Experiences, One Pixel at a Time.</h1>
          <div className="features">
            <span>✔ Innovation</span>
            <span>✔ Online Presence</span>
            <span>✔ Creative</span>
          </div>
          <button className="register-btn">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default Page1;