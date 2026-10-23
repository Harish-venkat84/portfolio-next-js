"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BOOT_LINES } from "@/lib/constants";
import { useBoot } from "./Providers";

const STORAGE_KEY = "harish.booted";
const LINE_MS = 220;

function alreadyBooted() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function rememberBoot() {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Storage can be blocked; the boot just plays again next time.
  }
}

export default function BootSequence() {
  const { booted, setBooted } = useBoot();
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (booted) return;
    const finish = () => {
      rememberBoot();
      setBooted(true);
    };

    if (reduce || alreadyBooted()) {
      const id = requestAnimationFrame(finish);
      return () => cancelAnimationFrame(id);
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    BOOT_LINES.forEach((_, i) => timers.push(setTimeout(() => setShown(i + 1), (i + 1) * LINE_MS)));
    timers.push(setTimeout(finish, BOOT_LINES.length * LINE_MS + 450));

    const skip = () => finish();
    window.addEventListener("keydown", skip);
    window.addEventListener("pointerdown", skip);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, [booted, reduce, setBooted]);

  return (
    <AnimatePresence>
      {!booted && (
        <motion.div
          key="boot"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg px-6"
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.5 }}
          aria-hidden
        >
          <div className="w-full max-w-md font-mono text-sm leading-7">
            {BOOT_LINES.slice(0, shown).map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                className={i === BOOT_LINES.length - 1 ? "text-up" : "text-muted"}
              >
                {line}
              </motion.p>
            ))}
            <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-up" />
            <p className="mt-8 text-xs text-muted/60">press any key to skip</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
