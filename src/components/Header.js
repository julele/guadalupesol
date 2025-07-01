import React from 'react';
import './Header.css';
function Header() {
  return (
    <div className="ww-nav-bar sticky-top bg-light">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <h1 className="h2">
            <a className="pl-4 navbar-brand" href="#">
              <img 
              src="/images/logo-n.png" 
              alt="GuadalupeSol" 
              className="ww-logo"
            />
            </a>
          </h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ww-navbarNav" aria-controls="ww-navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-uppercase" id="ww-navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a className="nav-link smooth-scroll" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link smooth-scroll" href="#couple">Evento</a></li>
              <li className="nav-item"><a className="nav-link smooth-scroll" href="#events">Que vas a ver?</a></li>
              <li className="nav-item"><a className="nav-link smooth-scroll" href="#people">Testimonios</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;