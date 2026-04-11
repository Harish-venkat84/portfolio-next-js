"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";

export default function TechStack() {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start gap-4 max-w-lg">
      {TECH_STACK.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 1.2 + index * 0.08,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{ scale: 1.2, y: -4 }}
          className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:border-[var(--accent)]/50 hover:bg-white/10"
          title={tech.name}
        >
          <tech.icon className="text-xl" style={{ color: tech.color }} />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
