# HARISH V

**Full Stack Developer**

harish.venkatesan23@gmail.com | 8807889553 | [linkedin.com/in/harish-software-engineer](https://www.linkedin.com/in/harish-software-engineer/) | [github.com/Harish-venkat84](https://github.com/Harish-venkat84)

---

## PROFESSIONAL SUMMARY

Full Stack Developer with 2+ years of hands-on experience building a production-grade cryptocurrency exchange platform. Architected 19 NestJS microservices processing real-time trading data across spot and futures markets. Designed and delivered FIFO matching engines, liquidation systems, and 10 WebSocket gateways handling 10,000+ concurrent connections. Built 3 Next.js frontend applications and integrated live market data from 6+ crypto exchanges using Protobuf-encoded feeds. Core expertise in TypeScript, NestJS, Next.js, MongoDB, Redis, and distributed systems architecture.

---

## TECHNICAL SKILLS

**Languages:** TypeScript, JavaScript (ES6+), HTML5, CSS3
**Frontend:** Next.js, React.js, Tailwind CSS, Redux, Framer Motion, React Hook Form, i18n
**Backend:** NestJS, Node.js, Express.js, REST APIs, Microservices Architecture, TCP Transport
**Databases:** MongoDB, Mongoose ODM, Redis (Caching, Pub/Sub, Streams), InfluxDB
**Real-Time:** Socket.IO, WebSocket, Redis Adapter, BullMQ (Job Queues), Kafka
**DevOps & Tools:** Docker, PM2 (Cluster Mode), Jenkins CI/CD, Git, Linux, Nginx
**Architecture:** Microservices, CQRS, Event-Driven Architecture, EventStoreDB, FIFO Matching Engine
**Auth & Security:** PassportJS (JWT, Local Strategy), bcrypt, RBAC, Rate Limiting (Throttler), Helmet
**Protocols:** Protobuf, REST, WebSocket, TCP
**Other:** TradingView Charts, OHLC Processing, Puppeteer, Stripe, AWS SDK, Firebase, Twilio, Expo (React Native)

---

## PROFESSIONAL EXPERIENCE

### Software Engineer | Nov 2023 – Present

**PiBase Solutions Private Limited**

_Project: UNICOIN-DCX Cryptocurrency Exchange Platform — A production crypto exchange with 3 frontend apps, 19 NestJS microservices, 3 API gateways, and real-time market data infrastructure._

#### Futures & Spot Trading Engine

- Built the complete **futures trading module** with limit, market, stop-limit, and stop-market order types across 50+ trading pairs with sub-second execution latency
- Implemented **FIFO matching engine** for deterministic order execution using dedicated BullMQ job processors for matching and settlement workflows
- Developed **liquidation engine** with Binance-compatible liquidation price formula supporting both isolated and cross-margin modes with real-time margin monitoring
- Built TP/SL automation, funding fee calculations, and position management with real-time PnL tracking and leverage up to 125x
- Developed spot trading system with limit, market, and maker-market orders, bulk cancellation, and presale ICO functionality

#### Real-Time WebSocket Infrastructure

- Designed **10 WebSocket gateways** (spot public/private, futures public/private, forex, feeder, presence, support chat, live agent, bot gateway) handling **10,000+ concurrent connections**
- Implemented **Redis-backed Socket.IO adapter** for horizontal scaling with 99.9% message delivery reliability across server instances
- Built real-time order book updates, ticker streams, candlestick feeds, and trade execution broadcasts for spot and futures markets

#### Market Data & Exchange Integration

- Integrated live price feeds from **6+ exchanges** (Binance, MEXC, Bybit, Kraken, KuCoin, OKX) for spot and futures data aggregation
- Implemented **Protobuf binary message parsing** for MEXC WebSocket feeds, reducing payload size by 60% compared to JSON
- Built OHLC candlestick pipeline with TradingView-compatible charting APIs across configurable timeframes (1m to 1M)
- Integrated Pyth Network oracle for decentralized crypto price feeds and forex integration for fiat currency pricing

#### Frontend Applications (Next.js)

- Built **Admin Dashboard** for exchange configuration, symbol management, KYC verification workflows, and real-time platform monitoring
- Developed **CRM Application** with live agent chat via WebSocket, dispute resolution, campaign management, and support ticket workflows
- Contributed to **Trader Application** with live order book, trade execution panels, portfolio management, and responsive trading layouts

#### Microservices & Infrastructure

- Architected **19 NestJS microservices** with TCP transport and Redis pub/sub, plus 3 API gateways with JWT authentication, rate limiting, and structured logging (Pino)
- Built CQRS and event-driven patterns using **EventStoreDB**, BullMQ job queues, and NestJS event emitters for order processing and settlement
- Developed shared libraries (**@pix/common-nest-js**, **@pix/common-next**) for code reuse across backend services and frontend apps
- Implemented **Redis caching** reducing database query load by 40% and parallel database operations cutting latency by 30-50%
- Designed multi-channel **notification system** (email via Nodemailer, SMS via Twilio, push via Firebase) with Handlebars templates and BullMQ async processing
- Built **mobile alert app** (Expo React Native) with real-time WebSocket dashboard, push notifications, and Telegram bot integration for system monitoring
- Configured Docker containerization, PM2 cluster mode for zero-downtime deploys, and Jenkins CI/CD pipelines

---

## KEY PROJECT

### UNICOIN-DCX Cryptocurrency Exchange Platform

**Tech Stack:** NestJS · Next.js · TypeScript · MongoDB · Redis · Socket.IO · Docker · PM2 · Jenkins · Protobuf · BullMQ · EventStoreDB · Kafka

- Full cryptocurrency exchange supporting spot and futures trading with leverage up to 125x
- 19 independently deployable microservices communicating via HTTP and Redis pub/sub
- 3 frontend applications: Trader (trading UI), Admin (configuration & monitoring), CRM (back office & support)
- 3 API gateways with JWT auth, role-based access control, request throttling, and structured logging
- Live market data aggregation from 6+ crypto exchanges with Protobuf binary encoding
- Secure wallet system with FIFO cost-basis tracking and multi-currency support
- Multi-channel notification pipeline (email, SMS, push) with async BullMQ processing
- Mobile alert app (Expo React Native) with WebSocket dashboard and Telegram bot for system alerts

---

## CERTIFICATIONS

[View certifications on LinkedIn](https://www.linkedin.com/in/harish-software-engineer/details/certifications/)

---

## EDUCATION

<!-- ✏️ Fill in your education details below -->

Bachelor of Technology in Computer Science
Your University Name — Graduation Year
