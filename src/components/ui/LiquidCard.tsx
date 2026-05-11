"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ServiceData } from "@/data/services";

interface LiquidCardProps {
  service: ServiceData;
  index: number;
  href: string;
}

export default function LiquidCard({ service, index, href }: LiquidCardProps) {
  return (
    <motion.div
      data-service-card
      className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        overflow: "visible",
        border: "1px solid #e5e7eb",
        outline: "1px solid transparent",
        outlineOffset: "-1px",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 200,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -4,
        outline: "1px solid #D4AF37",
        outlineOffset: "0px",
      }}
    >
      <h3 className="font-serif font-semibold text-[#002147] mb-2 text-lg md:text-xl">
        {service.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        {service.description}
      </p>
      {service.price && (
        <p className="text-sm font-semibold text-[#D4AF37] mb-4">
          {service.price}
        </p>
      )}
      <Link
        href={href}
        className="w-full px-6 py-3 border-2 border-[#D4AF37] bg-[#D4AF37] text-[#002147] font-semibold hover:bg-[#C4A027] hover:border-[#C4A027] transition-all duration-200 rounded-sm shadow-lg hover:shadow-xl text-center"
        style={{ marginTop: "auto" }}
        // Prevent the card-level drag (in the carousel) from being treated
        // as a click and triggering an unwanted navigation.
        onClick={(e) => e.stopPropagation()}
      >
        More Info
      </Link>
    </motion.div>
  );
}
