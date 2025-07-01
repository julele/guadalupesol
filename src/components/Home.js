import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {

  // Datos Estaticos sin DB
const contenidoMarkdown = `
# LO **MEREZCO** TODO

### 3 días para recordar que mereces **TODO** lo que deseás: amor, éxito, dinero, libertad y una vida diseñada por vos.

#### Evento gratuito con *Guadalupe Sol Vázquez*. 7, 8 y 9 de junio. Audio + Clase en vivo final
`;

  const navigate = useNavigate();
  return (
    <div className="ww-home-page" id="home">
      <div className="ww-wedding-announcement d-flex align-items-center justify-content-start">
        <div className="container ww-announcement-container">
          <div className="content-wrapper text-center">
            <div className="logo-container mb-4">
              <img className="img-fluid" src="images/logo.png" alt="Heart" />
            </div>
            <div className="ww-wedding-announcement-text">
              <ReactMarkdown>{contenidoMarkdown}</ReactMarkdown>
              <Link
                className="btn btn-primary btn-lg mt-4"
                to="/pre-newsletter"
              >
                ¡QUIERO INSCRIBIRME!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;