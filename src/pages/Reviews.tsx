import { Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import PartyButton from "@/components/PartyButton";
import CountUp from "@/components/CountUp";
import TestimonialCard from "@/components/TestimonialCard";
import SectionReveal from "@/components/animations/SectionReveal";
import FinalCTA from "@/components/FinalCTA";
import { reviews, reviewStats } from "@/data/reviews";
import { site } from "@/data/site";

const Reviews = () => {
  const ordered = reviews;

  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="22+ five-star parties (and counting)"
        subtitle="Families across Toronto and Boston keep coming back. Here's why."
      >
        <div className="flex flex-wrap items-center justify-center gap-3">
          <PartyButton href={site.social.facebook} variant="outline" size="sm">
            Read on Facebook
          </PartyButton>
          <PartyButton href={site.social.instagram} variant="outline" size="sm">
            See us on Instagram
          </PartyButton>
        </div>
      </PageHero>

      <section className="bg-white py-12 md:py-16">
        <div className="container">
          <div className="mx-auto grid max-w-3xl grid-cols-3 gap-4 rounded-3xl bg-party-sky p-8 md:gap-8">
            <div className="text-center">
              <div className="flex justify-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-party-sunshine text-party-sunshine" />
                ))}
              </div>
              <div className="mt-2 font-display text-3xl font-bold text-party-blue md:text-4xl">
                <CountUp to={reviewStats.fiveStarReviews} suffix="+" />
              </div>
              <p className="text-sm text-muted-foreground">Five-star reviews</p>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-party-blue md:text-4xl">
                <CountUp to={reviewStats.cities} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Cities served</p>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-party-blue md:text-4xl">
                <CountUp to={reviewStats.wouldBookAgain} suffix="%" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Would book again</p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ordered.map((review, i) => (
              <SectionReveal key={review.name} delay={(i % 3) * 0.08}>
                <TestimonialCard review={review} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
};

export default Reviews;
