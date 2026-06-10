import { GaleriaItem } from "./types";

export const seedGaleriaData: Omit<GaleriaItem, "id" | "createdAt" | "updatedAt">[] = [
  {
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
        "Sectores de fotos con fondo de prensa y paparazzi cam",
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
    titulo: "EPYSA Día Marcopolo Pto Montt",
    bajada: "Diseñamos y ejecutamos una experiencia 360 en el marco del Día Marcopolo, donde EPYSA Buses reunió a sus clientes en una jornada enfocada en generar conexiones, fortalecer relaciones y potenciar oportunidades de negocio.",
    descripcion: {
      intro: "Epysa Buses",
      bullets: [
        "Diseñamos y ejecutamos una experiencia 360 en el marco del Día Marcopolo, donde EPYSA Buses reunió a sus clientes en una jornada enfocada en generar conexiones, fortalecer relaciones y potenciar oportunidades de negocio.",
        "Creamos un espacio pensado en cada detalle: montaje, ambientación y una propuesta gastronómica de alto nivel, con bocados y un asado como eje central de la experiencia.",
        "Nos encargamos de toda la producción técnica y audiovisual, la coordinación integral del evento y la entrega de regalos corporativos, asegurando una ejecución fluida, coherente y memorable.",
      ],
    },
    categoria: "corporativo",
    imagen: "/images/EPYSA-1.jpg",
    imagenesExtra: ["/images/EPYSA-2.jpg", "/images/EPYSA-3.jpg"],
    span: "normal",
  },
];
