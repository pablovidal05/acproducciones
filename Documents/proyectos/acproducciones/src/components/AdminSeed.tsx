'use client';

import { useState } from 'react';
import { addGaleriaItem } from '@/lib/galeriaService';

const seedData = [
  {
    titulo: 'CPT Ceremonia anos de servicio',
    bajada: 'Ceremonia de reconocimiento a los colaboradores de CPT, una noche de gala que celebro anos de servicio, trayectoria y logros dentro de la compania.',
    descripcion: {
      intro: 'Desde la planificacion hasta la ultima cancion de la fiesta, nuestra productora estuvo a cargo de la produccion integral del evento:',
      bullets: ['Organizacion y coordinacion general', 'Coctel de recepcion y cena', 'Anfitrionas y acreditacion', 'Escenario, pista LED, iluminacion y audio', 'Pantalla LED de 20x3 metros que transforma por completo el salon', 'Sectores de fotos con fondo de prensa y paparazzi cam', 'Produccion de la ceremonia y entrega de reconocimientos', 'Intervencion artistica y gran cierre con banda tributo y DJ']
    },
    categoria: 'corporativo' as const,
    imagen: '/images/CPT-01.jpg',
    imagenesExtra: ['/images/CPT-02.jpg', '/images/CPT-03.jpg'],
  },
  {
    titulo: 'EPYSA Dia Marcopolo Pto Montt',
    bajada: 'Disenamos y ejecutamos una experiencia 360 en el marco del Dia Marcopolo, donde EPYSA Buses reunio a sus clientes en una jornada enfocada en generar conexiones, fortalecer relaciones y potenciar oportunidades de negocio.',
    descripcion: {
      intro: 'Epysa Buses',
      bullets: ['Disenamos y ejecutamos una experiencia 360 en el marco del Dia Marcopolo', 'Creamos un espacio pensado en cada detalle: montaje, ambientacion y una propuesta gastronomica de alto nivel', 'Nos encargamos de toda la produccion tecnica y audiovisual, la coordinacion integral del evento y la entrega de regalos corporativos']
    },
    categoria: 'corporativo' as const,
    imagen: '/images/EPYSA-1.jpg',
    imagenesExtra: ['/images/EPYSA-2.jpg', '/images/EPYSA-3.jpg'],
  },
  {
    titulo: 'Saesa Innova Stand corporativo',
    bajada: 'Desarrollamos la implementacion del stand para nuestro cliente Saesa Innova, creando un espacio moderno, funcional y alineado con su identidad de marca.',
    descripcion: {
      intro: 'Stand Corporativo - Proyecta Solar 2025',
      bullets: ['En el marco de Proyecta Solar 2025', 'El proyecto se llevo a cabo en Hotel W Santiago', 'Nos encargamos de la implementacion integral del stand']
    },
    categoria: 'marca' as const,
    imagen: '/images/SAESA-2.jpg',
    imagenesExtra: ['/images/SAESA-1.jpg', '/images/SAESA-3.jpg'],
  },
  {
    titulo: 'OTIC Conversatorio y charla Talento Pyme',
    bajada: 'Estuvimos a cargo de la produccion 360 de la jornada Talento Pyme en Puerto Montt',
    descripcion: {
      intro: 'Conversatorio y charla Talento Pyme',
      bullets: ['Estuvimos a cargo de la produccion 360', 'El encuentro conto con la participacion de Tadashi Takaoka', 'Para dar vida a esta experiencia, desarrollamos una produccion completa']
    },
    categoria: 'corporativo' as const,
    imagen: '/images/otic-3.jpg',
    imagenesExtra: ['/images/otic-2.jpg', '/images/otic-1.jpg'],
  },
  {
    titulo: 'Watchguard Lanzamiento Endpoint Launch GTD 2026',
    bajada: 'Desarrollamos un evento 100% a medida',
    descripcion: {
      intro: 'Lanzamiento Endpoint Launch GTD 2026',
      bullets: ['Desarrollamos un evento 100% a medida', 'La modalidad table presentation fue el eje central', 'Desde la produccion 360']
    },
    categoria: 'corporativo' as const,
    imagen: '/images/watchguard-3.jpeg',
    imagenesExtra: ['/images/watchguard-2.jpeg', '/images/watchguard-1.jpeg'],
  },
  {
    titulo: 'Salcobrand',
    bajada: 'Activacion de Marca - Solares Salcobrand',
    descripcion: {
      intro: 'Activacion de Marca',
      bullets: ['Implementamos una experiencia de marca en playas de La Serena', 'La activacion incluyo un espacio de dermocoaching']
    },
    categoria: 'marca' as const,
    imagen: '/images/salco-1.jpeg',
    imagenesExtra: ['/images/salco-2.jpeg', '/images/salco-3.jpeg'],
  },
  {
    titulo: 'OTIC - Activaciones de Stands',
    bajada: 'Activaciones de Stands - OTIC',
    descripcion: {
      intro: 'Activaciones de Stands',
      bullets: ['Desarrollamos distintas activaciones para OTIC', 'En el Dia Social de la Construccion en Temuco', 'En ENASUM en Puerto Varas']
    },
    categoria: 'marca' as const,
    imagen: '/images/otic-2-1.jpg',
    imagenesExtra: ['/images/otic-2-2.jpg', '/images/otic-2-3.jpg'],
  },
  {
    titulo: 'SALCOBRAND - Gira Teleton 2025',
    bajada: 'Gira Salcobrand / Teleton 2025',
    descripcion: {
      intro: 'Gira Salcobrand / Teleton 2025',
      bullets: ['Acompanamos a Salcobrand', 'La experiencia se desplego en distintas ciudades del pais', 'Ciudades: Antofagasta, Copiapo, La Serena']
    },
    categoria: 'marca' as const,
    imagen: '/images/tele-1.jpg',
    imagenesExtra: ['/images/tele-2.jpg', '/images/tele-3.jpg'],
  },
  {
    titulo: 'Produccion de Marca - Regata de Chiloe 2026',
    bajada: 'Trabajamos junto a GYT Experiences en la produccion para la marca Amarco',
    descripcion: {
      intro: 'Produccion de Marca - Regata de Chiloe 2026',
      bullets: ['Trabajamos junto a GYT Experiences', 'Nos involucramos como aliados estrategicos en terreno', 'Nuestro enfoque se centra en agregar valor']
    },
    categoria: 'marca' as const,
    imagen: '/images/regata-3.jpeg',
    imagenesExtra: ['/images/regata-2.mp4', '/images/regata-1.jpeg'],
  },
  {
    titulo: 'Eurofarma',
    bajada: 'Experiencia Gastronomica & Cata de Vinos',
    descripcion: {
      intro: 'Experiencia Gastronomica & Cata de Vinos',
      bullets: ['Creamos una experiencia que combino gastronomia', 'La jornada incluyo bocados gourmet']
    },
    categoria: 'corporativo' as const,
    imagen: '/images/euro-1.jpeg',
    imagenesExtra: ['/images/euro-2.jpeg', '/images/euro-3.jpeg'],
  },
  {
    titulo: 'Produccion Backstage - Concierto en Vivo',
    bajada: 'Participamos en la produccion backstage del concierto de Kidd Voodoo en el Estadio Chinquihue',
    descripcion: {
      intro: 'Produccion Backstage - Concierto en Vivo',
      bullets: ['Participamos en la produccion backstage', 'Estuvimos a cargo de la implementacion completa de 17 camarines', 'La ejecucion en terreno requirio coordinacion precisa']
    },
    categoria: 'corporativo' as const,
    imagen: '/images/kid-1.webm',
    imagenesExtra: [],
  },
];

export function AdminSeed() {
  const [seeding, setSeeding] = useState(false);
  const [done, setDone] = useState(false);

  const handleSeed = async () => {
    setSeeding(true);
    let count = 0;

    try {
      for (const item of seedData) {
        await addGaleriaItem(item);
        count++;
        console.log(`${count}/11 agregados`);
      }
      setDone(true);
      console.log(`✓ ${count} proyectos agregados`);
    } catch (error) {
      console.error('Error:', error);
      alert('Error al agregar datos: ' + String(error));
    } finally {
      setSeeding(false);
    }
  };

  if (done) {
    return (
      <div style={{ padding: '20px', background: '#e8f5e9', borderRadius: '4px', marginBottom: '20px' }}>
        <h3 style={{ color: '#2e7d32', margin: '0 0 10px' }}>✓ Datos cargados!</h3>
        <p style={{ margin: 0, color: '#1b5e20' }}>Los 11 proyectos han sido agregados a Firestore. Recarga la pagina para verlos.</p>
      </div>
    );
  }

  return (
    <button
      onClick={handleSeed}
      disabled={seeding}
      style={{
        padding: '10px 20px',
        background: seeding ? '#ccc' : '#ff6b6b',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: seeding ? 'not-allowed' : 'pointer',
        fontWeight: 'bold',
        marginBottom: '20px',
      }}
    >
      {seeding ? 'Cargando 11 proyectos...' : 'Cargar datos de demo'}
    </button>
  );
}
