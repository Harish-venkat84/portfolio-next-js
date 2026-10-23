"use client";

import { createContext, useContext, useState } from "react";
import { MotionConfig } from "framer-motion";

const BootContext = createContext<{ booted: boolean; setBooted: (v: boolean) => void }>({
  booted: true,
  setBooted: () => {},
});

export function useBoot() {
  return useContext(BootContext);
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [booted, setBooted] = useState(false);
  return (
    <MotionConfig reducedMotion="user">
      <BootContext.Provider value={{ booted, setBooted }}>{children}</BootContext.Provider>
    </MotionConfig>
  );
}
