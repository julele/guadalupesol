import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación simple de email
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor ingresa un correo válido.');
      return;
    }
    setError('');
    // Aquí podrías hacer la petición a tu backend para guardar el email
    // Simulamos éxito y navegamos
    navigate('/acceso-grupo', { state: { subscribed: true } });
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Suscríbete al Newsletter</h2>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Tu correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        {error && <div className="text-danger mb-2">{error}</div>}
        <button className="btn btn-primary" type="submit">
          Suscribirme al newsletter
        </button>
      </form>
    </div>
  );
}

export default NewsletterSubscribe;