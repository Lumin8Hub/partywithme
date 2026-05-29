import { Star } from "lucide-react";
import type { Review } from "@/data/reviews";

const TestimonialCard = ({ review }: { review: Review }) => (
  <figure className="flex h-full flex-col rounded-3xl border border-border bg-white p-7 shadow-soft">
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-party-sunshine text-party-sunshine" />
      ))}
    </div>
    <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-party-navy">
      “{review.quote}”
    </blockquote>
    <figcaption className="mt-5 flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-party-blue/10 font-display font-bold text-party-blue">
        {review.name.charAt(0)}
      </span>
      <span>
        <span className="block font-display font-semibold text-party-navy">{review.name}</span>
        <span className="block text-sm text-muted-foreground">
          {review.city}
          {review.party ? ` · ${review.party} party` : ""}
        </span>
      </span>
    </figcaption>
  </figure>
);

export default TestimonialCard;
