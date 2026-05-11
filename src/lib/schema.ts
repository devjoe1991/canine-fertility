import { AREAS, BUSINESS, SITE, SOCIAL_LINKS } from "./constants";
import type { ServiceData } from "@/data/services";

const businessId = `${SITE.url}/#business`;

function absolute(path: string): string {
  if (path === "/" || path === "") return SITE.url;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Parse "From £45", "Consultation from £50", "£45" → { minPrice, hasFrom } */
function parsePrice(
  price?: string,
): { minPrice: string; hasFrom: boolean } | undefined {
  if (!price) return undefined;
  const match = price.match(/(\d+(?:\.\d+)?)/);
  if (!match) return undefined;
  return {
    minPrice: match[1],
    hasFrom: /from/i.test(price),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "@id": businessId,
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: SITE.url,
    logo: `${SITE.url}${BUSINESS.logoPath}`,
    image: `${SITE.url}${BUSINESS.ogImagePath}`,
    telephone: BUSINESS.phone.e164,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      addressCountry: BUSINESS.address.country,
    },
    areaServed: AREAS.map((a) => ({
      "@type": "AdministrativeArea",
      name: a.name,
    })),
    serviceArea: AREAS.map((a) => ({
      "@type": "AdministrativeArea",
      name: a.name,
    })),
    sameAs: [SOCIAL_LINKS.instagramCanonical],
    openingHoursSpecification: BUSINESS.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dow.map((d) => `https://schema.org/${d}`),
      opens: h.opens,
      closes: h.closes,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: BUSINESS.name,
    url: SITE.url,
    description: BUSINESS.description,
    inLanguage: "en-GB",
    publisher: { "@id": businessId },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absolute(it.path),
    })),
  };
}

export function serviceSchema(svc: ServiceData) {
  const parsed = parsePrice(svc.price);
  const offer = parsed
    ? {
        "@type": "Offer" as const,
        availability: "https://schema.org/InStock",
        url: `${SITE.url}/services/${svc.id}`,
        priceCurrency: "GBP",
        priceSpecification: {
          "@type": "PriceSpecification" as const,
          priceCurrency: "GBP",
          ...(parsed.hasFrom
            ? { minPrice: parsed.minPrice }
            : { price: parsed.minPrice }),
        },
      }
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/services/${svc.id}#service`,
    serviceType: svc.title,
    name: svc.title,
    description: svc.description,
    provider: { "@id": businessId },
    areaServed: AREAS.map((a) => ({
      "@type": "AdministrativeArea",
      name: a.name,
    })),
    ...(offer ? { offers: offer } : {}),
    url: `${SITE.url}/services/${svc.id}`,
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function placeSchema(areaName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: areaName,
    containedInPlace: {
      "@type": "Country",
      name: BUSINESS.address.countryName,
    },
  };
}
