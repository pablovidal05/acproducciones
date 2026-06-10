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
    span: "normal",
  },
  {
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
    span: "normal",
  },
  {
    titulo: "OTIC Conversatorio y charla Talento Pyme",
    bajada: "Estuvimos a cargo de la producción 360 de la jornada \"Talento Pyme\" en Puerto Montt, una instancia que reunió a más de 80 emprendedores de distintos rubros en el Centro de Vinculación Empormontt.",
    descripcion: {
      intro: "Conversatorio y charla Talento Pyme",
      bullets: [
        "Estuvimos a cargo de la producción 360 de la jornada "Talento Pyme" en Puerto Montt, una instancia que reunió a más de 80 emprendedores de distintos rubros en el Centro de Vinculación Empormontt.",
        "El encuentro contó con la participación de Tadashi Takaoka, especialista en innovación, junto a un conversatorio con representantes de pymes locales, generando un espacio de aprendizaje, conexión y crecimiento.",
        "Para dar vida a esta experiencia, desarrollamos una producción completa que incluyó pantalla LED de gran formato, sistema de audio y tarima, mobiliario, calefacción y un área de acreditación con recepción y desayuno.",
        "Nos encargamos de cada detalle para asegurar una jornada fluida, cómoda y alineada con los objetivos del evento.",
      ],
    },
    categoria: "corporativo",
    imagen: "/images/otic-3.jpg",
    imagenesExtra: ["/images/otic-2.jpg", "/images/otic-1.jpg"],
    span: "normal",
  },
  {
    titulo: "Watchguard Lanzamiento \"Endpoint Launch GTD 2026\"",
    bajada: "Desarrollamos un evento 100% a medida, diseñado para generar una experiencia cercana, dinámica y enfocada en el valor para los asistentes.",
    descripcion: {
      intro: "Lanzamiento "Endpoint Launch GTD 2026" – Concepción",
      bullets: [
        "Desarrollamos un evento 100% a medida, diseñado para generar una experiencia cercana, dinámica y enfocada en el valor para los asistentes.",
        "La modalidad table presentation fue el eje central de la jornada, facilitando espacios de conversación uno a uno, orientados a abordar desafíos reales y soluciones en el ámbito de la ciberseguridad.",
        "Desde la producción 360°, nos encargamos de la implementación integral del evento, incluyendo salón, banquetería, producción técnica, montaje y cada uno de los elementos que dieron vida a esta experiencia.",
      ],
    },
    categoria: "corporativo",
    imagen: "/images/watchguard-3.jpeg",
    imagenesExtra: ["/images/watchguard-2.jpeg", "/images/watchguard-1.jpeg"],
    span: "normal",
  },
  {
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
    span: "normal",
  },
  {
    titulo: "OTIC",
    bajada: "Activaciones de Stands – OTIC",
    descripcion: {
      intro: "Activaciones de Stands – OTIC",
      bullets: [
        "Desarrollamos distintas activaciones para OTIC en el sur de Chile, implementando experiencias enfocadas en la interacción, captación de datos y visibilidad de marca.",
        "En el "Día Social de la Construcción" en Temuco, ejecutamos un módulo de atención con anfitrionía, orientado a la vinculación directa con el público, incluyendo captación de datos y entrega de merchandising.",
        "Por otra parte, en ENASUM en Puerto Varas, desarrollamos la implementación de stand incorporando soluciones interactivas y elementos de alto impacto, como péndon LED, tótem touch y ruleta digital, potenciando la participación activa de los asistentes."
      ],
    },
    categoria: "marca",
    imagen: "/images/otic-2-1.jpg",
    imagenesExtra: ["/images/otic-2-2.jpg", "/images/otic-2-3.jpg"],
    span: "normal",
  },
  {
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
    span: "normal",
  },
  {
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
    span: "normal",
  },
  {
    titulo: "Eurofarma",
    bajada: "Experiencia Gastronómica & Cata de Vinos",
    descripcion: {
      intro: "Experiencia Gastronómica & Cata de Vinos",
      bullets: [
        "Creamos una experiencia que combinó gastronomía, vino y tradición en un entorno campestre de alto nivel.",
        "La jornada incluyó bocados gourmet, cata guiada por sommelier y una exhibición en vivo del caballo chileno, logrando una propuesta elegante, auténtica y memorable."
      ],
    },
    categoria: "corporativo",
    imagen: "/images/euro-1.jpeg",
    imagenesExtra: ["/images/euro-2.jpeg", "/images/euro-3.jpeg"],
    span: "normal",
  },
  {
    titulo: "Producción Backstage – Concierto en Vivo",
    bajada: "Participamos en la producción backstage del concierto de Kidd Voodoo en el Estadio Chinquihue, marcando un hito al ser la primera vez que este recinto se abre para un evento de esta magnitud.",
    descripcion: {
      intro: "Producción Backstage – Concierto en Vivo",
      bullets: [
        "Participamos en la producción backstage del concierto de Kidd Voodoo en el Estadio Chinquihue, marcando un hito al ser la primera vez que este recinto se abre para un evento de esta magnitud.",
        "Estuvimos a cargo de la implementación completa de 17 camarines destinados a artistas, staff, bailarines y equipo de producción de Bizarro, desarrollando cada espacio desde cero.",
        "Nuestro trabajo consideró la habilitación integral de los camarines, asegurando funcionalidad, comodidad y estándar técnico acorde a las exigencias de un evento de alto nivel.",
        "La ejecución en terreno requirió coordinación precisa, capacidad de adaptación y atención al detalle, garantizando un backstage operativo, ordenado y preparado para responder a las necesidades de todos los equipos involucrados.",
      ],
    },
    categoria: "corporativo",
    imagen: "/images/kid-1.webm",
    imagenesExtra: [],
    span: "normal",
  },
];
