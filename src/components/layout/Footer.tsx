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
                src="/mainlogo.png"
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
              Professional Canine Fertility Services across London, Essex & Herts
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#D4AF37]">Contact</h4>
            <p className="text-sm text-gray-300 mb-2">
              London, United Kingdom
            </p>
            <p className="text-sm text-gray-300 mb-2">
              <a href="tel:+447377677270" className="hover:text-[#D4AF37] transition-colors">
                +44 7377 677270
              </a>
            </p>
            <p className="text-sm text-gray-300 mb-2">
              <a href="mailto:capitalcaninefertility@gmail.com" className="hover:text-[#D4AF37] transition-colors">
                capitalcaninefertility@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-300 mb-4">
              <a 
                href="https://www.instagram.com/capitalcaninefertility?igsh=MWNpcDVydzg2eTZxNg%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-[#D4AF37] transition-colors"
                aria-label="Follow us on Instagram"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            </p>
            <h4 className="font-semibold mb-2 text-[#D4AF37]">Business Hours</h4>
            <p className="text-sm text-gray-300 mb-1">Mon - Fri: 9:30am - 6:00pm</p>
            <p className="text-sm text-gray-300 mb-1">Saturday: 11:00am - 3:00pm</p>
            <p className="text-sm text-gray-300 mb-1">Sunday: 2:00pm - 5:00pm</p>
            <p className="text-sm text-gray-300 italic">Out of hours appointments available</p>
          </div>

          <div>
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

