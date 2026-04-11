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

export const PERSONAL_INFO = {
  name: "Harish V",
  greeting: "Hi, I'm",
  tagline:
    "Building high-performance trading platforms with 15+ microservices and 10,000+ concurrent WebSocket connections.",
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
