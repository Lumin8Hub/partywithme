export type PartyAccent = "lime" | "pink" | "sunshine" | "blue" | "grape";
export type PartyCategory =
  | "Arts & Crafts"
  | "Slime & Science"
  | "Games & Active"
  | "Magic & Imagination";

export interface Party {
  slug: string;
  name: string;
  /** One vivid sentence for cards. */
  hook: string;
  /** Longer paragraphs for the detail page. */
  about: string[];
  price: number | null;
  perChild: number | null;
  accent: PartyAccent;
  /** lucide-react icon name. */
  icon: string;
  /** Public image path, or null to use the themed gradient panel. */
  image: string | null;
  categories: PartyCategory[];
  included: string[];
  addons: string[];
  gallery: string[];
  gtaOnly?: boolean;
  comingSoon?: boolean;
  /** Custom / seasonal theme — priced on request, shown in its own row. */
  custom?: boolean;
  /** Highlighted on the homepage carousel + parties grid lead. */
  featured?: boolean;
}

export const ACCENT_HEX: Record<PartyAccent, string> = {
  lime: "#5FC93C",
  pink: "#FF6FB5",
  sunshine: "#FFC93C",
  blue: "#2D7DD2",
  grape: "#8A5CF6",
};

export const parties: Party[] = [
  {
    slug: "slime",
    name: "Slime",
    hook: "Stretchy, squishy, totally yours — and yes, the boys love it most.",
    about: [
      "Kids mix three different slime recipes from scratch — fluffy, stretchy and glitter — then make each one their own with charms, scents and colours.",
      "Every guest leaves with a take-home tub of the slime they created. It's hands-on, a little bit messy (for us, not for you), and the most-requested party for a reason.",
      "Don't let the sparkle fool you: slime is a runaway favourite with the boys, too.",
    ],
    price: 320,
    perChild: 25,
    accent: "lime",
    icon: "Droplets",
    image: "/images/slime-playdough.jpg",
    categories: ["Slime & Science"],
    included: [
      "Three slime recipes mixed by every kid",
      "Charms, scents, glitter and mix-ins",
      "A take-home tub of slime each",
      "All supplies, aprons and table covers",
      "Set-up and clean-up handled by us",
    ],
    addons: ["Glitter tattoos", "Extra-special unique slime", "Nail-art stickers"],
    gallery: ["/images/slime-playdough.jpg", "/images/craft-supplies.jpg", "/images/paint-hands.jpg"],
    featured: true,
  },
  {
    slug: "unicorn",
    name: "Unicorn",
    hook: "Headbands, unicorn slime, sparkly perfume and glitter tattoos — pure magic.",
    about: [
      "A magical hour of unicorn joy: kids craft their own unicorn headband, mix shimmering unicorn slime, blend a sparkly perfume and finish with glitter tattoos.",
      "It's the dreamiest party on the menu and it always delivers the sparkle.",
    ],
    price: 340,
    perChild: 25,
    accent: "pink",
    icon: "Sparkles",
    image: "/images/balloons-pinkyellow.jpg",
    categories: ["Magic & Imagination"],
    included: [
      "Make-your-own unicorn headband",
      "Shimmering unicorn slime",
      "Sparkly perfume blending",
      "Glitter tattoos for everyone",
      "Set-up and clean-up handled by us",
    ],
    addons: ["Pin-the-horn game", "Hair tinsel / extensions", "Extra glitter tattoos"],
    gallery: ["/images/balloons-pinkyellow.jpg", "/images/cosmetics-toy.jpg", "/images/confetti.jpg"],
    featured: true,
  },
  {
    slug: "minute-to-win-it",
    name: "Minute to Win It",
    hook: "As seen on TV — 60 seconds, one wild challenge, total chaos. Boys & girls, head-to-head.",
    about: [
      "Fast-paced, hilarious, never-a-dull-moment game-show energy. Kids face off in a series of 60-second challenges — stacking, balancing, racing and laughing the whole way through.",
      "It's the ultimate boys-and-girls-together party and the most competitive fun your living room will ever see.",
    ],
    price: 300,
    perChild: 18,
    accent: "sunshine",
    icon: "Trophy",
    image: "/images/party-hula.jpg",
    categories: ["Games & Active"],
    included: [
      "A full hour of 60-second challenges",
      "Team and head-to-head rounds",
      "Energetic host running the whole show",
      "All game props and supplies",
      "Set-up and clean-up handled by us",
    ],
    addons: ["Custom challenge themed to the birthday kid", "Prize medals", "Extra games"],
    gallery: ["/images/party-hula.jpg", "/images/confetti.jpg", "/images/balloons-assorted.jpg"],
    featured: true,
  },
  {
    slug: "science",
    name: "Science",
    hook: "Five jaw-dropping experiments led by our party scientists. Equal parts 'whoa' and 'again!'",
    about: [
      "Our party scientists lead five hands-on experiments full of fizz, foam, colour-change and wow moments — the kind of science that gets a whole room of kids gasping.",
      "Every experiment is safe, supervised and designed to make kids feel like real scientists for an hour.",
    ],
    price: 320,
    perChild: 25,
    accent: "blue",
    icon: "FlaskConical",
    image: "/images/craft-supplies.jpg",
    categories: ["Slime & Science"],
    included: [
      "Five hands-on experiments",
      "Lab coats / goggles vibe for the crew",
      "Led by our trained party scientists",
      "All materials and safe supplies",
      "Set-up and clean-up handled by us",
    ],
    addons: ["Take-home experiment kit", "Glow-in-the-dark finale", "Extra experiment"],
    gallery: ["/images/craft-supplies.jpg", "/images/paint-hands.jpg", "/images/cosmetics-toy.jpg"],
    featured: true,
  },
  {
    slug: "canvas-painting",
    name: "Canvas Painting",
    hook: "Every artist goes home with a masterpiece — a guided painting any skill level can nail.",
    about: [
      "A guided, mosaic-style painting session where every kid follows along step-by-step and leaves with a finished canvas to be proud of.",
      "No experience needed — our leaders make sure every painter feels like a star.",
    ],
    price: 340,
    perChild: 25,
    accent: "grape",
    icon: "Palette",
    image: "/images/paint-watercolor.jpg",
    categories: ["Arts & Crafts"],
    included: [
      "A canvas and full paint kit per artist",
      "Guided, step-by-step instruction",
      "Aprons and table protection",
      "A finished masterpiece to take home",
      "Set-up and clean-up handled by us",
    ],
    addons: ["Larger canvas", "Custom design for the birthday kid", "Easels"],
    gallery: ["/images/paint-watercolor.jpg", "/images/paint-body.jpg", "/images/craft-markers.jpg"],
    featured: true,
  },
  {
    slug: "jewelry-making",
    name: "Jewelry Making & Box Decorating",
    hook: "Beads, charms and a decorated keepsake box to keep it all in.",
    about: [
      "Kids design their own bracelets and necklaces from a huge spread of beads and charms, then decorate a little keepsake box to take their creations home in.",
      "A calm, crafty, deeply satisfying party for kids who love making things with their hands.",
    ],
    price: 340,
    perChild: 25,
    accent: "pink",
    icon: "Gem",
    image: "/images/cosmetics-toy.jpg",
    categories: ["Arts & Crafts"],
    included: [
      "Beads, charms and stretch cord",
      "A decorate-your-own keepsake box",
      "All supplies and table set-up",
      "Take-home jewellery and box",
      "Set-up and clean-up handled by us",
    ],
    addons: ["Charm upgrade pack", "Name beads", "Matching friendship bracelets"],
    gallery: ["/images/cosmetics-toy.jpg", "/images/craft-markers.jpg", "/images/craft-supplies.jpg"],
    featured: true,
  },
  {
    slug: "active-games",
    name: "Active Games",
    hook: "Big-energy group games that get every kid moving, laughing and included.",
    about: [
      "A non-stop hour of parachute games, relay races, tag twists and team challenges — designed to burn energy and keep every single kid in the action.",
      "Perfect for mixed groups and big personalities who just want to run, play and laugh.",
    ],
    price: 300,
    perChild: 18,
    accent: "lime",
    icon: "Zap",
    image: null,
    categories: ["Games & Active"],
    included: [
      "A full hour of led group games",
      "Parachute, relays and team challenges",
      "High-energy host keeping it moving",
      "All equipment provided",
      "Set-up and clean-up handled by us",
    ],
    addons: ["Prize medals", "Themed game round", "Bubble finale"],
    gallery: ["/images/party-hula.jpg", "/images/confetti.jpg", "/images/balloons-assorted.jpg"],
  },
  {
    slug: "diy-cosmetics",
    name: "DIY Cosmetics",
    hook: "Scented soaps, sparkly lip gloss and natural perfume — a spa lab in your living room.",
    about: [
      "Kids become little cosmetic chemists, whipping up scented soaps, sparkly lip gloss and natural perfumes to take home.",
      "It's part science, part spa day, and entirely delightful.",
    ],
    price: 340,
    perChild: 25,
    accent: "grape",
    icon: "Heart",
    image: null,
    categories: ["Arts & Crafts"],
    included: [
      "Make scented soap, lip gloss and perfume",
      "Choice of scents and sparkle",
      "All ingredients and containers",
      "A little take-home cosmetics kit",
      "Set-up and clean-up handled by us",
    ],
    addons: ["Bath-bomb add-on", "Custom labels", "Extra take-home jar"],
    gallery: ["/images/cosmetics-toy.jpg", "/images/paint-hands.jpg", "/images/balloons-pinkyellow.jpg"],
  },
  {
    slug: "magic-training",
    name: "Magic Training",
    hook: "Learn real tricks from a party magician and put on a show for the grown-ups.",
    about: [
      "Our party magician teaches kids a set of genuine, kid-friendly magic tricks — then helps them put on a mini-show to amaze the parents.",
      "Every young magician leaves with the secrets (and props) to keep performing at home.",
    ],
    price: 340,
    perChild: 25,
    accent: "grape",
    icon: "Wand2",
    image: null,
    categories: ["Magic & Imagination"],
    included: [
      "Learn a set of real magic tricks",
      "Practice and a mini-show finale",
      "Take-home magic props",
      "Led by our party magician",
      "Set-up and clean-up handled by us",
    ],
    addons: ["Magician's cape", "Extra trick kit", "Photo with the magician"],
    gallery: ["/images/confetti.jpg", "/images/balloons-purple.jpg", "/images/balloons-assorted.jpg"],
  },
  {
    slug: "chocolate-pinata",
    name: "Chocolate Piñata",
    hook: "Smash a chocolate piñata and share the treasure — sweet, dramatic, unforgettable.",
    about: [
      "A show-stopping chocolate piñata the birthday kid gets to smash open, releasing a cascade of treats for everyone to share.",
      "It's the kind of grand finale guests talk about for weeks.",
    ],
    price: null,
    perChild: null,
    accent: "sunshine",
    icon: "Candy",
    image: null,
    categories: ["Games & Active"],
    included: [
      "A handcrafted chocolate piñata",
      "The big smash moment",
      "Treats to share with all guests",
      "All set-up and props",
      "Set-up and clean-up handled by us",
    ],
    addons: ["Personalised piñata", "Extra treats", "Photo moment set-up"],
    gallery: ["/images/confetti.jpg", "/images/balloons-assorted.jpg", "/images/balloons-pinkyellow.jpg"],
    custom: true,
  },
  {
    slug: "bedazzling",
    name: "Bedazzling",
    hook: "Bling out tees, totes and accessories with gems, studs and pure sparkle.",
    about: [
      "A sparkly, customise-everything party where kids bedazzle tees, totes and accessories with gems, studs and shine.",
      "Every guest leaves with a one-of-a-kind wearable creation they actually made themselves.",
    ],
    price: 400,
    perChild: 25,
    accent: "pink",
    icon: "Sparkle",
    image: null,
    categories: ["Arts & Crafts"],
    included: [
      "Gems, studs and sparkle galore",
      "Customise tees, totes and more",
      "All supplies provided",
      "A bedazzled take-home item",
      "Set-up and clean-up handled by us",
    ],
    addons: ["Extra gem upgrade", "Matching set for the birthday kid", "Personalised design stencils"],
    gallery: ["/images/confetti.jpg", "/images/balloons-pinkyellow.jpg", "/images/cosmetics-toy.jpg"],
    featured: true,
  },
  {
    slug: "build-a-friend",
    name: "Build-a-Friend",
    hook: "Stuff, dress and name a cuddly new best friend — theirs to keep forever.",
    about: [
      "Kids choose, stuff, dress and name their very own plush friend — a cuddly keepsake from a party they'll never forget.",
      "Every guest leaves with a brand-new best friend and a birth certificate to make it official.",
    ],
    price: 370,
    perChild: 25,
    accent: "blue",
    icon: "Rabbit",
    image: null,
    categories: ["Magic & Imagination"],
    included: [
      "Choose-and-stuff your plush friend",
      "Outfits and accessories to dress them up",
      "A birth certificate / name tag",
      "A take-home cuddly buddy",
      "Set-up and clean-up handled by us",
    ],
    addons: ["Extra outfit set", "Mini carrying bag", "Personalised name tag"],
    gallery: ["/images/balloons-purple.jpg", "/images/confetti.jpg", "/images/balloons-assorted.jpg"],
    featured: true,
  },
];

export const partyBySlug = (slug: string) => parties.find((p) => p.slug === slug);
export const featuredParties = parties.filter((p) => p.featured);
export const customParties = parties.filter((p) => p.custom);
export const listedParties = parties.filter((p) => !p.custom);
export const partyCategories: PartyCategory[] = [
  "Arts & Crafts",
  "Slime & Science",
  "Games & Active",
  "Magic & Imagination",
];
