"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { PERSONAL_INFO } from "@/lib/constants";

const links = [
  { href: PERSONAL_INFO.github, icon: FiGithub, label: "GitHub" },
  { href: PERSONAL_INFO.linkedin, icon: FiLinkedin, label: "LinkedIn" },
  { href: `mailto:${PERSONAL_INFO.email}`, icon: FiMail, label: "Email" },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      {links.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target={link.label !== "Email" ? "_blank" : undefined}
          rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
          aria-label={link.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
          whileHover={{ scale: 1.15, y: -2 }}
          className="flex items-center justify-center w-11 h-11 rounded-full border border-white/15 bg-white/5 text-gray-400 transition-all hover:text-[var(--accent)] hover:border-[var(--accent)]/50 hover:shadow-[0_0_15px_rgba(108,99,255,0.3)]"
        >
          <link.icon className="text-lg" />
        </motion.a>
      ))}
    </div>
  );
}
