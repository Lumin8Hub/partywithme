import { Link } from "react-router-dom";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const partyButton = cva(
  "inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-party-blue/30 active:scale-95 disabled:opacity-60 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-party-blue text-white shadow-soft hover:shadow-lift hover:-translate-y-0.5 hover:bg-party-blue/90",
        sunshine:
          "bg-party-sunshine text-party-navy shadow-soft hover:shadow-lift hover:-translate-y-0.5",
        pink: "bg-party-pink text-white shadow-soft hover:shadow-lift hover:-translate-y-0.5",
        outline:
          "border-2 border-party-blue/25 bg-white text-party-navy hover:border-party-blue hover:-translate-y-0.5",
        white: "bg-white text-party-navy shadow-soft hover:shadow-lift hover:-translate-y-0.5",
      },
      size: {
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        sm: "h-9 px-4 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

interface PartyButtonProps extends VariantProps<typeof partyButton> {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

const PartyButton = ({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant,
  size,
  className,
  ariaLabel,
  disabled,
}: PartyButtonProps) => {
  const classes = cn(partyButton({ variant, size }), className);

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} aria-label={ariaLabel} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel} disabled={disabled}>
      {children}
    </button>
  );
};

export default PartyButton;
