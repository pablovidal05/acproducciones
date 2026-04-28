"use client";

import React, { useState, useEffect, useCallback } from "react";

type Category = "todos" | "corporativo" | "marca";

interface GaleriaItem {
  id: string;
  titulo: string;
  bajada?: string;
  /** Descripción extensa con bullets. Primer elemento = párrafo intro, resto = items ✔️ */
  descripcion?: { intro: string; bullets: string[] };
  categoria: Exclude<Category, "todos">;
  imagen: string;
  /** Imágenes extra para el carrusel (además de imagen principal) */
  imagenesExtra?: string[];
  /** CSS grid span: "tall" = 2 rows, "wide" = 2 cols, "normal" = 1×1 */
  span?: "tall" | "wide" | "normal";
}

const items: GaleriaItem[] = [
  {
    id: "cpt",
    titulo: "CPT Ceremonia años de servicio",
    bajada: "Ceremonia de reconocimiento a los colaboradores de CPT, una noche de gala que celebró años de servicio, trayectoria y logros dentro de la compañía.",
    descripcion: {
      intro: "Desde la planificación hasta la última canción de la fiesta, nuestra productora estuvo a cargo de la producción integral del evento:",
      bullets: [
        "Organización y coordinación general",
        "Cóctel de recepción y cena",
        "Anfitrionas y acreditación",
        "Escenario, pista LED, iluminación y audio",
        "Pantalla LED de 20x3 metros que transformó por completo el salón",
        "Sectores de fotos con fondo de prensa y \"paparazzi cam\"",
        "Producción de la ceremonia y entrega de reconocimientos",
        "Intervención artística y gran cierre con banda tributo y DJ",
      ],
    },
    categoria: "corporativo",
    imagen: "/images/CPT-01.jpg",
    imagenesExtra: ["/images/CPT-02.jpg", "/images/CPT-03.jpg"],
    span: "normal",
  },
  {
    id: "conferencia-liderazgo",
    titulo: "EPYSA Día Marcopolo Pto Montt",
    bajada: "Diseñamos y ejecutamos una experiencia 360° en el marco del Día Marcopolo, donde EPYSA Buses reunió a sus clientes en una jornada enfocada en generar conexiones, fortalecer relaciones y potenciar oportunidades de negocio.",
    descripcion: {
      intro: "Epysa Buses",
      bullets: [
        "Diseñamos y ejecutamos una experiencia 360° en el marco del Día Marcopolo, donde EPYSA Buses reunió a sus clientes en una jornada enfocada en generar conexiones, fortalecer relaciones y potenciar oportunidades de negocio.",
        "Creamos un espacio pensado en cada detalle: montaje, ambientación y una propuesta gastronómica de alto nivel, con bocados y un asado como eje central de la experiencia.",
        "Nos encargamos de toda la producción técnica y audiovisual, la coordinación integral del evento y la entrega de regalos corporativos, asegurando una ejecución fluida, coherente y memorable.",
      ],
    },
    categoria: "corporativo",
    imagen: "/images/EPYSA-1.jpg",
    imagenesExtra: ["/images/EPYSA-2.jpg", "/images/EPYSA-3.jpg"],
    span: "tall",
  },
  {
    id: "activacion-brand",
    titulo: "Saesa Innova Stand corporativo",
    bajada: "Desarrollamos la implementación del stand para nuestro cliente Saesa Innova, creando un espacio moderno, funcional y alineado con su identidad de marca.",
    descripcion: {
      intro: "Stand Corporativo – Proyecta Solar 2025",
      bullets: [
        "En el marco de Proyecta Solar 2025, organizado por ACESOL, desarrollamos la implementación del stand para nuestro cliente Saesa Innova, creando un espacio moderno, funcional y alineado con su identidad de marca.",
        "El proyecto se llevó a cabo en Hotel W Santiago, donde diseñamos e instalamos una solución basada en estructura truss con tela PVC tensada, destacando por su versatilidad.",
        "Nos encargamos de la implementación integral del stand, incluyendo mobiliario, gráficas personalizadas, piso, iluminación LED y soporte audiovisual con pantalla   TV.",
        "Además, gestionamos el montaje, la supervisión durante el evento y el desmontaje, asegurando una ejecución fluida y sin contratiempos.",
      ],
    },
    categoria: "marca",
    imagen: "/images/SAESA-2.jpg",
    imagenesExtra: ["/images/SAESA-1.jpg", "/images/SAESA-3.jpg"],
    span: "small",
  },
  {
    id: "lanzamiento-producto",
    titulo: "OTIC Conversatorio y charla Talento Pyme",
    bajada: "Estuvimos a cargo de la producción 360 de la jornada \"Talento Pyme\" en Puerto Montt, una instancia que reunió a más de 80 emprendedores de distintos rubros en el Centro de Vinculación Empormontt.",
    descripcion: {
      intro: "Conversatorio y charla Talento Pyme",
      bullets: [
        "Estuvimos a cargo de la producción 360 de la jornada “Talento Pyme” en Puerto Montt, una instancia que reunió a más de 80 emprendedores de distintos rubros en el Centro de Vinculación Empormontt.",
        "El encuentro contó con la participación de Tadashi Takaoka, especialista en innovación, junto a un conversatorio con representantes de pymes locales, generando un espacio de aprendizaje, conexión y crecimiento.",
        "Para dar vida a esta experiencia, desarrollamos una producción completa que incluyó pantalla LED de gran formato, sistema de audio y tarima, mobiliario, calefacción y un área de acreditación con recepción y desayuno.",
        "Nos encargamos de cada detalle para asegurar una jornada fluida, cómoda y alineada con los objetivos del evento.",
      ],
    },
    categoria: "corporativo",
    imagen: "/images/otic-3.jpg",
    imagenesExtra: ["/images/otic-2.jpg", "/images/otic-1.jpg"],
    span: "tall",
  },
  {
    id: "cocktail-rooftop",
    titulo: "Watchguard Lanzamiento \"Endpoint Launch GTD 2026\"",
    bajada: "Desarrollamos un evento 100% a medida, diseñado para generar una experiencia cercana, dinámica y enfocada en el valor para los asistentes.",
    descripcion: {
      intro: "Lanzamiento “Endpoint Launch GTD 2026” – Concepción",
      bullets: [
        "Desarrollamos un evento 100% a medida, diseñado para generar una experiencia cercana, dinámica y enfocada en el valor para los asistentes.",
        "La modalidad table presentation fue el eje central de la jornada, facilitando espacios de conversación uno a uno, orientados a abordar desafíos reales y soluciones en el ámbito de la ciberseguridad.",
        "Desde la producción 360°, nos encargamos de la implementación integral del evento, incluyendo salón, banquetería, producción técnica, montaje y cada uno de los elementos que dieron vida a esta experiencia.",
      ],
    },
    categoria: "corporativo",
    imagen: "/images/watchguard-3.jpeg",
    imagenesExtra: ["/images/watchguard-2.jpeg", "/images/watchguard-1.jpeg"],
    span: "wide",
  },
  {
    id: "salcobrand",
    titulo: "Salcobrand",
    bajada: "Activación de Marca – Solares Salcobrand",
    descripcion: {
      intro: "Activación de Marca – Solares Salcobrand",
      bullets: [
        "Implementamos una experiencia de marca en playas de La Serena, enfocada en el cuidado de la piel y la conexión directa con el público.",
        "La activación incluyó un espacio de dermocoaching y una propuesta diseñada para generar cercanía, interacción y recordación de marca.",
      ],
    },
    categoria: "marca",
    imagen: "/images/salco-1.jpeg",
    imagenesExtra: ["/images/salco-2.jpeg", "/images/salco-3.jpeg"],
    span: "small",
  },
  {
    id: "otic-activaciones",
    titulo: "OTIC",
    bajada: "Activaciones de Stands – OTIC",
    descripcion: {
      intro: "Activaciones de Stands – OTIC",
      bullets: [
        "Desarrollamos distintas activaciones para OTIC en el sur de Chile, implementando experiencias enfocadas en la interacción, captación de datos y visibilidad de marca.",
        "En el “Día Social de la Construcción” en Temuco, ejecutamos un módulo de atención con anfitrionía, orientado a la vinculación directa con el público, incluyendo captación de datos y entrega de merchandising.",
        "Por otra parte, en ENASUM en Puerto Varas, desarrollamos la implementación de stand incorporando soluciones interactivas y elementos de alto impacto, como péndon LED, tótem touch y ruleta digital, potenciando la participación activa de los asistentes."
      ],
    },
    categoria: "marca",
    imagen: "/images/otic-2-1.jpg",
    imagenesExtra: ["/images/otic-2-2.jpg", "/images/otic-2-3.jpg"],
    span: "tall",
  },
  {
    id: "salcobrand-teleton",
    titulo: "SALCOBRAND",
    bajada: "Gira Salcobrand / Teletón 2025",
    descripcion: {
      intro: "Gira Salcobrand / Teletón 2025",
      bullets: [
        "Acompañamos a Salcobrand, la farmacia de la Teletón, en el desarrollo de una gira nacional enfocada en generar conexión, motivación y sentido de propósito.",
        "La experiencia se desplegó en distintas ciudades del país, llevando una propuesta consistente y alineada con los valores de la marca en cada jornada.",
        "Ciudades: Antofagasta · Copiapó · La Serena · Puerto Montt · Osorno · Temuco · Concepción · Talcahuano"
      ],
    },
    categoria: "marca",
    imagen: "/images/tele-1.jpg",
    imagenesExtra: ["/images/tele-2.jpg", "/images/tele-3.jpg"],
    span: "tall",
  },
  {
    id: "regata-chiloe",
    titulo: "Producción de Marca – Regata de Chiloé 2026",
    bajada: "Trabajamos junto a GYT Experiences en la producción para la marca Amarco, main sponsor de la Regata de Chiloé 2026.",
    descripcion: {
      intro: "Producción de Marca – Regata de Chiloé 2026",
      bullets: [
        "Trabajamos junto a GYT Experiences en la producción para la marca Amarco, main sponsor de la Regata de Chiloé 2026, uno de los eventos náuticos más relevantes del país.",
        "Nos involucramos como aliados estratégicos en terreno, aportando soluciones concretas y adaptándonos a las necesidades del proyecto, sin importar la ubicación o los desafíos operativos.",
        "Nuestro enfoque se centra en agregar valor en cada instancia, asegurando una ejecución eficiente, coherente y alineada con los objetivos de la marca."
      ],
    },
    categoria: "marca",
    imagen: "/images/regata-3.jpeg",
    imagenesExtra: ["/images/regata-2.mp4", "/images/regata-1.jpeg"],
    span: "wide",
  },
];

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
function GaleriaModal({ item, onClose }: { item: GaleriaItem; onClose: () => void }) {
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
  const [selected, setSelected] = useState<GaleriaItem | null>(null);

  const filtered = activo === "todos" ? items : items.filter((i) => i.categoria === activo);

  return (
    <section id="galeria" className="galeria-section">
      <div className="galeria-inner">

        {/* Header */}
        <div className="galeria-header">
          <div>
            <p className="galeria-label">(Galería)</p>
            <h2 className="galeria-titulo">Experiencias que hemos creado</h2>
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
              style={{ cursor: "pointer" }}
            >
              <div className="galeria-img-wrap">
                {item.imagen.endsWith(".mp4") || item.imagen.endsWith(".webm") ? (
                  <video
                    src={item.imagen}
                    className="galeria-img object-cover h-full w-full"
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
