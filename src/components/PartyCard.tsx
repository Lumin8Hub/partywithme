import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { ArrowRight, Clock } from "lucide-react";
import type { Party, PartyAccent } from "@/data/parties";

const accentStyles: Record<
  PartyAccent,
  { grad: string; text: string; chip: string; ring: string }
> = {
  lime: {
    grad: "from-party-lime/30 to-party-lime/5",
    text: "text-[#3f9220]",
    chip: "bg-party-lime/15 text-[#3f9220]",
    ring: "group-hover:ring-party-lime/40",
  },
  pink: {
    grad: "from-party-pink/30 to-party-pink/5",
    text: "text-party-pink",
    chip: "bg-party-pink/15 text-party-pink",
    ring: "group-hover:ring-party-pink/40",
  },
  sunshine: {
    grad: "from-party-sunshine/40 to-party-sunshine/5",
    text: "text-[#b8860b]",
    chip: "bg-party-sunshine/20 text-[#9a6f08]",
    ring: "group-hover:ring-party-sunshine/50",
  },
  blue: {
    grad: "from-party-blue/25 to-party-blue/5",
    text: "text-party-blue",
    chip: "bg-party-blue/12 text-party-blue",
    ring: "group-hover:ring-party-blue/40",
  },
  grape: {
    grad: "from-party-grape/25 to-party-grape/5",
    text: "text-party-grape",
    chip: "bg-party-grape/15 text-party-grape",
    ring: "group-hover:ring-party-grape/40",
  },
};

const PartyCard = ({ party }: { party: Party }) => {
  const a = accentStyles[party.accent];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = (Icons as any)[party.icon] ?? Icons.Sparkles;

  return (
    <Link
      to={`/parties/${party.slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${a.ring} hover:ring-2`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {party.image ? (
          <img
            src={party.image}
            alt={`${party.name} party`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${a.grad}`}>
            <Icon className={`h-16 w-16 ${a.text}`} strokeWidth={1.6} />
          </div>
        )}

        {/* Icon badge */}
        <span className="absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/95 shadow-soft">
          <Icon className={`h-5 w-5 ${a.text}`} />
        </span>

        {/* Tags */}
        <div className="absolute right-3 top-3 flex flex-col items-end gap-1.5">
          {party.custom && (
            <span className="rounded-full bg-party-sunshine px-2.5 py-1 text-xs font-bold text-party-navy shadow-soft">
              Seasonal
            </span>
          )}
        </div>

        {/* Price sticker */}
        {party.price && (
          <span className="price-sticker absolute bottom-3 right-3 text-sm">
            from ${party.price}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-bold text-party-navy">{party.name}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted-foreground">{party.hook}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${a.chip}`}>
            <Clock className="h-3 w-3" /> 75 min · led
          </span>
          <span className={`inline-flex items-center gap-1 text-sm font-semibold ${a.text}`}>
            See party
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PartyCard;
