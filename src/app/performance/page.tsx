import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import SubPageHero from "@/components/subpage/SubPageHero";
import SubPageProcess from "@/components/subpage/SubPageProcess";
import SubPageCTA from "@/components/subpage/SubPageCTA";
import { PERFORMANCE } from "@/config/content-performance";

export default function Page() {
  const d = PERFORMANCE;
  const items = d.features.items.slice(0, 4);

  return (
    <>
      <Header />
      <main>
        <SubPageHero {...d.hero} />

        {/* 4 cards sem foto */}
        <section className="bg-white sec-py border-t border-ink-border">
          <div className="wrap">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {items.map((f, i) => (
                <div key={i}
                     className="group rounded-2xl border border-ink-border bg-white p-6
                                hover:border-verde/25 hover:shadow-card hover:-translate-y-0.5
                                transition-all duration-200">
                  <div className="w-5 h-[2.5px] bg-verde rounded-full mb-4" />
                  <h3 className="font-display text-ink font-medium text-[1.05rem] mb-2 leading-snug
                                 group-hover:text-verde transition-colors duration-200">
                    {f.title}
                  </h3>
                  <p className="text-ink-muted text-[13px] leading-relaxed">{f.description}</p>
                </div>
              ))}
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
