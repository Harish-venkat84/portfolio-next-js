"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { Metric } from "./bits";

export default function Experience() {
  return (
    <section id="previously" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="03"
          path="previously"
          title={
            <>
              {EXPERIENCE.role} <span className="text-muted">@</span> {EXPERIENCE.company}
            </>
          }
          kicker={EXPERIENCE.project}
        />

        <Reveal className="panel overflow-hidden">
          {/* trade-log header */}
          <div className="hidden grid-cols-[120px_220px_1fr] gap-6 border-b border-line px-6 py-3 font-mono text-[11px] tracking-widest text-muted uppercase md:grid">
            <span>desk</span>
            <span>area</span>
            <span>fills</span>
          </div>

          {EXPERIENCE.log.map((row, i) => (
            <motion.div
              key={row.side}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid gap-3 border-b border-line px-6 py-6 transition-colors last:border-b-0 hover:bg-panel-2/60 md:grid-cols-[120px_220px_1fr] md:gap-6"
            >
              <span className="h-fit w-fit rounded bg-up/10 px-2 py-1 font-mono text-[11px] font-semibold text-up">
                {row.side}
              </span>
              <h3 className="text-lg font-semibold">{row.title}</h3>
              <ul className="space-y-2 text-[15px] text-muted">
                {row.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-mono text-up/70" aria-hidden>
                      +
                    </span>
                    <span>
                      <Metric text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
