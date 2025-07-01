import React from 'react';
import { Link } from 'react-router-dom';
import './Couple.css';
function Couple() {
  return (
    <div className="ww-section" id="couple">
      <div className="container">
        <h2 className="h1 text-center pb-3 ww-title" data-aos="zoom-in-down" data-aos-duration="1000">EVENTO GRATUITO</h2>
        <div className="row text-center">
          <div className="col-md-6">
            <div className="mt-3" data-aos="fade-right" data-aos-duration="1000">
              {/* <img className="img-fluid" src="images/groom.jpg" alt="Groom"/> */}
              <h3 className="h2 ww-title">Accedé a herramientas de transformación emocional, energética y práctica para activar tu merecimiento.<br/>
                Durante 3 días, te voy a guiar para que te conectes con tu valor, tu verdad y tu poder de manifestar todo lo que deseas.
              </h3>
              <Link
                className="btn btn-primary btn-lg mt-4"
                to="/pre-newsletter"
              >
                ¡QUIERO INSCRIBIRME!
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mt-3" data-aos="fade-left" data-aos-duration="1000">
              {/* <img className="img-fluid" src="images/bride.jpg" alt="Bride"/> */}
              <h5 className="h4 ww-title">
                ¿Sentís que hacés mil cosas pero no ves resultados reales en tu vida?<br/>
                <br/>¿Sentís que la vida no te da lo que mereces?<br/>
                <br/>¿Te cuesta recibir sin culpa?<br/>
                <br/>¿Te cuesta pedir lo que querés o darte prioridad?<br/>
                <br/>Este evento es para vos si sabés que querés más, pero sentís que algo te frena.<br/>
                No es que no puedas. No es que no sepas.<br/>
                Solo necesitás recordar quién sos y darle lugar a lo que realmente merecés.<br/>
                
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Couple;