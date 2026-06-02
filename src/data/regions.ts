import { asset } from "@/lib/asset";

export interface Region {
  id: "toronto" | "boston";
  city: string;
  area: string;
  base: string;
  radius: string;
  blurb: string;
  note?: string;
  image: string;
}

export const regions: Region[] = [
  {
    id: "toronto",
    city: "Toronto",
    area: "Greater Toronto Area",
    base: "Vaughan",
    radius: "~40 km",
    blurb:
      "We bring the party across the GTA — homes, condos and community spaces, all around Vaughan.",
    note: "Chocolate Piñata available here!",
    image: asset("/images/toronto.jpg"),
  },
  {
    id: "boston",
    city: "Boston",
    area: "Greater Boston Area",
    base: "Needham",
    radius: "~15 mi",
    blurb:
      "From Back Bay to the 'burbs — we cover Greater Boston, based out of Needham.",
    image: asset("/images/boston.jpg"),
  },
];

export const travelLine =
  "A small travel fee may apply based on distance — we'll always confirm it with your quote, and we do our best to send a leader close to you to keep it low.";
