"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");

  const name = "Harish V";
  const title = "Full Stack Developer";

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerating progress curve
        const increment = prev < 60 ? 3 : prev < 85 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => setPhase("reveal"), 300);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  useEffect(() => {
    if (phase === "reveal") {
      const timeout = setTimeout(() => {
        setPhase("done");
        onComplete();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Background grid (matches hero) */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full bg-[var(--accent)]/10 blur-[100px]"
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 -right-32 w-[350px] h-[350px] rounded-full bg-blue-600/10 blur-[100px]"
            animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex flex-col items-center gap-8">
            {/* Name reveal */}
            <div className="overflow-hidden">
              <motion.h1
                className="text-5xl sm:text-7xl font-bold tracking-tight"
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {name.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className={
                      char === " "
                        ? ""
                        : "inline-block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
                    }
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* Title */}
            <motion.p
              className="text-gray-500 text-sm sm:text-base font-mono tracking-[0.3em] uppercase"
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            >
              {title}
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="w-48 sm:w-64 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[var(--accent)] to-blue-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </div>
              <motion.p
                className="text-gray-600 text-xs font-mono text-right mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {progress}%
              </motion.p>
            </motion.div>

            {/* Decorative corner brackets */}
            <div className="absolute -top-12 -left-12 w-8 h-8 border-t border-l border-white/10" />
            <div className="absolute -top-12 -right-12 w-8 h-8 border-t border-r border-white/10" />
            <div className="absolute -bottom-12 -left-12 w-8 h-8 border-b border-l border-white/10" />
            <div className="absolute -bottom-12 -right-12 w-8 h-8 border-b border-r border-white/10" />
          </div>

          {/* Reveal curtain effect */}
          {phase === "reveal" && (
            <>
              <motion.div
                className="absolute inset-0 bg-[#0a0a0a] origin-top"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
