import Link from "next/link";
import WhatsAppCTA from "@/components/cta/WhatsAppCTA";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-[#002147] text-white px-4 py-16">
      <div className="max-w-2xl text-center">
        <p className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wider mb-3">
          404
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Page not found
        </h1>
        <p className="text-white/80 mb-8 text-sm sm:text-base">
          The page you are looking for has moved or never existed. Try one of
          the links below or send us a message and we will point you to what
          you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <Link
            href="/"
            className="px-6 py-3 bg-[#D4AF37] text-[#002147] font-semibold rounded-sm hover:bg-[#C4A027] transition-colors"
          >
            Back to home
          </Link>
          <Link
            href="/services"
            className="px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-sm hover:bg-[#D4AF37] hover:text-[#002147] transition-colors"
          >
            See services
          </Link>
        </div>
        <div className="flex justify-center">
          <WhatsAppCTA variant="outline" size="md" />
        </div>
      </div>
    </main>
  );
}
