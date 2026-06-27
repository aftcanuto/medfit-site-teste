"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";
import { NAV } from "@/config/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">

        {/* MOBILE: barra superior */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3">
          <Link href="/" className="inline-block" onClick={() => setOpen(false)}>
            <div className="bg-white rounded-xl px-2.5 py-1.5 shadow-sm inline-flex">
              <Image src="/logo.png" alt="MedFit" width={110} height={36}
                     className="h-8 w-auto object-contain" priority />
            </div>
          </Link>
          <button
            className="bg-white rounded-xl p-2.5 shadow-sm text-ink-mid"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* DESKTOP: card flutuante */}
        <div className="hidden lg:block px-5 pt-3">
          <div className={`bg-white transition-all duration-300 rounded-2xl
              ${scrolled ? "shadow-header" : "shadow-[0_1px_12px_rgba(0,0,0,0.06)]"}`}>
            <div className="flex items-center justify-between px-5 py-2.5">
              <Link href="/" className="flex items-center group flex-shrink-0">
                <Image src="/logo.png" alt="MedFit Saúde e Bem-estar" width={160} height={54}
                       className="h-11 w-auto object-contain transition-opacity duration-200 group-hover:opacity-80"
                       priority />
              </Link>
              <nav className="flex items-center gap-5">
                {NAV.links.map((l) => (
                  <Link key={l.href} href={l.href}
                        className="text-[14px] text-ink-mid hover:text-verde font-semibold
                                   transition-colors duration-200 relative group whitespace-nowrap tracking-[-0.01em]">
                    {l.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-verde
                                     transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-3">
                <Link href={NAV.store.href} aria-label={NAV.store.label}
                      className="w-9 h-9 rounded-xl border border-ink-border flex items-center justify-center
                                 text-ink-muted hover:text-verde hover:border-verde/40 transition-all duration-200">
                  <ShoppingBag size={16} strokeWidth={1.75} />
                </Link>
                <Link href={NAV.cta.href}
                      className="bg-verde text-white px-5 py-2.5 rounded-full text-[13px] font-medium
                                 transition-all duration-200 hover:bg-verde-dark whitespace-nowrap">
                  {NAV.cta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* MOBILE: overlay tela cheia — fundo bege claro */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-[60] flex flex-col bg-white">

          {/* Topo */}
          <div className="flex items-center justify-between px-5 pt-5 pb-4
                          border-b border-ink-border">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image src="/logo.png" alt="MedFit" width={110} height={36}
                     className="h-8 w-auto object-contain" priority />
            </Link>
            <button onClick={() => setOpen(false)}
                    className="w-10 h-10 rounded-xl flex items-center justify-center
                               text-ink-mid border border-ink-border">
              <X size={20} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col px-5 pt-4 gap-0 flex-1">
            {NAV.links.map((l) => (
              <Link key={l.href} href={l.href}
                    className="py-4 text-[17px] font-semibold text-ink
                               border-b border-ink-border last:border-0"
                    onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="px-5 pb-10 pt-4 flex flex-col gap-3 border-t border-ink-border">
            <Link href={NAV.store.href} onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 border border-ink-border
                             rounded-full py-3.5 text-[14px] font-semibold text-ink-mid">
              <ShoppingBag size={16} strokeWidth={1.75} />
              {NAV.store.label}
            </Link>
            <Link href={NAV.cta.href} onClick={() => setOpen(false)}
                  className="flex items-center justify-center bg-verde rounded-full
                             py-4 text-[15px] font-semibold text-white">
              {NAV.cta.label}
            </Link>
          </div>

        </div>
      )}
    </>
  );
}
