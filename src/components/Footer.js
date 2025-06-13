import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="ww-footer bg-light">
      <div className="container text-center py-4">
        <p className="mb-0">&copy; GuadalupeSol. All rights reserved.</p>
        <p className="mb-0">Designed by - Sevazar 2025 <a className="credit" href="https://templateflip.com" target="_blank" rel="noopener noreferrer">TemplateFlip</a></p>
        <div className="ww-footer-social pt-3">
          <a className="btn btn-link" href="#"><i className="fab fa-facebook-f"></i></a>
          <a className="btn btn-link" href="#"><i className="fab fa-twitter"></i></a>
          <a className="btn btn-link" href="#"><i className="fab fa-google"></i></a>
          <a className="btn btn-link" href="#"><i className="fab fa-instagram"></i></a>
          <a className="btn btn-link" href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;