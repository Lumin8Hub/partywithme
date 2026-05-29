import { HandHeart, Sparkles, Users } from "lucide-react";
import SectionReveal from "@/components/animations/SectionReveal";

const tiles = [
  {
    icon: HandHeart,
    color: "text-party-blue",
    bg: "bg-party-blue/10",
    title: "We run the whole thing",
    body: "A trained party leader brings the supplies, leads every activity and keeps the energy high. You don't lift a finger.",
  },
  {
    icon: Sparkles,
    color: "text-party-pink",
    bg: "bg-party-pink/10",
    title: "Mess-free for you",
    body: "We set up before guests arrive and clean it all up after. Your space goes back to normal — promise.",
  },
  {
    icon: Users,
    color: "text-party-grape",
    bg: "bg-party-grape/10",
    title: "For every kid",
    body: "Boys, girls and mixed groups, together. Slime and Minute to Win It are runaway favourites for everyone.",
  },
];

const PromiseTiles = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="container">
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {tiles.map((t, i) => (
          <SectionReveal key={t.title} delay={i * 0.1}>
            <div className="flex h-full flex-col items-start rounded-3xl border border-border bg-white p-8 transition-shadow hover:shadow-soft">
              <span className={`grid h-14 w-14 place-items-center rounded-2xl ${t.bg}`}>
                <t.icon className={`h-7 w-7 ${t.color}`} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-party-navy">{t.title}</h3>
              <p className="mt-2 text-muted-foreground">{t.body}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PromiseTiles;
