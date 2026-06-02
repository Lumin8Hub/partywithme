import { Heart, Sparkles, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import PartyButton from "@/components/PartyButton";
import SectionHeading from "@/components/SectionHeading";
import SectionReveal from "@/components/animations/SectionReveal";
import FinalCTA from "@/components/FinalCTA";
import { site } from "@/data/site";

const values = [
  {
    icon: Heart,
    color: "text-party-pink",
    bg: "bg-party-pink/10",
    title: "Fun first, always",
    body: "Every party is built around what makes kids light up — hands-on, high-energy and a little bit magic.",
  },
  {
    icon: ShieldCheck,
    color: "text-party-blue",
    bg: "bg-party-blue/10",
    title: "Stress-free for parents",
    body: "We plan it, bring it, lead it and clean it. You get to actually enjoy your kid's birthday.",
  },
  {
    icon: Sparkles,
    color: "text-party-grape",
    bg: "bg-party-grape/10",
    title: "Made to include everyone",
    body: "Boys, girls and mixed groups, every ability — our parties are designed so no kid sits out.",
  },
];

const leaderPhotos = [
  "/images/craft-markers.jpg",
  "/images/slime-playdough.jpg",
  "/images/paint-hands.jpg",
  "/images/party-hula.jpg",
];

const About = () => (
  <>
    <PageHero
      eyebrow="Our story"
      title="Hi, we're Party With Me"
      subtitle="We started with one simple idea: birthday parties should be a blast for kids — and a break for parents."
    />

    <section className="bg-white py-14 md:py-20">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <SectionReveal>
          <div className="relative mx-auto w-full max-w-md">
            <img
              src="/images/craft-supplies.jpg"
              alt="Party With Me supplies ready to go"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift"
            />
            <div className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-party-pink/10" />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="font-display text-2xl font-bold text-party-navy md:text-3xl">
            From one mom's kitchen table to two cities
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Party With Me started when our founder, Moran, kept watching parents spend the whole
              party running around instead of enjoying it. There had to be a better way.
            </p>
            <p>
              So she built one: a fully-led party that arrives at your door, sets up, runs an hour of
              hands-on fun the kids rave about, and packs up every last bit of glitter before it
              leaves. No prep, no clean-up, no stress.
            </p>
            <p>
              Today our trained leaders bring that same joy to families across the Greater Toronto
              Area and Greater Boston — one slime-covered, giggle-filled party at a time.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>

    <section className="bg-party-sky py-14 md:py-20">
      <div className="container">
        <SectionHeading eyebrow="What we believe" title="The promise behind every party" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <SectionReveal key={v.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl bg-white p-8 shadow-soft">
                <span className={`grid h-14 w-14 place-items-center rounded-2xl ${v.bg}`}>
                  <v.icon className={`h-7 w-7 ${v.color}`} />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-party-navy">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.body}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-14 md:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Our leaders in action"
          title="The crew that makes the magic"
          subtitle="Trained, vetted and genuinely great with kids — our leaders are the heart of every party."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {leaderPhotos.map((src, i) => (
            <SectionReveal key={src} delay={(i % 4) * 0.08}>
              <div className="aspect-square overflow-hidden rounded-3xl shadow-soft">
                <img src={src} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mx-auto mt-12 max-w-2xl text-center">
          <div className="rounded-3xl bg-party-navy p-8 text-white md:p-10">
            <h3 className="font-display text-2xl font-bold">Love kids and a good party?</h3>
            <p className="mx-auto mt-2 max-w-md text-white/80">
              We're always looking for upbeat, reliable party leaders in both cities. Come join the crew.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <PartyButton href={site.joinTeam.gta} variant="sunshine">
                Join the team — GTA
              </PartyButton>
              <PartyButton href={site.joinTeam.boston} variant="white">
                Join the team — Boston
              </PartyButton>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>

    <FinalCTA />
  </>
);

export default About;
