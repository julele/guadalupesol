import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

function WhatsappAccess() {
  const location = useLocation();

  // Solo permite acceso si viene de la suscripción
  // if (!location.state || !location.state.subscribed) {
  //   return <Navigate to="/suscribirme" replace />;
  // }

  return (
    <div className="container py-5" style={{minHeight: '70vh'}}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-7 d-flex flex-column align-items-center mb-4 mb-md-0">
          <h2 className="text-center">¡Gracias por registrarte!</h2>
          <h4 className="text-center">
            Ahora, <b>unite al grupo privado de WhatsApp</b> donde vas a recibir:
          </h4>
          <ul style={{textAlign: 'left', display: 'inline-block', fontSize: '1.2rem'}}>
            <li>El acceso directo al evento.</li>
            <li>Contenido exclusivo.</li>
            <li>Recursos complementarios y recordatorios.</li>
          </ul>
          <a
            href="https://chat.whatsapp.com/C042POcSZAmBGb3ALjZ0nv?mode=r_c"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-lg mb-3"
          >
            Unirme al grupo de WhatsApp
          </a>
        </div>
        <div className="col-md-5 d-flex flex-column align-items-center">
          <div className="alert alert-info w-100" style={{maxWidth: 500}}>
            <h6>PREGUNTAS FRECUENTES</h6>
            <h6><b>¿Por qué tengo que hacer ambos pasos?</b></h6>
            Porque el evento es gratuito pero exclusivo, y queremos asegurarnos de que te llegue todo sin fallas.
            <h6><b>¿Qué pasa si no me uno al grupo de WhatsApp?</b></h6>
            No vas a poder ingresar al evento. Es nuestro único canal de acceso.
            <h6><b>¿Puedo salir del grupo después?</b></h6>
            Sí, claro. Después de la llamada de zoom finaliza el evento.
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatsappAccess;