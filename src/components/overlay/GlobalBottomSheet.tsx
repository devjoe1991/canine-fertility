"use client";

import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Link from "next/link";
import { useUI } from "@/context/UIContext";
import WhatsAppCTA from "@/components/cta/WhatsAppCTA";

export default function GlobalBottomSheet() {
  const { isBottomSheetOpen, bottomSheetContent, closeBottomSheet } = useUI();

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.y > 100 || info.velocity.y > 500) {
      closeBottomSheet();
    }
  };

  return (
    <AnimatePresence>
      {isBottomSheetOpen && bottomSheetContent && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBottomSheet}
          />
          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 max-h-[90vh] overflow-hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <div className="flex justify-center pt-4 pb-2">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
            </div>

            <div className="px-5 sm:px-6 pb-8 overflow-y-auto max-h-[calc(90vh-60px)]">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] mb-3">
                {bottomSheetContent.title}
              </h2>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {bottomSheetContent.description}
              </p>
              {bottomSheetContent.price && (
                <p className="text-sm font-semibold text-[#D4AF37] mb-4">
                  {bottomSheetContent.price}
                </p>
              )}
              <div className="border-t border-gray-200 pt-4 sm:pt-6">
                <h3 className="font-semibold text-[#002147] mb-3">Details</h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                  {bottomSheetContent.details}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <WhatsAppCTA
                    service={bottomSheetContent.title}
                    variant="primary"
                    size="lg"
                    fullWidth
                  />
                  <Link
                    href={`/services/${bottomSheetContent.id}`}
                    onClick={closeBottomSheet}
                    className="w-full sm:w-auto sm:flex-none px-6 py-4 border-2 border-[#002147] text-[#002147] hover:bg-[#002147] hover:text-white transition-colors rounded-sm font-semibold text-center"
                  >
                    Full Details
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
