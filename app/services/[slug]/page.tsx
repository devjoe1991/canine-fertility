import { notFound } from "next/navigation";
import Link from "next/link";
import WhatsAppCTA from "@/components/cta/WhatsAppCTA";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";
import { services } from "@/data/services";
import { AREAS } from "@/lib/constants";
import ServiceFAQ from "@/components/sections/ServiceFAQ";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const svc = services.find((s) => s.id === slug);
  if (!svc) {
    return buildMetadata({
      title: "Service not found",
      description: "The page you are looking for could not be found.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: svc.title,
    description: svc.description,
    path: `/services/${svc.id}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const svc = services.find((s) => s.id === slug);
  if (!svc) notFound();

  const related = (svc.relatedIds ?? [])
    .map((id) => services.find((s) => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const jsonLd: object[] = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: svc.title, path: `/services/${svc.id}` },
    ]),
    serviceSchema(svc),
  ];
  if (svc.faqs && svc.faqs.length > 0) {
    jsonLd.push(faqSchema(svc.faqs));
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="relative bg-[#002147] text-white py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs sm:text-sm text-white/60 mb-3 sm:mb-4">
            <Link
              href="/services"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{svc.title}</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {svc.title}
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mb-5 sm:mb-6">
            {svc.description}
          </p>
          {svc.price && (
            <p className="text-lg sm:text-xl font-semibold text-[#D4AF37] mb-5 sm:mb-6">
              {svc.price}
            </p>
          )}
          <WhatsAppCTA service={svc.title} variant="primary" size="lg" />
        </div>
      </section>

      {/* Who this is for */}
      {svc.whoFor && svc.whoFor.length > 0 && (
        <section className="py-12 sm:py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] mb-4 sm:mb-6">
              Who this is for
            </h2>
            <ul className="space-y-2 text-gray-700 text-base sm:text-lg">
              {svc.whoFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="text-[#D4AF37] font-bold mt-1 flex-shrink-0"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* About + What's included */}
      <section className="py-12 sm:py-16 px-4 bg-[#fafafa]">
        <div className="max-w-3xl mx-auto">
          {svc.longDescription && (
            <div className="mb-10 sm:mb-12">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] mb-4">
                About this service
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {svc.longDescription}
              </p>
            </div>
          )}

          {svc.whatIncluded && svc.whatIncluded.length > 0 && (
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] mb-4">
                What&apos;s included
              </h2>
              <ul className="space-y-2 text-gray-700">
                {svc.whatIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="text-[#D4AF37] font-bold mt-1 flex-shrink-0"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* How the appointment works */}
      {svc.process && svc.process.length > 0 && (
        <section className="py-12 sm:py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] mb-6 sm:mb-8 text-center">
              How the appointment works
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {svc.process.map((step, i) => (
                <li
                  key={step.title}
                  className="bg-[#fafafa] border border-gray-200 rounded-lg p-5 sm:p-6"
                >
                  <span className="font-serif text-3xl font-bold text-[#D4AF37] mb-3 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#002147] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* FAQs */}
      {svc.faqs && svc.faqs.length > 0 && (
        <section className="py-12 sm:py-16 px-4 bg-[#fafafa]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] mb-4 sm:mb-6">
              Frequently asked questions
            </h2>
            <ServiceFAQ faqs={svc.faqs} />
          </div>
        </section>
      )}

      {/* Areas covered */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] mb-6 sm:mb-8 text-center">
            Areas covered
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
            {svc.title} is available across our visiting area. Postal samples
            and chilled semen shipments accepted from clients further afield.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {AREAS.map((a) => (
              <Link
                key={a.slug}
                href={`/areas-served/${a.slug}`}
                className="block bg-[#fafafa] border border-gray-200 rounded-lg p-5 sm:p-6 hover:border-[#D4AF37] hover:shadow-md transition-all"
              >
                <h3 className="font-serif text-lg font-semibold text-[#002147] mb-1">
                  {a.name}
                </h3>
                <p className="text-sm text-gray-600">{a.blurb}</p>
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <WhatsAppCTA service={svc.title} variant="primary" size="md" />
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="py-12 sm:py-16 px-4 bg-[#fafafa]">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] mb-6 sm:mb-8 text-center">
              Related services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/services/${r.id}`}
                  className="block bg-white p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-[#D4AF37] hover:shadow-md transition-all"
                >
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#002147] mb-2">
                    {r.title}
                  </h3>
                  <p className="text-sm text-gray-600">{r.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-14 sm:py-16 px-4 bg-[#002147] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to book in for {svc.title.toLowerCase()}?
          </h2>
          <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base">
            Same-day response on WhatsApp.
          </p>
          <div className="flex justify-center">
            <WhatsAppCTA service={svc.title} variant="primary" size="lg" />
          </div>
        </div>
      </section>
    </main>
  );
}
