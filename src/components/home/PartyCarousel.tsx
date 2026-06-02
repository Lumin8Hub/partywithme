import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PartyCard from "@/components/PartyCard";
import SectionHeading from "@/components/SectionHeading";
import SectionReveal from "@/components/animations/SectionReveal";
import { featuredParties } from "@/data/parties";

const PartyCarousel = () => {
  const shouldReduceMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true, dragFree: false });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const hovering = useRef(false);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Gentle autoplay, paused on hover and for reduced-motion users.
  useEffect(() => {
    if (!emblaApi || shouldReduceMotion) return;
    const id = setInterval(() => {
      if (!hovering.current) emblaApi.scrollNext();
    }, 4500);
    return () => clearInterval(id);
  }, [emblaApi, shouldReduceMotion]);

  return (
    <section className="bg-party-sky py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Pick your party"
            title="Parties kids actually ask for"
            subtitle="Each one is fully led, hands-on and ends with something to take home. Swipe through a few favourites."
          />
          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous"
              className="grid h-12 w-12 place-items-center rounded-full border border-border bg-white text-party-navy transition-colors hover:border-party-blue hover:text-party-blue"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next"
              className="grid h-12 w-12 place-items-center rounded-full border border-border bg-white text-party-navy transition-colors hover:border-party-blue hover:text-party-blue"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          className="mt-10 overflow-hidden"
          ref={emblaRef}
          onMouseEnter={() => (hovering.current = true)}
          onMouseLeave={() => (hovering.current = false)}
        >
          <div className="flex gap-6">
            {featuredParties.map((party) => (
              <div
                key={party.slug}
                className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[55%] lg:basis-[31%]"
              >
                <PartyCard party={party} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === selected ? "w-7 bg-party-blue" : "w-2.5 bg-party-blue/25 hover:bg-party-blue/50"
              }`}
            />
          ))}
        </div>

        <SectionReveal className="mt-10 text-center">
          <Link
            to="/parties"
            className="inline-flex items-center gap-1 font-display font-semibold text-party-blue hover:underline"
          >
            See all parties
            <ArrowRight className="h-4 w-4" />
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
};

export default PartyCarousel;
