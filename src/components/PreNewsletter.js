import React from 'react';

function PreNewsletter() {
  return (
    <div className="container py-5 d-flex flex-column align-items-center justify-content-center" style={{minHeight: '70vh'}}>
      <h2 className="mb-3 text-center">¡Estás a un paso de vivir una experiencia transformadora!</h2>
      <h4 className="mb-3 text-center">Felicidades por querer ser parte de este evento.<br />
        Ahora solo te pido dos pasos para garantizar tu participación:</h4>
      <div className="mb-2 text-center" style={{maxWidth: 600}}>
        <h4 className="mb-2">SUSCRIBITE AL NEWSLETTER</h4>
        <p>
          Necesitamos tu nombre y correo electrónico para enviarte:
          <ul style={{textAlign: 'left', display: 'inline-block'}}>
            <li>El enlace exclusivo del evento.</li>
            <li>Recordatorios para que no te lo pierdas.</li>
            <li>Materiales previos y posteriores para tu transformación.</li>
          </ul>
        </p>
      </div>
      <a
        className="btn btn-primary btn-lg"
        href="https://optin.myperfit.com/subscribe/guadalupesol/DGxCxAwe"
        target="_blank"
        rel="noopener noreferrer"
      >
        Quiero Participar
      </a>
    </div>
  );
}

export default PreNewsletter;