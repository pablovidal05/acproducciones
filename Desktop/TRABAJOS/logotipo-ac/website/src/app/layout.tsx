import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alfa Corporativo | Eventos corporativos",
  description:
    "Eventos corporativos, organización y realización de cenas, charlas y lanzamientos. Cotiza por WhatsApp.",
  openGraph: {
    title: "Alfa Corporativo | Eventos corporativos",
    description:
      "Eventos corporativos, organización y realización de cenas, charlas y lanzamientos. Cotiza por WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}

