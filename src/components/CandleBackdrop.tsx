/** Deterministic PRNG so the server and client draw the same chart. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const COUNT = 64;
const STEP = 25;
const WIDTH = COUNT * STEP;
const HEIGHT = 400;

function makeCandles() {
  const rand = mulberry32(84);
  let price = 220;
  return Array.from({ length: COUNT }, (_, i) => {
    const open = price;
    // Gentle upward drift: it is a portfolio, after all.
    const close = Math.max(60, Math.min(340, open + (rand() - 0.42) * 38));
    const high = Math.max(open, close) + rand() * 18;
    const low = Math.min(open, close) - rand() * 18;
    price = close;
    return { x: i * STEP + STEP / 2, open, close, high, low, up: close >= open };
  });
}

const CANDLES = makeCandles();

function Chart() {
  const candles = CANDLES;
  const y = (v: number) => HEIGHT - v;
  return (
    <svg width={WIDTH} height={HEIGHT} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="shrink-0">
      {candles.map((c, i) => {
        const color = c.up ? "var(--up)" : "var(--down)";
        const top = y(Math.max(c.open, c.close));
        const h = Math.max(2, Math.abs(c.close - c.open));
        return (
          <g key={i}>
            <line x1={c.x} x2={c.x} y1={y(c.high)} y2={y(c.low)} stroke={color} strokeWidth={1.5} />
            <rect x={c.x - 6} y={top} width={12} height={h} rx={1.5} fill={color} />
          </g>
        );
      })}
    </svg>
  );
}

export default function CandleBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[400px] overflow-hidden opacity-[0.13]"
      style={{ maskImage: "linear-gradient(to bottom, transparent, #000 40%, #000 70%, transparent)" }}
      aria-hidden
    >
      <div className="marquee" style={{ "--marquee-duration": "120s" } as React.CSSProperties}>
        <Chart />
        <Chart />
      </div>
    </div>
  );
}
