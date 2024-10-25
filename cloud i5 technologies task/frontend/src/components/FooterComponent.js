import React from "react";
import './FooterComponent.css';
import { FaLinkedin, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section services">
          <h4>SERVICES</h4>
          <ul>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Digital Marketing</li>
            <li>Mobile Application</li>
            <li>Logo Design</li>
          </ul>
        </div>
        <div className="footer-section products">
          <h4>OUR PRODUCTS</h4>
          <ul>
            <li>E-Commerce</li>
            <li>School Software</li>
            <li>ERP</li>
            <li>CRM</li>
            <li>Lead Management</li>
          </ul>
        </div>
        <div className="footer-section legal">
          <h4>LEGAL PAGES</h4>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Cancellation Policy</li>
            <li>Customer Policy</li>
            <li>Return Policy</li>
          </ul>
        </div>
        <div className="footer-section company">
          <h4>COMPANY</h4>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section support">
          <h4>NEED SUPPORT</h4>
          <ul>
            <li>FAQs</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <h2>Cloudi5</h2>
          <p>We are committed to excellence in everything we do. From the quality of our work to the level of service we provide, we strive for nothing less than perfection.</p>
        </div>
        <div className="social-media">
          <h4>SOCIAL MEDIA</h4>
          <p>Follow us on social media to find out the latest updates on our progress</p>
          <div className="social-icons">
            <FaLinkedin />
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© Cloudi5 Technologies 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;