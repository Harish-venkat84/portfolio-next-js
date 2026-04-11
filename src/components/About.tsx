"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PERSONAL_INFO, STATS } from "@/lib/constants";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--accent)]/5 blur-[150px]" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[var(--accent)] font-mono text-sm mb-2">
            01. About
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Who I{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-blue-400 bg-clip-text text-transparent">
              Am
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {PERSONAL_INFO.about}
            </p>

            {/* Terminal-style code block */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-xs text-gray-500 ml-2 font-mono">
                  harish.config.ts
                </span>
              </div>
              <div className="px-5 py-4 font-mono text-sm leading-7">
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">developer</span>{" "}
                  <span className="text-white">=</span>{" "}
                  <span className="text-yellow-300">{"{}"[0]}</span>
                </p>
                <p className="pl-4">
                  <span className="text-green-300">name</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-amber-300">&quot;Harish V&quot;</span>
                  <span className="text-white">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-green-300">role</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-amber-300">
                    &quot;Full Stack Developer&quot;
                  </span>
                  <span className="text-white">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-green-300">focus</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-amber-300">
                    &quot;Crypto Exchange Platforms&quot;
                  </span>
                  <span className="text-white">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-green-300">stack</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-white">[</span>
                  <span className="text-amber-300">&quot;NestJS&quot;</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-amber-300">&quot;Next.js&quot;</span>
                  <span className="text-white">,</span>{" "}
                  <span className="text-amber-300">&quot;MongoDB&quot;</span>
                  <span className="text-white">],</span>
                </p>
                <p className="pl-4">
                  <span className="text-green-300">passion</span>
                  <span className="text-white">:</span>{" "}
                  <span className="text-amber-300">
                    &quot;Building systems at scale&quot;
                  </span>
                  <span className="text-white">,</span>
                </p>
                <p>
                  <span className="text-yellow-300">{"{}"[1]}</span>
                  <span className="text-white">;</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-[var(--accent)]/30 transition-all duration-300 hover:bg-white/[0.04]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <stat.icon className="text-2xl text-[var(--accent)] mb-3 relative z-10" />
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1 relative z-10">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 relative z-10">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
