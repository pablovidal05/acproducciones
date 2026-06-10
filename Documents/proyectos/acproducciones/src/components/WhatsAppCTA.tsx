import React from "react";

export default function WhatsAppCTA({
  className,
  label = "Cotizar por WhatsApp",
}: {
  className?: string;
  label?: string;
}) {
  const phoneRaw = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "+56990365286";
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
        "inline-flex items-center justify-center gap-2 rounded-full border border-[#CCA43B] bg-[#CCA43B] text-black",
        "px-4 py-2 text-sm font-semibold tracking-wide uppercase",
        "hover:bg-[#b8912e] hover:border-[#b8912e] active:bg-[#a07d28] transition-colors",
        className ?? "",
      ].join(" ")}
      aria-label="WhatsApp"
    >
      <span>{label}</span>
    </a>
  );
}

