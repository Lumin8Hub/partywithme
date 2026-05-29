import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { asset } from "@/lib/asset";
import FinalCTA from "@/components/FinalCTA";

const images = [
  asset("/images/slime-playdough.jpg"),
  asset("/images/craft-markers.jpg"),
  asset("/images/party-hula.jpg"),
  asset("/images/paint-watercolor.jpg"),
  asset("/images/cosmetics-toy.jpg"),
  asset("/images/paint-body.jpg"),
  asset("/images/craft-supplies.jpg"),
  asset("/images/balloons-pinkyellow.jpg"),
  asset("/images/paint-hands.jpg"),
  asset("/images/confetti.jpg"),
  asset("/images/balloons-assorted.jpg"),
  asset("/images/balloons-bunch.jpg"),
  asset("/images/balloons-purple.jpg"),
];

const Gallery = () => {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => (a === null ? a : (a + 1) % images.length));
      if (e.key === "ArrowLeft") setActive((a) => (a === null ? a : (a - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A peek at the fun"
        subtitle="Slime, sparkle, paint and pure joy. This is what a Party With Me party looks like."
      />

      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
            {images.map((src, i) => (
              <button
                key={src}
                onClick={() => setActive(i)}
                className="block w-full overflow-hidden rounded-2xl shadow-soft transition-transform hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-party-blue/30"
                aria-label="View photo"
              >
                <img src={src} alt="" aria-hidden="true" loading="lazy" className="w-full" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-party-navy/90 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            className="absolute left-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25"
            onClick={(e) => {
              e.stopPropagation();
              setActive((a) => (a === null ? a : (a - 1 + images.length) % images.length));
            }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img
            src={images[active]}
            alt=""
            aria-hidden="true"
            className="max-h-[82vh] max-w-[90vw] rounded-2xl object-contain shadow-lift"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25"
            onClick={(e) => {
              e.stopPropagation();
              setActive((a) => (a === null ? a : (a + 1) % images.length));
            }}
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}

      <FinalCTA />
    </>
  );
};

export default Gallery;
