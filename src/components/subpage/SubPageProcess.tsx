interface Step {
  number: string;
  title: string;
  description: string;
}

interface SubPageProcessProps {
  eyebrow: string;
  title: string;
  steps: Step[];
}

export default function SubPageProcess({ eyebrow, title, steps }: SubPageProcessProps) {
  return (
    <section className="py-10 md:py-14 border-t border-bege-mid" style={{ background: "#F5EFE6" }}>
      <div className="wrap">
        <div className="mb-8 pb-6 border-b border-bege-dark/40">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="font-display text-display-lg text-ink">{title}</h2>
        </div>
        <div>
          {steps.map((step, i) => (
            <div key={step.number}
                 className={`group relative flex gap-6 lg:gap-10 py-7
                             border-b border-bege-dark/30 last:border-0
                             hover:bg-white/50 rounded-2xl px-4 -mx-4 transition-all duration-300`}>
              <span className="absolute right-6 top-1/2 -translate-y-1/2 font-display font-normal
                               leading-none select-none pointer-events-none text-[4rem] lg:text-[5rem]"
                    style={{ color: "rgba(0,0,0,0.04)" }}>
                {step.number}
              </span>
              <div className="flex-shrink-0 w-8 pt-0.5">
                <span className="font-display text-sm font-semibold text-verde">{step.number}</span>
              </div>
              <div className="flex-1 max-w-lg">
                <h3 className="font-display text-[1.2rem] font-medium text-ink mb-1.5 leading-snug
                               group-hover:text-verde transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-ink-muted text-[14px] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
