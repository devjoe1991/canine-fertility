import { services } from "@/data/services";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "VeterinaryOrganization",
    name: "Capital Canine Fertility",
    description: "Professional Canine Breeding Services in the Heart of the Capital",
    url: "https://capitalcanine.co.uk",
    logo: "https://capitalcanine.co.uk/mainlogo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44-123-456-7890",
      contactType: "Customer Service",
      email: "info@capitalcanine.co.uk",
      areaServed: "GB",
      availableLanguage: "en",
    },
    priceRange: "££",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "11:00",
        closes: "15:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "14:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      // Add social media links when available
    ],
  };

  const serviceSchemas = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    description: service.description,
    provider: {
      "@type": "VeterinaryOrganization",
      name: "Capital Canine Fertility",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
  }));

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Capital Canine Fertility",
    url: "https://capitalcanine.co.uk",
    description: "Professional Canine Breeding Services in London",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://capitalcanine.co.uk/?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {serviceSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

