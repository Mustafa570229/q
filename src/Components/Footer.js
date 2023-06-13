import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
import telegramIcon from "../images/telegram.png";
import linkedinIcon from "../images/linkedin.png";
import twitterIcon from "../images/twitter.png";
import webIcon from "../images/web1.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link to="/the-journey-of-certainty">The Journey of Certainty</Link>
        <Link to="/chains">Chains</Link>
        <Link to="/stories">Stories</Link>
        <Link to="/mix">Mix</Link>
      </div>
      <div className="footer-images">
        <a href="https://mustafaalabohasne.online/" target="_blank" rel="noreferrer">
          <img src={webIcon} alt="Web" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://web.telegram.org/" target="_blank" rel="noreferrer">
          <img src={telegramIcon} alt="Telegram" />
        </a>
        <a href="https://twitter.com/alabohasne" target="_blank" rel="noreferrer">
          <img src={twitterIcon} alt="Twitter" />
        </a>
      </div>
      <div className="footer-copyright">
        <span>&copy; 2023</span> 
        <a href="https://mustafaalabohasne.online/" target="_blank" rel="noreferrer">mustafaalabohasne.online</a>
      </div>
    </div>
  );
};

export default Footer;
