"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { SERVICES, UI } from "@/config/content";

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const [openService, setOpenService] = useState<number | null>(null);

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

  const [featured, ...rest] = SERVICES.cards;

  return (
    <section ref={ref} className="sec-py border-t border-bege-mid" style={{ background: "#EDE7DC" }}>
      <div className="wrap">

        {/* Header */}
        <div className="reveal mb-8 pb-7 border-b border-bege-dark/40">
          <p className="eyebrow mb-3">{SERVICES.eyebrow}</p>
          <h2 className="font-display text-display-lg text-ink">{SERVICES.title}</h2>
        </div>

        {/* Featured — igual em mobile e desktop */}
        <Link
          href={featured.href}
          className="reveal group flex items-center justify-between gap-4
                     rounded-3xl p-6 lg:p-9 mb-4
                     transition-all duration-300 hover:-translate-y-0.5 hover:shadow-float"
          style={{ background: "#0E2A1E", border: "1px solid rgba(45,184,138,0.15)" }}
        >
          <div>
            <span className="text-verde-mid text-[11px] font-medium tracking-widest uppercase">
              {UI.services.featuredBadge}
            </span>
            <h3 className="font-display text-white text-xl lg:text-3xl font-medium mt-1.5 mb-2
                           group-hover:text-verde-mid transition-colors duration-200">
              {featured.title}
            </h3>
            <p className="text-white/50 text-[13px] leading-relaxed max-w-md">{featured.description}</p>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                          transition-all duration-300 group-hover:bg-verde group-hover:border-verde"
               style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
            <ArrowRight size={16} className="text-white/40 group-hover:text-white transition-colors" />
          </div>
        </Link>

        {/* ── MOBILE: accordion ────────────────────────────────── */}
        <div className="lg:hidden bg-white rounded-2xl overflow-hidden border border-bege-dark/20">
          {rest.map((card, i) => {
            const isOpen = openService === i;
            return (
              <div key={card.href} className="border-b border-bege-mid last:border-0">
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenService(isOpen ? null : i)}
                >
                  <span className={`font-display text-[1rem] font-medium leading-snug transition-colors duration-200
                                    ${isOpen ? "text-verde" : "text-ink"}`}>
                    {card.title}
                  </span>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center
                                  transition-all duration-200
                                  ${isOpen ? "bg-verde text-white" : "bg-bege text-ink-faint border border-bege-mid"}`}>
                    {isOpen ? <Minus size={11} strokeWidth={2.5} /> : <Plus size={11} strokeWidth={2.5} />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out
                                ${isOpen ? "max-h-40 pb-4" : "max-h-0"}`}>
                  <p className="text-ink-muted text-[13px] leading-relaxed px-5 mb-3">
                    {card.description}
                  </p>
                  <Link href={card.href}
                        className="flex items-center gap-1.5 text-verde text-[12px] font-medium px-5">
                    {UI.services.learnMore}
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── DESKTOP: grid ─────────────────────────────────────── */}
        <div className="hidden lg:grid grid-cols-3 gap-3">
          {rest.map((card, i) => (
            <Link
              key={card.href}
              href={card.href}
              className={`reveal d${Math.min(i + 1, 5)} group flex flex-col justify-between
                          rounded-2xl p-6 bg-white border
                          transition-all duration-300 hover:-translate-y-1 hover:shadow-float hover:border-verde/25`}
              style={{ borderColor: "rgba(0,0,0,0.07)" }}
            >
              <div>
                <h3 className="font-display text-ink text-lg font-medium mb-2
                               group-hover:text-verde transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-ink-muted text-[13px] leading-relaxed">{card.description}</p>
              </div>
              <div className="flex items-center gap-1.5 mt-5 text-verde text-[12px] font-medium">
                {UI.services.learnMore}
                <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
