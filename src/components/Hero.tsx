"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { PERSONAL_INFO, ROLES } from "@/lib/constants";
import { useBoot } from "./Providers";
import ScrambleText from "./ScrambleText";
import CandleBackdrop from "./CandleBackdrop";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { booted } = useBoot();
  const [role, setRole] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!booted) return;
    const id = setInterval(() => setRole((r) => (r + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, [booted]);

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--sx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--sy", `${e.clientY - rect.top}px`);
  };

  const enter = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: booted ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section
      id="top"
      ref={sectionRef}
      onPointerMove={onPointerMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      {/* cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(520px circle at var(--sx, 70%) var(--sy, 30%), rgba(61,255,154,0.08), transparent 60%)",
        }}
        aria-hidden
      />
      <CandleBackdrop />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.p {...enter(0)} className="font-mono text-sm text-muted sm:text-base">
          <span className="text-up">{PERSONAL_INFO.handle}@dev</span>:~$ whoami
        </motion.p>

        <h1 className="mt-5 text-[clamp(3.25rem,15vw,9.5rem)] leading-[0.9] font-bold tracking-[-0.04em]">
          <ScrambleText text="HARISH V" start={booted} />
          <span className="text-up">.</span>
        </h1>

        <motion.div {...enter(0.25)} className="mt-6 flex h-9 items-center gap-3 font-mono text-lg sm:text-2xl">
          <span className="text-muted">&gt;</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={ROLES[role]}
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
              transition={{ duration: 0.35 }}
            >
              {ROLES[role]}
            </motion.span>
          </AnimatePresence>
          <span className="caret inline-block h-6 w-2.5 bg-up sm:h-7" aria-hidden />
        </motion.div>

        <motion.p {...enter(0.4)} className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
          I build things that move money (safely): trading engines, ledgers, real-time feeds and apps that keep
          secrets on your device.
        </motion.p>

        <motion.div {...enter(0.55)} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-lg bg-up px-5 py-3 font-mono text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
          >
            view work
            <FiArrowDown className="transition-transform group-hover:translate-y-0.5" aria-hidden />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg border border-line-2 bg-panel px-5 py-3 font-mono text-sm transition-colors hover:border-up/60"
          >
            get in touch
            <FiArrowUpRight
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </a>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-up/30 bg-up/5 px-4 py-2 font-mono text-xs text-up">
            <span className="pulse-dot h-2 w-2 rounded-full bg-up" aria-hidden />
            open to work
          </span>
        </motion.div>

        <motion.p {...enter(0.8)} className="mt-16 hidden font-mono text-xs text-muted/70 sm:block">
          tip: press <kbd className="rounded border border-line-2 px-1.5 py-0.5">/</kbd> or{" "}
          <kbd className="rounded border border-line-2 px-1.5 py-0.5">⌘K</kbd> for the command palette
        </motion.p>
      </div>
    </section>
  );
}
