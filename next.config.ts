import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the root so stray lockfiles in parent directories aren't picked up.
  turbopack: { root: path.join(__dirname) },
};

export default nextConfig;
