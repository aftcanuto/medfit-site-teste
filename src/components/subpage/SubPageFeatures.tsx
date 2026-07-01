interface Feature {
  title:       string;
  description: string;
  foto?:       string;
}

interface SubPageFeaturesProps {
  eyebrow:  string;
  title:    string;
  body?:    string;
  features: Feature[];
  dark?:    boolean;
  noPhoto?: boolean;
}

export default function SubPageFeatures({
  eyebrow, title, body, features, dark = false, noPhoto = false,
}: SubPageFeaturesProps) {
  return (
    <section
      className={`sec-py border-t ${dark ? "border-white/8" : "border-ink-border"}`}
      style={{ background: dark ? "#0E2A1E" : "#FFFFFF" }}
    >
      <div className="wrap">

        {/* Header */}
        <div className="mb-10 pb-8 border-b" style={{ borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}>
          <p className={`text-[11px] font-medium tracking-[0.16em] uppercase mb-4
                         ${dark ? "text-verde-mid" : "text-verde"}`}>
            {eyebrow}
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h2 className={`font-display text-display-lg leading-[1.1]
                            ${dark ? "text-white" : "text-ink"}`}>
              {title}
            </h2>
            {body && (
              <p className={`text-[14px] leading-relaxed max-w-sm lg:text-right
                             ${dark ? "text-white/55" : "text-ink-muted"}`}>
                {body}
              </p>
            )}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group rounded-2xl border overflow-hidden
                          ${dark
                            ? "border-white/8 bg-white/5"
                            : "border-ink-border bg-white hover:shadow-card hover:-translate-y-0.5 hover:border-verde/25"}
                          transition-all duration-200`}
            >
              {/* Foto — só renderiza se noPhoto=false */}
              {!noPhoto && (
                f.foto ? (
                  <div className="relative h-32 overflow-hidden">
                    <img src={f.foto} alt={f.title}
                         className="absolute inset-0 w-full h-full object-cover object-center" />
                  </div>
                ) : (
                  <div className={`h-32 flex items-center justify-center flex-col gap-2
                                   ${dark ? "bg-white/5" : "bg-bege-light"}`}>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center
                                     ${dark ? "bg-white/10" : "bg-verde-light"}`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="5" width="18" height="14" rx="2"
                              stroke={dark ? "rgba(255,255,255,0.4)" : "#1D9E75"} strokeWidth="1.5"/>
                        <circle cx="12" cy="12" r="3.5"
                                stroke={dark ? "rgba(255,255,255,0.4)" : "#1D9E75"} strokeWidth="1.5"/>
                      </svg>
                    </div>
                    <p className={`text-[10px] italic ${dark ? "text-white/25" : "text-ink-faint/40"}`}>
                      foto do equipamento
                    </p>
                  </div>
                )
              )}

              {/* Texto */}
              <div className="p-5">
                <div className={`w-5 h-[2.5px] rounded-full mb-2.5 ${dark ? "bg-verde-mid" : "bg-verde"}`} />
                <h3 className={`font-display font-medium text-[0.95rem] mb-1.5 leading-snug
                                transition-colors duration-200
                                ${dark ? "text-white group-hover:text-verde-mid" : "text-ink group-hover:text-verde"}`}>
                  {f.title}
                </h3>
                <p className={`text-[12px] leading-relaxed ${dark ? "text-white/50" : "text-ink-muted"}`}>
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
