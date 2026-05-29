import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Star, MapPin, Sparkles } from "lucide-react";
import PartyButton from "@/components/PartyButton";
import { FloatingConfetti } from "@/components/decor/Decor";
import { site } from "@/data/site";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // KPP pattern: hero gently scales down + fades up as you scroll, revealing content faster.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const motionStyle = shouldReduceMotion ? undefined : { scale, opacity, y };

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-party-paper to-white">
      <FloatingConfetti count={16} />
      <motion.div style={motionStyle} className="container relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-party-navy shadow-soft">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-party-sunshine text-party-sunshine" />
              ))}
            </span>
            Loved by 22+ families
          </span>

          <h1 className="headline mt-5 text-balance" style={{ fontSize: "clamp(2.4rem, 6vw, 4.1rem)" }}>
            We bring the{" "}
            <span className="relative whitespace-nowrap text-party-blue">
              party
              <svg className="absolute -bottom-2 left-0 h-3 w-full text-party-sunshine" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 9c40-8 156-8 196 0" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            to you.
          </h1>

          <p className="subheadline mx-auto mt-6 max-w-xl lg:mx-0">
            Fully-led birthday parties in your own space for kids 5–12. Slime, unicorns, science,
            glitter and games — <span className="font-semibold text-party-navy">you relax, we bring the fun</span> (and clean it all up).
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <PartyButton to="/book" variant="primary" size="lg">
              <Sparkles className="h-5 w-5" />
              Book My Party
            </PartyButton>
            <PartyButton to="/parties" variant="outline" size="lg">
              See the parties
            </PartyButton>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <MapPin className="h-4 w-4 text-party-blue" />
            Serving the Greater Toronto Area & Greater Boston · parties from ${site.priceFrom}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <img
              src="/images/craft-markers.jpg"
              alt="Kids happily crafting together at a party"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift"
            />
            <div className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-party-blue/10" />

            {/* Floating sticker badges */}
            <div className="absolute -left-4 top-8 rotate-[-6deg] rounded-2xl bg-white px-4 py-3 shadow-lift md:-left-8">
              <p className="font-display text-sm font-bold text-party-navy">75 mins of fun</p>
              <p className="text-xs text-muted-foreground">Setup + cleanup included</p>
            </div>
            <div className="absolute -right-3 bottom-10 rotate-[5deg] rounded-2xl bg-party-sunshine px-4 py-3 shadow-lift md:-right-6">
              <p className="font-display text-sm font-bold text-party-navy">Mess-free for you 🎉</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
