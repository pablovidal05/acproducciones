import React from "react";

export default function HeroAntigravity() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-black flex flex-col justify-center items-center text-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {/*
          Ruta del video: /videos/hero-bg.mp4
          Debes colocar tu archivo de video dentro de la carpeta "public/videos/" en la raíz del proyecto.
        */}
        <video
          className="w-full h-full object-cover scale-105"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay - semitransparente oscuro para asegurar legibilidad */}
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-20 section-wrap flex flex-col items-center justify-center h-full px-4 sm:px-6 w-full max-w-5xl mx-auto pt-16">

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 animate-fade-up opacity-0"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          Tu visión no tiene límites.<br className="hidden sm:block" />{" "}
          Nuestro alcance tampoco.
        </h1>

        <h2
          className="max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-10 md:mb-14 font-medium leading-relaxed sm:leading-relaxed animate-fade-up opacity-0"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          Producción de eventos 360 con cobertura total. Movemos nuestra capacidad creativa y técnica al destino que elijas para crear experiencias corporativas inolvidables.
        </h2>

        <div
          className="animate-fade-up opacity-0"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          <a
            href="#galeria"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-[#B8E986] text-black px-8 py-4 text-sm md:text-base font-bold tracking-[0.1em] uppercase hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(184,233,134,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            <span>Ver Galería</span>
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
