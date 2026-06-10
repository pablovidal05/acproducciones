export type GaleriaItem = {
  id: string;
  titulo: string;
  bajada?: string;
  descripcion?: {
    intro: string;
    bullets: string[];
  };
  categoria: "corporativo" | "marca";
  imagen: string;
  imagenesExtra?: string[];
  span?: "tall" | "wide" | "normal";
  createdAt: number;
  updatedAt: number;
};
