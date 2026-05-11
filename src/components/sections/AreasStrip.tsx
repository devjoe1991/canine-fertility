"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AREAS } from "@/lib/constants";

export default function AreasStrip() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#002147] mb-3">
            Where we work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Home visits and clinic appointments across our visiting area.
            Postal samples accepted from clients further afield.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {AREAS.map((a, i) => (
            <motion.div
              key={a.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
                delay: i * 0.1,
              }}
            >
              <Link
                href={`/areas-served/${a.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:border-[#D4AF37] hover:shadow-md transition-all h-full"
              >
                <h3 className="font-serif text-xl font-semibold text-[#002147] mb-2">
                  {a.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {a.blurb}
                </p>
                <span className="text-[#D4AF37] font-semibold text-sm">
                  Learn more →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
