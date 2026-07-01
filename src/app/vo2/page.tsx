"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import SubPageHero from "@/components/subpage/SubPageHero";
import SubPageProcess from "@/components/subpage/SubPageProcess";
import SubPageCTA from "@/components/subpage/SubPageCTA";
import { VO2 } from "@/config/content-vo2";

function RelatorioCard() {
  const fotos = VO2.relatorio.fotos.filter(Boolean);
  const [current, setCurrent] = useState(0);
  const hasFotos = fotos.length > 0;

  const prev = () => setCurrent((c) => (c - 1 + fotos.length) % fotos.length);
  const next = () => setCurrent((c) => (c + 1) % fotos.length);

  return (
    <div className="rounded-2xl border border-ink-border bg-white flex flex-col overflow-hidden h-full">
      {/* Header */}
      <div className="px-5 py-4 border-b border-ink-border flex-shrink-0">
        <p className="eyebrow mb-1">{VO2.relatorio.label}</p>
        <p className="font-display text-ink font-medium text-[1.05rem] leading-snug">
          {VO2.relatorio.title}
        </p>
      </div>

      {/* Viewer */}
      <div className="flex-1 relative bg-bege-light flex items-center justify-center min-h-[300px]">
        {hasFotos ? (
          <>
            <img
              src={fotos[current]}
              alt={`Relatório página ${current + 1}`}
              className="absolute inset-0 w-full h-full object-contain p-2"
            />
            {/* Nav arrows — só quando > 1 foto */}
            {fotos.length > 1 && (
              <>
                <button onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full
                             bg-white border border-ink-border flex items-center justify-center
                             hover:border-verde/40 hover:text-verde transition-all duration-200 z-10">
                  <ChevronLeft size={16} />
                </button>
                <button onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full
                             bg-white border border-ink-border flex items-center justify-center
                             hover:border-verde/40 hover:text-verde transition-all duration-200 z-10">
                  <ChevronRight size={16} />
                </button>
              </>
            )}
          </>
        ) : (
          /* Placeholder */
          <div className="flex flex-col items-center gap-3 px-6 text-center">
            <div className="w-11 h-11 rounded-xl bg-verde-light flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#1D9E75" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="3.5" stroke="#1D9E75" strokeWidth="1.5"/>
              </svg>
            </div>
            <p className="text-ink-faint text-[12px] leading-relaxed">
              Adicionar fotos do laudo em<br />
              <span className="font-medium text-ink-mid">content-vo2.ts → relatorio.fotos</span>
            </p>
          </div>
        )}
      </div>

      {/* Dots + counter */}
      {hasFotos && fotos.length > 1 && (
        <div className="flex items-center justify-center gap-2 py-3 border-t border-ink-border flex-shrink-0">
          {fotos.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200
                          ${i === current ? "bg-verde w-3" : "bg-ink-border"}`}
            />
          ))}
          <span className="text-ink-faint text-[11px] ml-2">
            {current + 1}/{fotos.length}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Page() {
  const d = VO2;

  return (
    <>
      <Header />
      <main>
        <SubPageHero {...d.hero} />

        {/* Grid 2×3 + card relatório */}
        <section className="bg-white sec-py border-t border-ink-border">
          <div className="wrap">

            {/* Header */}
            <div className="mb-10 pb-8 border-b border-ink-border">
              <p className="eyebrow mb-4">{d.features.eyebrow}</p>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                <h2 className="font-display text-display-lg text-ink leading-[1.1]">
                  {d.features.title}
                </h2>
                {d.features.body && (
                  <p className="text-ink-muted text-[14px] leading-relaxed max-w-sm lg:text-right">
                    {d.features.body}
                  </p>
                )}
              </div>
            </div>

            {/* Layout: cards 2×3 | relatório */}
            <div className="grid lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] gap-6 items-start">

              {/* Grid 2×3 */}
              <div className="grid grid-cols-2 gap-4">
                {d.features.items.map((f, i) => (
                  <div key={i}
                       className="group rounded-2xl border border-ink-border bg-white p-5
                                  hover:border-verde/25 hover:shadow-card hover:-translate-y-0.5
                                  transition-all duration-200">
                    <div className="w-5 h-[2.5px] bg-verde rounded-full mb-3" />
                    <h3 className="font-display text-ink font-medium text-[0.95rem] mb-1.5 leading-snug
                                   group-hover:text-verde transition-colors duration-200">
                      {f.title}
                    </h3>
                    <p className="text-ink-muted text-[12px] leading-relaxed">{f.description}</p>
                  </div>
                ))}
              </div>

              {/* Card relatório com carrossel */}
              <RelatorioCard />

            </div>
          </div>
        </section>

        <SubPageProcess {...d.process} />
        <SubPageCTA {...d.cta} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
