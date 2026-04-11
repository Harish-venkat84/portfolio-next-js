"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCE_ITEMS } from "@/lib/constants";

const typeColors: Record<string, string> = {
  architecture: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  feature: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  infrastructure: "text-green-400 bg-green-500/10 border-green-500/20",
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-blue-900/5 blur-[120px]" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[var(--accent)] font-mono text-sm mb-2">
            03. Experience
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What I{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-cyan-400 bg-clip-text text-transparent">
              Do
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl text-lg">
            The core engineering challenges I&apos;ve tackled — from system
            design to production deployment.
          </p>
        </motion.div>

        {/* Experience grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCE_ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:bg-white/[0.04]"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <item.icon className="text-2xl text-[var(--accent)]" />
                  <span
                    className={`px-2 py-0.5 text-[10px] uppercase tracking-wider font-mono rounded-full border ${typeColors[item.type]}`}
                  >
                    {item.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 rounded-2xl border border-white/10 bg-white/[0.02]"
        >
          <h3 className="text-lg font-bold text-white mb-6">
            Tech Proficiency
          </h3>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
            {[
              { name: "NestJS / Node.js", level: 95 },
              { name: "TypeScript", level: 92 },
              { name: "MongoDB", level: 90 },
              { name: "Next.js / React", level: 88 },
              { name: "Redis / Caching", level: 85 },
              { name: "WebSocket / Real-Time", level: 90 },
              { name: "Docker / DevOps", level: 80 },
              { name: "System Design", level: 88 },
            ].map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-300 font-mono">
                    {skill.name}
                  </span>
                  <span className="text-xs text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{
                      duration: 1,
                      delay: 1 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-blue-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
