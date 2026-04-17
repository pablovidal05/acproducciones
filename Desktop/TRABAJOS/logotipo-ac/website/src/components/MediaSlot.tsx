export default function MediaSlot({
  title,
  kind,
  src,
  aspect = "16/9",
}: {
  title: string;
  kind: "image" | "video";
  src?: string;
  aspect?: string;
}) {
  const ratio = aspect.includes("/") ? aspect : "16/9";

  return (
    <div className="media-slot rounded-2xl overflow-hidden" style={{ aspectRatio: ratio }}>
      {src ? (
        kind === "video" ? (
          <video
            className="h-full w-full object-cover"
            src={src}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="h-full w-full object-cover" src={src} alt={title} />
        )
      ) : (
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-[#0B0B0B]" />
          <div className="absolute inset-0 opacity-90 bg-gradient-to-br from-[#B8E986]/20 via-transparent to-[#FFB6E1]/15" />
          <div className="absolute inset-0 opacity-70 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.10),transparent_45%)]" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="rounded-full border border-white/20 bg-black/40 px-4 py-2">
              <div className="text-xs font-bold tracking-widest uppercase text-white/80">
                {kind === "video" ? "Video" : "Foto"} placeholder
              </div>
            </div>
            <div className="mt-3 text-sm text-white/70 max-w-[360px]">{title}</div>
          </div>
        </div>
      )}
    </div>
  );
}

