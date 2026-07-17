import Link from "next/link";
import { MapPin, Clock, MessageCircle, Instagram, ExternalLink } from "lucide-react";
import { LOCATION, SITE, UI } from "@/config/content";

export default function LocationSection() {
  // Embed válido começa com google.com/maps/embed
  const isEmbed = SITE.address.mapsEmbed?.includes("maps/embed");

  return (
    <section className="bg-bege sec-py border-t border-bege-mid">
      <div className="wrap">
        <div className="mb-10">
          <p className="eyebrow mb-3">{LOCATION.eyebrow}</p>
          <h2 className="font-display text-display-sm text-ink">{LOCATION.title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Info */}
          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                <MapPin size={15} className="text-verde" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-[11px] text-ink-faint font-medium uppercase tracking-wider mb-1">Endereço</p>
                <p className="text-ink-muted text-[14px] leading-relaxed">
                  {SITE.address.street}, {SITE.address.complement}<br />
                  {SITE.address.neighborhood} — {SITE.address.city}, {SITE.address.state}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                <Clock size={15} className="text-verde" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-[11px] text-ink-faint font-medium uppercase tracking-wider mb-1">Horários</p>
                {SITE.hours.map((h) => (
                  <p key={h.days} className="text-ink-muted text-[14px]">
                    {h.days}: <span className="text-ink font-medium">{h.time}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <p className="text-ink-muted text-[14px] leading-relaxed mb-5">{LOCATION.body}</p>
              <div className="flex flex-wrap gap-3">
                <Link href={LOCATION.cta.whatsapp.href} target="_blank" rel="noopener noreferrer"
                      className="btn-verde gap-2">
                  <MessageCircle size={15} />
                  {LOCATION.cta.whatsapp.label}
                </Link>
                <Link href={LOCATION.cta.instagram.href} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white border border-bege-mid text-ink-muted
                                 px-5 py-3 rounded-full text-[13px] font-medium
                                 hover:border-verde hover:text-verde transition-all duration-200">
                  <Instagram size={15} />
                  {LOCATION.cta.instagram.label}
                </Link>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-4xl overflow-hidden border border-bege-mid bg-white shadow-card"
               style={{ minHeight: 220 }}>
            {isEmbed ? (
              <iframe
                src={SITE.address.mapsEmbed}
                width="100%"
                height="260"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MedFit no Google Maps"
              />
            ) : (
              // Fallback quando ainda não tem embed URL válida
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8"
                   style={{ minHeight: 220 }}>
                <div className="w-11 h-11 rounded-2xl bg-verde-light flex items-center justify-center">
                  <MapPin size={18} className="text-verde" strokeWidth={1.5} />
                </div>
                <div className="text-center">
                  <p className="text-ink font-medium text-sm">{SITE.address.street}</p>
                  <p className="text-ink-faint text-[12px] mt-0.5">
                    {SITE.address.neighborhood} — {SITE.address.city}, {SITE.address.state}
                  </p>
                </div>
                {SITE.address.mapsEmbed && (
                  <Link
                    href={SITE.address.mapsEmbed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-verde text-[13px] font-medium
                               hover:text-verde-dark transition-colors duration-200"
                  >
                    <ExternalLink size={14} />
                    {UI.location.openMaps}
                  </Link>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
