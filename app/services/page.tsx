import Hero from "@/components/sections/Hero";
import LiquidCard from "@/components/ui/LiquidCard";
import WhatsAppCTA from "@/components/cta/WhatsAppCTA";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { services } from "@/data/services";
import { SITE } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Canine fertility services in London, Essex and Hertfordshire: progesterone testing, ultrasound, semen analysis, stud handling, whelping, microchipping and puppy care.",
  path: "/services",
});

export default function ServicesIndexPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Services",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${SITE.url}/services/${s.id}`,
    })),
  };

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          itemListSchema,
        ]}
      />
      <Hero
        title="Services"
        subtitle="Full cycle support from ovulation testing through to puppy care."
      />

      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 justify-items-center">
            {services.map((s, i) => (
              <LiquidCard
                key={s.id}
                service={s}
                index={i}
                href={`/services/${s.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 px-4 bg-[#002147] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Not sure where to start?
          </h2>
          <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base">
            Send us a WhatsApp with a short description of where you are in
            the cycle and we will point you to the right service.
          </p>
          <div className="flex justify-center">
            <WhatsAppCTA variant="primary" size="lg" />
          </div>
        </div>
      </section>
    </main>
  );
}
