export interface Step {
  number: number;
  title: string;
  body: string;
  icon: string;
}

export const steps: Step[] = [
  {
    number: 1,
    title: "Pick your party",
    body: "Browse 12 themes — slime, science, unicorns, games and more. Not sure? We'll help you choose the perfect fit for your kid.",
    icon: "MousePointerClick",
  },
  {
    number: 2,
    title: "Send your details",
    body: "Tell us the date, how many kids and where you are. We confirm availability and send a simple quote — travel fee included up front.",
    icon: "CalendarCheck",
  },
  {
    number: 3,
    title: "We bring everything",
    body: "Your leader arrives early, sets up, and runs a full 60 minutes of hands-on fun. You just enjoy the party.",
    icon: "PartyPopper",
  },
  {
    number: 4,
    title: "We clean it all up",
    body: "Every kid leaves with a take-home creation, and we pack up and tidy so your space looks like nothing happened.",
    icon: "Sparkles",
  },
];

export interface Reassurance {
  question: string;
  answer: string;
}

export const reassurances: Reassurance[] = [
  {
    question: "Who brings the supplies?",
    answer: "We do — every last bit. Aprons, table covers, activity materials and take-home kits all come with us.",
  },
  {
    question: "Who leads the party?",
    answer: "A trained, vetted Party With Me leader (or two for bigger groups). They run the entire hour so you can relax.",
  },
  {
    question: "How much space do I need?",
    answer: "A living room, kitchen table or condo party room is plenty. If kids can sit and craft or move and play, we can work with it.",
  },
  {
    question: "What do I need to provide?",
    answer: "Just the space and the birthday cake. Everything else — including the clean-up — is on us.",
  },
];
