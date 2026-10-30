import { formatStars, type RepoStats } from "@/lib/github";

export function ProofStrip({ stats }: { stats: RepoStats }) {
  const items = [
    stats.stars !== null
      ? { value: formatStars(stats.stars), label: "stars on GitHub" }
      : null,
    stats.version !== null
      ? { value: stats.version, label: "latest release" }
      : null,
    { value: "MIT", label: "open source license" },
    { value: "1 min", label: "from download to running" },
  ].filter((item) => item !== null);

  return (
    <section className="border-y border-border/40 py-12 md:py-16">
      <dl className="container mx-auto grid grid-cols-2 gap-y-8 px-4 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col-reverse items-center gap-1 text-center"
          >
            <dt className="text-sm text-muted-foreground">{item.label}</dt>
            <dd className="text-2xl font-semibold tracking-tight tabular-nums sm:text-3xl">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
