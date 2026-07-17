"use client";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";
import { HERO, UI } from "@/config/content";
const heroPos = (HERO as any).imagePosition ?? "center_20%";

export default function Hero() {
  return (
    <section className="relative bg-bege overflow-hidden">

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      {/* Verde glow — desktop only */}
      <div className="hidden lg:block absolute top-0 right-0 w-[500px] h-[500px] rounded-full
                      bg-verde-light blur-[100px] opacity-50 translate-x-1/3 -translate-y-1/4 pointer-events-none" />

      {/* MOBILE: banner de foto no topo */}
      <div className="lg:hidden relative w-full h-52 mt-16">
        <img
          src="/med.jpeg"
          alt="MedFit"
          className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: heroPos.replace(/_/g, " ") }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bege" />
      </div>

      <div className="wrap relative w-full pt-4 pb-14 lg:py-20 lg:min-h-screen lg:flex lg:items-center">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-12 xl:gap-16 items-center">

          {/* LEFT */}
          <div>
            <div className="ha1 inline-flex items-center gap-2.5 border border-verde-border
                            bg-white rounded-full px-4 py-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-verde block flex-shrink-0" />
              <span className="text-[13px] font-medium text-verde tracking-wide">{HERO.eyebrow}</span>
            </div>

            <h1 className="ha2 font-display text-display text-ink leading-[1.08] tracking-[-0.02em] mb-5">
              {HERO.title}<br />
              <span className="text-verde italic">{HERO.titleAccent}</span>
            </h1>

            <div className="ha2 w-10 h-[3px] bg-verde rounded-full mb-6" />

            <p className="ha3 text-ink-muted text-lg leading-relaxed max-w-[360px] mb-10">
              {HERO.subtitle}
            </p>

            <div className="ha3">
              <Link href={HERO.cta.href} target="_blank" rel="noopener noreferrer"
                    className="btn-verde text-[14px] px-7 py-4 gap-2.5 group">
                <MessageCircle size={17} />
                {HERO.cta.label}
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="ha3 flex flex-wrap items-center gap-5 mt-10 pt-8 border-t border-bege-mid">
              {HERO.floatingCards.map((c) => (
                <div key={c.label} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-verde block" />
                  <span className="text-[12px] text-ink-faint font-medium">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — foto local, visível apenas no desktop */}
          <div className="ha4 relative hidden lg:block">
            <div className="bg-white rounded-5xl p-3 shadow-float">
              <div className="relative aspect-[4/5] rounded-4xl overflow-hidden bg-bege-light">
                <img
                  src="/med.jpeg"
                  alt="Avaliação física na MedFit"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white/50 text-[10px] tracking-[0.18em] uppercase font-medium mb-1">
                    {UI.hero.imageLabel}
                  </p>
                  <p className="text-white font-display text-lg font-medium">{UI.hero.imageCaption}</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-full bg-bege-mid -z-10" />
          </div>

        </div>
      </div>

    </section>
  );
}
