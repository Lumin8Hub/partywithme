import type { ReactNode } from "react";
import { FloatingConfetti } from "./decor/Decor";
import SectionReveal from "./animations/SectionReveal";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  confetti?: boolean;
}

const PageHero = ({ eyebrow, title, subtitle, children, confetti = true }: PageHeroProps) => (
  <section className="relative overflow-hidden bg-party-blue">
    {confetti && <FloatingConfetti count={10} />}
    <div className="container relative py-16 text-center text-white md:py-20">
      <SectionReveal>
        {eyebrow && (
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
            {eyebrow}
          </p>
        )}
        <h1 className="mx-auto max-w-3xl font-display font-bold leading-[1.05] tracking-tight text-balance text-white" style={{ fontSize: "clamp(2.1rem, 5vw, 3.4rem)" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-balance font-body text-lg text-white/80 leading-relaxed md:text-xl">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap items-center justify-center gap-3">{children}</div>}
      </SectionReveal>
    </div>
  </section>
);

export default PageHero;
