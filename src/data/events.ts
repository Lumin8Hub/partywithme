export interface EventStation {
  name: string;
  description: string;
  icon: string;
}

export const eventStations: EventStation[] = [
  {
    name: "Slime Stations",
    description: "Kids mix their own slime with colours and charms — messy fun, totally supervised.",
    icon: "Droplets",
  },
  {
    name: "Balloon Twisting",
    description: "Our leaders twist custom balloon animals and creations for every guest.",
    icon: "Wind",
  },
  {
    name: "Face Painting",
    description: "Professional face painting with kid-safe paints — designs from butterflies to superheroes.",
    icon: "Palette",
  },
  {
    name: "Glitter Tattoos",
    description: "Long-lasting sparkly tattoos that kids (and parents) actually love.",
    icon: "Sparkles",
  },
  {
    name: "Arts & Crafts Stations",
    description: "Guided craft projects tailored to your event theme and age group.",
    icon: "Scissors",
  },
  {
    name: "Field Games",
    description: "High-energy group games and relay races for large outdoor gatherings.",
    icon: "Trophy",
  },
];

export interface TrustedPartner {
  name: string;
  /** Path to logo in /public — swap when real logos are available. */
  logo: string | null;
}

export const trustedPartners: TrustedPartner[] = [
  { name: "Centre Camp", logo: null },
  { name: "Camp Northland B'nai Brith", logo: null },
  { name: "City of Vaughan", logo: null },
  { name: "Camp Shalom", logo: null },
];
