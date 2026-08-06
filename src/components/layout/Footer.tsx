"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BUSINESS,
  FOOTER_LINKS,
  SOCIAL_LINKS,
} from "@/lib/constants";
import WhatsAppCTA from "@/components/cta/WhatsAppCTA";

export default function Footer() {
  return (
    <footer className="bg-[#002147] text-white pt-12 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src={BUSINESS.logoPath}
                alt={`${BUSINESS.name} logo`}
                width={56}
                height={56}
                className="object-contain"
              />
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#D4AF37]">
                {BUSINESS.name}
              </h3>
            </Link>
            <p className="text-sm text-gray-300 max-w-sm">
              {BUSINESS.tagline}
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-4 text-[#D4AF37] text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.explore.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold mt-6 mb-3 text-[#D4AF37] text-sm uppercase tracking-wider">
              Areas Served
            </h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.areas.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-[#D4AF37] text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.services.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column: anchor target for FloatingWhatsApp hide */}
          <div id="contact-section">
            <h4 className="font-semibold mb-4 text-[#D4AF37] text-sm uppercase tracking-wider">
              Get In Touch
            </h4>
            <p className="text-sm text-gray-300 mb-2">
              {BUSINESS.address.locality}, {BUSINESS.address.countryName}
            </p>
            <p className="text-sm text-gray-300 mb-3">
              <a
                href={BUSINESS.emailHref}
                className="hover:text-[#D4AF37] transition-colors break-all"
              >
                {BUSINESS.email}
              </a>
            </p>
            <div className="mb-4">
              <WhatsAppCTA
                variant="primary"
                size="sm"
                label="Message on WhatsApp"
              />
            </div>
            <p className="text-sm text-gray-300 mb-4">
              <a
                href={SOCIAL_LINKS.instagram}
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
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
            </p>

            <h4 className="font-semibold mb-2 text-[#D4AF37] text-sm uppercase tracking-wider">
              Hours
            </h4>
            <ul className="text-sm text-gray-300 space-y-1">
              {BUSINESS.hours.map((h) => (
                <li key={h.label}>{h.label}</li>
              ))}
              <li className="italic text-gray-300 pt-1">
                {BUSINESS.hoursNote}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-300">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
