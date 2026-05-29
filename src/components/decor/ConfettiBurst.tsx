import { motion, useReducedMotion } from "framer-motion";

const colors = ["#2D7DD2", "#5FC93C", "#FF6FB5", "#FFC93C", "#8A5CF6"];

/** A one-shot confetti burst from the centre, used on form success. */
const ConfettiBurst = ({ count = 60 }: { count?: number }) => {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return null;

  const pieces = Array.from({ length: count }).map((_, i) => {
    const angle = (i / count) * Math.PI * 2;
    const distance = 120 + Math.random() * 220;
    return {
      id: i,
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance - 60,
      rotate: Math.random() * 720 - 360,
      color: colors[i % colors.length],
      size: 6 + Math.random() * 8,
      delay: Math.random() * 0.12,
      round: Math.random() > 0.5,
    };
  });

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" aria-hidden="true">
      <div className="absolute left-1/2 top-1/3">
        {pieces.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
            animate={{ opacity: 0, x: p.x, y: p.y, rotate: p.rotate }}
            transition={{ duration: 1.3, delay: p.delay, ease: [0.21, 0.8, 0.4, 1] }}
            style={{
              position: "absolute",
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              borderRadius: p.round ? "9999px" : "2px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ConfettiBurst;
