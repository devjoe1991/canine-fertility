"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

interface ServiceProgressLineProps {
  total: number;
  activeIndex: number;
  isAbsolute?: boolean;
  progress?: number;
  /**
   * Incremented by the carousel on every snap. When this changes we run a
   * 150ms scale pulse on the indicator. Acts as the desktop / iOS Safari
   * fallback for haptics, since neither supports navigator.vibrate.
   */
  tickKey?: number;
}

export default function ServiceProgressLine({
  total,
  progress = 0,
  tickKey = 0,
}: ServiceProgressLineProps) {
  const lineWidth = total > 0 ? `${100 / total}%` : "0%";
  const linePosition = progress * (100 - 100 / total);

  const controls = useAnimationControls();

  useEffect(() => {
    if (tickKey === 0) return;
    controls.start({
      scaleY: [1, 1.8, 1],
      transition: { duration: 0.18, ease: "easeOut" },
    });
  }, [tickKey, controls]);

  return (
    <div
      className="flex justify-center items-center"
      style={{
        position: "relative",
        height: "4px",
        width: "100%",
        marginTop: "0",
        marginBottom: "0",
        padding: "0",
        maxWidth: "200px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div
        className="absolute inset-0 bg-gray-200 rounded-full"
        style={{
          height: "2px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      <motion.div
        className="absolute bg-[#D4AF37] rounded-full"
        style={{
          height: "4px",
          width: lineWidth,
          top: "50%",
          left: `${linePosition}%`,
          transform: "translateY(-50%)",
          originY: 0.5,
        }}
        animate={controls}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 200,
        }}
      />
    </div>
  );
}
