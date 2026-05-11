"use client";

import { motion } from "framer-motion";

// TODO: replace these with the user's confirmed credentials/numbers.
// Suggested signals based on competitive analysis:
//   - "Animal Ultrasound Association (AUA) certified" (competitor 1 leads with this)
//   - "PeddyMark-trained microchipper" (competitor 1)
//   - "Member of the [body]" / "RCVS-registered veterinary professional" if applicable
//   - Years experience (current site copy says "over 10 years")
//   - Clients served / litters supported across the UK
const SIGNALS = [
  {
    headline: "10+ years",
    body: "in canine reproduction across the UK.",
  },
  {
    headline: "Mobile & clinic",
    body: "home visits and clinic appointments throughout the week.",
  },
  {
    headline: "Same-day results",
    body: "in-house progesterone testing with results back the same day.",
  },
  {
    headline: "Worldwide shipping",
    body: "chilled semen accepted from and sent to anywhere in the world.",
  },
];

export default function TrustStrip() {
  return (
    <section className="py-12 sm:py-14 px-4 bg-[#002147] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SIGNALS.map((s, i) => (
            <motion.div
              key={s.headline}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
                delay: i * 0.08,
              }}
              className="text-center sm:text-left"
            >
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-1">
                {s.headline}
              </p>
              <p className="text-sm text-white/80 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
