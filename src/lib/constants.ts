import { services } from "@/data/services";

export const BUSINESS = {
  name: "Capital Canine Fertility",
  shortName: "Capital Canine",
  legalName: "Capital Canine Fertility",
  tagline:
    "Mobile and clinic-based canine fertility across London, Essex & Herts. Same-day WhatsApp response.",
  description:
    "Mobile and clinic-based canine fertility across London, Essex and Hertfordshire. Progesterone testing, ultrasound, artificial insemination, semen analysis, stud handling and whelping support.",
  /** Short meta description (≤160 chars) */
  metaDescription:
    "Mobile canine fertility services in London, Essex and Herts. Progesterone testing, ultrasound, AI, semen analysis, stud handling and whelping support.",
  phone: {
    display: "+44 7377 677270",
    e164: "+447377677270",
    tel: "tel:+447377677270",
  },
  email: "capitalcaninefertility@gmail.com",
  emailHref: "mailto:capitalcaninefertility@gmail.com",
  address: {
    locality: "London",
    region: "Greater London",
    country: "GB",
    countryName: "United Kingdom",
  },
  hours: [
    {
      label: "Mon - Fri: 9:30am - 6:00pm",
      dow: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "18:00",
    },
    {
      label: "Saturday: 11:00am - 3:00pm",
      dow: ["Saturday"],
      opens: "11:00",
      closes: "15:00",
    },
    {
      label: "Sunday: 2:00pm - 5:00pm",
      dow: ["Sunday"],
      opens: "14:00",
      closes: "17:00",
    },
  ],
  hoursNote: "Out of hours appointments available",
  priceRange: "££",
  logoPath: "/mainlogo.png",
  ogImagePath: "/overlayebluehero.png",
} as const;

export const SOCIAL_LINKS = {
  /** User-facing link with tracking params for click attribution. */
  instagram:
    "https://www.instagram.com/capitalcaninefertility?igsh=MWNpcDVydzg2eTZxNg%3D%3D&utm_source=qr",
  /** Clean profile URL for `sameAs` in JSON-LD (no tracking params). */
  instagramCanonical: "https://www.instagram.com/capitalcaninefertility",
  instagramHandle: "@capitalcaninefertility",
} as const;

export const WHATSAPP = {
  number: "447377677270",
  base: "https://wa.me/447377677270",
  defaultMessage: "Hi, could I ask a few questions about your services?",
} as const;

export type AreaSlug = "london" | "essex" | "hertfordshire";

export interface Area {
  slug: AreaSlug;
  name: string;
  shortLabel: string;
  blurb: string;
  postcodesCovered: string[];
  whatsappPrefill: string;
}

export const AREAS: readonly Area[] = [
  {
    slug: "london",
    name: "London",
    shortLabel: "London",
    blurb:
      "Canine fertility services across Greater London, with home visits and clinic appointments available throughout the week.",
    postcodesCovered: [],
    whatsappPrefill:
      "Hi, I'm in London. Could you tell me what services you cover here?",
  },
  {
    slug: "essex",
    name: "Essex",
    shortLabel: "Essex",
    blurb:
      "Serving breeders and pet owners across Essex with progesterone testing, ultrasound scanning, semen analysis and whelping support.",
    postcodesCovered: [],
    whatsappPrefill:
      "Hi, I'm in Essex. Could you tell me what services you cover here?",
  },
  {
    slug: "hertfordshire",
    name: "Hertfordshire",
    shortLabel: "Herts",
    blurb:
      "Serving breeders and pet owners across Hertfordshire and the surrounding commuter belt with fertility testing, mating support and post-natal care.",
    postcodesCovered: [],
    whatsappPrefill:
      "Hi, I'm in Hertfordshire. Could you tell me what services you cover here?",
  },
] as const;

export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const serviceChildren: NavChild[] = services.map((s) => ({
  label: s.title,
  href: `/services/${s.id}`,
  description: s.description,
}));

const areaChildren: NavChild[] = AREAS.map((a) => ({
  label: a.name,
  href: `/areas-served/${a.slug}`,
}));

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Services", href: "/services", children: serviceChildren },
  { label: "Areas", href: "/areas-served", children: areaChildren },
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  explore: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ],
  areas: AREAS.map((a) => ({
    label: a.name,
    href: `/areas-served/${a.slug}`,
  })),
  services: services.map((s) => ({
    label: s.title,
    href: `/services/${s.id}`,
  })),
} as const;

export const SITE = {
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://capital-canine-fertility.netlify.app",
  locale: "en_GB",
  defaultOgImage: "/overlayebluehero.png",
} as const;

export { services as OFFERINGS };
