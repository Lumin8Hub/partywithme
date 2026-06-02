import { Gift } from "lucide-react";
import PartyButton from "./PartyButton";
import SectionReveal from "./animations/SectionReveal";

const BirthdayGiftCallout = () => (
  <section className="bg-party-sky py-14 md:py-18">
    <div className="container">
      <SectionReveal>
        <div className="flex flex-col items-center gap-6 rounded-[2rem] bg-party-blue px-8 py-12 text-center text-white md:flex-row md:text-left md:gap-10 md:px-12">
          <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-white/20">
            <Gift className="h-10 w-10 text-white" />
          </span>
          <div className="flex-1">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-white/70">
              Free with every party
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold md:text-3xl">
              A Birthday Card &amp; Gift for the birthday child
            </h2>
            <p className="mt-2 text-white/80">
              Every birthday kid gets a special card and gift from us — our little way of making the star of the show feel extra celebrated.
            </p>
          </div>
          <PartyButton to="/book" variant="sunshine" size="lg" className="shrink-0">
            Book My Party
          </PartyButton>
        </div>
      </SectionReveal>
    </div>
  </section>
);

export default BirthdayGiftCallout;
