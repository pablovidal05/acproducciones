export type LandingMediaKind = "image" | "video";

export type LandingMediaItem = {
  id: string;
  kind: LandingMediaKind;
  title: string;
  /**
   * Si en el futuro agregas contenido real,
   * asigna aquí `src` (imagen/video) para que la UI lo renderice.
   */
  src?: string;
  /**
   * Ej: "16/9", "4/3", "1/1"
   */
  aspect?: string;
};

export const landingGallery: LandingMediaItem[] = [
  { id: "g1", kind: "image", title: "Foto evento", aspect: "4/3" },
  { id: "g2", kind: "image", title: "Foto evento", aspect: "1/1" },
  { id: "g3", kind: "video", title: "Video destacado", aspect: "16/9" },
  { id: "g4", kind: "image", title: "Foto evento", aspect: "16/9" },
  { id: "g5", kind: "image", title: "Foto evento", aspect: "4/3" },
  { id: "g6", kind: "video", title: "Video evento", aspect: "1/1" },
];

