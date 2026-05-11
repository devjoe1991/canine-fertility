"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQItem[];
  /** Index opened by default. Pass null to collapse all on mount. */
  defaultOpenIndex?: number | null;
}

export default function ServiceFAQ({
  faqs,
  defaultOpenIndex = 0,
}: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="border border-gray-200 rounded-lg bg-white overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full px-4 sm:px-5 py-4 flex justify-between items-center gap-4 text-left hover:bg-[#fafafa] transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-[#002147] text-sm sm:text-base">
                {faq.question}
              </span>
              <motion.svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                className="flex-shrink-0 text-[#D4AF37]"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                aria-hidden="true"
              >
                <path
                  d="M4 7l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-5 pb-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
