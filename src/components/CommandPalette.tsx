"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiCornerDownLeft, FiExternalLink, FiHash, FiTerminal } from "react-icons/fi";
import { NAV_SECTIONS, PERSONAL_INFO } from "@/lib/constants";
import { OPEN_PALETTE_EVENT } from "./Navbar";

type Command = {
  id: string;
  label: string;
  hint: string;
  group: "Go to" | "Links" | "Terminal";
  run: (print: (msg: string) => void) => boolean | void; // return true to keep the palette open
};

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const COMMANDS: Command[] = [
  ...NAV_SECTIONS.map(
    (s): Command => ({
      id: `go-${s.id}`,
      label: `cd ./${s.label}`,
      hint: "section",
      group: "Go to",
      run: () => scrollTo(s.id),
    }),
  ),
  {
    id: "email",
    label: "email harish",
    hint: PERSONAL_INFO.email,
    group: "Links",
    run: () => void (window.location.href = `mailto:${PERSONAL_INFO.email}`),
  },
  {
    id: "github",
    label: "open github",
    hint: PERSONAL_INFO.githubHandle,
    group: "Links",
    run: () => void window.open(PERSONAL_INFO.github, "_blank", "noopener"),
  },
  {
    id: "linkedin",
    label: "open linkedin",
    hint: PERSONAL_INFO.linkedinHandle,
    group: "Links",
    run: () => void window.open(PERSONAL_INFO.linkedin, "_blank", "noopener"),
  },
  {
    id: "hire",
    label: "sudo hire harish",
    hint: "recommended",
    group: "Terminal",
    run: (print) => {
      print("[sudo] password accepted. Opening your mail client…");
      setTimeout(() => (window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Let's%20talk`), 700);
      return true;
    },
  },
  {
    id: "rm",
    label: "rm -rf /",
    hint: "don't",
    group: "Terminal",
    run: (print) => {
      print("nice try 🙂 this site is read-only, just like the API keys I accept.");
      return true;
    },
  },
  {
    id: "coffee",
    label: "coffee",
    hint: "brew",
    group: "Terminal",
    run: (print) => {
      print("Error 418: I'm a teapot. Falling back to filter coffee ☕");
      return true;
    },
  },
  {
    id: "help",
    label: "help",
    hint: "list commands",
    group: "Terminal",
    run: (print) => {
      print("try: cd ./work · sudo hire harish · coffee · rm -rf / · exit");
      return true;
    },
  },
  {
    id: "exit",
    label: "exit",
    hint: "close",
    group: "Terminal",
    run: () => {},
  },
];

/** Subsequence match: "shh" matches "sudo hire harish". */
function matches(label: string, query: string) {
  const q = query.toLowerCase().replace(/\s+/g, "");
  let i = 0;
  for (const ch of label.toLowerCase()) {
    if (ch === q[i]) i++;
    if (i === q.length) return true;
  }
  return q.length === 0;
}

const GROUP_ICON = { "Go to": FiHash, Links: FiExternalLink, Terminal: FiTerminal };

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [output, setOutput] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const results = useMemo(() => COMMANDS.filter((c) => matches(c.label, query)), [query]);

  const show = useCallback(() => {
    returnFocus.current = document.activeElement as HTMLElement | null;
    setQuery("");
    setIndex(0);
    setOutput(null);
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    returnFocus.current?.focus?.();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing = target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable;
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) close();
        else show();
      } else if (e.key === "Escape" && open) {
        close();
      } else if (e.key === "/" && !typing && !open) {
        e.preventDefault();
        show();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_PALETTE_EVENT, show);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_PALETTE_EVENT, show);
    };
  }, [open, show, close]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const run = (cmd: Command | undefined) => {
    if (!cmd) {
      setOutput(`command not found: ${query.trim()}. try 'help'`);
      return;
    }
    const keepOpen = cmd.run((msg) => setOutput(msg));
    if (!keepOpen) close();
  };

  const onInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => (results.length ? (i + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => (results.length ? (i - 1 + results.length) % results.length : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(results[index]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "Tab") {
      e.preventDefault(); // keep focus inside the dialog
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-start justify-center bg-black/60 px-4 pt-[15vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => e.target === e.currentTarget && close()}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="panel w-full max-w-lg overflow-hidden shadow-2xl shadow-black/60"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <span className="font-mono text-up">$</span>
              <input
                ref={inputRef}
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setIndex(0);
                  setOutput(null);
                }}
                onKeyDown={onInputKey}
                placeholder="type a command… (try 'help')"
                className="h-12 w-full bg-transparent font-mono text-sm text-fg outline-none placeholder:text-muted/60 focus-visible:outline-none"
                role="combobox"
                aria-expanded="true"
                aria-controls="palette-list"
                aria-activedescendant={results[index] ? `cmd-${results[index].id}` : undefined}
                spellCheck={false}
                autoComplete="off"
              />
              <kbd className="rounded border border-line-2 px-1.5 py-0.5 font-mono text-[10px] text-muted">esc</kbd>
            </div>

            {output && (
              <p className="border-b border-line bg-panel-2 px-4 py-3 font-mono text-xs text-up" role="status">
                {output}
              </p>
            )}

            <ul id="palette-list" role="listbox" className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 && (
                <li className="px-3 py-6 text-center font-mono text-xs text-muted">
                  no match. press enter to run it anyway
                </li>
              )}
              {results.map((cmd, i) => {
                const header = results[i - 1]?.group !== cmd.group ? cmd.group : null;
                const Icon = GROUP_ICON[cmd.group];
                const selected = i === index;
                return (
                  <li key={cmd.id} role="presentation">
                    {header && (
                      <p className="px-3 pt-3 pb-1 font-mono text-[10px] tracking-widest text-muted/70 uppercase">
                        {header}
                      </p>
                    )}
                    <div
                      id={`cmd-${cmd.id}`}
                      role="option"
                      aria-selected={selected}
                      onMouseMove={() => setIndex(i)}
                      onClick={() => run(cmd)}
                      className={`flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 font-mono text-sm ${
                        selected ? "bg-up/10 text-fg" : "text-muted"
                      }`}
                    >
                      <Icon className={selected ? "text-up" : ""} aria-hidden />
                      <span className="flex-1">{cmd.label}</span>
                      <span className="text-[11px] text-muted/70">{cmd.hint}</span>
                      {selected ? (
                        <FiCornerDownLeft className="text-up" aria-hidden />
                      ) : (
                        <FiArrowRight className="opacity-0" aria-hidden />
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
