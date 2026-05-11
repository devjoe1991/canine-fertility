"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS, NAV_ITEMS, type NavItem } from "@/lib/constants";
import WhatsAppCTA from "@/components/cta/WhatsAppCTA";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Set<string>>(new Set());
  const headerRef = useRef<HTMLElement>(null);

  // Close desktop dropdowns on outside click / Escape
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMobileExpanded(new Set());
  };

  const toggleMobileSection = (label: string) => {
    setMobileExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      {/* Top Bar: slim, no phone number displayed */}
      <div className="bg-[#002147] text-white py-2 px-4 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-[#D4AF37] font-medium">
            {BUSINESS.shortName}
          </span>
          <span className="text-white/80 hidden sm:inline">
            {BUSINESS.tagline}
          </span>
        </div>
      </div>

      {/* Sticky Header */}
      <motion.div
        className="backdrop-blur-md bg-white/90 border-b border-gray-200/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        <nav className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex justify-between items-center gap-3">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 min-w-0"
            onClick={closeMenu}
          >
            <Image
              src={BUSINESS.logoPath}
              alt={`${BUSINESS.name} logo`}
              width={44}
              height={44}
              className="object-contain w-9 h-9 sm:w-11 sm:h-11"
              priority
            />
            <span className="font-serif text-base sm:text-xl font-semibold text-[#002147] truncate hidden xs:block sm:block">
              <span className="hidden md:inline">{BUSINESS.name}</span>
              <span className="md:hidden">{BUSINESS.shortName}</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 items-center">
            {NAV_ITEMS.map((item) => (
              <DesktopNavItem
                key={item.label}
                item={item}
                isOpen={openDropdown === item.label}
                onOpen={() => setOpenDropdown(item.label)}
                onClose={() => setOpenDropdown(null)}
                onToggle={() =>
                  setOpenDropdown(
                    openDropdown === item.label ? null : item.label,
                  )
                }
              />
            ))}
            <WhatsAppCTA
              variant="outline"
              size="sm"
              label="Enquire"
              withIcon={true}
            />
          </div>

          {/* Mobile / Tablet: compact WhatsApp + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <WhatsAppCTA
              variant="primary"
              size="sm"
              label="WhatsApp"
              withIcon={true}
              className="hidden sm:inline-flex"
            />
            <WhatsAppCTA
              variant="primary"
              size="sm"
              label=""
              withIcon={true}
              className="sm:hidden !px-3"
            />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col gap-1.5 p-2 -mr-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <motion.span
                className="block w-6 h-0.5 bg-[#002147]"
                animate={
                  isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                }
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-[#002147]"
                animate={
                  isMenuOpen ? { opacity: 0 } : { opacity: 1 }
                }
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-[#002147]"
                animate={
                  isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                }
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="px-4 py-4 max-h-[calc(100vh-120px)] overflow-y-auto">
                <ul className="flex flex-col">
                  {NAV_ITEMS.map((item) => {
                    const expanded = mobileExpanded.has(item.label);
                    const hasChildren =
                      item.children && item.children.length > 0;
                    return (
                      <li
                        key={item.label}
                        className="border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-center">
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className="flex-1 text-[#002147] hover:text-[#D4AF37] transition-colors py-3 text-base"
                          >
                            {item.label}
                          </Link>
                          {hasChildren && (
                            <button
                              onClick={() => toggleMobileSection(item.label)}
                              className="p-3 -mr-3 text-[#002147]"
                              aria-label={
                                expanded
                                  ? `Collapse ${item.label}`
                                  : `Expand ${item.label}`
                              }
                              aria-expanded={expanded}
                            >
                              <motion.svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                animate={{ rotate: expanded ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <path
                                  d="M4 6l4 4 4-4"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </motion.svg>
                            </button>
                          )}
                        </div>
                        <AnimatePresence>
                          {hasChildren && expanded && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4 pb-2"
                            >
                              {item.children!.map((c) => (
                                <li key={c.href}>
                                  <Link
                                    href={c.href}
                                    onClick={closeMenu}
                                    className="block py-2 text-sm text-gray-700 hover:text-[#D4AF37] transition-colors"
                                  >
                                    {c.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>
                <div className="pt-4">
                  <WhatsAppCTA
                    variant="primary"
                    size="md"
                    label="Enquire on WhatsApp"
                    fullWidth
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}

function DesktopNavItem({
  item,
  isOpen,
  onOpen,
  onClose,
  onToggle,
}: {
  item: NavItem;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}) {
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className="text-[#002147] hover:text-[#D4AF37] transition-colors text-sm"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        onClick={onToggle}
        className="text-[#002147] hover:text-[#D4AF37] transition-colors text-sm inline-flex items-center gap-1"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {item.label}
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path
            d="M3 4.5l3 3 3-3"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 min-w-[240px] bg-white border border-gray-200 rounded-sm shadow-lg py-2"
            role="menu"
          >
            <Link
              href={item.href}
              className="block px-4 py-2 text-sm text-[#002147] hover:bg-[#fafafa] hover:text-[#D4AF37] font-medium"
              onClick={onClose}
            >
              All {item.label}
            </Link>
            <div className="border-t border-gray-100 my-1" />
            {item.children!.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#fafafa] hover:text-[#D4AF37]"
                onClick={onClose}
                role="menuitem"
              >
                {c.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
