import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiExpo,
  SiNestjs,
  SiNodedotjs,
  SiRust,
  SiSocketdotio,
  SiApachekafka,
  SiZod,
  SiClaude,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiInfluxdb,
  SiDocker,
  SiGithubactions,
  SiJenkins,
  SiTailscale,
  SiTurborepo,
  SiPnpm,
  SiVitest,
  SiLinux,
} from "react-icons/si";
import { FiLock, FiBookOpen, FiSun, FiPieChart } from "react-icons/fi";
import type { IconType } from "react-icons";

export const PERSONAL_INFO = {
  name: "Harish V",
  handle: "harish",
  role: "Full Stack Engineer",
  email: "harish.venkatesan23@gmail.com",
  github: "https://github.com/Harish-venkat84",
  githubHandle: "Harish-venkat84",
  linkedin: "https://www.linkedin.com/in/harish-software-engineer/",
  linkedinHandle: "harish-software-engineer",
} as const;

export const ROLES = [
  "Full Stack Engineer",
  "Real-time systems",
  "Money-safe backends",
  "Zero-knowledge crypto",
];

export const NAV_SECTIONS = [
  { id: "about", label: "whoami" },
  { id: "work", label: "work" },
  { id: "previously", label: "previously" },
  { id: "stack", label: "stack" },
  { id: "contact", label: "contact" },
] as const;

export interface TickerItem {
  label: string;
  value: string;
  up: boolean;
}

export const TICKER: TickerItem[] = [
  { label: "WS_CONN", value: "10K+", up: true },
  { label: "SERVICES", value: "19", up: true },
  { label: "EXCHANGES", value: "6", up: true },
  { label: "PRODUCTS_SHIPPED", value: "4", up: true },
  { label: "TESTS", value: "190+", up: true },
  { label: "FLOATS_FOR_MONEY", value: "0", up: false },
  { label: "PAYLOAD_SIZE", value: "-60%", up: false },
  { label: "COFFEE", value: "∞", up: true },
  { label: "STATUS", value: "OPEN_TO_WORK", up: true },
];

export const STATS = [
  { value: 10000, suffix: "+", label: "concurrent WebSocket connections" },
  { value: 19, suffix: "", label: "NestJS microservices in production" },
  { value: 4, suffix: "", label: "products built end to end" },
  { value: 190, suffix: "+", label: "tests on my password manager alone" },
];

export const BIO = [
  "I'm a full stack engineer who likes the parts of software where mistakes are expensive: matching engines, money ledgers, encryption, real-time feeds.",
  "I spent the last few years building a production crypto exchange. Since then I've been shipping my own products end to end: web, Android and CLI clients, APIs, background workers, CI/CD and self-hosting.",
  "Now looking for my next team.",
];

/** Lines for the whoami.yaml panel. Each line is a list of [kind, text] tokens. */
export type Token = ["key" | "str" | "punct" | "comment" | "plain" | "bool", string];

export const WHOAMI_YAML: Token[][] = [
  [["comment", "# whoami.yaml"]],
  [["key", "name"], ["punct", ": "], ["str", "Harish V"]],
  [["key", "role"], ["punct", ": "], ["str", "Full Stack Engineer"]],
  [["key", "open_to_work"], ["punct", ": "], ["bool", "true"]],
  [["key", "loves"], ["punct", ":"]],
  [["punct", "  - "], ["str", "real-time systems"]],
  [["punct", "  - "], ["str", "backends that handle money"]],
  [["punct", "  - "], ["str", "zero-knowledge crypto"]],
  [["key", "building"], ["punct", ": ["], ["plain", "Hush, Bahi, XAU, Portfolio"], ["punct", "]"]],
  [["key", "fun_fact"], ["punct", ": "], ["str", "\"Money is integer paise. Floats are not invited.\""]],
];

export interface Project {
  id: string;
  name: string;
  tag?: string;
  pitch: string;
  icon: IconType;
  accent: string;
  meta: { label: string; value: string }[];
  highlights: string[];
  tech: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "hush",
    name: "Hush",
    pitch: "A zero-knowledge password manager. The server only ever sees ciphertext.",
    icon: FiLock,
    accent: "#3dff9a",
    meta: [
      { label: "clients", value: "web · android · cli" },
      { label: "crypto", value: "argon2id · xchacha20" },
      { label: "tests", value: "190+" },
    ],
    highlights: [
      "Argon2id key derivation and XChaCha20-Poly1305 via libsodium, all on the device",
      "Web app, Android app and a CLI sharing one vault",
      "Android: fingerprint unlock, autofill, offline read-only copy, 2FA QR scanning",
      "`hush ssh` and `hush run -- <cmd>` inject secrets as env vars, so no more .env files lying around",
      "Recovery key, TOTP two-step sign-in, imports from Chrome, Bitwarden and 1Password",
    ],
    tech: ["NestJS", "MongoDB", "Redis", "Next.js", "React Native", "Expo", "libsodium"],
  },
  {
    id: "bahi",
    name: "Bahi",
    tag: "working name",
    pitch: "Personal finance for India. Your bank statements, finally making sense.",
    icon: FiBookOpen,
    accent: "#ffb547",
    meta: [
      { label: "arch", value: "gateway + 3 services" },
      { label: "money", value: "bigint paise" },
      { label: "imports", value: "idempotent" },
    ],
    highlights: [
      "Imports bank statements (CSV/XLS/XLSX), deduplicated: re-uploading inserts nothing new",
      "Auto-categorization: learned rules, then credit card bill detection, income rules and merchant keywords",
      "HTTP gateway, identity and finance services over NestJS TCP, ingestion worker on BullMQ",
      "Rotating refresh tokens; a replayed token revokes the whole session family",
      "Money is always integer paise. Never floats.",
    ],
    tech: ["NestJS", "PostgreSQL", "BullMQ", "Next.js", "Turborepo", "Zod"],
  },
  {
    id: "xau",
    name: "XAU Fundamentals",
    pitch: "A gold outlook bot that reads the Fed so I don't have to.",
    icon: FiSun,
    accent: "#f5c542",
    meta: [
      { label: "horizon", value: "2–6 wk · 3–12 mo" },
      { label: "score", value: "−100 → +100" },
      { label: "trades", value: "never" },
    ],
    highlights: [
      "Pulls Fed speeches and FOMC statements, macro releases, yields, the dollar and central-bank gold flows",
      "Rule-based bias for 2–6 weeks and 3–12 months, with the bull and bear case spelled out",
      "Claude rates each Fed text and must quote it word for word, or the reading is thrown out",
      "Tracks my own chart levels and pings me on Telegram",
      "Decision support only. It never places a trade.",
    ],
    tech: ["NestJS", "BullMQ", "Drizzle", "PostgreSQL", "Next.js", "Claude API", "Telegram"],
  },
  {
    id: "portfolio",
    name: "Portfolio",
    pitch: "Indian stocks, US stocks and crypto in one ledger. My first serious Rust project.",
    icon: FiPieChart,
    accent: "#ff7a45",
    meta: [
      { label: "lang", value: "rust · axum" },
      { label: "keys", value: "read-only or nothing" },
      { label: "sql", value: "compile-time checked" },
    ],
    highlights: [
      "Binance sync with reconciliation against live balances after every run",
      "API keys with trading or withdrawal permissions are refused",
      "Zerodha tradebook import with corporate actions",
      "Credentials encrypted at rest (XChaCha20-Poly1305)",
      "CI builds and publishes Docker images on every push to main",
    ],
    tech: ["Rust", "axum", "sqlx", "PostgreSQL", "Next.js", "GitHub Actions"],
  },
];

export const EXPERIENCE = {
  role: "Software Engineer",
  company: "PiBase Solutions",
  project:
    "A production crypto exchange: 3 frontend apps, 19 NestJS microservices, 3 API gateways and real-time market data.",
  log: [
    {
      side: "ENGINE",
      title: "Trading engines",
      items: [
        "FIFO matching engine for deterministic order execution on BullMQ processors",
        "Futures with isolated/cross margin, leverage up to **125x** and automated liquidation",
        "Spot with limit, market and presale orders; TP/SL automation cut manual work by **90%**",
      ],
    },
    {
      side: "REALTIME",
      title: "Real-time infrastructure",
      items: [
        "**10** WebSocket gateways handling **10,000+** concurrent connections",
        "Redis-backed Socket.IO adapter for horizontal scaling at **99.9%** delivery",
        "Live order books, tickers, candles and trade broadcasts",
      ],
    },
    {
      side: "MARKET",
      title: "Market data",
      items: [
        "Live feeds from **6** exchanges: Binance, MEXC, Bybit, Kraken, KuCoin and OKX",
        "Protobuf binary parsing, cutting payload size by **60%** versus JSON",
        "OHLC candlestick pipeline feeding TradingView charts, 1m to 1M",
      ],
    },
    {
      side: "ARCH",
      title: "Architecture & frontends",
      items: [
        "CQRS + event sourcing with EventStoreDB, Kafka and BullMQ",
        "Redis caching cut database load by **40%**",
        "Admin dashboard, CRM with live agent chat, and the trader app in Next.js",
      ],
    },
  ],
};

export interface StackItem {
  name: string;
  icon?: IconType;
}

export const STACK_GROUPS: { title: string; items: StackItem[] }[] = [
  {
    title: "Frontend & mobile",
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "React Native", icon: SiReact },
      { name: "Expo", icon: SiExpo },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux", icon: SiRedux },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "NestJS", icon: SiNestjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Rust", icon: SiRust },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "Kafka", icon: SiApachekafka },
      { name: "BullMQ", icon: SiRedis },
      { name: "Zod", icon: SiZod },
      { name: "Claude API", icon: SiClaude },
      { name: "libsodium" },
    ],
  },
  {
    title: "Data, DevOps & testing",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "InfluxDB", icon: SiInfluxdb },
      { name: "Docker", icon: SiDocker },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Tailscale", icon: SiTailscale },
      { name: "Turborepo", icon: SiTurborepo },
      { name: "pnpm", icon: SiPnpm },
      { name: "Vitest", icon: SiVitest },
      { name: "Playwright" },
      { name: "Linux", icon: SiLinux },
    ],
  },
];

export const LESSONS = [
  { hash: "0f1a2b3", text: "0.1 + 0.2 !== 0.3. Never let a float near money." },
  { hash: "c0ffee1", text: "If the server can read it, it isn't zero-knowledge." },
  { hash: "9e7d4a2", text: "Every queue needs a retry policy, and every retry needs to be idempotent." },
  { hash: "d0ck3r5", text: "\"It works on my machine\" is not a deployment strategy." },
];

export const BOOT_LINES = [
  "> booting harish.dev v2.0",
  "> mounting /dev/harish ......... ok",
  "> loading side-quests .......... [4/4]",
  "> checking floats for money .... none found",
  "> status: open_to_work",
];
