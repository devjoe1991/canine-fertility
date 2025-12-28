"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center px-4 py-12 bg-[#002147] overflow-hidden">
      {/* Faded Background Image */}
      <div className="absolute inset-0 z-0 opacity-35">
        <Image
          src="/ultrasound-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={80}
        />
      </div>
      
      {/* Blue overlay to maintain blue background */}
      <div className="absolute inset-0 z-10 bg-[#002147]/70" />
      
      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <motion.h1
          className="font-serif text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.2 }}
        >
          Capital Canine Fertility
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.4 }}
        >
          Professional Canine Breeding Services in the Heart of the Capital
        </motion.p>
        <motion.button
          className="px-8 py-4 border-2 border-[#D4AF37] bg-[#D4AF37] text-[#002147] font-semibold text-lg hover:bg-[#C4A027] hover:border-[#C4A027] transition-colors rounded-sm shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Now
        </motion.button>
      </div>
      
      {/* Shadow effect and separator at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-8 bg-linear-to-b from-transparent via-black/10 to-black/20" />
      <div className="absolute bottom-0 left-0 right-0 z-20 h-px bg-linear-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
    </section>
  );
}

