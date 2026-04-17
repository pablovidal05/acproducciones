"use client";

import React from "react";

const servicios = [
  {
    id: "eventos-corporativos",
    titulo: "Eventos\nCorporativos",
    descripcion: "Diseñamos y producimos desde cero cada experiencia.",
    imagen: "/images/service-eventos.jpg",
  },
  {
    id: "experiencias-de-marca",
    titulo: "Experiencias de Marca",
    descripcion: "Activaciones y experiencias que conectan tu marca con las personas de forma memorable.",
    imagen: "/images/service-produccion.jpg",
  },
];

export default function ServiciosSection() {
  return (
    <section id="servicios" className="servicios-section">
      <div className="servicios-inner">

        {/* Label superior izquierda */}
        <p className="servicios-label">Servicios</p>

        {/* Título display */}
        <h2 className="servicios-titulo">
          Creamos experiencias<br />que no se olvidan.
        </h2>

        {/* Grid de cards */}
        <div className="servicios-grid">
          {servicios.map((s) => (
            <div key={s.id} className="servicios-card" id={`servicio-${s.id}`}>
              {/* Imagen de fondo con zoom en hover */}
              <div
                className="servicios-card-img"
                style={{ backgroundImage: `url(${s.imagen})` }}
                aria-hidden="true"
              />

              {/* Overlay gradiente inferior */}
              <div className="servicios-card-overlay" aria-hidden="true" />

              {/* Texto abajo izquierda */}
              <div className="servicios-card-content">
                <h3 className="servicios-card-titulo">
                  {s.titulo.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < s.titulo.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <p className="servicios-card-desc">{s.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
