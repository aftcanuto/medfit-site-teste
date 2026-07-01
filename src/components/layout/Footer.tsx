import Link from "next/link";
import Image from "next/image";
import { Instagram, MessageCircle, Mail } from "lucide-react";
import { FOOTER, SITE, UI } from "@/config/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0F1A14" }} className="text-white">
      <div className="wrap pt-10 pb-6 lg:pt-16 lg:pb-8">

        {/* Mobile: logo + socials numa linha compacta */}
        <div className="flex items-center justify-between mb-8 lg:hidden">
          <Link href="/" className="inline-block">
            <div className="bg-white rounded-xl px-2.5 py-1.5 inline-flex">
              <Image src="/logo.png" alt="MedFit" width={100} height={34}
                     className="h-7 w-auto object-contain" />
            </div>
          </Link>
          <div className="flex items-center gap-2">
            {[
              { href: SITE.instagram, Icon: Instagram, label: "Instagram" },
              { href: SITE.whatsapp, Icon: MessageCircle, label: "WhatsApp" },
              { href: `mailto:${SITE.email}`, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <Link key={label} href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="w-8 h-8 rounded-lg border border-white/15 text-white/50
                               flex items-center justify-center hover:bg-verde hover:border-verde
                               hover:text-white transition-all duration-200">
                <Icon size={14} />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile: links em 2 colunas compactas */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 mb-8 lg:hidden">
          <div>
            <p className="text-white/70 text-[10px] font-semibold tracking-[0.12em] uppercase mb-3">
              {UI.footer.colServices}
            </p>
            <ul className="space-y-2">
              {FOOTER.links.servicos.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/55 text-[13px] hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white/70 text-[10px] font-semibold tracking-[0.12em] uppercase mb-3">
              {UI.footer.colInstitutional}
            </p>
            <ul className="space-y-2 mb-6">
              {FOOTER.links.institucional.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/55 text-[13px] hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-white/70 text-[10px] font-semibold tracking-[0.12em] uppercase mb-3">
              {UI.footer.colContact}
            </p>
            <div className="space-y-1">
              <p className="text-white/55 text-[12px] leading-relaxed">
                {SITE.address.neighborhood}<br />{SITE.address.city}, {SITE.address.state}
              </p>

            </div>
          </div>
        </div>

        {/* Desktop: layout completo — oculto no mobile */}
        <div className="hidden lg:grid lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 mb-14 pb-14 border-b border-white/8">
          <div>
            <Link href="/" className="inline-block mb-5 group">
              <div className="bg-white rounded-xl px-3 py-2 inline-flex transition-opacity duration-200 group-hover:opacity-90">
                <Image src="/logo.png" alt="MedFit" width={130} height={44}
                       className="h-9 w-auto object-contain" />
              </div>
            </Link>
            <p className="text-white/55 text-[13px] leading-relaxed max-w-[210px] mb-6">
              {FOOTER.description}
            </p>
            <div className="flex items-center gap-2.5">
              {[
                { href: SITE.instagram, Icon: Instagram, label: "Instagram" },
                { href: SITE.whatsapp, Icon: MessageCircle, label: "WhatsApp" },
                { href: `mailto:${SITE.email}`, Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <Link key={label} href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={label}
                      className="w-9 h-9 rounded-xl flex items-center justify-center
                                 border border-white/20 text-white/55
                                 hover:bg-verde hover:border-verde hover:text-white
                                 transition-all duration-200">
                  <Icon size={15} />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white/70 text-[10px] font-semibold tracking-[0.14em] uppercase mb-5">
              {UI.footer.colServices}
            </p>
            <ul className="space-y-3">
              {FOOTER.links.servicos.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/55 text-[13px] hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white/70 text-[10px] font-semibold tracking-[0.14em] uppercase mb-5">
              {UI.footer.colInstitutional}
            </p>
            <ul className="space-y-3">
              {FOOTER.links.institucional.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/55 text-[13px] hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white/70 text-[10px] font-semibold tracking-[0.14em] uppercase mb-5">
              {UI.footer.colContact}
            </p>
            <div className="space-y-1.5">
              <p className="text-white/55 text-[13px] leading-relaxed">
                {SITE.address.street}<br />{SITE.address.neighborhood}<br />
                {SITE.address.city}, {SITE.address.state}
              </p>

            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5">
          <p className="text-white/25 text-[11px]">{FOOTER.legal}</p>
          <p className="text-white/25 text-[11px]">© {year} MedFit. {UI.footer.copyright}</p>
        </div>

      </div>
    </footer>
  );
}
