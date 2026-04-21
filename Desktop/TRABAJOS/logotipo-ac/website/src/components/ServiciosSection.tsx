"use client";

import React from "react";

const servicios = [
  {
    id: "eventos-corporativos",
    emoji: "📅",
    titulo: "Eventos Corporativos",
    descripcion: "Creamos experiencias para conectar equipos y celebrar logros",
    items: [
      { emoji: "🎉", label: "Celebraciones empresariales" },
      { emoji: "🚀", label: "Lanzamientos" },
      { emoji: "🤝", label: "Convenciones" },
      { emoji: "☕", label: "Reuniones corporativas" },
    ],
    href: "#galeria",
  },
  {
    id: "experiencias-de-marca",
    emoji: "📣",
    titulo: "Experiencias de Marca",
    descripcion: "Activamos tu marca con impacto real",
    items: [
      { emoji: "🔥", label: "Activaciones y promotores" },
      { emoji: "🖥️", label: "Stands personalizados" },
      { emoji: "🎯", label: "Experiencias corporativas" },
    ],
    href: "#galeria",
  },
];

export default function ServiciosSection() {
  return (
    <section id="que-hacemos" className="servicios-section">
      <div className="servicios-inner">

        {/* Heading centrado */}
        <div className="servicios-heading-wrap">
          <p className="servicios-eyebrow">NUESTROS</p>
          <h2 className="servicios-titulo-gold">SERVICIOS</h2>
        </div>

        {/* Grid de cards */}
        <div className="servicios-grid-new">
          {servicios.map((s) => (
            <div key={s.id} className="servicios-card-new" id={`servicio-${s.id}`}>

              {/* Emoji principal */}
              <div className="servicios-card-emoji" aria-hidden="true">{s.emoji}</div>

              {/* Título y descripción */}
              <h3 className="servicios-card-titulo-new">{s.titulo}</h3>
              <p className="servicios-card-desc-new">{s.descripcion}</p>

              {/* Lista de items */}
              <ul className="servicios-card-list">
                {s.items.map((item) => (
                  <li key={item.label} className="servicios-card-list-item">
                    <span aria-hidden="true">{item.emoji}</span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href={s.href} className="servicios-card-btn">
                Ver más
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
