import Hero from "@/components/sections/Hero";
import WhatsAppCTA from "@/components/cta/WhatsAppCTA";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { BUSINESS, AREAS, SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Send us a WhatsApp message for canine fertility services across London, Essex and Hertfordshire. Same-day response. Email and Instagram also welcome.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Hero
        title="Contact"
        subtitle="Same-day response on WhatsApp. We answer questions before booking."
      />

      <section
        id="contact-section"
        className="py-12 sm:py-16 px-4 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {/* WhatsApp primary */}
            <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] mb-3">
                Message us on WhatsApp
              </h2>
              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                The fastest way to reach us. Tell us where you are in the
                cycle and we will reply the same day.
              </p>
              <WhatsAppCTA variant="primary" size="lg" fullWidth />
            </div>

            {/* Email */}
            <div className="bg-[#fafafa] border border-gray-200 rounded-lg p-6 sm:p-8">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] mb-3">
                Email
              </h2>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                Prefer email? We typically reply within 24 hours during the
                working week.
              </p>
              <a
                href={BUSINESS.emailHref}
                className="inline-block text-[#D4AF37] font-semibold hover:text-[#C4A027] break-all"
              >
                {BUSINESS.email}
              </a>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-[#002147] mb-2">
                  Instagram
                </h3>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:text-[#C4A027]"
                >
                  {SOCIAL_LINKS.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          {/* Hours + Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mt-8 sm:mt-10">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] mb-4">
                Hours
              </h2>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                {BUSINESS.hours.map((h) => (
                  <li key={h.label}>{h.label}</li>
                ))}
                <li className="italic text-gray-500 pt-1">
                  {BUSINESS.hoursNote}
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] mb-4">
                Areas covered
              </h2>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                {AREAS.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/areas-served/${a.slug}`}
                      className="text-[#002147] hover:text-[#D4AF37] underline underline-offset-2"
                    >
                      {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mt-3">
                Outside our visiting area? We accept progesterone samples and
                chilled semen by post.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
