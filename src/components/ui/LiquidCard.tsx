"use client";

import { motion } from "framer-motion";
import { useUI } from "@/context/UIContext";

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string;
  price?: string;
}

interface LiquidCardProps {
  service: ServiceData;
  index: number;
}

export default function LiquidCard({ service, index }: LiquidCardProps) {
  const { openBottomSheet } = useUI();

  const handleEnquireClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openBottomSheet(service);
  };

  return (
    <motion.div
      className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col hover:border-[#D4AF37]/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 200, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="font-serif text-xl font-semibold text-[#002147] mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
      <motion.button
        className="w-full px-6 py-3 border-2 border-[#D4AF37] bg-[#D4AF37] text-[#002147] font-semibold hover:bg-[#C4A027] hover:border-[#C4A027] transition-all duration-200 rounded-sm shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleEnquireClick}
      >
        More Info
      </motion.button>
    </motion.div>
  );
}

