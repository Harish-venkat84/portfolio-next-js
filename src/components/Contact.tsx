"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";
import { PERSONAL_INFO } from "@/lib/constants";

const contactLinks = [
  {
    title: "Email",
    subtitle: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    icon: FiMail,
    description: "Drop me a message anytime",
  },
  {
    title: "GitHub",
    subtitle: "Harish-venkat84",
    href: PERSONAL_INFO.github,
    icon: FiGithub,
    description: "Check out my repositories",
  },
  {
    title: "LinkedIn",
    subtitle: "harish-software-engineer",
    href: PERSONAL_INFO.linkedin,
    icon: FiLinkedin,
    description: "Let's connect professionally",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--accent)]/5 blur-[150px]" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[var(--accent)] font-mono text-sm mb-2">
            04. Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Work{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-purple-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-lg">
            I&apos;m always open to discussing new projects, ideas, or
            opportunities to build something great.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              target={link.title !== "Email" ? "_blank" : undefined}
              rel={link.title !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm text-center transition-all duration-300 hover:border-[var(--accent)]/30 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(108,99,255,0.1)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="inline-flex p-3 rounded-xl bg-white/5 border border-white/10 mb-4 group-hover:border-[var(--accent)]/30 transition-colors">
                  <link.icon className="text-2xl text-[var(--accent)]" />
                </div>

                <h3 className="text-lg font-bold text-white mb-1 flex items-center justify-center gap-1">
                  {link.title}
                  <FiArrowUpRight className="text-sm text-gray-600 group-hover:text-[var(--accent)] transition-colors" />
                </h3>

                <p className="text-sm text-gray-400 mb-2 font-mono truncate">
                  {link.subtitle}
                </p>

                <p className="text-xs text-gray-600">{link.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--accent)] text-white font-medium transition-all hover:shadow-[0_0_40px_rgba(108,99,255,0.4)] hover:scale-105"
          >
            <FiMail className="text-lg" />
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
