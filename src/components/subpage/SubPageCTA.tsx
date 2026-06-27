import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";

interface SubPageCTAProps {
  title: string;
  body: string;
  button: { label: string; href: string };
}

export default function SubPageCTA({ title, body, button }: SubPageCTAProps) {
  return (
    <section className="bg-verde sec-py relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      <div className="absolute -top-6 -right-6 font-display font-normal leading-none
                      select-none pointer-events-none"
           style={{ color: "rgba(255,255,255,0.04)", fontSize: "18rem" }}
           aria-hidden="true">M</div>
      <div className="wrap relative">
        <div className="max-w-xl">
          <h2 className="font-display text-display-lg text-white mb-4 leading-[1.08]">{title}</h2>
          <p className="text-white/55 text-[15px] leading-relaxed mb-9 max-w-md">{body}</p>
          <Link href={button.href} target="_blank" rel="noopener noreferrer"
                className="btn-white group">
            <MessageCircle size={16} />
            {button.label}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
