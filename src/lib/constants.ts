import {
  SiNextdotjs,
  SiNestjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiSocketdotio,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiLinux,
} from "react-icons/si";
import {
  FiLayers,
  FiActivity,
  FiShield,
  FiZap,
  FiDatabase,
  FiGlobe,
  FiCpu,
  FiTrendingUp,
} from "react-icons/fi";
import type { IconType } from "react-icons";

export const PERSONAL_INFO = {
  name: "Harish V",
  greeting: "Hi, I'm",
  tagline:
    "Building high-performance trading platforms with 15+ microservices and 10,000+ concurrent WebSocket connections.",
  about:
    "I'm a Full Stack Developer passionate about building scalable, real-time systems. I specialize in designing distributed microservice architectures for high-frequency trading platforms. My expertise includes handling order matching, real-time market data, wallet systems, and concurrent WebSocket connections at scale. I care deeply about clean architecture, performance optimization, and shipping reliable systems.",
  email: "harish.venkatesan23@gmail.com",
  github: "https://github.com/Harish-venkat84",
  linkedin: "https://www.linkedin.com/in/harish-software-engineer/",
} as const;

export const TYPEWRITER_TITLES = [
  "Full Stack Developer",
  "Microservices Architect",
  "Real-Time Systems Engineer",
  "Crypto Exchange Builder",
];

export const STATS = [
  { label: "Microservices", value: "15+", icon: FiLayers },
  { label: "WebSocket Connections", value: "10K+", icon: FiActivity },
  { label: "Technologies", value: "13+", icon: FiCpu },
  { label: "Trading Pairs", value: "100+", icon: FiTrendingUp },
];

export const TECH_STACK = [
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Socket.io", icon: SiSocketdotio, color: "#ffffff" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
];

export interface Project {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  icon: IconType;
  gradient: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Crypto Exchange Platform",
    description:
      "Full-featured cryptocurrency exchange supporting real-time spot & futures trading with order matching, liquidation engine, and portfolio management.",
    highlights: [
      "Real-time order book with WebSocket streaming",
      "Futures trading with leverage up to 125x",
      "Automatic liquidation & margin management",
      "Multi-currency wallet with deposit/withdrawal",
    ],
    tech: ["NestJS", "MongoDB", "Redis", "WebSocket"],
    icon: FiTrendingUp,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Microservices Architecture",
    description:
      "Distributed system of 15+ independently deployable services communicating via TCP/Redis, handling high-throughput trading operations.",
    highlights: [
      "Event-driven CQRS architecture",
      "Service discovery & load balancing",
      "PM2 cluster mode for zero-downtime deploys",
      "Centralized logging & monitoring",
    ],
    tech: ["NestJS", "Docker", "Redis", "PM2"],
    icon: FiLayers,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Real-Time Market Data",
    description:
      "High-performance crypto price aggregation from multiple exchanges (MEXC, Binance) with protobuf-encoded WebSocket streaming.",
    highlights: [
      "Protobuf binary encoding for low-latency feeds",
      "Multi-exchange price aggregation",
      "Candlestick generation (1m to 1M timeframes)",
      "10,000+ concurrent WebSocket connections",
    ],
    tech: ["Node.js", "Protobuf", "WebSocket", "Redis"],
    icon: FiActivity,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Trading Dashboard",
    description:
      "Feature-rich Next.js trading interface with real-time charts, order management, portfolio tracking, and admin CRM tools.",
    highlights: [
      "Live candlestick charts with TradingView",
      "One-click trading with instant execution",
      "Admin CRM for user & campaign management",
      "Responsive design with dark/light themes",
    ],
    tech: ["Next.js", "React", "Tailwind", "Socket.io"],
    icon: FiGlobe,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Wallet & Payment System",
    description:
      "Secure multi-currency wallet supporting deposits, withdrawals, internal transfers, and FIFO-based P&L tracking for tax compliance.",
    highlights: [
      "Multi-currency support with real-time balances",
      "FIFO cost-basis tracking for tax reporting",
      "Transaction history with export capabilities",
      "Secure withdrawal with 2FA verification",
    ],
    tech: ["NestJS", "MongoDB", "Node.js", "TypeScript"],
    icon: FiShield,
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    title: "Notification & Bot System",
    description:
      "Multi-channel notification pipeline with Slack alerts, email notifications, and automated trading bot gateway for algorithmic strategies.",
    highlights: [
      "Real-time Slack & email alerts",
      "Bot gateway for algo trading strategies",
      "Campaign management for user engagement",
      "WebSocket-based event broadcasting",
    ],
    tech: ["NestJS", "Slack API", "WebSocket", "Redis"],
    icon: FiZap,
    gradient: "from-indigo-500 to-violet-500",
  },
];

export interface ExperienceItem {
  title: string;
  type: "architecture" | "feature" | "infrastructure";
  description: string;
  icon: IconType;
}

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    title: "Distributed Microservices",
    type: "architecture",
    description:
      "Designed & built 15+ NestJS microservices with TCP/Redis transport, CQRS event sourcing, and independent deployment pipelines.",
    icon: FiLayers,
  },
  {
    title: "Real-Time WebSocket Systems",
    type: "feature",
    description:
      "Engineered WebSocket infrastructure handling 10K+ concurrent connections with pub/sub broadcasting for live market data feeds.",
    icon: FiActivity,
  },
  {
    title: "Futures Trading Engine",
    type: "feature",
    description:
      "Built a complete futures trading system with leverage, margin calculation, automatic liquidation, and real-time P&L tracking.",
    icon: FiTrendingUp,
  },
  {
    title: "Database Architecture",
    type: "infrastructure",
    description:
      "Designed MongoDB schemas with compound indexes, aggregation pipelines, and Redis caching for sub-millisecond read performance.",
    icon: FiDatabase,
  },
  {
    title: "CI/CD & DevOps",
    type: "infrastructure",
    description:
      "Set up Jenkins pipelines, Docker containerization, PM2 cluster deployment, and centralized logging across all services.",
    icon: FiCpu,
  },
  {
    title: "Security & Auth",
    type: "architecture",
    description:
      "Implemented IAM gateway with JWT authentication, role-based access control, 2FA, and API rate limiting across all services.",
    icon: FiShield,
  },
];
