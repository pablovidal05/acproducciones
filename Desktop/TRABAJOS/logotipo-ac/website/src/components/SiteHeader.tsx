"use client";

import React, { useEffect, useState } from "react";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const nav = [
  { href: "#quienes-somos", label: "Nosotros" },
  { href: "#que-hacemos", label: "Servicios" },
  { href: "#eventos", label: "Eventos" },
  { href: "#contacto", label: "Contacto" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-[60] transition-[background-color,backdrop-filter,border-color] duration-300",
        scrolled
          ? "border-b border-white/10 bg-black/55 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="section-wrap grid grid-cols-2 lg:grid-cols-3 h-14 sm:h-16 items-center w-full gap-4">
        <div className="flex justify-start">
          <a href="#inicio" className="flex items-center gap-2 shrink-0 group">
            <span className="h-2 w-2 rounded-full bg-[#B8E986] group-hover:scale-125 transition-transform" aria-hidden />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-white">
              Alfa
            </span>
          </a>
        </div>

        <nav className="hidden lg:flex justify-center items-center gap-6 xl:gap-8 w-full">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[10px] xl:text-[11px] font-bold tracking-[0.18em] uppercase text-white/70 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-end items-center gap-2 sm:gap-3 shrink-0">
          <WhatsAppCTA className="!px-3 !py-2 text-[10px] sm:text-xs" label="WhatsApp" />
        </div>
      </div>
    </header>
  );
}
