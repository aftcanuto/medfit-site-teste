import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import SubPageCTA from "@/components/subpage/SubPageCTA";
import { MEDICINA } from "@/config/content-medicina";

export default function Page() {
  const d = MEDICINA;

  return (
    <>
      <Header />
      <main>

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative bg-bege overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

          {/* MOBILE: banner */}
          <div className="lg:hidden relative w-full h-52 mt-16">
            <Image src={d.hero.image} alt={d.hero.imageAlt} fill priority
                   className="object-cover" style={{ objectPosition: (d.hero.imagePosition ?? "center 20%").replace(/_/g, " ") }} sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bege" />
          </div>

          <div className="wrap relative pt-6 pb-14 md:pb-20 lg:pt-36 lg:pb-24">
            <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
              <div>
                <p className="eyebrow mb-4">{d.hero.eyebrow}</p>
                <h1 className="font-display text-display text-ink leading-[1.08] tracking-[-0.02em] mb-2">
                  {d.hero.title}
                </h1>
                <h2 className="font-display text-display text-verde italic leading-[1.08] tracking-[-0.02em] mb-5">
                  {d.hero.titleAccent}
                </h2>
                <div className="w-10 h-[3px] bg-verde rounded-full mb-6" />
                <p className="text-ink-muted text-[15px] leading-relaxed max-w-md mb-10">
                  {d.hero.description}
                </p>
                <Link href={d.hero.cta.href} target="_blank" rel="noopener noreferrer"
                      className="btn-verde gap-2.5 group text-[14px] px-7 py-4">
                  <MessageCircle size={17} />
                  {d.hero.cta.label}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white rounded-5xl p-3 shadow-float">
                  <div className="relative aspect-[4/5] rounded-4xl overflow-hidden bg-bege-light">
                    <Image src={d.hero.image} alt={d.hero.imageAlt} fill priority
                           className="object-cover object-center" sizes="400px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVIÇOS — 6 cards sem foto ──────────────────── */}
        <section className="bg-white sec-py border-t border-ink-border">
          <div className="wrap">
            <div className="mb-10 pb-8 border-b border-ink-border">
              <p className="eyebrow mb-4">{d.servicos.eyebrow}</p>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                <h2 className="font-display text-display-lg text-ink leading-[1.1]">
                  {d.servicos.title}
                </h2>
                <p className="text-ink-muted text-[14px] leading-relaxed max-w-sm lg:text-right">
                  {d.servicos.body}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {d.servicos.items.map((f, i) => (
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

        {/* ── MEDICINA E MOVIMENTO ─────────────────────────── */}
        <section className="sec-py border-t border-bege-mid" style={{ background: "#F5EFE6" }}>
          <div className="wrap">
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start mb-10">
              <div>
                <p className="eyebrow mb-4">{d.movimento.eyebrow}</p>
                <h2 className="font-display text-display-lg text-ink leading-[1.1]">
                  {d.movimento.title}
                </h2>
              </div>
              <p className="text-ink-muted text-[15px] leading-relaxed lg:pt-14">
                {d.movimento.body}
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {d.movimento.pilares.map((p, i) => (
                <div key={i}
                     className="group rounded-2xl border border-bege-dark/30 bg-white p-6
                                hover:border-verde/25 hover:shadow-card hover:-translate-y-0.5
                                transition-all duration-200">
                  <div className="w-5 h-[2.5px] bg-verde rounded-full mb-4" />
                  <h3 className="font-display text-ink font-medium text-[1.05rem] mb-2
                                 group-hover:text-verde transition-colors duration-200">
                    {p.title}
                  </h3>
                  <p className="text-ink-muted text-[13px] leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTEGRADO OU INDEPENDENTE ────────────────────── */}
        <section className="bg-white sec-py border-t border-ink-border">
          <div className="wrap">
            <div className="max-w-2xl mx-auto text-center">
              <p className="eyebrow mb-4">{d.integrado.eyebrow}</p>
              <h2 className="font-display text-display-lg text-ink mb-6">{d.integrado.title}</h2>
              <p className="text-ink-muted text-[15px] leading-relaxed">{d.integrado.body}</p>
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
