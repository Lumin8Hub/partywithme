import { useParams, Link, Navigate } from "react-router-dom";
import * as Icons from "lucide-react";
import { Check, ArrowLeft, Clock, Users, PartyPopper, Plus } from "lucide-react";
import PartyButton from "@/components/PartyButton";
import PartyCard from "@/components/PartyCard";
import SectionReveal from "@/components/animations/SectionReveal";
import { FloatingConfetti } from "@/components/decor/Decor";
import { partyBySlug, listedParties, ACCENT_HEX } from "@/data/parties";
import { included } from "@/data/site";

const PartyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const party = slug ? partyBySlug(slug) : undefined;

  if (!party) return <Navigate to="/parties" replace />;

  const hex = ACCENT_HEX[party.accent];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as any)[party.icon] ?? Icons.Sparkles;
  const related = listedParties.filter((p) => p.slug !== party.slug && !p.custom).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: `${hex}14` }}>
        <FloatingConfetti count={10} />
        <div className="container relative grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2">
          <SectionReveal>
            <Link
              to="/parties"
              className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground transition-colors hover:text-party-navy"
            >
              <ArrowLeft className="h-4 w-4" /> All parties
            </Link>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold"
                style={{ background: `${hex}22`, color: hex }}
              >
                <Icon className="h-4 w-4" /> {party.categories.join(" · ")}
              </span>
              {party.custom && (
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-bold text-party-navy shadow-soft">
                  Seasonal · Contact for pricing
                </span>
              )}
              {party.comingSoon && (
                <span className="rounded-full bg-party-grape px-3 py-1 text-sm font-bold text-white">
                  Coming soon
                </span>
              )}
            </div>

            <h1 className="headline mt-4">{party.name}</h1>
            <p className="subheadline mt-4 max-w-xl">{party.hook}</p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              {party.price ? (
                <span className="price-sticker text-lg">from ${party.price}</span>
              ) : (
                <span className="rounded-full bg-party-grape/15 px-4 py-2 font-display font-bold text-party-grape">
                  Coming soon
                </span>
              )}
              <PartyButton to="/book" variant="primary" size="lg">
                <PartyPopper className="h-5 w-5" />
                Book this party
              </PartyButton>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {party.image ? (
                <img
                  src={party.image}
                  alt={`${party.name} party`}
                  className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift"
                />
              ) : (
                <div
                  className="grid aspect-[4/3] w-full place-items-center rounded-[2rem] shadow-lift"
                  style={{ background: `${hex}22` }}
                >
                  <Icon className="h-24 w-24" style={{ color: hex }} strokeWidth={1.4} />
                </div>
              )}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-14 md:py-20">
        <div className="container grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* What happens */}
          <div>
            <SectionReveal>
              <h2 className="font-display text-2xl font-bold text-party-navy md:text-3xl">
                What happens at a {party.name} party
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
                {party.about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </SectionReveal>

            {/* Mini gallery */}
            <SectionReveal className="mt-10">
              <div className="grid grid-cols-3 gap-3">
                {party.gallery.map((src, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-2xl shadow-soft">
                    <img src={src} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            </SectionReveal>

            {/* Add-ons */}
            {party.addons.length > 0 && (
              <SectionReveal className="mt-10">
                <h3 className="font-display text-xl font-bold text-party-navy">Make it extra-special</h3>
                <p className="mt-1 text-muted-foreground">Fun add-ons to level up the party:</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {party.addons.map((addon) => (
                    <span
                      key={addon}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-party-navy"
                    >
                      <Plus className="h-3.5 w-3.5" style={{ color: hex }} /> {addon}
                    </span>
                  ))}
                </div>
              </SectionReveal>
            )}
          </div>

          {/* Sticky sidebar */}
          <div>
            <div className="lg:sticky lg:top-24">
              <SectionReveal>
                <div className="rounded-3xl border border-border bg-white p-7 shadow-soft">
                  <h3 className="font-display text-xl font-bold text-party-navy">What's included</h3>
                  <ul className="mt-4 space-y-3">
                    {party.included.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full"
                          style={{ background: `${hex}22` }}
                        >
                          <Check className="h-3.5 w-3.5" style={{ color: hex }} />
                        </span>
                        <span className="text-[15px] text-party-navy">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-party-blue" />
                      <span className="text-muted-foreground">{included.kids} kids base</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-party-blue" />
                      <span className="text-muted-foreground">{included.minutes} minutes</span>
                    </div>
                  </div>

                  {party.perChild && (
                    <p className="mt-4 rounded-2xl bg-party-sky px-4 py-3 text-sm text-muted-foreground">
                      Adding more friends? Just{" "}
                      <span className="font-semibold text-party-navy">${party.perChild}/extra child</span>.
                    </p>
                  )}

                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">A small travel fee may apply — always confirmed with your quote.</p>

                  <PartyButton to="/book" variant="primary" className="mt-5 w-full">
                    <PartyPopper className="h-5 w-5" />
                    Book My Party
                  </PartyButton>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Questions first?{" "}
                    <Link to="/contact" className="font-semibold text-party-blue hover:underline">
                      Get in touch
                    </Link>
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-party-sky py-14 md:py-20">
        <div className="container">
          <h2 className="text-center font-display text-2xl font-bold text-party-navy md:text-3xl">
            More parties to love
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PartyCard key={p.slug} party={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <PartyButton to="/parties" variant="outline">
              See all parties
            </PartyButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartyDetail;
