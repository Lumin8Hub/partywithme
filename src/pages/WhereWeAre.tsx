import { MapPin, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import PartyButton from "@/components/PartyButton";
import SectionReveal from "@/components/animations/SectionReveal";
import FinalCTA from "@/components/FinalCTA";
import { regions, travelLine } from "@/data/regions";
import { site } from "@/data/site";

const WhereWeAre = () => (
  <>
    <PageHero
      eyebrow="Where we are"
      title="Two cities, same big fun"
      subtitle="We bring fully-led parties across the Greater Toronto Area and Greater Boston. Here's where we roam."
    />

    <section className="bg-white py-14 md:py-20">
      <div className="container grid gap-8 md:grid-cols-2">
        {regions.map((r, i) => (
          <SectionReveal key={r.id} delay={i * 0.1}>
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-soft">
              <div className="relative">
                <img src={r.image} alt={`${r.city} skyline`} loading="lazy" className="h-56 w-full object-cover" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-sm font-bold text-party-navy shadow-soft">
                  <MapPin className="h-4 w-4 text-party-blue" /> {r.city}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h2 className="font-display text-2xl font-bold text-party-navy">{r.area}</h2>
                <p className="mt-2 text-muted-foreground">{r.blurb}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-party-navy">
                    <Check className="h-4 w-4 text-party-lime" /> Based in {r.base}
                  </li>
                  <li className="flex items-center gap-2 text-party-navy">
                    <Check className="h-4 w-4 text-party-lime" /> Travels {r.radius} out
                  </li>
                  {r.note && (
                    <li className="flex items-center gap-2 text-party-navy">
                      <Check className="h-4 w-4 text-party-lime" /> {r.note}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal className="mx-auto mt-12 max-w-2xl text-center">
        <div className="rounded-3xl bg-party-paper p-8">
          <h3 className="font-display text-xl font-bold text-party-navy">Not sure if you're in range?</h3>
          <p className="mt-2 text-muted-foreground">
            Just ask — we'll let you know right away, and {travelLine.charAt(0).toLowerCase() + travelLine.slice(1)}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <PartyButton to="/book" variant="primary">
              Check my area
            </PartyButton>
            <PartyButton href={`mailto:${site.email}`} variant="outline">
              Email us
            </PartyButton>
          </div>
        </div>
      </SectionReveal>
    </section>

    <FinalCTA />
  </>
);

export default WhereWeAre;
