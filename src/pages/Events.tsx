import * as Icons from "lucide-react";
import { MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/animations/SectionReveal";
import PartyButton from "@/components/PartyButton";
import FinalCTA from "@/components/FinalCTA";
import { eventStations, trustedPartners } from "@/data/events";
import { site } from "@/data/site";

const Events = () => (
  <>
    <PageHero
      eyebrow="Community Events & Fundraising"
      title="We bring the fun to your event"
      subtitle="Activity stations, games, and entertainment for schools, camps, community events, and fundraisers — big groups, no problem."
    />

    {/* Stations grid */}
    <section className="bg-white py-14 md:py-20">
      <div className="container">
        <SectionReveal>
          <h2 className="mb-3 text-center font-display text-3xl font-bold text-party-navy">
            Activity stations
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">
            Mix and match stations to build the perfect event. We bring all the supplies, set up, run the activities, and clean up.
          </p>
        </SectionReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {eventStations.map((station, i) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Icon = (Icons as any)[station.icon] ?? Icons.Star;
            return (
              <SectionReveal key={station.name} delay={(i % 3) * 0.07}>
                <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-white p-6 shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-party-blue/10">
                    <Icon className="h-6 w-6 text-party-blue" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-party-navy">{station.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{station.description}</p>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* Trusted by */}
    <section className="bg-party-sky py-14 md:py-18">
      <div className="container">
        <SectionReveal>
          <p className="mb-8 text-center font-display text-sm font-semibold uppercase tracking-widest text-party-blue">
            Trusted by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {trustedPartners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-16 min-w-[140px] items-center justify-center rounded-2xl border border-border bg-white px-6 shadow-soft"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-10 w-auto object-contain"
                  />
                ) : (
                  /* Placeholder — swap logo path in src/data/events.ts once assets are available */
                  <span className="font-display text-sm font-semibold text-party-navy text-center leading-tight">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Pricing CTA */}
    <section className="bg-white py-14 md:py-20">
      <div className="container max-w-3xl">
        <SectionReveal>
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-party-blue to-party-grape p-8 text-center text-white md:p-12">
            <MessageCircle className="mx-auto h-12 w-12 text-white/80" />
            <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">
              Pricing is custom to your event
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/80">
              Every event is different — number of stations, group size, duration, and location all factor in. Get in touch and we'll put together a quote.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <PartyButton href={`mailto:${site.email}?subject=Community event inquiry`} variant="sunshine" size="lg">
                Request a quote
              </PartyButton>
              <PartyButton to="/contact" variant="white" size="lg">
                Contact us
              </PartyButton>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>

    <FinalCTA />
  </>
);

export default Events;
