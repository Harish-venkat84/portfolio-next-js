"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCommand, FiMenu, FiX } from "react-icons/fi";
import { NAV_SECTIONS } from "@/lib/constants";

export const OPEN_PALETTE_EVENT = "palette:open";

export default function Navbar() {
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // The hero (#top) is observed too, so scrolling back up clears the highlight.
    const sections = ["top", ...NAV_SECTIONS.map((s) => s.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id === "top" ? "" : entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const openPalette = () => {
    setMenuOpen(false);
    window.dispatchEvent(new Event(OPEN_PALETTE_EVENT));
  };

  return (
    <header className="fixed inset-x-0 top-8 z-40 border-b border-line/70 bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Main">
        <a href="#top" className="font-mono text-sm font-medium">
          <span className="text-up">harish</span>
          <span className="text-muted">@dev:~$</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`relative rounded-md px-3 py-1.5 font-mono text-[13px] transition-colors ${
                  active === s.id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {active === s.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-md bg-panel-2 ring-1 ring-line-2"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                ./{s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={openPalette}
            className="flex items-center gap-2 rounded-md border border-line-2 bg-panel px-2.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-up/50 hover:text-fg"
            aria-label="Open command palette"
          >
            <FiCommand aria-hidden />
            <span className="hidden sm:inline">K</span>
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="rounded-md p-2 text-muted hover:text-fg md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-bg/95 md:hidden"
          >
            {NAV_SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 font-mono text-sm text-muted hover:text-up"
                >
                  ./{s.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
