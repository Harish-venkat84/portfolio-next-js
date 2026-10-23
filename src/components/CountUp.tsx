"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

const format = (n: number) => Math.round(n).toLocaleString("en-US");

export default function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView || reduce) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => (el.textContent = format(v) + suffix),
    });
    return () => controls.stop();
  }, [inView, reduce, to, suffix]);

  // Server and no-JS render the final value; the animation counts up to it.
  return <span ref={ref}>{format(to) + suffix}</span>;
}
