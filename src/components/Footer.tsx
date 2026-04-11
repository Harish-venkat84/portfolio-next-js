"use client";

import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { PERSONAL_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 flex items-center gap-1">
            Built with <FiHeart className="text-[var(--accent)] text-xs" /> by{" "}
            <span className="text-gray-400">{PERSONAL_INFO.name}</span>
          </p>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-600 hover:text-[var(--accent)] transition-colors"
            >
              <FiGithub className="text-lg" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-[var(--accent)] transition-colors"
            >
              <FiLinkedin className="text-lg" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="text-gray-600 hover:text-[var(--accent)] transition-colors"
            >
              <FiMail className="text-lg" />
            </a>
          </div>

          <p className="text-xs text-gray-700 font-mono">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
