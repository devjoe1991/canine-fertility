"use client";

import { motion } from "framer-motion";

interface LiquidDotsProps {
  total: number;
  activeIndex: number;
}

export default function LiquidDots({ total, activeIndex }: LiquidDotsProps) {
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      {Array.from({ length: total }).map((_, index) => (
        <div key={index} className="relative w-2 h-2 flex items-center justify-center">
          {index === activeIndex ? (
            <motion.div
              layoutId="activeDot"
              className="absolute bg-[#D4AF37] rounded-full"
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 150,
              }}
              style={{
                width: "16px",
                height: "8px",
                borderRadius: "4px",
              }}
            />
          ) : (
            <motion.div
              className="w-2 h-2 bg-gray-300 rounded-full"
              whileHover={{ scale: 1.2, backgroundColor: "#D4AF37" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

