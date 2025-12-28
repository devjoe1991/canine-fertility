"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const [canScroll, setCanScroll] = useState(false);
  const [cardWidth, setCardWidth] = useState(320);
  const [visibleCardsCount, setVisibleCardsCount] = useState(0);
  const [totalDots, setTotalDots] = useState(0);
  const [sectionHeight, setSectionHeight] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const gap = 24;
  const cardWithGap = cardWidth + gap;
  
  // Use drag position instead of scroll
  const dragX = useMotionValue(0);
  const springX = useSpring(dragX, { damping: 30, stiffness: 300 });

  useEffect(() => {
    // Hydration fix: Wait for client-side mount before calculations
    if (typeof window === "undefined") return;
    
    // Detect touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    // Set card width based on window size (client-side only)
    const updateCardWidth = () => {
      setCardWidth(window.innerWidth < 768 ? 280 : 320);
    };
    
    // Delay initial calculation to ensure DOM is ready (hydration fix)
    const timer = setTimeout(() => {
      updateCardWidth();
    }, 0);
    
    window.addEventListener("resize", updateCardWidth);

    const updateActiveIndex = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const containerWidth = container.clientWidth;
        const cardWithGap = cardWidth + 24;
        const cardsVisible = Math.floor(containerWidth / cardWithGap);
        const maxPosition = Math.max(0, services.length - cardsVisible);
        
        // Use drag position instead of scroll
        const currentX = dragX.get();
        const newIndex = Math.round(Math.abs(currentX) / cardWithGap);
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
    const section = sectionRef.current;
    
    // Calculate and lock section height to prevent collapse
    const lockSectionHeight = () => {
      if (section && container) {
        // Measure the tallest card to set minimum height
        const cards = container.querySelectorAll('[data-service-card]');
        let maxCardHeight = 0;
        
        cards.forEach((card) => {
          const cardElement = card as HTMLElement;
          const cardHeight = cardElement.offsetHeight;
          if (cardHeight > maxCardHeight) {
            maxCardHeight = cardHeight;
          }
        });
        
        // Get the full section height including padding
        const sectionHeight = section.scrollHeight;
        // Use the larger of the two to ensure nothing collapses
        const finalHeight = Math.max(sectionHeight, maxCardHeight + 100); // 100px for padding
        
        if (finalHeight > 0) {
          setSectionHeight(finalHeight);
        }
      }
    };
    
    if (container) {
      // Subscribe to drag position changes
      const unsubscribe = dragX.on("change", updateActiveIndex);
      
      // Delay calculations until after hydration
      const initTimer = setTimeout(() => {
        updateActiveIndex();
        calculateMaxScroll();
        // Lock height after content is rendered
        lockSectionHeight();
      }, 200);
      
      // Recalculate on resize
      const handleResize = () => {
        calculateMaxScroll();
        lockSectionHeight();
      };
      window.addEventListener("resize", handleResize);
      
      return () => {
        clearTimeout(timer);
        clearTimeout(initTimer);
        unsubscribe();
        window.removeEventListener("resize", updateCardWidth);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [services.length, cardWidth, dragX]);

  const handleDrag = (event: any, info: any) => {
    // Update drag position
    const newX = Math.max(-maxScroll, Math.min(0, info.offset.x));
    dragX.set(newX);
  };

  const handleDragEnd = (event: any, info: any) => {
    if (!containerRef.current) return;
    
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const containerWidth = containerRef.current.clientWidth;
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
    const targetX = -targetIndex * cardWithGap;
    
    // Ensure we don't drag beyond the actual maximum
    const finalX = Math.max(-maxScroll, Math.min(0, targetX));
    setActiveIndex(targetIndex);
    dragX.set(finalX);
  };

  return (
    <section id="services" className="py-20 px-4 bg-white" style={{ display: "grid", gridTemplateRows: "1fr auto", minHeight: sectionHeight ? `${sectionHeight + 200}px` : "fit-content", overflowY: "visible", paddingBottom: "60px" }}>
      <div className="max-w-7xl mx-auto" style={{ height: "auto", minHeight: sectionHeight ? `${sectionHeight + 100}px` : "fit-content", overflowY: "visible" }}>
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

        <div 
          ref={sectionRef}
          className="relative px-4 md:px-0" 
          style={{ 
            position: "relative", 
            isolation: "isolate", 
            overflow: "clip", 
            height: sectionHeight ? `${sectionHeight}px` : "auto",
            minHeight: sectionHeight ? `${sectionHeight}px` : "fit-content",
            minWidth: "0",
            paddingBottom: isTouchDevice ? "60px" : "20px",
            overflowY: "visible",
          }}
        >
          <motion.div
            ref={containerRef}
            className={`flex gap-6 items-stretch vertical-lock ${
              canScroll ? "cursor-grab active:cursor-grabbing" : "cursor-default"
            }`}
            style={{
              width: "100%",
              paddingRight: "0",
              paddingBottom: "0",
              justifyContent: canScroll ? "flex-start" : "center",
              position: "relative",
              touchAction: "pan-x",
              display: "flex",
              alignItems: "stretch",
              height: "auto",
              minHeight: "0",
              minWidth: "0",
              overflow: "visible",
              willChange: "transform",
              x: springX,
            }}
            drag={canScroll ? "x" : false}
            dragConstraints={
              canScroll && maxScroll > 0
                ? {
                    left: -maxScroll,
                    right: 0,
                  }
                : false
            }
            dragElastic={0.1}
            dragMomentum={false}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
          >
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="flex-shrink-0" 
                style={{ 
                  width: `${cardWidth}px`,
                  height: "100%",
                  minHeight: "100%",
                  minWidth: "0",
                  overflow: "visible",
                  display: "flex",
                  alignSelf: "stretch",
                }}
              >
                <LiquidCard service={service} index={index} />
              </div>
            ))}
          </motion.div>

          <style jsx>{`
            .vertical-lock {
              align-items: stretch !important;
              overflow-y: visible !important;
            }
          `}</style>
          
          {/* Dots positioned inside section on touch devices */}
          {isTouchDevice && canScroll && totalDots > 0 && (
            <div style={{ 
              position: "absolute", 
              bottom: "16px", 
              left: "50%", 
              transform: "translateX(-50%)",
              width: "100%",
              zIndex: 10,
            }}>
              <LiquidDots 
                total={totalDots} 
                activeIndex={activeIndex}
                isAbsolute={true}
              />
            </div>
          )}
        </div>

        {/* Dots positioned outside section on desktop */}
        {!isTouchDevice && canScroll && totalDots > 0 && (
          <div style={{ position: "relative", height: "auto", minHeight: "24px" }}>
            <LiquidDots 
              total={totalDots} 
              activeIndex={activeIndex} 
            />
          </div>
        )}
      </div>
    </section>
  );
}

