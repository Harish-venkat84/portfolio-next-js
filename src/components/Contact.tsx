"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiCopy, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { PERSONAL_INFO } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const LINKS = [
  { label: "GitHub", value: PERSONAL_INFO.githubHandle, href: PERSONAL_INFO.github, icon: FiGithub },
  { label: "LinkedIn", value: PERSONAL_INFO.linkedinHandle, href: PERSONAL_INFO.linkedin, icon: FiLinkedin },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(id);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-up/10 blur-[140px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="06"
          path="contact"
          title="Let's build something that doesn't lose money."
          kicker="I'm open to full-time roles. If your team works on real-time, fintech or security-heavy products, I'd love to talk."
        />

        <Reveal>
          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Let's%20talk`}
            className="group block font-mono text-[clamp(1.6rem,6vw,4rem)] leading-tight font-semibold tracking-tight break-words"
          >
            <span className="text-muted">$ </span>
            <span className="transition-colors group-hover:text-up">sudo hire harish</span>
            <span className="caret ml-1 inline-block h-[0.85em] w-[0.45em] translate-y-[0.12em] bg-up" aria-hidden />
          </a>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-[1.5fr_1fr_1fr]">
          <Reveal className="panel glow-card flex items-center gap-4 p-5">
            <FiMail className="shrink-0 text-xl text-up" aria-hidden />
            <div className="min-w-0 flex-1">
              <p className="font-mono text-xs text-muted">email</p>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="block truncate hover:text-up">
                {PERSONAL_INFO.email}
              </a>
            </div>
            <button
              onClick={copyEmail}
              className="rounded-md p-2 text-muted transition-colors hover:bg-panel-2 hover:text-fg"
              aria-label="Copy email address"
            >
              {copied ? <FiCheck className="text-up" /> : <FiCopy />}
            </button>
          </Reveal>

          {LINKS.map((l, i) => (
            <Reveal key={l.label} delay={(i + 1) * 0.08}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="panel group flex items-center gap-4 p-5 transition-colors hover:border-up/50"
              >
                <l.icon className="shrink-0 text-xl text-up" aria-hidden />
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs text-muted">{l.label.toLowerCase()}</p>
                  <p className="truncate">{l.value}</p>
                </div>
                <FiArrowUpRight
                  className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-up"
                  aria-hidden
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.p
            role="status"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-up/40 bg-panel px-4 py-2.5 font-mono text-sm text-up shadow-xl"
          >
            email copied to clipboard ✓
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
}
