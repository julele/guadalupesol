import React, { useState, useEffect } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [editingPost, setEditingPost] = useState(null);
  const [newPost, setNewPost] = useState({
    titulo: '',
    subtitulo: '',
    texto: '',
    imagen_url: '',
    fecha_inicio: '',
    fecha_fin: ''
  });

  // Obtener todos los posts
  const fetchPosts = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/posts');
      if (!res.ok) throw new Error('Error al cargar los posts');
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error('Error:', err);
      setError('No se pudieron cargar las publicaciones');
    }
  };

  // Crear nuevo post
  const createPost = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Error al crear el post');
      }
      
      await fetchPosts();
      setNewPost({
        titulo: '',
        subtitulo: '',
        texto: '',
        imagen_url: '',
        fecha_inicio: '',
        fecha_fin: ''
      });
    } catch (err) {
      console.error('Error detallado:', err);
      setError(err.message || 'Error al crear la publicación');
    }
  };

  // Actualizar post
  const updatePost = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3001/api/posts/${editingPost.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingPost),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Error al actualizar el post');
      }

      await fetchPosts();
      setEditingPost(null);
      setError(null); // Limpiar cualquier error previo
    } catch (err) {
      console.error('Error detallado:', err);
      setError(err.message || 'Error al actualizar la publicación');
    }
  };

  // Eliminar post
  const deletePost = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar esta publicación?')) return;
    
    try {
      const res = await fetch(`http://localhost:3001/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Error al eliminar el post');

      await fetchPosts();
    } catch (err) {
      setError('Error al eliminar la publicación');
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="posts">
      <h3>Publicaciones</h3>
      
      {/* Formulario para crear nuevo post */}
      <div className="card mb-4">
    <div className="card-body">
      <h5 className="card-title">Nueva Publicación</h5>
      <form onSubmit={createPost}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Título"
            value={newPost.titulo}
            onChange={(e) => setNewPost({...newPost, titulo: e.target.value})}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Subtítulo"
            value={newPost.subtitulo}
            onChange={(e) => setNewPost({...newPost, subtitulo: e.target.value})}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Texto"
            value={newPost.texto}
            onChange={(e) => setNewPost({...newPost, texto: e.target.value})}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="url"
            className="form-control"
            placeholder="URL de la imagen"
            value={newPost.imagen_url}
            onChange={(e) => setNewPost({...newPost, imagen_url: e.target.value})}
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            value={newPost.fecha_inicio}
            onChange={(e) => setNewPost({...newPost, fecha_inicio: e.target.value})}
            required
          />
          <small className="form-text text-muted">Fecha de inicio</small>
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            value={newPost.fecha_fin}
            onChange={(e) => setNewPost({...newPost, fecha_fin: e.target.value})}
            required
          />
          <small className="form-text text-muted">Fecha de fin</small>
        </div>
        <button type="submit" className="btn btn-primary">Crear Publicación</button>
      </form>
    </div>
  </div>

      {/* Lista de posts */}
      {posts.length === 0 ? (
        <div>No hay publicaciones disponibles</div>
      ) : (
        posts.map(post => (
          <div key={post.id} className="card mb-3">
            {editingPost && editingPost.id === post.id ? (
              <div className="card-body">
                <form onSubmit={updatePost}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Título"
                      value={editingPost.titulo}
                      onChange={(e) => setEditingPost({...editingPost, titulo: e.target.value})}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subtítulo"
                      value={editingPost.subtitulo || ''}
                      onChange={(e) => setEditingPost({...editingPost, subtitulo: e.target.value})}
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Texto"
                      value={editingPost.texto || ''}
                      onChange={(e) => setEditingPost({...editingPost, texto: e.target.value})}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="url"
                      className="form-control"
                      placeholder="URL de la imagen"
                      value={editingPost.imagen_url || ''}
                      onChange={(e) => setEditingPost({...editingPost, imagen_url: e.target.value})}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="date"
                      className="form-control"
                      value={editingPost.fecha_inicio || ''}
                      onChange={(e) => setEditingPost({...editingPost, fecha_inicio: e.target.value})}
                      required
                    />
                    <small className="form-text text-muted">Fecha de inicio</small>
                  </div>
                  <div className="mb-3">
                    <input
                      type="date"
                      className="form-control"
                      value={editingPost.fecha_fin || ''}
                      onChange={(e) => setEditingPost({...editingPost, fecha_fin: e.target.value})}
                      required
                    />
                    <small className="form-text text-muted">Fecha de fin</small>
                  </div>
                  <button type="submit" className="btn btn-success me-2">Guardar</button>
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => setEditingPost(null)}
                  >
                    Cancelar
                  </button>
                </form>
              </div>
            ) : (
              <div className="card-body">
                <h5 className="card-title">{post.titulo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{post.subtitulo}</h6>
                <p className="card-text">{post.texto}</p>
                {post.imagen_url && (
                  <img 
                    src={post.imagen_url} 
                    alt={post.titulo}
                    className="img-fluid mb-3"
                    style={{ maxHeight: '200px' }}
                  />
                )}
                <div>
                  <small className="text-muted">
                    Desde: {new Date(post.fecha_inicio).toLocaleDateString()} 
                    {' - '} 
                    Hasta: {new Date(post.fecha_fin).toLocaleDateString()}
                  </small>
                </div>
                <div className="mt-3">
                  <button 
                    className="btn btn-warning me-2"
                    onClick={() => setEditingPost(post)}
                  >
                    Editar
                  </button>
                  <button 
                    className="btn btn-danger"
                    onClick={() => deletePost(post.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Posts;
