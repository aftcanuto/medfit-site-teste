import Link from "next/link";
import { MessageCircle, Instagram, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { CONTATO } from "@/config/content-contato";

export default function Page() {
  const d = CONTATO;

  return (
    <>
      <Header />
      <main>

        {/* HERO */}
        <section className="relative bg-bege pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full
                          bg-verde-light blur-[80px] opacity-40 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
          <div className="wrap relative">
            <p className="eyebrow mb-4">{d.hero.eyebrow}</p>
            <h1 className="font-display text-display text-ink leading-[1.08] tracking-[-0.02em] mb-4">
              {d.hero.title}
            </h1>
            <div className="w-10 h-[3px] bg-verde rounded-full mb-5" />
            <p className="text-ink font-medium text-lg mb-2">{d.hero.subtitle}</p>
            <p className="text-ink-muted text-[15px] leading-relaxed max-w-lg">{d.hero.body}</p>
          </div>
        </section>

        {/* CARD DE CONTATO */}
        <section className="bg-white sec-py border-t border-ink-border">
          <div className="wrap">
            <div className="max-w-2xl mx-auto">
              <div className="rounded-3xl border border-ink-border bg-white overflow-hidden shadow-card">

                {/* Header do card */}
                <div className="px-8 py-6 border-b border-ink-border" style={{ background: "#F5EFE6" }}>
                  <h2 className="font-display text-ink text-2xl font-medium">{d.card.titulo}</h2>
                </div>

                {/* Itens */}
                <div className="divide-y divide-ink-border">

                  {/* WhatsApp */}
                  <Link href={d.card.whatsapp.href} target="_blank" rel="noopener noreferrer"
                        className="group flex items-center gap-5 px-8 py-5 hover:bg-bege transition-colors duration-200">
                    <div className="w-10 h-10 rounded-xl bg-verde-light flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={18} className="text-verde" strokeWidth={1.75} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-medium tracking-widest uppercase text-verde mb-0.5">{d.card.whatsapp.label}</p>
                      <p className="font-display text-ink text-lg font-medium group-hover:text-verde transition-colors duration-200">{d.card.whatsapp.numero}</p>
                    </div>
                    <ArrowRight size={16} className="text-ink-faint group-hover:text-verde transition-colors duration-200" />
                  </Link>

                  {/* Instagram */}
                  <Link href={d.card.instagram.href} target="_blank" rel="noopener noreferrer"
                        className="group flex items-center gap-5 px-8 py-5 hover:bg-bege transition-colors duration-200">
                    <div className="w-10 h-10 rounded-xl bg-verde-light flex items-center justify-center flex-shrink-0">
                      <Instagram size={18} className="text-verde" strokeWidth={1.75} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-medium tracking-widest uppercase text-verde mb-0.5">{d.card.instagram.label}</p>
                      <p className="font-display text-ink text-lg font-medium group-hover:text-verde transition-colors duration-200">{d.card.instagram.handle}</p>
                    </div>
                    <ArrowRight size={16} className="text-ink-faint group-hover:text-verde transition-colors duration-200" />
                  </Link>

                  {/* E-mail */}
                  <Link href={d.card.email.href}
                        className="group flex items-center gap-5 px-8 py-5 hover:bg-bege transition-colors duration-200">
                    <div className="w-10 h-10 rounded-xl bg-verde-light flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-verde" strokeWidth={1.75} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-medium tracking-widest uppercase text-verde mb-0.5">{d.card.email.label}</p>
                      <p className="font-display text-ink text-lg font-medium group-hover:text-verde transition-colors duration-200">{d.card.email.address}</p>
                    </div>
                    <ArrowRight size={16} className="text-ink-faint group-hover:text-verde transition-colors duration-200" />
                  </Link>

                  {/* Endereço */}
                  <Link href={d.card.endereco.mapsHref} target="_blank" rel="noopener noreferrer"
                        className="group flex items-center gap-5 px-8 py-5 hover:bg-bege transition-colors duration-200">
                    <div className="w-10 h-10 rounded-xl bg-verde-light flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-verde" strokeWidth={1.75} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] font-medium tracking-widest uppercase text-verde mb-0.5">{d.card.endereco.label}</p>
                      <p className="font-display text-ink text-[1rem] font-medium leading-snug group-hover:text-verde transition-colors duration-200">{d.card.endereco.logradouro}</p>
                      <p className="text-ink-muted text-[13px] mt-0.5">{d.card.endereco.complemento} — {d.card.endereco.cidade}</p>
                    </div>
                    <ArrowRight size={16} className="text-ink-faint group-hover:text-verde transition-colors duration-200" />
                  </Link>

                  {/* Horários */}
                  <div className="flex items-start gap-5 px-8 py-5">
                    <div className="w-10 h-10 rounded-xl bg-verde-light flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-verde" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium tracking-widest uppercase text-verde mb-2">{d.card.horarios.label}</p>
                      <div className="space-y-1">
                        {d.card.horarios.items.map((h, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <span className="text-ink font-medium text-[14px]">{h.dias}</span>
                            <span className="text-ink-faint text-[12px]">·</span>
                            <span className="text-ink-muted text-[14px]">{h.hora}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* CTA */}
                <div className="px-8 py-6 border-t border-ink-border" style={{ background: "#F5EFE6" }}>
                  <Link href={d.cta.href} target="_blank" rel="noopener noreferrer"
                        className="btn-verde w-full justify-center gap-2 group">
                    <MessageCircle size={16} />
                    {d.cta.label}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
