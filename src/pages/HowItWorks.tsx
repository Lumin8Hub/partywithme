import * as Icons from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionReveal from "@/components/animations/SectionReveal";
import SectionHeading from "@/components/SectionHeading";
import IncludedBlock from "@/components/IncludedBlock";
import FinalCTA from "@/components/FinalCTA";
import { steps, reassurances } from "@/data/howItWorks";

const stepColors = ["bg-party-blue", "bg-party-pink", "bg-party-sunshine", "bg-party-lime"];

const HowItWorks = () => (
  <>
    <PageHero
      eyebrow="How it works"
      title="From “help, it's birthday season” to “best party ever”"
      subtitle="We handle the planning, the supplies, the fun and the clean-up. Here's exactly how a Party With Me party comes together."
    />

    <section className="bg-white py-14 md:py-20">
      <div className="container max-w-4xl">
        <div className="space-y-6">
          {steps.map((step, i) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Icon = (Icons as any)[step.icon] ?? Icons.Sparkles;
            return (
              <SectionReveal key={step.number} delay={i * 0.05}>
                <div className="flex items-start gap-5 rounded-3xl border border-border bg-white p-6 md:p-8">
                  <span
                    className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white ${stepColors[i]}`}
                  >
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display text-sm font-bold text-muted-foreground">
                        Step {step.number}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-party-navy md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{step.body}</p>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>

    <section className="bg-party-paper py-14 md:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="The reassuring bits"
          title="The stuff parents always ask"
          subtitle="Short answer: relax — we've got it."
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
          {reassurances.map((r, i) => (
            <SectionReveal key={r.question} delay={(i % 2) * 0.08}>
              <div className="h-full rounded-3xl bg-white p-6 shadow-soft">
                <h3 className="font-display text-lg font-bold text-party-navy">{r.question}</h3>
                <p className="mt-2 text-muted-foreground">{r.answer}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    <IncludedBlock />
    <FinalCTA />
  </>
);

export default HowItWorks;
