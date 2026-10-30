"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import type { Project } from "@/lib/constants";
import { InlineCode, ProjectTag } from "./bits";

export default function ProjectSheet({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const Icon = project.icon;

  useEffect(() => {
    const returnTo = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      returnTo?.focus?.();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        layoutId={`card-${project.id}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`sheet-${project.id}`}
        className="panel relative max-h-[88svh] w-full max-w-2xl overflow-y-auto rounded-b-none p-6 sm:rounded-b-[14px] sm:p-8"
        style={{ boxShadow: `0 0 0 1px ${project.accent}33, 0 30px 80px -20px ${project.accent}33` }}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          className="absolute top-4 right-4 rounded-md p-2 text-muted transition-colors hover:bg-panel-2 hover:text-fg"
          aria-label="Close"
        >
          <FiX />
        </button>

        <div className="flex items-center gap-3">
          <span
            className="flex h-11 w-11 items-center justify-center rounded-lg text-xl"
            style={{ background: `${project.accent}1a`, color: project.accent }}
          >
            <Icon aria-hidden />
          </span>
          <ProjectTag status={project.status} />
        </div>

        <h3 id={`sheet-${project.id}`} className="mt-5 text-3xl font-semibold tracking-tight">
          {project.name}
          {project.tag && <span className="ml-2 align-middle font-mono text-xs text-muted">({project.tag})</span>}
        </h3>
        <p className="mt-2 text-lg text-muted">{project.pitch}</p>

        <motion.ul
          className="mt-7 space-y-3"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }}
        >
          {project.highlights.map((h) => (
            <motion.li
              key={h}
              variants={{ hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0 } }}
              className="flex gap-3 text-fg/90"
            >
              <span className="mt-0.5 text-up" aria-hidden>
                ▲
              </span>
              <span>
                <InlineCode text={h} />
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {project.links && (
          <ul className="mt-8 flex flex-wrap gap-2">
            {project.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 font-mono text-xs transition-colors hover:bg-panel-2"
                  style={{ borderColor: `${project.accent}55`, color: project.accent }}
                >
                  {l.label}
                  <FiArrowUpRight aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-8 font-mono text-xs tracking-widest text-muted uppercase">stack</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t} className="rounded-md border border-line-2 bg-panel-2 px-2.5 py-1 font-mono text-xs">
              {t}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
