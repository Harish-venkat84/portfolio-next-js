"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#%&*<>/";

/** Shows random glyphs that settle into `text` from left to right once `start` is true. */
export default function ScrambleText({
  text,
  start,
  duration = 900,
  className,
}: {
  text: string;
  start: boolean;
  duration?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!start || reduce) return;
    let frame = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - t0) / duration);
      const settled = Math.floor(progress * text.length);
      setDisplay(
        text
          .split("")
          .map((ch, i) => (ch === " " || i < settled ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join(""),
      );
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, reduce, text, duration]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden>{display}</span>
    </span>
  );
}
