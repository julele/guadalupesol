import React from 'react';
import './Events.css';
function Events() {
  return (
    <div className="ww-section bg-light" id="events">
      <div className="container ww-wedding-event">
        <h2 className="h1 text-center pb-3 ww-title" data-aos="zoom-in-down" data-aos-duration="1000"> </h2>
        <div className="row">
          <div className="col-12">
            <div className="my-3">
              <div className="h3">¿QUÉ VAS A VIVIR EN ESTOS 3 DÍAS?</div>
              <br/>
              <div className="h5">Día 1 | El Derecho a Desear</div>
              <p>Un audio para reconectar con tus deseos profundos. Vas a identificar qué querés de verdad (más allá del deber o la culpa).</p>
              <div className="h5">Día 2 | Merecer es Elegirte</div>
              <p>Un audio para comprender por qué te cuesta recibir, cómo abriste bloqueos y cómo activar tu merecimiento desde el amor propio.</p>
              <div className="h5">Día 3 | Clase en Vivo conmigo – 9 de julio 19hs por zoom</div>
              <p>Una clase transformadora donde integramos todo y te comparto cómo continuar este camino en mi próximo taller <b>Abundante por Derecho</b> donde vas a trabajar conmigo en vivo para desbloquear tu merecimiento y recibir sin límites.<br/>
              Este evento es una experiencia profunda, íntima y amorosa para mujeres que están listas para elegir otra realidad.</p>
            </div>
          </div>

          {/* Imagen que aparecerá entre los textos en móviles */}
          <div className="col-md-5 col-sm-12 order-md-last">
            <div className="my-3">
              <img className="img-fluid redondeado" src="images/wedding-party.jpg" alt="Guadalupe Sol"/>
            </div>
          </div>

          <div className="col-md-7 col-sm-12">
            <div className="my-3">
              <div className="h3">¿QUIÉN TE GUÍA?</div>
              <p>¡Hola! Soy Guadalupe Sol Vázquez Zarzoso, Geóloga de profesión y mentora en visión de vida por pasión y propósito, viajera incansable, terapeuta holística y guía de mujeres.</p>
              <p><i>Fundé Más Viva</i> mi programa de mentoría grupal para acompañar a mujeres que saben que están hechas para algo más.<br/>A través de la conciencia, el amor propio, el poder personal y la acción alineada, acompaño a que diseñen y manifiesten una vida que las represente de verdad.</p>
              <p>No vengo a enseñarte a merecer, vengo a recordarte que ya lo hacés pero necesitas recordar como hacerlo. Solo tenés que darte permiso de tenerlo todo.</p>
              <div className="h4">¿Te espero el 7, 8 y 9 de julio.?</div>
              <div className="h5">Vamos a encender juntas la chispa que activa TODO lo que ya es tuyo.</div>
              <button className="btn btn-primary btn-lg mt-4">
                ¡QUIERO INSCRIBIRME!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Events;