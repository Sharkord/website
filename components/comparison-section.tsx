import { Check, Minus } from "lucide-react";
import Link from "next/link";

type Cell = boolean | string;

const columns = ["Sharkord", "Discord", "TeamSpeak 3"] as const;

const rows: { feature: string; note: string; values: [Cell, Cell, Cell] }[] = [
  {
    feature: "It lives on your machine",
    note: "Nobody else holds your messages or your files",
    values: [true, false, true],
  },
  {
    feature: "Free, with nothing held back",
    note: "No premium tier waiting behind the good features",
    values: [true, "Nitro", "Paid for bigger servers"],
  },
  {
    feature: "Nothing to install to join",
    note: "You send a link, they open it",
    values: [true, true, false],
  },
  {
    feature: "Video and screen sharing",
    note: "Cameras, screens, and the sound that goes with them",
    values: [true, true, false],
  },
  {
    feature: "Sharp picture without paying",
    note: "Nobody blurs your stream to sell you an upgrade",
    values: [true, false, false],
  },
  {
    feature: "No ads, no tracking",
    note: "Nothing about you is collected or sold",
    values: [true, false, true],
  },
  {
    feature: "You can see how it works",
    note: "The code is public and anyone can check it",
    values: [true, false, false],
  },
  {
    feature: "Phone and desktop apps",
    note: "Where we are still behind",
    values: ["Browser only", true, true],
  },
];

function Value({ value, highlight }: { value: Cell; highlight?: boolean }) {
  if (value === true) {
    return (
      <Check
        className={
          highlight
            ? "mx-auto h-4.5 w-4.5 text-foreground"
            : "mx-auto h-4.5 w-4.5 text-muted-foreground"
        }
        aria-label="Yes"
      />
    );
  }

  if (value === false) {
    return (
      <Minus className="mx-auto h-4.5 w-4.5 text-muted-foreground/40" aria-label="No" />
    );
  }

  return (
    <span
      className={
        highlight
          ? "text-sm font-medium text-foreground"
          : "text-sm text-muted-foreground"
      }
    >
      {value}
    </span>
  );
}

export function ComparisonSection() {
  return (
    <section
      id="comparison"
      className="border-b border-border/40 py-24 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            You already know how to use it
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Discord and TeamSpeak got plenty right, and we kept that. What we
            dropped is the ads, the paid tiers, and the company sitting in the
            middle of your group.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border/60">
          <table className="w-full min-w-[42rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-border/60">
                <th className="w-2/5 px-6 py-4 text-sm font-medium text-muted-foreground">
                  What matters
                </th>
                {columns.map((column, index) => (
                  <th
                    key={column}
                    className={
                      index === 0
                        ? "px-6 py-4 text-center text-sm font-semibold text-foreground"
                        : "px-6 py-4 text-center text-sm font-medium text-muted-foreground"
                    }
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-border/40 last:border-0"
                >
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium">{row.feature}</div>
                    <div className="mt-0.5 text-sm text-muted-foreground">
                      {row.note}
                    </div>
                  </td>
                  {row.values.map((value, index) => (
                    <td
                      key={columns[index]}
                      className={
                        index === 0
                          ? "bg-card/60 px-6 py-4 text-center"
                          : "px-6 py-4 text-center"
                      }
                    >
                      <Value value={value} highlight={index === 0} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Based on what each one gives you for free today. Spotted something
          out of date?{" "}
          <Link
            href="https://github.com/Sharkord/sharkord/issues"
            target="_blank"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            Tell us and we will fix it
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
