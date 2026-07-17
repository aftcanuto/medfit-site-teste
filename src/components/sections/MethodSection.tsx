"use client";
import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { METHOD } from "@/config/content";

export default function MethodSection() {
  const ref = useRef<HTMLElement>(null);
  const [openStep, setOpenStep] = useState<number | null>(null);

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

  return (
    <section ref={ref} className="bg-white sec-py border-t border-ink-border">
      <div className="wrap">

        {/* Header */}
        <div className="reveal flex flex-col lg:flex-row lg:items-end justify-between gap-4
                        mb-10 pb-8 border-b border-ink-border">
          <div>
            <p className="eyebrow mb-3">{METHOD.eyebrow}</p>
            <h2 className="font-display text-display-lg text-ink">{METHOD.title}</h2>
          </div>
          <p className="text-ink-muted text-[14px] leading-relaxed max-w-xs lg:text-right hidden lg:block">
            {METHOD.body}
          </p>
        </div>

        {/* ── MOBILE: accordion ────────────────────────────────── */}
        <div className="lg:hidden">
          {METHOD.steps.map((step, i) => {
            const isOpen = openStep === i;
            return (
              <div key={step.number} className="border-b border-ink-border last:border-0">
                <button
                  className="w-full flex items-center justify-between gap-4 py-4 text-left"
                  onClick={() => setOpenStep(isOpen ? null : i)}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm font-semibold text-verde flex-shrink-0">
                      {step.number}
                    </span>
                    <span className={`font-display text-[1.05rem] font-medium leading-snug transition-colors duration-200
                                      ${isOpen ? "text-verde" : "text-ink"}`}>
                      {step.title}
                    </span>
                  </div>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center
                                  transition-all duration-200
                                  ${isOpen ? "bg-verde text-white" : "bg-surface-subtle text-ink-faint border border-ink-border"}`}>
                    {isOpen ? <Minus size={11} strokeWidth={2.5} /> : <Plus size={11} strokeWidth={2.5} />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out
                                ${isOpen ? "max-h-32 pb-4" : "max-h-0"}`}>
                  <p className="text-ink-muted text-[13px] leading-relaxed pl-7">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── DESKTOP: editorial list ───────────────────────────── */}
        <div className="hidden lg:block">
          {METHOD.steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal d${i + 1} group relative flex gap-10
                          py-8 border-b border-ink-border last:border-0
                          hover:bg-bege-light/60 rounded-2xl px-4 -mx-4
                          transition-all duration-300 cursor-default`}
            >
              <span
                className="absolute right-6 top-1/2 -translate-y-1/2 font-display font-light
                           leading-none select-none pointer-events-none text-[6.5rem]"
                style={{ color: "rgba(0,0,0,0.04)" }}
              >
                {step.number}
              </span>
              <div className="flex-shrink-0 w-8 pt-0.5">
                <span className="font-display text-sm font-semibold text-verde">{step.number}</span>
              </div>
              <div className="flex-1 max-w-lg">
                <h3 className="font-display text-[1.25rem] font-medium text-ink mb-1.5 leading-snug
                               group-hover:text-verde transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-ink-muted text-[14px] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
