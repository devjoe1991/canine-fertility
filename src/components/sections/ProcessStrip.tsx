"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const STEPS = [
  {
    n: "01",
    title: "Time the cycle",
    description:
      "Same-day progesterone testing and cytology to pinpoint the optimum mating window.",
    href: "/services/progesterone",
  },
  {
    n: "02",
    title: "Mating support",
    description:
      "Supervised stud handling or assisted insemination, with semen analysis if needed.",
    href: "/services/stud-handling",
  },
  {
    n: "03",
    title: "Confirm pregnancy",
    description:
      "Ultrasound between days 28 and 35 to confirm a litter and estimate puppy numbers.",
    href: "/services/ultrasound",
  },
  {
    n: "04",
    title: "Whelping and aftercare",
    description:
      "Hands-on whelping support, microchipping and puppy care guidance through the early weeks.",
    href: "/services/whelping",
  },
];

export default function ProcessStrip() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#002147] mb-3">
            How it works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            From timing the cycle to caring for the litter, we cover every
            stage. Drop in at any point.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
                delay: i * 0.1,
              }}
              className="relative"
            >
              <Link
                href={step.href}
                className="block bg-[#fafafa] border border-gray-200 rounded-lg p-5 sm:p-6 h-full hover:border-[#D4AF37] hover:shadow-md transition-all"
              >
                <span className="font-serif text-3xl font-bold text-[#D4AF37] mb-3 block">
                  {step.n}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#002147] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
