import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SectionReveal from "@/components/animations/SectionReveal";
import { regions } from "@/data/regions";

const RegionsCue = () => (
  <section className="bg-party-paper py-16 md:py-24">
    <div className="container">
      <SectionHeading
        eyebrow="Where we party"
        title="Two cities. One very fun crew."
        subtitle="We bring the party across the Greater Toronto Area and Greater Boston."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
        {regions.map((r, i) => (
          <SectionReveal key={r.id} delay={i * 0.1}>
            <div className="group relative overflow-hidden rounded-3xl shadow-soft">
              <img
                src={r.image}
                alt={`${r.city} skyline`}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-72"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-party-navy/85 via-party-navy/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-sm font-semibold backdrop-blur">
                  <MapPin className="h-4 w-4" /> {r.radius} from {r.base}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold">{r.area}</h3>
                <p className="mt-1 max-w-md text-sm text-white/85">{r.blurb}</p>
                {r.note && (
                  <p className="mt-2 inline-block rounded-full bg-party-sunshine px-3 py-1 text-xs font-bold text-party-navy">
                    {r.note}
                  </p>
                )}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal className="mt-10 text-center">
        <Link
          to="/where-we-are"
          className="inline-flex items-center gap-1 font-display font-semibold text-party-blue hover:underline"
        >
          Not sure if you're in range? Find out
          <ArrowRight className="h-4 w-4" />
        </Link>
      </SectionReveal>
    </div>
  </section>
);

export default RegionsCue;
