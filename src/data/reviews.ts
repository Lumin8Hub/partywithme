export interface Review {
  quote: string;
  name: string;
  city: "Toronto" | "Boston";
  party?: string;
}

export const reviews: Review[] = [
  {
    quote:
      "The host was amazing! The kids were engaged the entire time and the clean-up was effortless. Genuinely the easiest party we've ever thrown.",
    name: "Jessica M.",
    city: "Toronto",
    party: "Slime",
  },
  {
    quote:
      "Best birthday party we've ever thrown. Our son is already asking for the same one next year — and honestly, so am I.",
    name: "Brian T.",
    city: "Boston",
    party: "Minute to Win It",
  },
  {
    quote:
      "They showed up early, ran the whole thing, and left the kitchen cleaner than they found it. I actually got to enjoy my daughter's birthday.",
    name: "Priya S.",
    city: "Toronto",
    party: "Unicorn",
  },
  {
    quote:
      "My boys did the slime party and lost their minds (in the best way). So much for slime being 'just for girls.'",
    name: "Megan R.",
    city: "Boston",
    party: "Slime",
  },
  {
    quote:
      "The science party was incredible. Every kid felt like a real scientist and the 'wow' moments were non-stop. Booking again for sure.",
    name: "Daniel K.",
    city: "Toronto",
    party: "Science",
  },
  {
    quote:
      "Stress-free from start to finish. Clear communication, on time, and the kids are still talking about it weeks later.",
    name: "Ashley W.",
    city: "Boston",
    party: "Canvas Painting",
  },
];

export const reviewStats = {
  fiveStarReviews: 22,
  cities: 2,
  wouldBookAgain: 98,
};

export const orderReviewsByRegion = (region: "both" | "toronto" | "boston"): Review[] => {
  if (region === "both") return reviews;
  const city = region === "toronto" ? "Toronto" : "Boston";
  return [...reviews].sort((a, b) => {
    if (a.city === city && b.city !== city) return -1;
    if (a.city !== city && b.city === city) return 1;
    return 0;
  });
};
