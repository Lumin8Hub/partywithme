import { useState } from "react";
import PageHero from "@/components/PageHero";
import PartyCard from "@/components/PartyCard";
import SectionReveal from "@/components/animations/SectionReveal";
import IncludedBlock from "@/components/IncludedBlock";
import InclusivityCallout from "@/components/InclusivityCallout";
import FinalCTA from "@/components/FinalCTA";
import { parties, partyCategories, type PartyCategory } from "@/data/parties";

type Filter = "All" | PartyCategory;

const Parties = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...partyCategories];

  const visible = parties.filter((p) => filter === "All" || p.categories.includes(filter));

  return (
    <>
      <PageHero
        eyebrow="The party menu"
        title="Find the perfect party"
        subtitle="Twelve fully-led themes for kids 5–12 — crafty, active, magical and science-y. Every one ends with something to take home."
      />

      <section className="bg-white py-12 md:py-16">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 font-display text-sm font-semibold transition-all ${
                  filter === f
                    ? "bg-party-blue text-white shadow-soft"
                    : "border border-border bg-white text-party-navy hover:border-party-blue/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((party, i) => (
              <SectionReveal key={party.slug} delay={(i % 3) * 0.08}>
                <PartyCard party={party} />
              </SectionReveal>
            ))}
          </div>

          {visible.length === 0 && (
            <p className="mt-12 text-center text-muted-foreground">No parties in this category yet.</p>
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
