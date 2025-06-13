import React, { useEffect, useRef, useState } from 'react';
import Parallax from 'parallax-js';
import './RSVP.css';

function RSVP() {
  const sceneRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '',
    message: ''
  });

  useEffect(() => {
    if (sceneRef.current) {
      const parallaxInstance = new Parallax(sceneRef.current, {
        relativeInput: true,
      });

      return () => parallaxInstance.disable();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="ww-section ww-rsvp-detail" id="rsvp" ref={sceneRef}>
      <div className="parallax-bg" data-depth="0.2" style={{
        backgroundImage: `url('/images/rsvp-img.jpg')`,
      }}></div>
      <div className="container position-relative">
        <div className="col text-center">
          <h2 className="h1 ww-title pb-3" data-aos="zoom-in-down" data-aos-duration="1000">Join Our Party</h2>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input 
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input 
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <select 
                    className="form-control"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Number of Guests</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea 
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RSVP;