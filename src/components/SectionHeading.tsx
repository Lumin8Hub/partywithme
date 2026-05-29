import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}

const SectionHeading = ({ eyebrow, title, subtitle, align = "center", className = "" }: SectionHeadingProps) => (
  <div
    className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"} ${className}`}
  >
    {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
    <h2 className="headline text-balance">{title}</h2>
    {subtitle && <p className="subheadline mt-4 text-balance">{subtitle}</p>}
  </div>
);

export default SectionHeading;
