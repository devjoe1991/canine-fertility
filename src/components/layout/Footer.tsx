"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#002147] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Capital Canine Fertility Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <h3 className="font-serif text-xl font-semibold text-[#D4AF37]">
                Capital Canine Fertility
              </h3>
            </div>
            <p className="text-sm text-gray-300">
              Professional Canine Breeding Services in the Heart of the Capital
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#D4AF37]">Contact</h4>
            <p className="text-sm text-gray-300 mb-2">
              London, United Kingdom
            </p>
            <p className="text-sm text-gray-300 mb-2">
              <a href="tel:+441234567890" className="hover:text-[#D4AF37] transition-colors">
                +44 (0) 123 456 7890
              </a>
            </p>
            <p className="text-sm text-gray-300 mb-4">
              <a href="mailto:info@capitalcanine.co.uk" className="hover:text-[#D4AF37] transition-colors">
                info@capitalcanine.co.uk
              </a>
            </p>
            <h4 className="font-semibold mb-2 text-[#D4AF37]">Business Hours</h4>
            <p className="text-sm text-gray-300 mb-1">Mon - Fri: 9:30am - 6:00pm</p>
            <p className="text-sm text-gray-300 mb-1">Saturday: 11:00am - 3:00pm</p>
            <p className="text-sm text-gray-300 mb-1">Sunday: 2:00pm - 5:00pm</p>
            <p className="text-sm text-gray-300 italic">Out of hours appointments available</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#D4AF37]">Licensing</h4>
            <p className="text-sm text-gray-300 mb-4">
              Licensed and regulated by the Royal College of Veterinary Surgeons
            </p>
            <h4 className="font-semibold mb-2 text-[#D4AF37]">Emergency Appointments</h4>
            <p className="text-sm text-gray-300">
              Late or last minute emergency appointments are acceptable. Please call to arrange.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Capital Canine Fertility. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="px-6 py-2 bg-[#D4AF37] text-[#002147] font-semibold rounded-sm hover:bg-[#C4A027] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

