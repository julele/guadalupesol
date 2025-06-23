import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function WhatsappAccess() {
  const location = useLocation();
  const navigate = useNavigate();

  // Solo permite acceso si viene de la suscripción
  if (!location.state || !location.state.subscribed) {
    navigate('/suscribirme');
    return null;
  }

  return (
    <div className="container py-5 d-flex flex-column align-items-center justify-content-center" style={{minHeight: '70vh'}}>
      <h2 className="mb-4 text-center">¡Ya eres parte de nuestro Newsletter!</h2>
      <p className="mb-4 text-center" style={{maxWidth: 500}}>
        Ahora puedes unirte a nuestro grupo de WhatsApp para recibir información exclusiva, recordatorios y acompañamiento durante el evento.
      </p>
      <a
        href="https://chat.whatsapp.com/tu-enlace-de-invitacion"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success btn-lg mb-3"
      >
        Unirme al grupo de WhatsApp
      </a>
      <div className="alert alert-info mt-3" style={{maxWidth: 500}}>
        También recibirás un correo con toda la información importante. ¡Revisa tu bandeja de entrada y spam!
      </div>
    </div>
  );
}

export default WhatsappAccess;