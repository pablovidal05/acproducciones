"use client";

import React from "react";

const servicios = [
  {
    id: "eventos-corporativos",
    titulo: "Eventos Corporativos",
    descripcion: "Creamos experiencias para conectar equipos y celebrar logros",
    items: [
      { label: "Celebraciones por años de servicio" },
      { label: "Lanzamientos" },
      { label: "Aniversarios empresariales" },
      { label: "Fiestas empresariales" },
      { label: "Experiencias corporativas personalizadas" },
      { label: "Coffees, desayunos, almuerzos, cocteles, cenas" },
    ],
    href: "#galeria",
  },
  {
    id: "activaciones-de-marca",
    titulo: "Activaciones de Marca",
    descripcion: "Activamos tu marca con impacto real",
    items: [
      { label: "Promotores / staff / BTL" },
      { label: "Construcción e implementación de stand" },
      { label: "Activaciones en punto de venta" },
      { label: "Experiencias interactivas" },
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
                  <li key={item.label} className="servicios-card-list-item flex items-start gap-2">
                    <span aria-hidden="true" className="text-[#CCA43B] font-bold mt-0.5">•</span>
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
