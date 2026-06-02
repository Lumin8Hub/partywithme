import SectionHeading from "@/components/SectionHeading";
import SectionReveal from "@/components/animations/SectionReveal";
import CountUp from "@/components/CountUp";
import TestimonialCard from "@/components/TestimonialCard";
import { reviews, reviewStats } from "@/data/reviews";

const SocialProof = () => {
  const ordered = reviews.slice(0, 3);

  const stats = [
    { value: reviewStats.fiveStarReviews, suffix: "+", label: "Five-star reviews" },
    { value: reviewStats.cities, suffix: "", label: "Cities served" },
    { value: reviewStats.wouldBookAgain, suffix: "%", label: "Would book again" },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="The reviews are in"
          title="Parents relax. Kids go wild."
          subtitle="Don't take our word for it — here's what families across Toronto and Boston have to say."
        />

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-4 md:gap-8">
          {stats.map((s) => (
            <SectionReveal key={s.label} className="text-center">
              <div className="font-display text-4xl font-bold text-party-blue md:text-5xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-muted-foreground md:text-base">{s.label}</p>
            </SectionReveal>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ordered.map((review, i) => (
            <SectionReveal key={review.name} delay={i * 0.1}>
              <TestimonialCard review={review} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
