import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { LOJA } from "@/config/content-loja";

export default function Page() {
  return (
    <>
      <Header />
      <main>

        {/* HERO */}
        <section className="relative bg-bege pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
          <div className="wrap relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-verde-light flex items-center justify-center">
                <ShoppingBag size={16} className="text-verde" strokeWidth={1.75} />
              </div>
              <p className="eyebrow">{LOJA.hero.eyebrow}</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-end">
              <h1 className="font-display text-display text-ink leading-[1.08] tracking-[-0.02em]">
                {LOJA.hero.title}<br />
                <span className="text-verde italic">{LOJA.hero.titleAccent}</span>
              </h1>
              <p className="text-ink-muted text-[15px] leading-relaxed max-w-md lg:pb-2">
                {LOJA.hero.description}
              </p>
            </div>
            <div className="w-10 h-[3px] bg-verde rounded-full mt-8" />
          </div>
        </section>

        {/* PRODUTOS */}
        <section className="bg-white sec-py border-t border-ink-border">
          <div className="wrap">
            {LOJA.categories.map((cat) => {
              const items         = LOJA.products.filter((p) => p.category === cat.slug);
              if (!items.length) return null;
              const featuredItems = items.filter((p) => p.featured);
              const regularItems  = items.filter((p) => !p.featured);

              return (
                <div key={cat.slug} className="mb-16 last:mb-0">

                  {/* Category label */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="eyebrow">{cat.label}</span>
                    <div className="flex-1 h-px bg-ink-border" />
                  </div>

                  {/* Featured — bege card horizontal */}
                  {featuredItems.map((product, i) => (
                    <Link key={i} href={product.href} target="_blank" rel="noopener noreferrer"
                          className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6
                                     rounded-3xl p-7 mb-4 border bg-bege-light
                                     hover:border-verde/30 hover:-translate-y-0.5 hover:shadow-card
                                     transition-all duration-300"
                          style={{ borderColor: "rgba(0,0,0,0.07)" }}>
                      <div className="flex-1">
                        <span className="inline-flex items-center gap-1.5 bg-verde-light border border-verde-border
                                         rounded-full px-3 py-1 text-[11px] font-medium text-verde mb-3">
                          <span className="w-1 h-1 rounded-full bg-verde block" />
                          Destaque
                        </span>
                        <h3 className="font-display text-ink text-2xl font-medium mb-2
                                       group-hover:text-verde transition-colors duration-200">
                          {product.title}
                        </h3>
                        <p className="text-ink-muted text-[14px] leading-relaxed max-w-lg">
                          {product.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 sm:text-right">
                        <p className="font-display text-ink text-3xl font-medium">{product.price}</p>
                        <p className="text-ink-faint text-[12px] mt-1">{product.duration}</p>
                        <div className="mt-4 flex sm:justify-end items-center gap-1.5
                                        text-verde text-[13px] font-medium">
                          Agendar
                          <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </Link>
                  ))}

                  {/* Regular grid */}
                  {regularItems.length > 0 && (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {regularItems.map((product, i) => (
                        <Link key={i} href={product.href} target="_blank" rel="noopener noreferrer"
                              className="group flex flex-col justify-between rounded-2xl p-6
                                         border bg-white hover:border-verde/30 hover:-translate-y-1
                                         hover:shadow-card transition-all duration-300"
                              style={{ borderColor: "rgba(0,0,0,0.07)" }}>
                          <div>
                            <h3 className="font-display text-ink text-lg font-medium mb-2
                                           group-hover:text-verde transition-colors duration-200">
                              {product.title}
                            </h3>
                            <p className="text-ink-muted text-[13px] leading-relaxed">
                              {product.description}
                            </p>
                          </div>
                          <div className="flex items-end justify-between mt-5 pt-4 border-t border-ink-border">
                            <div>
                              <p className="font-display text-ink text-xl font-medium leading-none">
                                {product.price}
                              </p>
                              <p className="text-ink-faint text-[11px] mt-1">{product.duration}</p>
                            </div>
                            <div className="flex items-center gap-1 text-verde text-[12px] font-medium">
                              Agendar
                              <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-verde sec-py relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
          <div className="wrap relative">
            <div className="max-w-xl">
              <h2 className="font-display text-display-lg text-white mb-4 leading-[1.08]">
                {LOJA.cta.title}
              </h2>
              <p className="text-white/55 text-[15px] leading-relaxed mb-9 max-w-md">
                {LOJA.cta.body}
              </p>
              <Link href={LOJA.cta.button.href} target="_blank" rel="noopener noreferrer"
                    className="btn-white group gap-2">
                {LOJA.cta.button.label}
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
