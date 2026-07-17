import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import SubPageHero from "@/components/subpage/SubPageHero";
import SubPageFeatures from "@/components/subpage/SubPageFeatures";
import SubPageCTA from "@/components/subpage/SubPageCTA";
import { AVALIACAO } from "@/config/content-avaliacao";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avaliações Físicas e Clínicas",
  description: "Bioimpedância, dinamometria, VO₂max, avaliação postural, flexibilidade e termografia clínica em Belo Horizonte.",
};

export default function Page() {
  const d = AVALIACAO;
  return (
    <>
      <Header />
      <main>
        <SubPageHero {...d.hero} />

        {/* ── AVALIAÇÕES POR OBJETIVO ──────────────────────── */}
        <section className="py-10 md:py-14 border-t border-bege-mid" style={{ background: "#F5EFE6" }}>
          <div className="wrap">
            <div className="mb-8 pb-6 border-b border-bege-dark/40">
              <p className="eyebrow mb-3">{d.objetivos.eyebrow}</p>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                <h2 className="font-display text-display-lg text-ink">{d.objetivos.title}</h2>
                <p className="text-ink-muted text-[14px] leading-relaxed max-w-sm lg:text-right">
                  {d.objetivos.body}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {d.objetivos.items.map((item, i) => (
                <div key={i}
                     className="group bg-white rounded-2xl border border-ink-border px-5 py-4
                                flex items-center gap-3 hover:border-verde hover:shadow-card
                                transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-verde-light
                                  flex items-center justify-center
                                  group-hover:bg-verde transition-colors duration-300">
                    <ArrowRight size={12} className="text-verde group-hover:text-white
                                                     transition-colors duration-300" strokeWidth={2.5} />
                  </div>
                  <span className="text-ink-mid text-[13px] leading-snug font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SubPageFeatures eyebrow={d.features.eyebrow} title={d.features.title} body={d.features.body} features={d.features.items} />
        <SubPageCTA {...d.cta} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
