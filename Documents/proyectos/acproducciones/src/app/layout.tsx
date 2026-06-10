import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7JH6J57F1S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7JH6J57F1S');
          `}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

