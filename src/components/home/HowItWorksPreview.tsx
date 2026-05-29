import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import SectionReveal from "@/components/animations/SectionReveal";
import { steps } from "@/data/howItWorks";

const stepColors = ["bg-party-blue", "bg-party-pink", "bg-party-sunshine", "bg-party-lime"];

const HowItWorksPreview = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="container">
      <SectionHeading
        eyebrow="How it works"
        title="Throwing the party is the easy part"
        subtitle="Four simple steps from 'help, it's birthday season' to 'best party ever.'"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const Icon = (Icons as any)[step.icon] ?? Icons.Sparkles;
          return (
            <SectionReveal key={step.number} delay={i * 0.1}>
              <div className="relative h-full rounded-3xl border border-border bg-white p-7">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl text-white ${stepColors[i]}`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <span className="absolute right-6 top-6 font-display text-4xl font-bold text-party-navy/10">
                  {step.number}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-party-navy">{step.title}</h3>
                <p className="mt-2 text-[15px] text-muted-foreground">{step.body}</p>
              </div>
            </SectionReveal>
          );
        })}
      </div>

      <SectionReveal className="mt-10 text-center">
        <Link
          to="/how-it-works"
          className="inline-flex items-center gap-1 font-display font-semibold text-party-blue hover:underline"
        >
          See the full rundown
          <ArrowRight className="h-4 w-4" />
        </Link>
      </SectionReveal>
    </div>
  </section>
);

export default HowItWorksPreview;
