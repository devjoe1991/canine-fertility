"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";
import WhatsAppCTA from "@/components/cta/WhatsAppCTA";

interface HeroProps {
  title?: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function Hero({
  title = BUSINESS.name,
  subtitle = BUSINESS.tagline,
  align = "center",
}: HeroProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <section className="relative min-h-[40vh] flex items-center justify-center px-4 py-14 sm:py-16 bg-[#002147] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={BUSINESS.ogImagePath}
          alt=""
          fill
          className="object-cover"
          priority
          quality={80}
        />
      </div>
      <div className="absolute inset-0 z-10 bg-[#002147]/70" />

      <div className={`relative z-20 max-w-4xl ${alignClass}`}>
        <motion.h1
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            delay: 0.2,
          }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            delay: 0.4,
          }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          className={`${align === "center" ? "flex justify-center" : ""}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            delay: 0.6,
          }}
        >
          <WhatsAppCTA variant="primary" size="lg" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 h-8 bg-linear-to-b from-transparent via-black/10 to-black/20" />
      <div className="absolute bottom-0 left-0 right-0 z-20 h-px bg-linear-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
    </section>
  );
}
