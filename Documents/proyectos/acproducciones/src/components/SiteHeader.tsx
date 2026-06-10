"use client";

import React, { useCallback, useEffect, useState } from "react";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const nav = [
  { href: "#que-hacemos", label: "Servicios" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#galeria", label: "Eventos" },
  { href: "#contacto", label: "Contactanos" },
];

/** Plays the scale-down/up animation on an element, then scrolls to the target */
function useNavPress() {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const href = el.getAttribute("href");

    // Remove class in case it was already there
    el.classList.remove("nav-pressing");
    // Force reflow so the animation restarts
    void el.offsetWidth;
    el.classList.add("nav-pressing");

    // If it's an internal anchor, prevent default and scroll after the animation
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      setTimeout(() => {
        target?.scrollIntoView({ behavior: "smooth" });
        el.classList.remove("nav-pressing");
      }, 450);
    } else {
      // For external links, just clean up after animation
      setTimeout(() => el.classList.remove("nav-pressing"), 450);
    }
  }, []);
}

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const handlePress = useNavPress();

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
      <div className="section-wrap grid grid-cols-2 lg:grid-cols-3 h-16 sm:h-20 items-center w-full gap-4">
        <div className="flex justify-start">
          <a
            href="#inicio"
            onClick={handlePress}
            className="shrink-0 inline-block"
          >
            <img src="/logo/logo-principal-horizontal.svg" alt="Logo Alfa Corporativo" className="h-10 sm:h-12 w-auto" />
          </a>
        </div>

        <nav className="hidden lg:flex justify-center items-center gap-6 xl:gap-8 w-full">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handlePress}
              className="text-[10px] xl:text-[11px] font-bold tracking-[0.18em] uppercase text-white/70 hover:text-white transition-colors inline-block"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-end items-center gap-2 sm:gap-3 shrink-0">
          <WhatsAppCTA className="!px-2 !py-1.5 text-[8px] sm:text-xs whitespace-nowrap" label="Conversemos por WhatsApp" />
        </div>
      </div>
    </header>
  );
}
