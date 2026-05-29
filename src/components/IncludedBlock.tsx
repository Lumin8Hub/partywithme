import { Users, Clock, UserCheck, Gift } from "lucide-react";
import SectionReveal from "./animations/SectionReveal";
import { site, included } from "@/data/site";
import { travelLine } from "@/data/regions";

const items = [
  { icon: Users, label: `${included.kids} kids`, sub: "Easy to add more friends" },
  { icon: Clock, label: `${included.minutes} minutes`, sub: `${included.setup} min setup + ${included.activities} min fun` },
  { icon: UserCheck, label: "Led by our team", sub: "Trained, vetted party leaders" },
  { icon: Gift, label: "Supplies + take-home", sub: "Everything included, cleanup too" },
];

const IncludedBlock = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="container">
      <SectionReveal>
        <div className="overflow-hidden rounded-[2rem] bg-party-navy px-6 py-12 text-white md:px-12 md:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="eyebrow !text-party-sunshine">Simple pricing</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
                What you get at <span className="text-party-sunshine">${site.priceFrom}</span>
              </h2>
              <p className="mt-4 text-white/80">
                One clear price for a party that's fully handled — start to finish, set-up to clean-up.
              </p>
              <p className="mt-4 text-sm text-white/65">{travelLine}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((it) => (
                <div key={it.label} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15">
                    <it.icon className="h-5 w-5 text-party-sunshine" />
                  </span>
                  <span>
                    <span className="block font-display font-bold">{it.label}</span>
                    <span className="block text-sm text-white/70">{it.sub}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default IncludedBlock;
