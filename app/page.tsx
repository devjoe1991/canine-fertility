import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ServiceNavigator from "@/components/sections/ServiceNavigator";
import ProcessStrip from "@/components/sections/ProcessStrip";
import AreasStrip from "@/components/sections/AreasStrip";
import WhatsAppCTA from "@/components/cta/WhatsAppCTA";
import JsonLd from "@/components/seo/JsonLd";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";
import { services } from "@/data/services";

export const metadata = buildMetadata({
  title: `${BUSINESS.name} | Canine Fertility Services across London, Essex & Herts`,
  description: BUSINESS.metaDescription,
  path: "/",
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <Hero />
      <ProcessStrip />
      <About compact />
      <ServiceNavigator services={services} limit={6} />
      <AreasStrip />
      <MidCTABar />
    </main>
  );
}

function MidCTABar() {
  return (
    <section className="py-16 px-4 bg-[#002147] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Ready to talk through your breeding plans?
        </h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
          Send us a WhatsApp and we will come back the same day, or browse the
          full list of services to find the right place to start.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <WhatsAppCTA variant="primary" size="lg" />
          <Link
            href="/services"
            className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#002147] transition-colors rounded-sm inline-block font-semibold"
          >
            See All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
