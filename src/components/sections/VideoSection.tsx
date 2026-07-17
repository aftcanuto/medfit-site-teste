import { VIDEO, UI } from "@/config/content";

export default function VideoSection() {
  // ─────────────────────────────────────────────────────────────
  // COMO ADICIONAR O VÍDEO:
  //
  // OPÇÃO A — Arquivo local (recomendado, loop perfeito sem gap):
  //   1. Coloque o arquivo em: medfit-site/public/video/ventilometria.mp4
  //   2. No content.ts, defina: VIDEO.localFile = "ventilometria.mp4"
  //   3. O vídeo roda automático, em loop, sem som e sem controles
  //
  // OPÇÃO B — YouTube:
  //   1. No content.ts, defina: VIDEO.youtubeId = "ID_DO_VIDEO"
  //   2. Obs: o YouTube tem ~1–2s de gap na virada do loop
  // ─────────────────────────────────────────────────────────────

  const useLocal   = VIDEO.localFile && VIDEO.localFile !== "";
  const useYoutube = !useLocal && VIDEO.youtubeId && VIDEO.youtubeId !== "YOUTUBE_ID_AQUI";

  return (
    <section className="bg-white sec-py border-t border-ink-border">
      <div className="wrap">

        <div className="max-w-xl mb-10">
          <p className="eyebrow mb-3">{VIDEO.eyebrow}</p>
          <h2 className="font-display text-display-lg text-ink mb-4">{VIDEO.title}</h2>
          <p className="text-ink-muted text-[15px] leading-relaxed">{VIDEO.description}</p>
        </div>

        <div className="rounded-4xl overflow-hidden shadow-float border border-ink-border bg-ink"
             style={{ aspectRatio: "16/9" }}>

          {useLocal ? (
            // ── Opção A: vídeo local — loop perfeito ──────────
            <video
              src={VIDEO.localFile.startsWith("http") ? VIDEO.localFile : `/video/${VIDEO.localFile}`}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : useYoutube ? (
            // ── Opção B: YouTube ───────────────────────────────
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${VIDEO.youtubeId}&rel=0&modestbranding=1&controls=0`}
              title={VIDEO.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ position: "absolute", top: 0, left: 0 }}
              loading="lazy"
            />
          ) : (
            // ── Placeholder ────────────────────────────────────
            <div className="w-full h-full flex flex-col items-center justify-center gap-4
                            bg-gradient-to-br from-verde-deep to-ink">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20
                              flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="white">
                  <path d="M8 5.5L17 11L8 16.5V5.5Z" />
                </svg>
              </div>
              <div className="text-center px-6">
                <p className="text-white font-display text-lg font-medium">{VIDEO.title}</p>
                <p className="text-white/40 text-sm mt-1">
                  {UI.video.comingSoon}
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
