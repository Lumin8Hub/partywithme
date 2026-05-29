import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";

const COLORS = ["#2D7DD2", "#5FC93C", "#FF6FB5", "#FFC93C", "#8A5CF6"];

type ShapeKind = "circle" | "square" | "triangle" | "star" | "squiggle";

const Shape = ({ kind, color, size }: { kind: ShapeKind; color: string; size: number }) => {
  switch (kind) {
    case "circle":
      return <span style={{ width: size, height: size, background: color }} className="block rounded-full" />;
    case "square":
      return (
        <span
          style={{ width: size, height: size, background: color }}
          className="block rounded-[4px] rotate-12"
        />
      );
    case "triangle":
      return (
        <span
          style={{
            width: 0,
            height: 0,
            borderLeft: `${size / 2}px solid transparent`,
            borderRight: `${size / 2}px solid transparent`,
            borderBottom: `${size}px solid ${color}`,
          }}
          className="block"
        />
      );
    case "star":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
          <path d="M12 1c.7 3.3 2.7 5.3 6 6-3.3.7-5.3 2.7-6 6-.7-3.3-2.7-5.3-6-6 3.3-.7 5.3-2.7 6-6z" />
        </svg>
      );
    case "squiggle":
      return (
        <svg width={size * 1.6} height={size} viewBox="0 0 40 16" fill="none" aria-hidden="true">
          <path d="M2 8c4-8 8 8 12 0s8-8 12 0 8 8 12 0" stroke={color} strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
  }
};

interface FloatingConfettiProps {
  count?: number;
  className?: string;
}

/** Lightweight, gently-drifting confetti / sparkle layer. Disabled for reduced-motion. */
export const FloatingConfetti = ({ count = 12, className = "" }: FloatingConfettiProps) => {
  const shouldReduceMotion = useReducedMotion();
  const kinds: ShapeKind[] = ["circle", "square", "triangle", "star", "squiggle"];

  const bits = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        kind: kinds[i % kinds.length],
        color: COLORS[i % COLORS.length],
        size: 10 + Math.round(Math.random() * 16),
        top: `${Math.round(Math.random() * 92)}%`,
        left: `${Math.round(Math.random() * 94)}%`,
        delay: `${(Math.random() * 4).toFixed(2)}s`,
        duration: `${(5 + Math.random() * 4).toFixed(2)}s`,
        opacity: 0.55 + Math.random() * 0.35,
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [count],
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {bits.map((b) => (
        <span
          key={b.id}
          className={shouldReduceMotion ? "absolute" : "absolute animate-float"}
          style={{
            top: b.top,
            left: b.left,
            opacity: b.opacity,
            animationDelay: b.delay,
            animationDuration: b.duration,
          }}
        >
          <Shape kind={b.kind} color={b.color} size={b.size} />
        </span>
      ))}
    </div>
  );
};

interface SoftBlobsProps {
  className?: string;
}

/** Very low-opacity organic colour blobs behind sections, for energy on white. */
export const SoftBlobs = ({ className = "" }: SoftBlobsProps) => (
  <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
    <span className="blob bg-party-blue/10 h-72 w-72 -left-20 -top-10" />
    <span className="blob bg-party-pink/10 h-64 w-64 right-0 top-1/3" />
    <span className="blob bg-party-sunshine/10 h-56 w-56 left-1/3 bottom-0" />
  </div>
);
