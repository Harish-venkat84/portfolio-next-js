"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { PROJECTS, type Project } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import ProjectSheet from "./ProjectSheet";
import { ProjectTag, InlineCode } from "./bits";

const LAYOUT: Record<string, string> = {
  quietkey: "md:col-span-2 lg:col-span-2 lg:row-span-2",
  bahi: "md:col-span-2 lg:col-span-2",
  xau: "lg:col-span-1",
  portfolio: "lg:col-span-1",
  iconstudio: "md:col-span-2 lg:col-span-4",
};

function trackGlow(e: React.PointerEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

function Card({ project, big, onOpen }: { project: Project; big: boolean; onOpen: () => void }) {
  const Icon = project.icon;
  return (
    <motion.button
      layoutId={`card-${project.id}`}
      onClick={onOpen}
      onPointerMove={trackGlow}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`panel glow-card group flex h-full flex-col p-6 text-left sm:p-7 ${LAYOUT[project.id]}`}
      style={{ "--glow": project.accent } as React.CSSProperties}
      aria-label={`${project.name}: open details`}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-lg text-xl"
          style={{ background: `${project.accent}1a`, color: project.accent }}
        >
          <Icon aria-hidden />
        </span>
        <ProjectTag status={project.status} />
      </div>

      <h3 className={`mt-5 font-semibold tracking-tight ${big ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
        {project.name}
        {project.tag && <span className="ml-2 align-middle font-mono text-xs text-muted">({project.tag})</span>}
      </h3>
      <p className={`mt-2 text-muted ${big ? "text-lg" : ""}`}>{project.pitch}</p>

      {big && (
        <ul className="mt-6 space-y-2.5 text-[15px] text-fg/85">
          {project.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex gap-3">
              <span className="mt-0.5 text-up" aria-hidden>
                ▲
              </span>
              <span>
                <InlineCode text={h} />
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* order-book style metadata */}
      <dl className="mt-auto space-y-1.5 pt-6 font-mono text-xs">
        {project.meta.map((m) => (
          <div key={m.label} className="flex items-baseline gap-2">
            <dt className="text-muted">{m.label}</dt>
            <span className="flex-1 border-b border-dotted border-line-2" aria-hidden />
            <dd className="text-fg">{m.value}</dd>
          </div>
        ))}
      </dl>

      <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors group-hover:text-up">
        details
        <FiArrowUpRight
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      </span>
    </motion.button>
  );
}

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = PROJECTS.find((p) => p.id === openId) ?? null;
  const close = useCallback(() => setOpenId(null), []);

  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="02"
          path="side-quests"
          title={
            <>
              Five products, built <span className="text-up">end to end</span>.
            </>
          }
          kicker="Design, API, clients, CI/CD and self-hosting, all by me. Quietkey is live and Icon Studio is open source; the other repos are private, and I'm happy to walk through the code in an interview."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((p) => (
            <Card key={p.id} project={p} big={p.id === "quietkey"} onOpen={() => setOpenId(p.id)} />
          ))}
        </div>
      </div>

      <AnimatePresence>{open && <ProjectSheet project={open} onClose={close} />}</AnimatePresence>
    </section>
  );
}
