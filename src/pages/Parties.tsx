import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import CategoryCarousel from "@/components/parties/CategoryCarousel";
import PartyCard from "@/components/PartyCard";
import SectionReveal from "@/components/animations/SectionReveal";
import IncludedBlock from "@/components/IncludedBlock";
import InclusivityCallout from "@/components/InclusivityCallout";
import FinalCTA from "@/components/FinalCTA";
import { listedParties, customParties, partyCategories } from "@/data/parties";
import { site } from "@/data/site";

const Parties = () => {
  return (
    <>
      <PageHero
        eyebrow="The party menu"
        title="Find the perfect party"
        subtitle="Fully-led themes for kids 5–12 — crafty, active, magical and science-y. Every one ends with something to take home."
      />

      <section className="bg-white py-14 md:py-20">
        <div className="container">
          {partyCategories.map((category) => {
            const categoryParties = listedParties.filter((p) => p.categories.includes(category));
            if (categoryParties.length === 0) return null;
            return (
              <CategoryCarousel key={category} title={category} parties={categoryParties} />
            );
          })}

          {/* Custom & Seasonal */}
          {customParties.length > 0 && (
            <SectionReveal>
              <div className="mt-4 rounded-[2rem] bg-party-sky px-6 py-10 md:px-10">
                <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-party-blue">
                      Custom &amp; Seasonal
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-bold text-party-navy md:text-3xl">
                      The hottest trend — just ask
                    </h2>
                    <p className="mt-2 max-w-xl text-muted-foreground">
                      We'll get it done! These themes come and go fast. Contact us for current availability and pricing.
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex shrink-0 items-center gap-2 rounded-full bg-party-blue px-5 py-2.5 font-display text-sm font-semibold text-white transition-colors hover:bg-party-blue/90"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Contact for pricing
                  </Link>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {customParties.map((party) => (
                    <PartyCard key={party.slug} party={party} />
                  ))}
                </div>
              </div>
            </SectionReveal>
          )}
        </div>
      </section>

      <InclusivityCallout />
      <IncludedBlock />
      <FinalCTA />
    </>
  );
};

export default Parties;
