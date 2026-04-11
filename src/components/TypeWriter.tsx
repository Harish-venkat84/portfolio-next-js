"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TYPEWRITER_TITLES } from "@/lib/constants";

export default function TypeWriter() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TYPEWRITER_TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-10 sm:h-12 flex items-center justify-center sm:justify-start">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-mono text-[var(--accent)]"
        >
          {TYPEWRITER_TITLES[currentIndex]}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="ml-1"
          >
            |
          </motion.span>
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
