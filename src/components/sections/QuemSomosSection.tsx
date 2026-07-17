import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { QUEM_SOMOS_HOME } from "@/config/content";

export default function QuemSomosSection() {
  return (
    /* Fundo bege como "moldura" — card branco flutua dentro */
    <section className="border-t border-bege-mid" style={{ background: "#F0EAE0" }}>
      <div className="wrap py-5">
        <div className="bg-white rounded-3xl shadow-card border border-ink-border px-8 py-6 md:px-12 md:py-8">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-start">

            {/* Left */}
            <div>
              <p className="eyebrow mb-4">{QUEM_SOMOS_HOME.eyebrow}</p>
              <h2 className="font-display text-display-sm text-ink leading-[1.15]">
                {QUEM_SOMOS_HOME.title}
              </h2>
            </div>

            {/* Right */}
            <div>
              <p className="text-ink-muted text-[15px] leading-relaxed mb-7">
                {QUEM_SOMOS_HOME.body}
              </p>
              <Link
                href={QUEM_SOMOS_HOME.cta.href}
                className="inline-flex items-center gap-2 text-verde font-medium text-[14px]
                           border-b border-verde/30 pb-0.5
                           hover:border-verde transition-colors duration-200 group"
              >
                {QUEM_SOMOS_HOME.cta.label}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
