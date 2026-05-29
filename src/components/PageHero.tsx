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
  <section className="relative overflow-hidden bg-party-paper">
    {confetti && <FloatingConfetti count={10} />}
    <div className="container relative py-16 text-center md:py-20">
      <SectionReveal>
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h1 className="headline mx-auto max-w-3xl text-balance">{title}</h1>
        {subtitle && (
          <p className="subheadline mx-auto mt-5 max-w-2xl text-balance">{subtitle}</p>
        )}
        {children && <div className="mt-8 flex flex-wrap items-center justify-center gap-3">{children}</div>}
      </SectionReveal>
    </div>
  </section>
);

export default PageHero;
