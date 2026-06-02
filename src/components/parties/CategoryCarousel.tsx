import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PartyCard from "@/components/PartyCard";
import type { Party } from "@/data/parties";

interface CategoryCarouselProps {
  title: string;
  parties: Party[];
}

const CategoryCarousel = ({ title, parties }: CategoryCarouselProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false, dragFree: false });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const hovering = useRef(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // No autoplay on the category carousels — user-driven only.
  void shouldReduceMotion;
  void hovering;

  return (
    <div className="mb-14">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="font-display text-2xl font-bold text-party-navy md:text-3xl">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label={`Previous ${title} party`}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-party-navy transition-colors hover:border-party-blue hover:text-party-blue disabled:opacity-30"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label={`Next ${title} party`}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-party-navy transition-colors hover:border-party-blue hover:text-party-blue disabled:opacity-30"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        className="overflow-hidden"
        ref={emblaRef}
        onMouseEnter={() => (hovering.current = true)}
        onMouseLeave={() => (hovering.current = false)}
      >
        <div className="flex gap-5">
          {parties.map((party) => (
            <div
              key={party.slug}
              className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[48%] lg:basis-[31%]"
            >
              <PartyCard party={party} />
            </div>
          ))}
        </div>
      </div>

      {snaps.length > 1 && (
        <div className="mt-5 flex items-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === selected ? "w-6 bg-party-blue" : "w-2 bg-party-blue/25 hover:bg-party-blue/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryCarousel;
