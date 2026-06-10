'use client';

import React, { useState, useEffect } from 'react';
import { getGaleriaItems } from '@/lib/galeriaService';
import { GaleriaItem } from '@/lib/types';

type Category = 'todos' | 'corporativo' | 'marca';

const tabs: { key: Category; label: string }[] = [
  { key: 'todos', label: 'Todos' },
  { key: 'corporativo', label: 'Eventos Corporativos' },
  { key: 'marca', label: 'Experiencia de Marca' },
];

function ModalCarrusel({ imagenes, titulo }: { imagenes: string[]; titulo: string }) {
  const [current, setCurrent] = useState(0);
  const total = imagenes.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className="modal-carrusel">
      <div className="modal-carrusel-track">
        {imagenes.map((src, i) => (
          <div
            key={i}
            className="modal-carrusel-slide"
            style={{ transform: `translateX(${(i - current) * 100}%)` }}
          >
            {src ? (
              src.endsWith('.mp4') || src.endsWith('.webm') ? (
                <video src={src} className="modal-carrusel-img" autoPlay muted loop playsInline />
              ) : (
                <img src={src} alt={`${titulo} imagen ${i + 1}`} className="modal-carrusel-img" />
              )
            ) : (
              <div className="modal-carrusel-placeholder">
                <span>Imagen {i + 1}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {total > 1 && (
        <>
          <button className="modal-carrusel-btn modal-carrusel-btn--prev" onClick={prev}>
            {String.fromCharCode(8249)}
          </button>
          <button className="modal-carrusel-btn modal-carrusel-btn--next" onClick={next}>
            {String.fromCharCode(8250)}
          </button>
          <div className="modal-carrusel-dots">
            {imagenes.map((_, i) => (
              <button
                key={i}
                className={`modal-carrusel-dot${i === current ? ' modal-carrusel-dot--active' : ''}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function GaleriaModal({ item, onClose }: { item: GaleriaItem; onClose: () => void }) {
  const todasLasImagenes = [item.imagen, ...(item.imagenesExtra ?? ['', ''])];

  return (
    <div
      className="galeria-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="galeria-modal" onClick={(e) => e.stopPropagation()}>
        <button className="galeria-modal-close" onClick={onClose}>
          X
        </button>

        <div className="galeria-modal-img-main">
          <ModalCarrusel imagenes={todasLasImagenes} titulo={item.titulo} />
        </div>

        <div className="galeria-modal-info">
          <h3 className="galeria-modal-titulo">{item.titulo}</h3>

          {item.descripcion ? (
            <div className="galeria-modal-descripcion">
              <p className="galeria-modal-desc-intro">{item.descripcion.intro}</p>
              <ul className="galeria-modal-bullets">
                {item.descripcion.bullets.map((b, i) => (
                  <li key={i} className="galeria-modal-bullet">
                    <span className="galeria-modal-bullet-check">✔</span>
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

export default function GaleriaSection() {
  const [activo, setActivo] = useState<Category>('todos');
  const [selected, setSelected] = useState<GaleriaItem | null>(null);
  const [items, setItems] = useState<GaleriaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await getGaleriaItems();
        setItems(data);
      } catch (error) {
        console.error('Error loading galeria items:', error);
      } finally {
        setLoading(false);
      }
    };

    loadItems();
  }, []);

  const filtered = activo === 'todos' ? items : items.filter((i) => i.categoria === activo);

  if (loading) {
    return (
      <section id="galeria" className="galeria-section">
        <div className="galeria-inner">
          <p className="galeria-label">(Galeria)</p>
          <h2 className="galeria-titulo">Cargando proyectos...</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="galeria" className="galeria-section">
      <div className="galeria-inner">
        <div className="galeria-header">
          <div>
            <p className="galeria-label">(Galeria)</p>
            <h2 className="galeria-titulo">Algunas experiencias que hemos creado</h2>
          </div>

          <nav className="galeria-tabs" aria-label="Filtros de galeria">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                id={`tab-${tab.key}`}
                className={`galeria-tab${activo === tab.key ? ' galeria-tab--active' : ''}`}
                onClick={() => setActivo(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="galeria-grid">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="galeria-item galeria-item--normal"
              onClick={() => setSelected(item)}
            >
              <div className="galeria-img-wrap">
                {item.imagen.endsWith('.mp4') || item.imagen.endsWith('.webm') ? (
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
                  <span className="galeria-img-overlay-icon">+</span>
                </div>
              </div>
              <p className="galeria-caption">{item.titulo}</p>
              {item.bajada && <p className="galeria-bajada">{item.bajada}</p>}
            </div>
          ))}
        </div>
      </div>

      {selected && <GaleriaModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
