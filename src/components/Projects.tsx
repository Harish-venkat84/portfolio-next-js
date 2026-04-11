"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PROJECTS } from "@/lib/constants";
import type { Project } from "@/lib/constants";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(108,99,255,0.08)]">
        {/* Gradient accent on hover */}
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-10`}
            style={{
              background: `linear-gradient(135deg, rgba(108,99,255,0.1), rgba(59,130,246,0.05))`,
            }}
          >
            <project.icon
              className={`text-2xl`}
              style={{ color: "var(--accent)" }}
            />
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2 text-sm text-gray-500"
            >
              <span className="text-[var(--accent)] mt-1 shrink-0">▸</span>
              {highlight}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono text-[var(--accent)] bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-900/5 blur-[150px]" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[var(--accent)] font-mono text-sm mb-2">
            02. Projects
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What I&apos;ve{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-purple-400 bg-clip-text text-transparent">
              Built
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl text-lg">
            A production-grade crypto exchange platform — from order matching to
            real-time market data, wallet management to admin tools.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="text-xs text-gray-500 ml-2 font-mono">
                system-architecture.txt
              </span>
            </div>
            {/* <div className="px-5 py-6 font-mono text-xs sm:text-sm leading-6 text-gray-400 overflow-x-auto">
              <pre className="text-center sm:text-left">{`
 ┌─────────────────────────────────────────────────────────────┐
 │                     CLIENT LAYER                            │
 │   ┌──────────┐   ┌──────────┐   ┌──────────┐               │
 │   │ Trader   │   │  Admin   │   │   CRM    │               │
 │   │ Next.js  │   │ Next.js  │   │ Next.js  │               │
 │   └────┬─────┘   └────┬─────┘   └────┬─────┘               │
 └────────┼──────────────┼──────────────┼──────────────────────┘
          │              │              │
 ┌────────▼──────────────▼──────────────▼──────────────────────┐
 │                    API GATEWAY LAYER                         │
 │   ┌──────────┐   ┌──────────┐   ┌──────────┐               │
 │   │ Gateway  │   │   IAM    │   │  Trader  │               │
 │   │  (REST)  │   │ Gateway  │   │ Gateway  │               │
 │   └────┬─────┘   └────┬─────┘   └────┬─────┘               │
 └────────┼──────────────┼──────────────┼──────────────────────┘
          │              │              │
 ┌────────▼──────────────▼──────────────▼──────────────────────┐
 │                  MICROSERVICES LAYER                         │
 │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐    │
 │  │Exchange│ │ Wallet │ │  IAM   │ │ Spot   │ │Futures │    │
 │  │        │ │        │ │        │ │        │ │        │    │
 │  └────┬───┘ └────┬───┘ └────┬───┘ └────┬───┘ └────┬───┘    │
 │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐    │
 │  │  CQRS  │ │ Logger │ │  Cron  │ │Notific.│ │  Bot   │    │
 │  │ Events │ │        │ │        │ │        │ │Gateway │    │
 │  └────┬───┘ └────┬───┘ └────┬───┘ └────┬───┘ └────┬───┘    │
 └────────┼──────────┼──────────┼──────────┼──────────┼────────┘
          │          │          │          │          │
 ┌────────▼──────────▼──────────▼──────────▼──────────▼────────┐
 │                    DATA LAYER                                │
 │         ┌──────────┐              ┌──────────┐              │
 │         │ MongoDB  │              │  Redis   │              │
 │         │ (Primary)│              │ (Cache)  │              │
 │         └──────────┘              └──────────┘              │
 └─────────────────────────────────────────────────────────────┘`}</pre>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
