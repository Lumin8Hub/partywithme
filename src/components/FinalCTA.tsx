import { PartyPopper } from "lucide-react";
import PartyButton from "./PartyButton";
import SectionReveal from "./animations/SectionReveal";
import { FloatingConfetti } from "./decor/Decor";

const FinalCTA = () => (
  <section className="bg-white pb-20 pt-4 md:pb-28">
    <div className="container">
      <SectionReveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-party-blue to-party-grape px-6 py-16 text-center text-white md:py-20">
          <FloatingConfetti count={14} />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-balance md:text-5xl">
              Ready for the easiest party you'll ever throw?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
              Tell us your date and theme. We'll bring the fun — you take the credit.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <PartyButton to="/book" variant="sunshine" size="lg">
                <PartyPopper className="h-5 w-5" />
                Book My Party
              </PartyButton>
              <PartyButton to="/parties" variant="white" size="lg">
                Browse the parties
              </PartyButton>
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default FinalCTA;
