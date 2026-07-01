"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DATA_EVALUATION, REAL_FOLLOWUP } from "@/config/content";

export default function DataCTASection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const targets = el.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); } }),
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  const units: Record<string, string> = {
    "Força": "kgf", "Mobilidade": "graus", "Composição corporal": "%",
    "Funcionalidade": "score", "Assimetria": "índice",
    "Condicionamento": "VO₂", "Evolução": "Δ%",
  };

  return (
    <section ref={ref} className="bg-white sec-py border-t border-ink-border">
      <div className="wrap">

        {/* Eyebrow — verde, igual ao padrão do site */}
        <div className="reveal mb-8">
          <p className="eyebrow">{DATA_EVALUATION.eyebrow}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">

          {/* LEFT — verde escuro, não preto */}
          <div className="reveal rounded-4xl p-9 lg:p-11 flex flex-col justify-between min-h-[380px]"
               style={{ background: "#0E2A1E", border: "1px solid rgba(45,184,138,0.12)" }}>
            <div>
              <h2 className="font-display text-display-sm text-white leading-[1.1] mb-4">
                {REAL_FOLLOWUP.title}
              </h2>
              <p className="text-white/55 text-[14px] leading-relaxed max-w-sm">
                {REAL_FOLLOWUP.body}
              </p>
            </div>
            <div className="mt-8">
              <Link href={REAL_FOLLOWUP.cta.href} target="_blank" rel="noopener noreferrer"
                    className="btn-white group">
                {REAL_FOLLOWUP.cta.label}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* RIGHT — bege claro com badges */}
          <div className="reveal d1 flex flex-col gap-4">
            <div className="rounded-4xl p-8 border border-bege-mid" style={{ background: "#F5EFE6" }}>
              <h3 className="font-display text-display-sm text-ink leading-[1.1] mb-3">
                {DATA_EVALUATION.title}
              </h3>
              <p className="text-ink-muted text-[13px] leading-relaxed">{DATA_EVALUATION.body}</p>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {DATA_EVALUATION.badges.map((badge) => (
                <div key={badge}
                     className="group bg-white rounded-2xl px-4 py-3.5 border border-bege-mid
                                hover:border-verde/30 hover:-translate-y-0.5 hover:shadow-card transition-all duration-200">
                  <p className="font-display text-verde text-lg font-medium leading-none mb-1">
                    {units[badge] ?? "—"}
                  </p>
                  <p className="text-ink text-[11px] font-medium leading-tight">{badge}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
