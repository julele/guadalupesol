import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Newsletter.css';

function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación de email
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      setSuccess('');
      return;
    }
    setError('');
    setSuccess('¡Gracias por suscribirte! Ahora puedes acceder al grupo exclusivo.');
    setTimeout(() => {
      navigate('/acceso-grupo', { state: { subscribed: true } });
    }, 1500);
  };

  return (
    <div className="container py-5 d-flex flex-column align-items-center justify-content-center" style={{minHeight: '70vh'}}>
      <h2 className="mb-4 text-center">¡Suscríbete a nuestro Newsletter!</h2>
      <p className="mb-4 text-center" style={{maxWidth: 500}}>
        Ingresa tu correo electrónico para recibir todas las novedades y el acceso exclusivo al grupo de WhatsApp del evento.
      </p>
      <form onSubmit={handleSubmit} className="newsletter-form w-100" style={{maxWidth: 400}}>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Tu correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        {error && <div className="text-danger mb-2">{error}</div>}
        {success && <div className="text-success mb-2">{success}</div>}
        <button className="btn btn-primary w-100" type="submit">
          Suscribirme al newsletter
        </button>
      </form>
    </div>
  );
}

export default NewsletterSubscribe;