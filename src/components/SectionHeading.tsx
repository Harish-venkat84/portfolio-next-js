import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  path,
  title,
  kicker,
}: {
  index: string;
  path: string;
  title: React.ReactNode;
  kicker?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="font-mono text-sm text-up">
        <span className="text-muted">{index} </span>
        {"// "}
        {path}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {kicker && <p className="mt-4 max-w-2xl text-lg text-muted">{kicker}</p>}
    </Reveal>
  );
}
