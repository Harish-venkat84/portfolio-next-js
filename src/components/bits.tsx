import { FiLock } from "react-icons/fi";

export function PrivateTag() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber/30 bg-amber/10 px-2.5 py-1 font-mono text-[11px] text-amber">
      <FiLock aria-hidden />
      private repo
    </span>
  );
}

/** Renders `backtick` spans as inline code. */
export function InlineCode({ text }: { text: string }) {
  return (
    <>
      {text.split(/(`[^`]+`)/g).map((part, i) =>
        part.startsWith("`") ? (
          <code key={i} className="rounded bg-panel-2 px-1.5 py-0.5 font-mono text-[0.85em] text-up">
            {part.slice(1, -1)}
          </code>
        ) : (
          part
        ),
      )}
    </>
  );
}

/** Renders **double-starred** spans as highlighted metrics. */
export function Metric({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") ? (
          <strong key={i} className="font-mono font-semibold text-up">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}
