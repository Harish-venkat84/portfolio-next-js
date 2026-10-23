import { STACK_GROUPS, type StackItem } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const ALL = STACK_GROUPS.flatMap((g) => g.items).filter(
  (item, i, arr) => arr.findIndex((x) => x.name === item.name) === i,
);
const HALF = Math.ceil(ALL.length / 2);
const ROWS = [ALL.slice(0, HALF), ALL.slice(HALF)];

function Chip({ item }: { item: StackItem }) {
  const Icon = item.icon;
  return (
    <span className="mx-2 inline-flex items-center gap-2.5 rounded-lg border border-line bg-panel px-4 py-2.5 font-mono text-sm whitespace-nowrap">
      {Icon ? <Icon className="text-base text-muted" /> : <span className="text-up">◆</span>}
      {item.name}
    </span>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="04" path="stack" title="Tools I reach for." />
      </div>

      {/* decorative marquee; the lists below carry the same content for screen readers */}
      <div
        className="marquee-host space-y-4 overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)" }}
        aria-hidden
      >
        {ROWS.map((row, r) => (
          <div
            key={r}
            className={`marquee ${r === 1 ? "marquee-reverse" : ""}`}
            style={{ "--marquee-duration": "50s" } as React.CSSProperties}
          >
            {[...row, ...row].map((item, i) => (
              <Chip key={`${item.name}-${i}`} item={item} />
            ))}
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 px-4 sm:px-6 md:grid-cols-3">
        {STACK_GROUPS.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08} className="panel p-6">
            <h3 className="font-mono text-xs tracking-widest text-up uppercase">{g.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
              {g.items.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
