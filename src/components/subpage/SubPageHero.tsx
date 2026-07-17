import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";

interface SubPageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string;
  image: string;
  imageAlt: string;
  cta: { label: string; href: string };
  imagePosition?: string;  // ex: "center_20%" — controla o enquadramento no mobile
}

export default function SubPageHero({
  eyebrow, title, titleAccent, description, image, imageAlt, cta, imagePosition = "center_20%",
}: SubPageHeroProps) {
  return (
    <section className="relative bg-bege overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      {/* MOBILE: foto em banner no topo */}
      <div className="lg:hidden relative w-full h-52 mt-16">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          style={{ objectPosition: imagePosition.replace(/_/g, " ") }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bege" />
      </div>

      <div className="wrap relative pt-6 pb-14 md:pb-20 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center">

          {/* Texto */}
          <div>
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h1 className="font-display text-display text-ink leading-[1.08] tracking-[-0.02em] mb-5">
              {title}
              {titleAccent && (
                <><br /><span className="text-verde italic">{titleAccent}</span></>
              )}
            </h1>
            <div className="w-10 h-[3px] bg-verde rounded-full mb-6" />
            <p className="text-ink-muted text-[15px] leading-relaxed max-w-md mb-10">
              {description}
            </p>
            <Link href={cta.href} target="_blank" rel="noopener noreferrer"
                  className="btn-verde gap-2.5 group text-[14px] px-7 py-4">
              <MessageCircle size={17} />
              {cta.label}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* DESKTOP: card flutuante com foto */}
          <div className="hidden lg:block relative">
            <div className="bg-white rounded-5xl p-3 shadow-float">
              <div className="relative aspect-[4/5] rounded-4xl overflow-hidden bg-bege-light">
                <Image src={image} alt={imageAlt} fill priority
                       className="object-cover"
                       style={{ objectPosition: imagePosition.replace(/_/g, " ") }}
                       sizes="420px" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
