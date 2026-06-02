import PageHero from "@/components/PageHero";
import PartyButton from "@/components/PartyButton";
import SectionReveal from "@/components/animations/SectionReveal";
import FinalCTA from "@/components/FinalCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";
import { site } from "@/data/site";

const FAQ = () => (
  <>
    <PageHero
      eyebrow="FAQ"
      title="Questions? We've got answers"
      subtitle="Everything you need to know before you book. Still curious? Just reach out."
    />

    <section className="bg-white py-14 md:py-20">
      <div className="container max-w-3xl">
        <SectionReveal>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={item.question}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-white px-5 shadow-soft"
              >
                <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold text-party-navy hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SectionReveal>

        <SectionReveal className="mt-12 text-center">
          <div className="rounded-3xl bg-party-sky p-8">
            <h3 className="font-display text-xl font-bold text-party-navy">Still have a question?</h3>
            <p className="mt-2 text-muted-foreground">We're happy to help — usually within a day.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <PartyButton to="/book" variant="primary">
                Book My Party
              </PartyButton>
              <PartyButton href={`mailto:${site.email}`} variant="outline">
                Email us
              </PartyButton>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>

    <FinalCTA />
  </>
);

export default FAQ;
