"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiDownload, FiExternalLink } from "react-icons/fi";

const RESUME_DATA = {
  summary:
    "Full Stack Developer with 2+ years of hands-on experience building a production-grade cryptocurrency exchange platform. Architected 19 NestJS microservices processing real-time trading data across spot and futures markets. Designed and delivered FIFO matching engines, liquidation systems, and 10 WebSocket gateways handling 10,000+ concurrent connections.",
  skills: [
    { label: "Languages", value: "TypeScript, JavaScript (ES6+), HTML5, CSS3" },
    {
      label: "Frontend",
      value: "Next.js, React.js, Tailwind CSS, Redux, Framer Motion, i18n",
    },
    {
      label: "Backend",
      value: "NestJS, Node.js, Express.js, REST APIs, Microservices, TCP",
    },
    {
      label: "Databases",
      value: "MongoDB, Mongoose, Redis (Caching/Pub-Sub), InfluxDB",
    },
    {
      label: "Real-Time",
      value: "Socket.IO, WebSocket, Redis Adapter, BullMQ, Kafka",
    },
    {
      label: "DevOps",
      value: "Docker, PM2, Jenkins CI/CD, Git, Linux, Nginx",
    },
    {
      label: "Architecture",
      value: "Microservices, CQRS, Event-Driven, EventStoreDB, FIFO Engine",
    },
    {
      label: "Security",
      value: "PassportJS (JWT), bcrypt, RBAC, Rate Limiting, Helmet",
    },
  ],
  experience: {
    title: "Software Engineer",
    company: "PiBase Solutions Private Limited",
    date: "Nov 2023 – Present",
    project: "UNICOIN-DCX Cryptocurrency Exchange Platform",
    highlights: [
      {
        category: "Trading Engine",
        items: [
          "Built futures trading module with limit, market, stop-limit, and stop-market orders across 50+ trading pairs",
          "Implemented FIFO matching engine with BullMQ job processors for deterministic order execution",
          "Developed liquidation engine with Binance-compatible formula for isolated and cross-margin modes",
          "Built spot trading with bulk cancellation and presale ICO functionality",
        ],
      },
      {
        category: "WebSocket & Real-Time",
        items: [
          "Designed 10 WebSocket gateways handling 10,000+ concurrent connections",
          "Implemented Redis-backed Socket.IO adapter for horizontal scaling with 99.9% reliability",
          "Built real-time order book, ticker streams, and trade execution broadcasts",
        ],
      },
      {
        category: "Market Data",
        items: [
          "Integrated live feeds from 6+ exchanges (Binance, MEXC, Bybit, Kraken, KuCoin, OKX)",
          "Implemented Protobuf binary parsing reducing payload by 60% vs JSON",
          "Built OHLC candlestick pipeline with TradingView-compatible APIs",
        ],
      },
      {
        category: "Infrastructure",
        items: [
          "Architected 19 NestJS microservices with TCP/Redis transport and 3 API gateways",
          "Redis caching reducing DB load by 40%, parallel operations cutting latency 30-50%",
          "Docker containerization, PM2 cluster mode, Jenkins CI/CD pipelines",
        ],
      },
    ],
  },
};

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" ref={ref} className="relative py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            <span className="text-[var(--accent)] font-mono text-xl mr-2">
              05.
            </span>
            Resume
          </h2>
          <p className="text-gray-400 max-w-2xl">
            A quick overview of my professional experience and skills.
          </p>
        </motion.div>

        {/* Download / View buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          <a
            href="/resume/Harish_V_Resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-white text-sm font-medium rounded-lg hover:brightness-110 transition-all"
          >
            <FiExternalLink className="text-base" />
            View Full Resume
          </a>
          <a
            href="/resume/Harish_V_Resume.html"
            download="Harish_V_Resume.html"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 text-gray-300 text-sm font-medium rounded-lg hover:bg-white/5 hover:text-white transition-all"
          >
            <FiDownload className="text-base" />
            Download Resume
          </a>
        </motion.div>

        {/* Resume preview card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden"
        >
          {/* Summary */}
          <div className="px-6 sm:px-8 py-6 border-b border-white/[0.06]">
            <h3 className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest mb-3">
              Summary
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Skills */}
          <div className="px-6 sm:px-8 py-6 border-b border-white/[0.06]">
            <h3 className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest mb-4">
              Technical Skills
            </h3>
            <div className="grid gap-2">
              {RESUME_DATA.skills.map((skill) => (
                <div key={skill.label} className="flex gap-3 text-sm">
                  <span className="text-gray-400 font-medium w-24 sm:w-28 shrink-0">
                    {skill.label}
                  </span>
                  <span className="text-gray-500">—</span>
                  <span className="text-gray-300">{skill.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="px-6 sm:px-8 py-6">
            <h3 className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest mb-4">
              Experience
            </h3>

            {/* Job header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
              <h4 className="text-white font-semibold text-base">
                {RESUME_DATA.experience.title}
              </h4>
              <span className="text-gray-500 text-xs font-mono">
                {RESUME_DATA.experience.date}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-1">
              {RESUME_DATA.experience.company}
            </p>
            <p className="text-gray-500 text-xs italic mb-5">
              Project: {RESUME_DATA.experience.project}
            </p>

            {/* Highlight categories */}
            <div className="grid sm:grid-cols-2 gap-5">
              {RESUME_DATA.experience.highlights.map((group) => (
                <div key={group.category}>
                  <h5 className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-2">
                    {group.category}
                  </h5>
                  <ul className="space-y-1.5">
                    {group.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-400 text-xs leading-relaxed pl-3 relative before:content-['▸'] before:absolute before:left-0 before:text-[var(--accent)] before:text-[10px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-gray-600 text-xs mt-6 font-mono"
        >
          For the complete resume with all details, click &quot;View Full
          Resume&quot; above.
        </motion.p>
      </div>
    </section>
  );
}
