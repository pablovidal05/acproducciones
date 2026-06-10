"use client";

import React, { useEffect, useRef, useState } from "react";
import HeroVideoPlaceholder from "@/components/HeroVideoPlaceholder";

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function HeroAugustExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoProgress, setVideoProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onMq = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onMq);
    return () => mq.removeEventListener("change", onMq);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollable = window.innerHeight * 2; 
      
      const scrolled = -rect.top;
      
      if (scrolled <= 0) {
        setVideoProgress(reduceMotion ? 1 : 0);
        return;
      }
      
      const raw = clamp01(scrolled / scrollable);
      setVideoProgress(reduceMotion ? 1 : easeOutCubic(raw));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduceMotion]);

  const t = videoProgress;
  
  const vwpx = isClient ? window.innerWidth : 1920;
  const vhpx = isClient ? window.innerHeight : 1080;
  
  // Hacemos el círculo MUCHISIMO más chico, como en 'August'
  const initialWidth = Math.min(vwpx * 0.15, 180); 
  const initialHeight = initialWidth;
  
  // Posicionado más abajo y hacia la izquierda (pisando la L de ALFA)
  const startX = vwpx * 0.42 - initialWidth / 2;
  const startY = vhpx * 0.70 - initialHeight / 2;

  const currentWidth = initialWidth + (vwpx - initialWidth) * t;
  const currentHeight = initialHeight + (vhpx - initialHeight) * t;
  const currentRadius = 50 * (1 - t);

  const currentX = startX * (1 - t);
  const currentY = startY * (1 - t);
  
  const textFadeOut = clamp01(t * 1.5);

  return (
    <div ref={containerRef} id="inicio" className="relative min-h-[300vh] bg-black"> 
      
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-black">

        {/* --- Background / Video parallax Layer --- */}
        {reduceMotion ? (
           <div className="absolute inset-0 z-0">
             <HeroVideoPlaceholder fill />
           </div>
        ) : (
          <div
            className="absolute z-0 pointer-events-none will-change-[width,height,transform,border-radius]"
            style={{
              left: 0,
              top: 0,
              width: `${currentWidth}px`,
              height: `${currentHeight}px`,
              borderRadius: `${currentRadius}%`,
              transform: `translate3d(${currentX}px, ${currentY}px, 0)`,
              overflow: "hidden",
            }}
          >
            <div className={`w-full h-full transition-opacity duration-300 ${t < 0.02 ? "opacity-30 sm:opacity-100" : "opacity-100"}`}>
              <HeroVideoPlaceholder fill />
            </div>
          </div>
        )}

        {/* --- Big ALFA Text --- */}
        <div 
          className="absolute inset-0 z-10 w-full flex flex-col items-center justify-center pointer-events-none text-center px-2"
          style={{ opacity: 1 - textFadeOut }}
        >
           {/* Letras MASIVAS para que ocupen todo el ancho igual a 'August' */}
           <h1 className="text-[40vw] leading-[0.75] font-extrabold tracking-tighter uppercase text-white mix-blend-difference select-none">
             ALFA
           </h1>
        </div>

        {/* --- Floating CORPORATIVO Subtitle --- */}
        {isClient && (
          <div
            className="absolute z-20 transition-opacity flex items-center pointer-events-none"
            style={{
              // Colocado justo a la derecha del círculo de video
              left: `${startX + initialWidth + 10}px`,
              // Ligeramente más arriba del centro del video para que la flecha baje
              top: `${startY + initialHeight * 0.3}px`,
              opacity: 1 - textFadeOut * 2
            }}
          >
            {/* SVG Connector (punto + curva como en August) */}
            <svg width="60" height="40" viewBox="0 0 60 40" className="hidden sm:block opacity-100 overflow-visible mr-2" fill="none">
              {/* Círculo blanco que toca el texto */}
              <circle cx="5" cy="10" r="4" fill="white" className="mix-blend-difference" />
              {/* Curva hacia el centro del placeholder de video */}
              <path d="M 5 10 Q 20 30 50 30" stroke="white" strokeWidth="2.5" className="mix-blend-difference" />
            </svg>

            <div className="flex flex-col text-left mt-[-10px]">
              <span className="text-xl sm:text-3xl md:text-5xl font-extrabold tracking-tight uppercase text-white mix-blend-difference inline-block leading-none">
                Corporativo
              </span>
              <span className="text-[10px] sm:text-xs text-white/90 uppercase tracking-[0.1em] mt-1 mix-blend-difference leading-tight font-bold">
                Agencia de eventos y marketing
              </span>
            </div>
          </div>
        )}

        {/* --- Scroll Indicator --- */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-white/50 animate-bounce z-10 mix-blend-difference"
          style={{ opacity: reduceMotion ? 0 : 1 - textFadeOut * 2 }}
          aria-hidden
        >
          Scroll
        </div>
      </div>
    </div>
  );
}
