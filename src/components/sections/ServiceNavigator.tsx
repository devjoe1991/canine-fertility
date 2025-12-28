"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import LiquidCard from "@/components/ui/LiquidCard";
import LiquidDots from "@/components/ui/LiquidDots";

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string;
  price?: string;
}

interface ServiceNavigatorProps {
  services: ServiceData[];
}

export default function ServiceNavigator({ services }: ServiceNavigatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [canScroll, setCanScroll] = useState(false);
  const [cardWidth, setCardWidth] = useState(320);
  const [visibleCardsCount, setVisibleCardsCount] = useState(0);
  const [totalDots, setTotalDots] = useState(0);

  const gap = 24;
  const cardWithGap = cardWidth + gap;

  useEffect(() => {
    // Set card width based on window size (client-side only)
    const updateCardWidth = () => {
      setCardWidth(window.innerWidth < 768 ? 280 : 320);
    };
    
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    const updateActiveIndex = () => {
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        const cardWithGap = cardWidth + 24;
        const containerWidth = containerRef.current.clientWidth;
        const cardsVisible = Math.floor(containerWidth / cardWithGap);
        const maxPosition = Math.max(0, services.length - cardsVisible);
        const newIndex = Math.round(scrollLeft / cardWithGap);
        setActiveIndex(Math.min(Math.max(0, newIndex), maxPosition));
      }
    };

    const calculateMaxScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const containerWidth = container.clientWidth;
        const scrollWidth = container.scrollWidth;
        const maxScrollValue = Math.max(0, scrollWidth - containerWidth);
        setMaxScroll(maxScrollValue);
        // Only enable scroll if content overflows
        setCanScroll(maxScrollValue > 10); // 10px threshold for rounding
        
        // Calculate how many cards are visible and how many dots we need
        const cardsVisible = Math.floor(containerWidth / cardWithGap);
        setVisibleCardsCount(cardsVisible);
        
        // Calculate dots needed: number of swipe positions
        // If 8 cards and 4 visible, we have 5 positions (0-4)
        if (maxScrollValue > 10 && cardsVisible > 0) {
          const maxPosition = services.length - cardsVisible;
          const dotsNeeded = maxPosition + 1; // Positions 0 to maxPosition
          setTotalDots(dotsNeeded);
        } else {
          setTotalDots(0); // No dots needed if all cards fit
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", updateActiveIndex, { passive: true });
      updateActiveIndex();
      calculateMaxScroll();
      
      // Recalculate on resize
      window.addEventListener("resize", calculateMaxScroll);
      
      return () => {
        window.removeEventListener("resize", updateCardWidth);
        container.removeEventListener("scroll", updateActiveIndex);
        window.removeEventListener("resize", calculateMaxScroll);
      };
    }
  }, [services.length, cardWidth]);

  const handleDragEnd = (event: any, info: any) => {
    if (!containerRef.current) return;
    
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const containerWidth = containerRef.current.clientWidth;
    const scrollWidth = containerRef.current.scrollWidth;
    const actualMaxScroll = Math.max(0, scrollWidth - containerWidth);
    const cardsVisible = Math.floor(containerWidth / cardWithGap);
    const maxPosition = Math.max(0, services.length - cardsVisible);

    let targetIndex = activeIndex;

    if (Math.abs(velocity) > 500) {
      targetIndex = velocity < 0 ? activeIndex + 1 : activeIndex - 1;
    } else if (Math.abs(offset) > cardWithGap / 2) {
      targetIndex = offset < 0 ? activeIndex + 1 : activeIndex - 1;
    }

    // Clamp to valid swipe positions (0 to maxPosition)
    targetIndex = Math.max(0, Math.min(targetIndex, maxPosition));
    const targetScroll = targetIndex * cardWithGap;
    
    // Ensure we don't scroll beyond the actual maximum
    const finalScroll = Math.min(targetScroll, actualMaxScroll);
    setActiveIndex(targetIndex);

    containerRef.current.scrollTo({
      left: finalScroll,
      behavior: "smooth",
    });
  };

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-serif text-4xl md:text-5xl font-bold text-[#002147] text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 25, stiffness: 200, delay: 0.1 }}
        >
          Professional canine fertility services tailored to your breeding needs
        </motion.p>

        <div className="relative overflow-hidden px-4 md:px-0">
          <motion.div
            ref={containerRef}
            className={`flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 ${
              canScroll ? "cursor-grab active:cursor-grabbing" : "cursor-default"
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              width: "100%",
              paddingRight: "0",
              justifyContent: canScroll ? "flex-start" : "center",
            }}
            drag={canScroll ? "x" : false}
            dragConstraints={(_, { offset }) => {
              if (!containerRef.current || !canScroll) return { left: 0, right: 0 };
              const container = containerRef.current;
              const containerWidth = container.clientWidth;
              const scrollWidth = container.scrollWidth;
              const actualMaxScroll = Math.max(0, scrollWidth - containerWidth);
              return {
                left: -actualMaxScroll,
                right: 0,
              };
            }}
            dragElastic={0}
            onDragEnd={handleDragEnd}
            onScroll={(e) => {
              const target = e.target as HTMLDivElement;
              x.set(-target.scrollLeft);
            }}
          >
            {services.map((service, index) => (
              <div key={service.id} className="snap-start flex-shrink-0" style={{ width: `${cardWidth}px` }}>
                <LiquidCard service={service} index={index} />
              </div>
            ))}
          </motion.div>

          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              scroll-padding: 0;
            }
          `}</style>
        </div>

        {canScroll && totalDots > 0 && (
          <LiquidDots 
            total={totalDots} 
            activeIndex={activeIndex} 
          />
        )}
      </div>
    </section>
  );
}

