export default function HeroVideoPlaceholder({
  videoSrc,
  fill = false,
}: {
  videoSrc?: string;
  /** Ocupa todo el contenedor (para hero a pantalla completa) */
  fill?: boolean;
}) {
  return (
    <div
      className={[
        "w-full media-slot overflow-hidden",
        fill ? "h-full min-h-0 rounded-none aspect-auto" : "rounded-2xl aspect-[16/9]",
      ].join(" ")}
    >
      {videoSrc ? (
        <video
          className="h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div className="relative h-full min-h-[200px] w-full bg-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#B8E986]/20 via-transparent to-[#FFB6E1]/15" />
          <div className="absolute inset-0 opacity-50">
            <div className="h-full w-full [background:radial-gradient(circle_at_20%_20%,rgba(184,233,134,0.35),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,182,225,0.25),transparent_40%)]" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="rounded-full border border-white/20 bg-black/40 px-4 py-2">
              <div className="text-xs font-bold tracking-widest uppercase text-white/80">
                Video placeholder
              </div>
            </div>
            <div className="mt-3 text-sm text-white/70 max-w-[320px]">
              Reemplaza este bloque por tu video promocional (100vh al hacer scroll).
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

