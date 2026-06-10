“use client”;

import React, { useState, useEffect, useCallback } from “react”;
import { getGaleriaItems } from “@/lib/galeriaService”;
import { GaleriaItem as GaleriaItemType } from “@/lib/types”;

type Category = “todos” | “corporativo” | “marca”;

const tabs: { key: Category; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "corporativo", label: "Eventos Corporativos" },
  { key: "marca", label: "Experiencia de Marca" },
];

/* ── Carrusel interno del modal ────────────────────────────── */
function ModalCarrusel({ imagenes, titulo }: { imagenes: string[]; titulo: string }) {
  const [current, setCurrent] = useState(0);
  const total = imagenes.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  // Navegación con teclado (flechas)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <div className="modal-carrusel">
      {/* Imagen activa */}
      <div className="modal-carrusel-track">
        {imagenes.map((src, i) => (
          <div
            key={i}
            className="modal-carrusel-slide"
            style={{ transform: `translateX(${(i - current) * 100}%)` }}
            aria-hidden={i !== current}
          >
            {src ? (
              src.endsWith(".mp4") || src.endsWith(".webm") ? (
                <video src={src} className="modal-carrusel-img" autoPlay muted loop playsInline />
              ) : (
                <img src={src} alt={`${titulo} – imagen ${i + 1}`} className="modal-carrusel-img" />
              )
            ) : (
              <div className="modal-carrusel-placeholder">
                <span>📷</span>
                <span>Imagen {i + 1}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controles – solo si hay más de 1 */}
      {total > 1 && (
        <>
          <button className="modal-carrusel-btn modal-carrusel-btn--prev" onClick={prev} aria-label="Imagen anterior">‹</button>
          <button className="modal-carrusel-btn modal-carrusel-btn--next" onClick={next} aria-label="Imagen siguiente">›</button>
          {/* Dots */}
          <div className="modal-carrusel-dots">
            {imagenes.map((_, i) => (
              <button
                key={i}
                className={`modal-carrusel-dot${i === current ? " modal-carrusel-dot--active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ── Modal ─────────────────────────────────────────────────── */
function GaleriaModal({ item, onClose }: { item: GaleriaItemType; onClose: () => void }) {
  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Todas las imágenes del carrusel: principal + extras (o 2 placeholders vacíos)
  const todasLasImagenes = [
    item.imagen,
    ...(item.imagenesExtra ?? ["", ""]),
  ];

  return (
    <div
      className="galeria-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.titulo}
    >
      <div className="galeria-modal" onClick={(e) => e.stopPropagation()}>

        {/* Botón cerrar */}
        <button className="galeria-modal-close" onClick={onClose} aria-label="Cerrar">✕</button>

        {/* Carrusel – lado izquierdo */}
        <div className="galeria-modal-img-main">
          <ModalCarrusel imagenes={todasLasImagenes} titulo={item.titulo} />
        </div>

        {/* Info – lado derecho */}
        <div className="galeria-modal-info">
          <h3 className="galeria-modal-titulo">{item.titulo}</h3>

          {/* Descripción extensa si existe, si no la bajada corta */}
          {item.descripcion ? (
            <div className="galeria-modal-descripcion">
              <p className="galeria-modal-desc-intro">{item.descripcion.intro}</p>
              <ul className="galeria-modal-bullets">
                {item.descripcion.bullets.map((b, i) => (
                  <li key={i} className="galeria-modal-bullet">
                    <span className="galeria-modal-bullet-check">✔️</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : item.bajada ? (
            <p className="galeria-modal-bajada">{item.bajada}</p>
          ) : null}
        </div>

      </div>
    </div>
  );
}

/* ── Sección principal ─────────────────────────────────────── */
export default function GaleriaSection() {
  const [activo, setActivo] = useState<Category>("todos");
  const [selected, setSelected] = useState<GaleriaItemType | null>(null);
  const [items, setItems] = useState<GaleriaItemType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await getGaleriaItems();
        setItems(data);
      } catch (error) {
        console.error("Error loading galeria items:", error);
      } finally {
        setLoading(false);
      }
    };

    loadItems();
  }, []);

  const filtered = activo === "todos" ? items : items.filter((i) => i.categoria === activo);

  if (loading) {
    return (
      <section id="galeria" className="galeria-section">
        <div className="galeria-inner">
          <p className="galeria-label">(Galería)</p>
          <h2 className="galeria-titulo">Cargando proyectos...</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="galeria" className="galeria-section">
      <div className="galeria-inner">

        {/* Header */}
        <div className="galeria-header">
          <div>
            <p className="galeria-label">(Galería)</p>
            <h2 className="galeria-titulo">Algunas experiencias que hemos creado</h2>
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
              onClick={() => setSelected(item)}
            >
              <div className="galeria-img-wrap">
                {item.imagen.endsWith(".mp4") || item.imagen.endsWith(".webm") ? (
                  <video
                    src={item.imagen}
                    className="galeria-img"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    className="galeria-img"
                    width={500}
                    height={500}
                    loading="lazy"
                  />
                )}
                <div className="galeria-img-overlay" aria-hidden="true">
                  <span className="galeria-img-overlay-icon">⊕</span>
                </div>
              </div>
              <p className="galeria-caption">{item.titulo}</p>
              {item.bajada && <p className="galeria-bajada">{item.bajada}</p>}
            </div>
          ))}
        </div>

      </div>

      {selected && (
        <GaleriaModal item={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
