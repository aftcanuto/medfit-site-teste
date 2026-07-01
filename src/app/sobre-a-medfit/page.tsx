import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { SOBRE } from "@/config/content";

export default function Page() {
  const d = SOBRE;

  return (
    <>
      <Header />
      <main>

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative bg-bege overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full
                          bg-verde-light blur-[80px] opacity-40 translate-x-1/3 -translate-y-1/4 pointer-events-none" />

          {/* MOBILE: banner de foto */}
          {d.hero.image && (
            <div className="lg:hidden relative w-full h-52 mt-16">
              <img src={d.hero.image} alt={d.hero.imageAlt}
                   className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: ((d.hero as any).imagePosition ?? "center 20%").replace(/_/g, " ") }} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bege" />
            </div>
          )}

          <div className="wrap relative pt-6 pb-16 md:pb-20 lg:pt-36 lg:pb-24">
            <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
              <div>
                <p className="eyebrow mb-4">{d.hero.eyebrow}</p>
                <h1 className="font-display text-display text-ink leading-[1.08] tracking-[-0.02em] mb-5">
                  {d.hero.title}
                </h1>
                <div className="w-10 h-[3px] bg-verde rounded-full mb-6" />
                <p className="text-ink-muted text-lg leading-relaxed max-w-md mb-3 font-medium">
                  {d.hero.subtitle}
                </p>
                <p className="text-ink-muted text-[15px] leading-relaxed max-w-lg">
                  {d.hero.body}
                </p>
              </div>

              {/* Photo placeholder */}
              <div className="hidden lg:block">
                <div className="bg-white rounded-5xl p-3 shadow-float">
                  <div className="relative aspect-[4/5] rounded-4xl overflow-hidden bg-bege-light
                                  flex items-center justify-center flex-col gap-3">
                    {d.hero.image ? (
                      <img src={d.hero.image} alt={d.hero.imageAlt}
                           className="absolute inset-0 w-full h-full object-cover object-center" />
                    ) : (
                      <>
                        <div className="w-12 h-12 rounded-2xl bg-verde-light flex items-center justify-center">
                          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <circle cx="11" cy="8" r="4" stroke="#1D9E75" strokeWidth="1.5"/>
                            <path d="M3 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <p className="text-ink-faint text-[12px] italic">
                          {d.hero.imageAlt}
                        </p>
                        <p className="text-ink-faint/50 text-[11px]">
                          Adicionar foto em SOBRE.hero.image
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── NOSSA HISTÓRIA ───────────────────────────────── */}
        <section className="bg-white sec-py border-t border-ink-border">
          <div className="wrap">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* Left — eyebrow + title + texto */}
              <div>
                <p className="eyebrow mb-4">{d.historia.eyebrow}</p>
                <h2 className="font-display text-display-lg text-ink mb-6">{d.historia.title}</h2>
                <p className="text-ink-muted text-[15px] leading-relaxed">
                  {d.historia.body}
                </p>
              </div>

              {/* Right — uma foto dos dois juntos */}
              <div className="rounded-3xl border border-ink-border overflow-hidden bg-bege-light">
                <div className="relative aspect-[4/3] flex items-center justify-center flex-col gap-2">
                  {d.historia.photo1.src ? (
                    <img src={d.historia.photo1.src} alt={d.historia.photo1.alt}
                         className="absolute inset-0 w-full h-full object-cover object-center" />
                  ) : (
                    <>
                      <div className="w-12 h-12 rounded-full bg-verde-light flex items-center justify-center">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                          <circle cx="11" cy="8" r="4" stroke="#1D9E75" strokeWidth="1.5"/>
                          <path d="M3 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#1D9E75" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <p className="text-ink-faint text-[12px]">{d.historia.photo1.alt}</p>
                      <p className="text-ink-faint/40 text-[11px] italic">
                        Adicionar foto em SOBRE.historia.photo1.src
                      </p>
                    </>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── COMO ATENDEMOS ───────────────────────────────── */}
        <section className="sec-py border-t border-bege-mid" style={{ background: "#F5EFE6" }}>
          <div className="wrap">
            <div className="max-w-2xl mx-auto text-center">
              <p className="eyebrow mb-4">{d.atendimento.eyebrow}</p>
              <h2 className="font-display text-display-lg text-ink mb-6">{d.atendimento.title}</h2>
              <p className="text-ink-muted text-[15px] leading-relaxed">{d.atendimento.body}</p>
            </div>
          </div>
        </section>

        {/* ── FOTOS DO CONSULTÓRIO ─────────────────────────── */}
        <section className="bg-white sec-py border-t border-ink-border">
          <div className="wrap">
            <div className="grid sm:grid-cols-3 gap-4">
              {d.fotos.map((foto, i) => (
                <div key={i} className="group rounded-2xl overflow-hidden border border-ink-border bg-bege-light
                                        hover:-translate-y-1 hover:shadow-card hover:border-verde/25 transition-all duration-300">
                  <div className="relative aspect-[4/3] flex items-center justify-center flex-col gap-2">
                    {foto.src ? (
                      <img src={foto.src} alt={foto.alt}
                           className="absolute inset-0 w-full h-full object-cover object-center" />
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-xl bg-verde-light flex items-center justify-center">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="5" width="18" height="14" rx="2" stroke="#1D9E75" strokeWidth="1.5"/>
                            <circle cx="12" cy="12" r="3.5" stroke="#1D9E75" strokeWidth="1.5"/>
                          </svg>
                        </div>
                        <p className="text-ink-faint text-[11px]">{foto.alt}</p>
                        <p className="text-ink-faint/40 text-[10px] italic">adicionar foto</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ────────────────────────────────────── */}
        <section className="bg-verde sec-py relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
          <div className="wrap relative">
            <div className="max-w-xl">
              <h2 className="font-display text-display-lg text-white mb-4 leading-[1.08]">
                {d.cta.title}
              </h2>
              <p className="text-white/55 text-[15px] leading-relaxed mb-9 max-w-md">
                {d.cta.body}
              </p>
              <Link href={d.cta.button.href} target="_blank" rel="noopener noreferrer"
                    className="btn-white group gap-2">
                <MessageCircle size={16} />
                {d.cta.button.label}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
