import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 font-mono text-xs text-muted sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} Harish V · built with Next.js · no floats were harmed
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 hover:text-up">
          back to top <FiArrowUp aria-hidden />
        </a>
      </div>
    </footer>
  );
}
