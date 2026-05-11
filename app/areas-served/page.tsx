import Link from "next/link";
import Hero from "@/components/sections/Hero";
import WhatsAppCTA from "@/components/cta/WhatsAppCTA";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { AREAS, SITE } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Areas We Serve",
  description:
    "Canine fertility services in London, Essex and Hertfordshire. Home visits, clinic appointments and postal sample acceptance for clients outside the visiting area.",
  path: "/areas-served",
});

export default function AreasServedPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Areas Served",
    itemListElement: AREAS.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: a.name,
      url: `${SITE.url}/areas-served/${a.slug}`,
    })),
  };

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Served", path: "/areas-served" },
          ]),
          itemList,
        ]}
      />
      <Hero
        title="Areas We Serve"
        subtitle="London, Essex and Hertfordshire. Postal samples accepted from clients outside the visiting area."
      />

      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS.map((a) => (
              <Link
                key={a.slug}
                href={`/areas-served/${a.slug}`}
                className="block bg-[#fafafa] border border-gray-200 rounded-lg p-6 hover:border-[#D4AF37] hover:shadow-md transition-all"
              >
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#002147] mb-2">
                  {a.name}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {a.blurb}
                </p>
                <span className="text-[#D4AF37] font-semibold text-sm">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 px-4 bg-[#002147] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Outside our visiting area?
          </h2>
          <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base">
            Send a WhatsApp message and we will arrange postal samples or
            chilled semen shipment.
          </p>
          <div className="flex justify-center">
            <WhatsAppCTA variant="primary" size="lg" />
          </div>
        </div>
      </section>
    </main>
  );
}
