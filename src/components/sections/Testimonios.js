import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Testimonios.css';

function Testimonios() {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Inicializar Owl Carousel después de que el componente se monte
    const $carousel = $(carouselRef.current);
    
    if ($carousel.length) {
      $carousel.owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        navText: [
          '<i class="fas fa-chevron-left"></i>',
          '<i class="fas fa-chevron-right"></i>'
        ],
        dots: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      });
    }

    // Cleanup al desmontar el componente
    return () => {
      if ($carousel.length) {
        $carousel.trigger('destroy.owl.carousel');
      }
    };
  }, []);

  const people = [
    {
      name: 'Carmen de España',
      role: 'Astrologa y profesora de yoga',
      image: 'images/test1.jpg',
      description: '“Cuando empecé Más Viva, le pregunté a Guadalupe si realmente era posible manifestar una pareja y atraer todo lo que deseaba. En la semana 2 del programa ya estaba atrayendo más consultas y cobrando mejor por mis servicios. Y al terminar el programa, manifesté al hombre con el que tanto soñé. Su acompañamiento fue clave en todo el proceso.”'
    },
    {
      name: 'Mariangela P. de Venezuela',
      role: 'Mentora de comunicaciones estratégicas',
      image: 'images/test2.jpg',
      description: '“Guada me ayudo a crear pasos concretos para llevar a tierra toda mi energía creativa y materializar mi sueño de lanzar mis clases de danza. Gracias a +VIVA hoy Madhu Espacio en Movimiento es una realidad”'
    },
    {
      name: 'Naty de Argentina',
      role: 'Madre de 2 nenas y futura cosmetóloga',
      image: 'images/test3.jpg',
      description: '“Las mentorías de Guadalupe me ayudaron a ganar confianza en mí misma, a entender que si otras pudieron yo también puedo. Hoy tengo claridad en mis sueños y la seguridad de que puedo ir por ellos gracias al paso a paso que trabaje con ella.”'
    },
    {
      name: 'Mica V. de Argentina',
      role: 'Madre y emprendedora digital',
      image: 'images/test4.jpg',
      description: '“+VIVA me ayudo a tener claridad en lo que yo quiero hacer y a reconocer como explotar todo el potencial que tengo dentro mío. Hoy me conozco más que nunca y tengo certeza de la vida que deseo crear.”'
    },
    {
      name: 'Ana A. de Venezuela',
      role: 'Mentora de negocios & Bienestar',
      image: 'images/test5.jpg',
      description: '“Desde el programa + VIVA de Guadalupe Sol puedo liderar mi vida desde la autocompasión, comprendiéndome, entendiéndome teniendo un horizonte claro de lo que soy, lo que quiero ser y del camino que tengo que recorrer para llegar ahí.”'
    }
  ];

  return (
    <div className="ww-section" id="people">
      <div className="container ww-couple-friends">
        <h2 className="h1 text-center pt-3 ww-title" data-aos="zoom-in-down" data-aos-duration="1000">
          TESTIMONIOS
        </h2>
        <div className="owl-carousel owl-theme" ref={carouselRef}>
          {people.map((person, index) => (
            <div key={index} className="item">
              <div className="card d-block mb-3">
                <img className="card-img-top redondeado" src={person.image} alt={person.name} />
                <div className="card-body text-center">
                  <div className="h5">{person.name}</div>
                  <p className="mb-0">{person.role}</p>
                  <p className="text-muted">{person.description}</p>
                  <div className="ww-social-links">
                    <a className="btn btn-link" href="#"><i className="fab fa-facebook"></i></a>
                    <a className="btn btn-link" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-link" href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonios;