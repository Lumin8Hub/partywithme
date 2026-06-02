export interface CampTier {
  name: string;
  price: number;
  description: string;
  items: string[];
}

export const campTiers: CampTier[] = [
  {
    name: "Basic",
    price: 60,
    description: "A fun, simple kit that gets the party started.",
    items: [
      "Slime kit with 2 recipes",
      "Activity instruction cards",
      "Party favour bags",
      "Birthday card from Party With Me",
    ],
  },
  {
    name: "Classic",
    price: 130,
    description: "Everything they need for a full activity experience.",
    items: [
      "Everything in Basic",
      "Expanded activity kit (3 projects)",
      "Craft supplies & materials",
      "Themed decorations",
      "Take-home keepsakes for each child",
    ],
  },
  {
    name: "Deluxe",
    price: 160,
    description: "The full Party With Me experience, delivered to camp.",
    items: [
      "Everything in Classic",
      "Premium activity kit (4 projects)",
      "Extra supplies & add-ons",
      "Personalised birthday banner",
      "Special gift for the birthday child",
    ],
  },
];

export const campAddons = [
  "Extra slime colours",
  "Glow-in-the-dark materials",
  "Custom name labels",
  "Additional activity kit",
];
