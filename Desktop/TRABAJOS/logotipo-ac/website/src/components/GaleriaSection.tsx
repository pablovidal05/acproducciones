"use client";

import React, { useState } from "react";

type Category = "todos" | "corporativo" | "marca";

interface GaleriaItem {
  id: string;
  titulo: string;
  categoria: Exclude<Category, "todos">;
  imagen: string;
  /** CSS grid span: "tall" = 2 rows, "wide" = 2 cols, "normal" = 1×1 */
  span?: "tall" | "wide" | "normal";
}

const items: GaleriaItem[] = [
  {
    id: "gala-2024",
    titulo: "Gala Anual 2024",
    categoria: "corporativo",
    imagen: "/images/galeria_gala_corporativa.jpg",
    span: "normal",
  },
  {
    id: "conferencia-liderazgo",
    titulo: "Conferencia Liderazgo",
    categoria: "corporativo",
    imagen: "/images/galeria_conferencia.jpg",
    span: "tall",
  },
  {
    id: "activacion-brand",
    titulo: "Activación de Marca",
    categoria: "marca",
    imagen: "/images/galeria_activacion_marca.jpg",
    span: "normal",
  },
  {
    id: "lanzamiento-producto",
    titulo: "Lanzamiento de Producto",
    categoria: "marca",
    imagen: "/images/galeria_lanzamiento.jpg",
    span: "tall",
  },
  {
    id: "cocktail-rooftop",
    titulo: "Cocktail Rooftop",
    categoria: "corporativo",
    imagen: "/images/galeria_outdoor_evento.jpg",
    span: "wide",
  },
  {
    id: "experiencia-inmersiva",
    titulo: "Experiencia Inmersiva",
    categoria: "marca",
    imagen: "/images/galeria_experiencia_inmersiva.jpg",
    span: "normal",
  },
  {
    id: "cumbre-ejecutiva",
    titulo: "Cumbre Ejecutiva",
    categoria: "corporativo",
    imagen: "/images/galeria_outdoor_evento.jpg",
    span: "normal",
  },
  {
    id: "brand-journey",
    titulo: "Brand Journey",
    categoria: "marca",
    imagen: "/images/galeria_activacion_marca.jpg",
    span: "normal",
  },
];

const tabs: { key: Category; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "corporativo", label: "Eventos Corporativos" },
  { key: "marca", label: "Experiencia de Marca" },
];

export default function GaleriaSection() {
  const [activo, setActivo] = useState<Category>("todos");

  const filtered =
    activo === "todos" ? items : items.filter((i) => i.categoria === activo);

  return (
    <section id="galeria" className="galeria-section">
      <div className="galeria-inner">

        {/* Header */}
        <div className="galeria-header">
          <div>
            <p className="galeria-label">(Galería)</p>
            <h2 className="galeria-titulo">Nuestro trabajo</h2>
          </div>

          {/* Tabs */}
          <nav className="galeria-tabs" aria-label="Filtros de galería">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                id={`tab-${tab.key}`}
                className={`galeria-tab${activo === tab.key ? " galeria-tab--active" : ""}`}
                onClick={() => setActivo(tab.key)}
                aria-pressed={activo === tab.key}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Grid */}
        <div className="galeria-grid">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`galeria-item galeria-item--${item.span ?? "normal"}`}
            >
              <div className="galeria-img-wrap">
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className="galeria-img"
                  loading="lazy"
                />
              </div>
              <p className="galeria-caption">{item.titulo}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
