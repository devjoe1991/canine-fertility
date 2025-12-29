"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#002147] text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-[#D4AF37] font-medium">Capital Canine</span>
          <a 
            href="tel:+447377677270" 
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D4AF37] text-[#002147] font-semibold rounded-sm hover:bg-[#C4A027] transition-colors"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
              />
            </svg>
            +44 7377 677270
          </a>
        </div>
      </div>

      {/* Sticky Header */}
      <motion.header
        className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/mainlogo.png"
              alt="Capital Canine Fertility Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <div className="font-serif text-xl font-semibold text-[#002147] hidden sm:block">
              Capital Canine Fertility
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-[#002147] hover:text-[#D4AF37] transition-colors">
              Services
            </a>
            <a href="#about" className="text-[#002147] hover:text-[#D4AF37] transition-colors">
              About
            </a>
            <a href="#contact" className="text-[#002147] hover:text-[#D4AF37] transition-colors">
              Contact
            </a>
            <a 
              href="mailto:capitalcaninefertility@gmail.com?subject=Enquiry from Website"
              className="px-6 py-2 border-2 border-[#D4AF37] text-[#002147] hover:bg-[#D4AF37] hover:text-white transition-colors rounded-sm inline-block"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-[#D4AF37]"
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-[#D4AF37]"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-[#D4AF37]"
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            />
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                <a
                  href="#services"
                  className="text-[#002147] hover:text-[#D4AF37] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-[#002147] hover:text-[#D4AF37] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-[#002147] hover:text-[#D4AF37] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <a 
                  href="mailto:capitalcaninefertility@gmail.com?subject=Enquiry from Website"
                  className="px-6 py-2 border-2 border-[#D4AF37] text-[#002147] hover:bg-[#D4AF37] hover:text-white transition-colors rounded-sm w-full mt-2 inline-block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Enquire Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

