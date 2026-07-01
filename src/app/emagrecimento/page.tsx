import { Check } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import SubPageHero from "@/components/subpage/SubPageHero";
import SubPageFeatures from "@/components/subpage/SubPageFeatures";
import SubPageProcess from "@/components/subpage/SubPageProcess";
import SubPageCTA from "@/components/subpage/SubPageCTA";
import { EMAGRECIMENTO } from "@/config/content-emagrecimento";

export default function Page() {
  const d = EMAGRECIMENTO;

  return (
    <>
      <Header />
      <main>
        <SubPageHero {...d.hero} />
        <SubPageFeatures
          eyebrow={d.features.eyebrow}
          title={d.features.title}
          body={d.features.body}
          features={d.features.items}
        />
        <SubPageProcess {...d.process} />

        {/* ── SEÇÃO BENEFÍCIOS ─────────────────────────────── */}
        <section className="py-10 md:py-14 border-t border-bege-mid" style={{ background: "#F5EFE6" }}>
          <div className="wrap">
            {/* Card branco sobre fundo bege — contraste elegante */}
            <div className="bg-white rounded-4xl border border-ink-border shadow-card p-7 lg:p-10">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                {/* Imagem à esquerda */}
                <div className="rounded-3xl overflow-hidden bg-bege-light border border-bege-mid
                                relative aspect-[3/2] flex items-center justify-center flex-col gap-3">
                  {d.beneficios.image ? (
                    <img
                      src={d.beneficios.image}
                      alt={d.beneficios.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  ) : (
                    <>
                      <div className="w-11 h-11 rounded-2xl bg-verde-light flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="5" width="18" height="14" rx="2" stroke="#1D9E75" strokeWidth="1.5"/>
                          <circle cx="12" cy="12" r="3.5" stroke="#1D9E75" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <p className="text-ink-faint text-[12px]">{d.beneficios.imageAlt}</p>
                      <p className="text-ink-faint/40 text-[11px] italic">
                        Adicionar em EMAGRECIMENTO.beneficios.image
                      </p>
                    </>
                  )}
                </div>

                {/* Título + lista à direita */}
                <div>
                  <h2
                    className="font-display text-display-sm leading-[1.1] mb-6"
                    style={{ color: "#0E2A1E" }}
                  >
                    {d.beneficios.title}
                  </h2>
                  <ul className="space-y-3.5">
                    {d.beneficios.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-verde-light
                                        flex items-center justify-center">
                          <Check size={11} className="text-verde" strokeWidth={2.5} />
                        </div>
                        <span className="text-ink-mid text-[14px] leading-snug font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </section>

        <SubPageCTA {...d.cta} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
