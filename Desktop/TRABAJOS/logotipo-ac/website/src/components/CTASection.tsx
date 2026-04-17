import React from "react";

export default function CTASection() {
  return (
    <section id="contacto" className="cta-section">
      <div className="cta-inner">
        <div className="cta-card">

          {/* Decorative blob */}
          <div className="cta-blob" aria-hidden="true" />

          {/* Left: copy */}
          <div className="cta-content">
            <p className="cta-eyebrow">¿Tienes un evento en mente?</p>
            <h2 className="cta-heading">
              Alfa Corporativo,<br />
              tu aliado en cada<br />
              evento.
            </h2>
            <p className="cta-body">
              Desde la idea hasta el último detalle. Nos movemos a donde tú necesites y ponemos toda nuestra capacidad creativa y técnica al servicio de tu próxima experiencia corporativa.
            </p>
            <a
              href="https://wa.me/"
              className="cta-btn"
              id="cta-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotizar ahora
            </a>
          </div>

          {/* Right: image */}
          <div className="cta-img-wrap">
            <img
              src="/images/cta-evento.jpg"
              alt="Producción de eventos corporativos premium"
              className="cta-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
