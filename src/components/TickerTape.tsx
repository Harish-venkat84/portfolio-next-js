import { TICKER } from "@/lib/constants";

function Items() {
  return (
    <>
      {TICKER.map((t) => (
        <span key={t.label} className="flex items-center gap-2 px-6 whitespace-nowrap">
          <span className="text-muted">{t.label}</span>
          <span className={t.up ? "text-up" : "text-down"}>
            {t.value} {t.up ? "▲" : "▼"}
          </span>
        </span>
      ))}
    </>
  );
}

export default function TickerTape() {
  return (
    <div
      className="marquee-host fixed inset-x-0 top-0 z-50 h-8 overflow-hidden border-b border-line bg-bg/90 font-mono text-[11px] leading-8 backdrop-blur"
      aria-hidden
    >
      <div className="marquee" style={{ "--marquee-duration": "45s" } as React.CSSProperties}>
        <Items />
        <Items />
      </div>
    </div>
  );
}
