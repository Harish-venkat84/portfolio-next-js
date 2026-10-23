"use client";

import { motion } from "framer-motion";
import { LESSONS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Lessons() {
  return (
    <section id="lessons" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="05" path="git log" title="Lessons learned the hard way." />

        <Reveal className="panel overflow-hidden">
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-muted">~/lessons — git log --oneline</span>
          </div>
          <ol className="p-4 font-mono text-sm leading-8 sm:p-6 sm:text-[15px]">
            {LESSONS.map((l, i) => (
              <motion.li
                key={l.hash}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.18 }}
                className="flex flex-col sm:flex-row sm:gap-3"
              >
                <span className="shrink-0 text-amber">
                  {l.hash}
                  {i === 0 && <span className="text-up"> (HEAD -&gt; main)</span>}
                </span>
                <span className="text-fg/90">{l.text}</span>
              </motion.li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
