import React, { useState, useEffect } from 'react';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [newTestimonial, setNewTestimonial] = useState({
    nombre: '',
    texto: '',
    pais: ''
  });

  const fetchTestimonials = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/testimonials');
      if (!res.ok) throw new Error('Error al cargar los testimonios');
      const data = await res.json();
      setTestimonials(data);
    } catch (err) {
      console.error('Error:', err);
      setError('No se pudieron cargar los testimonios');
    }
  };

  const createTestimonial = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTestimonial),
      });
      
      if (!res.ok) throw new Error('Error al crear el testimonio');
      
      await fetchTestimonials();
      setNewTestimonial({
        nombre: '',
        texto: '',
        pais: ''
      });
    } catch (err) {
      setError('Error al crear el testimonio');
    }
  };

  const updateTestimonial = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3001/api/testimonials/${editingTestimonial.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingTestimonial),
      });

      if (!res.ok) throw new Error('Error al actualizar el testimonio');

      await fetchTestimonials();
      setEditingTestimonial(null);
    } catch (err) {
      setError('Error al actualizar el testimonio');
    }
  };

  const deleteTestimonial = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este testimonio?')) return;
    
    try {
      const res = await fetch(`http://localhost:3001/api/testimonials/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Error al eliminar el testimonio');

      await fetchTestimonials();
    } catch (err) {
      setError('Error al eliminar el testimonio');
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="testimonials">
      <h3>Testimonios</h3>
      
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Nuevo Testimonio</h5>
          <form onSubmit={createTestimonial}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                value={newTestimonial.nombre}
                onChange={(e) => setNewTestimonial({...newTestimonial, nombre: e.target.value})}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Testimonio"
                value={newTestimonial.texto}
                onChange={(e) => setNewTestimonial({...newTestimonial, texto: e.target.value})}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="País"
                value={newTestimonial.pais}
                onChange={(e) => setNewTestimonial({...newTestimonial, pais: e.target.value})}
              />
            </div>
            <button type="submit" className="btn btn-primary">Crear Testimonio</button>
          </form>
        </div>
      </div>

      {testimonials.map(testimonial => (
        <div key={testimonial.id} className="card mb-3">
          {editingTestimonial && editingTestimonial.id === testimonial.id ? (
            <div className="card-body">
              <form onSubmit={updateTestimonial}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    value={editingTestimonial.nombre || ''}
                    onChange={(e) => setEditingTestimonial({...editingTestimonial, nombre: e.target.value})}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Testimonio"
                    value={editingTestimonial.texto || ''}
                    onChange={(e) => setEditingTestimonial({...editingTestimonial, texto: e.target.value})}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="País"
                    value={editingTestimonial.pais || ''}
                    onChange={(e) => setEditingTestimonial({...editingTestimonial, pais: e.target.value})}
                  />
                </div>
                <button type="submit" className="btn btn-success me-2">Guardar</button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => setEditingTestimonial(null)}
                >
                  Cancelar
                </button>
              </form>
            </div>
          ) : (
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{testimonial.texto}</p>
                <footer className="blockquote-footer">
                  {testimonial.nombre} de <cite title="País">{testimonial.pais}</cite>
                </footer>
              </blockquote>
              <div className="mt-3">
                <button 
                  className="btn btn-warning me-2"
                  onClick={() => setEditingTestimonial(testimonial)}
                >
                  Editar
                </button>
                <button 
                  className="btn btn-danger"
                  onClick={() => deleteTestimonial(testimonial.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
