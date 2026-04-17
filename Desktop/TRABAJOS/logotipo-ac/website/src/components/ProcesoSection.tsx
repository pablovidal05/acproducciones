"use client";

import React from "react";

const etapas = [
  {
    numero: "01",
    nombre: "Reuniones Iniciales",
    subtexto:
      "Escuchamos tu visión, objetivos y presupuesto para diseñar la estrategia correcta.",
  },
  {
    numero: "02",
    nombre: "Preproducción",
    subtexto:
      "Planificamos cada detalle: concepto, logística, proveedores y cronograma.",
  },
  {
    numero: "03",
    nombre: "Producción en Terreno",
    subtexto:
      "Ejecutamos con precisión. Nuestro equipo multidisciplinario se encarga de todo el día del evento.",
  },
];

/*
  Layout maths (desktop, 1200px wide container, 3 equal cols = 400px each):
  ─────────────────────────────────────────────────────────────────────────
  Each stage paddingTop = calc(i × 7.5rem + 64px)
    1rem = 16px → step = 120px
    Stage 01: calc(0   + 64px) = 64px
    Stage 02: calc(120 + 64px) = 184px
    Stage 03: calc(240 + 64px) = 304px

  Cascade has no extra padding-top (reset to 0) — all offset is in each stage.
  Dot Y in SVG (cascade y=0 origin):
    Dot1: y = 64  + 5  = 69   (paddingTop + half-dot)
    Dot2: y = 184 + 5  = 189
    Dot3: y = 304 + 5  = 309

  Arc peaks roughly 70px above each origin dot:
    Arc1 peak: y ≈ 0   (top of viewBox)
    Arc2 peak: y ≈ 120

  viewBox = "0 0 1200 420"  (covers dot3 y=309 + text ~110px)
*/

export default function ProcesoSection() {
  return (
    <section id="proceso" className="proceso-section">
      <div className="proceso-inner">

        {/* Display title */}
        <h2 className="proceso-titulo">Nuestro proceso</h2>

        {/* Cascade container */}
        <div className="proceso-cascade">

          {/* ── SVG overlay ── */}
          <svg
            className="proceso-svg"
            viewBox="0 0 1200 420"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* 01 → 02  dot1 y=69, dot2 y=189 | peak y≈0 */}
            <path
              d="M 12 69 C 80 0, 330 0, 412 175"
              fill="none"
              stroke="#b0a898"
              strokeWidth="1.8"
              strokeDasharray="6 7"
              strokeLinecap="round"
            />
            {/* 02 → 03  dot2 y=189, dot3 y=309 | peak y≈120 */}
            <path
              d="M 412 169 C 480 120, 730 100, 806 269"
              fill="none"
              stroke="#b0a898"
              strokeWidth="1.8"
              strokeDasharray="6 7"
              strokeLinecap="round"
            />
          </svg>

          {/* Stages */}
          {etapas.map((etapa, i) => (
            <div
              key={etapa.numero}
              className="proceso-etapa"
              style={{ paddingTop: `calc(${i * 7.5}rem + 96px)` }}
            >
              <div className="proceso-dot" />
              <h3 className="proceso-nombre">
                <span className="proceso-num">({etapa.numero})</span>{" "}
                {etapa.nombre}
              </h3>
              <p className="proceso-subtexto">{etapa.subtexto}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
