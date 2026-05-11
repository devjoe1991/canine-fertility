"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesGridSection() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#002147] mb-3">
            Full service range
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            From the first progesterone test to puppies leaving for their new
            homes, every stage is covered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
                delay: (i % 6) * 0.05,
              }}
            >
              <Link
                href={`/services/${s.id}`}
                className="block bg-[#fafafa] border border-gray-200 rounded-lg p-5 sm:p-6 h-full hover:border-[#D4AF37] hover:shadow-md transition-all"
              >
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#002147] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {s.description}
                </p>
                <div className="flex justify-between items-center pt-2">
                  {s.price && (
                    <span className="text-sm font-semibold text-[#D4AF37]">
                      {s.price}
                    </span>
                  )}
                  <span className="text-sm text-[#002147] font-semibold ml-auto">
                    Learn more →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
