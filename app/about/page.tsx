import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhatsAppCTA from "@/components/cta/WhatsAppCTA";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Over ten years in canine reproduction across London, Essex and Hertfordshire. Progesterone testing, ultrasound, semen analysis, stud handling and whelping support.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <Hero
        title="About Us"
        subtitle="Ten years of canine reproduction work across London, Essex and Hertfordshire."
      />

      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#002147] mb-5 sm:mb-6">
            Who we are
          </h2>
          <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              {BUSINESS.name} provides canine fertility and breeding support to
              breeders and pet owners across London, Essex and Hertfordshire.
              We cover the full cycle from ovulation testing through to puppy
              care in the early weeks of life.
            </p>
            <p>
              Our work is hands-on. We run progesterone testing in-house with
              same-day results, scan for pregnancy between days 28 and 35,
              support stud dogs through mating and step in when a whelping
              needs help.
            </p>
            <p>
              For clients outside our visiting area we accept progesterone
              samples by post and chilled semen shipments from anywhere in the
              world.
            </p>
          </div>
        </div>
      </section>

      <About />

      <section className="py-14 sm:py-16 px-4 bg-[#002147] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Talk to us about your litter
          </h2>
          <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base">
            Same-day response on WhatsApp. We answer questions before booking
            and there is no obligation.
          </p>
          <div className="flex justify-center">
            <WhatsAppCTA variant="primary" size="lg" />
          </div>
        </div>
      </section>
    </main>
  );
}
