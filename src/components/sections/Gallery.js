import React, { useEffect } from 'react';
import $ from 'jquery';
import 'ekko-lightbox';
import 'ekko-lightbox/dist/ekko-lightbox.css';
import './Gallery.css';

function Gallery() {
  useEffect(() => {
    // Asegurarnos que jQuery y ekkoLightbox están disponibles
    if ($ && $.fn.ekkoLightbox) {
      $(document).on('click', '[data-toggle="lightbox"]', function(e) {
        e.preventDefault();
        $(this).ekkoLightbox();
      });
    }
  }, []);

  return (
    <div className="ww-section bg-light" id="gallery">
      <div className="ww-photo-gallery">
        <div className="container">
          <h2 className="h1 text-center pb-3 ww-title" data-aos="zoom-in-down" data-aos-duration="1000">Photo Gallery</h2>
          <div className="col-md-12 text-center">
            <div className="row">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div className="col-md-4 mb-4" key={num}>
                  <a 
                    href={`/images/gallery-pic-${num}.jpg`}
                    data-toggle="lightbox" 
                    data-gallery="wedding-gallery"
                    className="gallery-link"
                  >
                    <img 
                      className="img-fluid" 
                      src={`/images/gallery-pic-${num}.jpg`}
                      alt={`Gallery ${num}`}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;