import { BIO, STATS, WHOAMI_YAML } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import CodePanel from "./CodePanel";
import CountUp from "./CountUp";

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="01" path="whoami" title="Engineer for the parts where bugs cost money." />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
            {BIO.map((p, i) => (
              <p key={i} className={i === BIO.length - 1 ? "text-fg" : undefined}>
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.1}>
            <CodePanel file="~/whoami.yaml" lines={WHOAMI_YAML} />
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-panel p-5 sm:p-6">
              <p className="font-mono text-3xl font-semibold text-up sm:text-4xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
