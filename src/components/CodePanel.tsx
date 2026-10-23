import type { Token } from "@/lib/constants";

const TOKEN_CLASS: Record<Token[0], string> = {
  key: "text-[#7cc4ff]",
  str: "text-[#ffd08a]",
  bool: "text-up",
  punct: "text-muted",
  comment: "text-muted/60 italic",
  plain: "text-fg",
};

export default function CodePanel({ file, lines }: { file: string; lines: Token[][] }) {
  return (
    <div className="panel overflow-hidden">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted">{file}</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-7">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-5 w-5 shrink-0 text-right text-muted/40 select-none">{i + 1}</span>
              <span>
                {line.map(([kind, text], j) => (
                  <span key={j} className={TOKEN_CLASS[kind]}>
                    {text}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
