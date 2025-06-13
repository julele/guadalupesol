import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="ww-home-page" id="home">
      <div className="ww-wedding-announcement d-flex align-items-center justify-content-start">
        <div className="container ww-announcement-container">
          <div className="content-wrapper text-center">
            <div className="logo-container mb-4">
              <img className="img-fluid" src="images/logo.png" alt="Heart" />
            </div>
            <div className="ww-wedding-announcement-text">
              <h1 className="text-white">LO MEREZCO TODO</h1>
              <h3 className="text-white">3 días para recordar que mereces TODO lo que deseás: amor, éxito, dinero, libertad y una vida diseñada por vos. </h3>
              <h4 className="text-white">Evento gratuito con Guadalupe Sol Vázquez. 7, 8 y 9 de junio. Audio + Clase en vivo final</h4>
              <button className="btn btn-primary btn-lg mt-4">
                ¡QUIERO INSCRIBIRME!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;