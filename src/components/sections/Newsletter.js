import React, { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar la suscripción
    console.log('Email suscrito:', email);
    setEmail('');
  };

  return (
    <div className="ww-section newsletter-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="h1 ww-title mb-4" data-aos="fade-up" data-aos-duration="1000">
              Inscríbete a nuestro newsletter
            </h2>
            <form onSubmit={handleSubmit} className="newsletter-form" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">
                    Suscribirme
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;