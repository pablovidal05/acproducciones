import React from "react";

export default function WhatsAppCTA({
  className,
  label = "Cotizar por WhatsApp",
}: {
  className?: string;
  label?: string;
}) {
  const phoneRaw = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "";
  const phone = phoneRaw.replace(/\D/g, "");
  const initialText =
    process.env.NEXT_PUBLIC_WHATSAPP_TEXT ??
    "Hola Alfa Corporativo, quiero cotizar un evento.";

  const href = phone
    ? `https://wa.me/${phone}?text=${encodeURIComponent(initialText)}`
    : "#";

  return (
    <a
      href={href}
      target={phone ? "_blank" : undefined}
      rel={phone ? "noopener noreferrer" : undefined}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white text-black",
        "px-4 py-2 text-sm font-semibold tracking-wide uppercase",
        "hover:bg-white/90 active:bg-white/80 transition-colors",
        className ?? "",
      ].join(" ")}
      aria-label="WhatsApp"
    >
      <span>WhatsApp</span>
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}

