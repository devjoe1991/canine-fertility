import Link from "next/link";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/Hero";
import WhatsAppCTA from "@/components/cta/WhatsAppCTA";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, placeSchema } from "@/lib/schema";
import { AREAS } from "@/lib/constants";
import { services } from "@/data/services";

interface PageProps {
  params: Promise<{ area: string }>;
}

export function generateStaticParams() {
  return AREAS.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { area } = await params;
  const found = AREAS.find((a) => a.slug === area);
  if (!found) {
    return buildMetadata({
      title: "Area not found",
      description: "The page you are looking for could not be found.",
      path: `/areas-served/${area}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: `Canine Fertility Services in ${found.name}`,
    description: `${found.blurb} Progesterone testing, ultrasound, semen analysis, stud handling and whelping support.`,
    path: `/areas-served/${found.slug}`,
  });
}

export default async function AreaPage({ params }: PageProps) {
  const { area } = await params;
  const found = AREAS.find((a) => a.slug === area);
  if (!found) notFound();

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas Served", path: "/areas-served" },
            { name: found.name, path: `/areas-served/${found.slug}` },
          ]),
          placeSchema(found.name),
        ]}
      />
      <Hero
        title={`Canine Fertility in ${found.name}`}
        subtitle={found.blurb}
      />

      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] mb-4">
            Serving {found.name}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">
            We cover {found.name} with home visits and clinic appointments
            throughout the week. The full range of our services is available
            here, from progesterone testing through to puppy care.
          </p>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            For breeders outside the immediate visiting area, postal
            progesterone samples are turned around the same day and we accept
            chilled semen shipments from anywhere in the world.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] mb-6 text-center">
            Services available in {found.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.id}`}
                className="block bg-white border border-gray-200 rounded-lg p-5 sm:p-6 hover:border-[#D4AF37] hover:shadow-md transition-all"
              >
                <h3 className="font-serif text-lg font-semibold text-[#002147] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {s.description}
                </p>
                {s.price && (
                  <p className="text-sm font-semibold text-[#D4AF37]">
                    {s.price}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 px-4 bg-[#002147] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Based in {found.name}?
          </h2>
          <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base">
            Same-day response on WhatsApp.
          </p>
          <div className="flex justify-center">
            <WhatsAppCTA prefill={found.whatsappPrefill} variant="primary" size="lg" />
          </div>
        </div>
      </section>
    </main>
  );
}
