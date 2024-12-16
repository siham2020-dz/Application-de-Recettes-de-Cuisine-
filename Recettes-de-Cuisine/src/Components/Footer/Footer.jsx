import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
          <img src="../../../public/logo.jpg" alt="Logo" />
          <span>Créativité qui régale</span>
        </div>
        <div className="footer-links">
          <a href="/contact">Nous contacter</a>
          <a href="/legal">Mention légale</a>
        </div>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="../../../public/facebookg.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="../../../public/Instagram.png" alt="Instagram" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="../../../public/youtube.png" alt="YouTube" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
