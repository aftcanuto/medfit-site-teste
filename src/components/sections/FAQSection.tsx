"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ } from "@/config/content";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    /* Bege quente — alterna com o branco do Method e do DataCTA */
    <section className="sec-py border-t border-bege-mid" style={{ background: "#F5EFE6" }}>
      <div className="wrap">
        <div className="max-w-2xl mx-auto">

          <div className="mb-10">
            <p className="eyebrow mb-4">{FAQ.eyebrow}</p>
            <h2 className="font-display text-display-sm text-ink">{FAQ.title}</h2>
          </div>

          <div>
            {FAQ.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-bege-dark/40 last:border-0">
                  <button
                    className="w-full flex items-start justify-between gap-6 py-5 text-left group"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className={`text-[14px] font-medium leading-snug transition-colors duration-200
                                      ${isOpen ? "text-verde" : "text-ink group-hover:text-verde"}`}>
                      {item.question}
                    </span>
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center
                                    transition-all duration-200 mt-0.5
                                    ${isOpen ? "bg-verde text-white" : "bg-white text-ink-faint border border-bege-dark/40"}`}>
                      {isOpen ? <Minus size={11} strokeWidth={2.5} /> : <Plus size={11} strokeWidth={2.5} />}
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out
                                  ${isOpen ? "max-h-48 pb-5" : "max-h-0"}`}>
                    <p className="text-[14px] text-ink-muted leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
