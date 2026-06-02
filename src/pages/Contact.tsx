import { Mail, Instagram, Facebook, MessageCircle, PartyPopper } from "lucide-react";
import PageHero from "@/components/PageHero";
import PartyButton from "@/components/PartyButton";
import SectionReveal from "@/components/animations/SectionReveal";
import { site } from "@/data/site";

const channels = [
  {
    icon: Mail,
    color: "text-party-blue",
    bg: "bg-party-blue/10",
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Instagram,
    color: "text-party-pink",
    bg: "bg-party-pink/10",
    label: "Instagram",
    value: "@partywithmefun",
    href: site.social.instagram,
  },
  {
    icon: Facebook,
    color: "text-party-blue",
    bg: "bg-party-blue/10",
    label: "Facebook",
    value: "Party With Me",
    href: site.social.facebook,
  },
  {
    icon: MessageCircle,
    color: "text-party-grape",
    bg: "bg-party-grape/10",
    label: "Messenger",
    value: "Chat with us",
    href: site.social.messenger,
  },
];

const Contact = () => (
  <>
    <PageHero
      eyebrow="Contact"
      title="Let's talk parties"
      subtitle="Questions about a theme, your area or a custom idea? We'd love to hear from you."
    />

    <section className="bg-white py-14 md:py-20">
      <div className="container max-w-4xl">
        <div className="grid gap-4 sm:grid-cols-2">
          {channels.map((c, i) => (
            <SectionReveal key={c.label} delay={(i % 2) * 0.08}>
              <a
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="flex items-center gap-4 rounded-3xl border border-border bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${c.bg}`}>
                  <c.icon className={`h-7 w-7 ${c.color}`} />
                </span>
                <span>
                  <span className="block font-display text-lg font-bold text-party-navy">{c.label}</span>
                  <span className="block text-muted-foreground">{c.value}</span>
                </span>
              </a>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-10">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-party-blue to-party-grape p-8 text-center text-white md:p-12">
            <PartyPopper className="mx-auto h-10 w-10 text-party-sunshine" />
            <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">Ready to book?</h2>
            <p className="mx-auto mt-2 max-w-md text-white/85">
              Skip the back-and-forth — send your party details and we'll get straight to planning.
            </p>
            <PartyButton to="/book" variant="sunshine" size="lg" className="mt-6">
              Book My Party
            </PartyButton>
          </div>
        </SectionReveal>
      </div>
    </section>
  </>
);

export default Contact;
