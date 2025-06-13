import React, { useState, useEffect } from 'react';

function FeaturedPost() {
  const [featured, setFeatured] = useState(null);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    titulo: '',
    subtitulo: '',
    texto: '',
    link: ''
  });

  const fetchFeatured = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/featured');
      if (!res.ok) throw new Error('Error al cargar la publicación destacada');
      const data = await res.json();
      setFeatured(data);
    } catch (err) {
      console.error('Error:', err);
      setError('No se pudo cargar la publicación destacada');
    }
  };

  const createFeatured = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/api/featured', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Error al crear la publicación destacada');
      
      await fetchFeatured();
      setIsCreating(false);
      setFormData({ titulo: '', subtitulo: '', texto: '', link: '' });
    } catch (err) {
      setError('Error al crear la publicación destacada');
    }
  };

  const updateFeatured = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3001/api/featured/${featured.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Error al actualizar la publicación destacada');
      
      await fetchFeatured();
      setIsEditing(false);
    } catch (err) {
      setError('Error al actualizar la publicación destacada');
    }
  };

  const deleteFeatured = async () => {
    if (!window.confirm('¿Estás seguro de eliminar esta publicación destacada?')) return;
    
    try {
      const res = await fetch(`http://localhost:3001/api/featured/${featured.id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Error al eliminar la publicación destacada');

      setFeatured(null);
    } catch (err) {
      setError('Error al eliminar la publicación destacada');
    }
  };

  useEffect(() => {
    fetchFeatured();
  }, []);

  const renderForm = (onSubmit, submitText) => (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Título"
          value={formData.titulo}
          onChange={(e) => setFormData({...formData, titulo: e.target.value})}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Subtítulo"
          value={formData.subtitulo}
          onChange={(e) => setFormData({...formData, subtitulo: e.target.value})}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Texto"
          value={formData.texto}
          onChange={(e) => setFormData({...formData, texto: e.target.value})}
          rows="4"
        />
      </div>
      <div className="mb-3">
        <input
          type="url"
          className="form-control"
          placeholder="Enlace"
          value={formData.link}
          onChange={(e) => setFormData({...formData, link: e.target.value})}
        />
      </div>
      <button type="submit" className="btn btn-success me-2">{submitText}</button>
      <button 
        type="button" 
        className="btn btn-secondary"
        onClick={() => {
          setIsEditing(false);
          setIsCreating(false);
          setFormData({ titulo: '', subtitulo: '', texto: '', link: '' });
        }}
      >
        Cancelar
      </button>
    </form>
  );

  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!featured && !isCreating && !error) return (
    <div>
      <p>No hay publicación destacada</p>
      <button 
        className="btn btn-primary"
        onClick={() => setIsCreating(true)}
      >
        Crear Nueva
      </button>
    </div>
  );

  if (isCreating) {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Crear Nueva Publicación Destacada</h5>
          {renderForm(createFeatured, 'Crear')}
        </div>
      </div>
    );
  }

  return (
    <div className="featured-post">
      {isEditing ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Editar Publicación Destacada</h5>
            {renderForm(updateFeatured, 'Actualizar')}
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{featured.titulo}</h5>
            {featured.subtitulo && (
              <h6 className="card-subtitle mb-2 text-muted">{featured.subtitulo}</h6>
            )}
            <p className="card-text">{featured.texto}</p>
            {featured.link && (
              <a 
                href={featured.link} 
                className="btn btn-primary me-2" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Leer más
              </a>
            )}
            <button 
              className="btn btn-warning me-2"
              onClick={() => {
                setFormData(featured);
                setIsEditing(true);
              }}
            >
              Editar
            </button>
            <button 
              className="btn btn-danger"
              onClick={deleteFeatured}
            >
              Eliminar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeaturedPost;
