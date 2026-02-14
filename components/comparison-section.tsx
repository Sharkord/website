import { Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const comparisons = [
  {
    feature: "Your Data, Your Server",
    description: "Full control over your conversations and files",
    sharkord: true,
    discord: false,
    teamspeak: true,
  },
  {
    feature: "Simple, Clean Interface",
    description: "Just chat, voice, and screen sharing - nothing more",
    sharkord: true,
    discord: false,
    teamspeak: true,
  },
  {
    feature: "Completely Free",
    description: "No premium tiers, no paywalled core features",
    sharkord: true,
    discord: "Paid perks",
    teamspeak: "Paid slots",
  },
  {
    feature: "High Quality Screen Share",
    description: "Stream your screen in stunning clarity",
    sharkord: "up to 4K@60fps",
    discord: "720p @ 30fps",
    teamspeak: false,
  },
  {
    feature: "Zero Data Collection",
    description: "No analytics, no tracking, no selling your data",
    sharkord: true,
    discord: false,
    teamspeak: true,
  },
  {
    feature: "Native Apps",
    description: "Native apps for mobile and desktop platforms",
    sharkord: "Not yet",
    discord: true,
    teamspeak: true,
  },
  {
    feature: "Open Source",
    description: "Community-driven, transparent, and auditable",
    sharkord: true,
    discord: false,
    teamspeak: false,
  },
  {
    feature: "Plugins",
    description: "Extend functionality with community-made plugins",
    sharkord: true,
    discord: "Not natively",
    teamspeak: "Limited",
  },
];

function ComparisonIcon({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="flex items-center justify-center">
        <div className="rounded-full bg-green-500/10 p-1">
          <Check className="h-5 w-5 text-green-600" />
        </div>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex items-center justify-center">
        <div className="rounded-full bg-red-500/10 p-1">
          <X className="h-5 w-5 text-red-600" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center">
      <span className="text-sm text-muted-foreground font-medium">{value}</span>
    </div>
  );
}

export function ComparisonSection() {
  return (
    <section
      id="comparison"
      className="py-24 md:py-32 border-b border-border/40"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-balance">
            Built for Friends, Not Corporations
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Why settle for bloated platforms that monetize your conversations?
          </p>
        </div>

        <Card className="max-w-5xl mx-auto overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-5 px-6 text-left font-semibold w-2/5">
                      What Matters
                    </th>
                    <th className="py-5 px-6 text-center font-semibold bg-primary/5 w-1/5">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <span className="text-base">Sharkord</span>
                      </div>
                    </th>
                    <th className="py-5 px-6 text-center font-semibold w-1/5">
                      <span className="text-base">Discord</span>
                    </th>
                    <th className="py-5 px-6 text-center font-semibold w-1/5">
                      <span className="text-base">TeamSpeak 3</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors"
                    >
                      <td className="py-5 px-6">
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold">{row.feature}</span>
                          <span className="text-sm text-muted-foreground">
                            {row.description}
                          </span>
                        </div>
                      </td>
                      <td className="py-5 px-6 text-center bg-primary/5">
                        <ComparisonIcon value={row.sharkord} />
                      </td>
                      <td className="py-5 px-6 text-center">
                        <ComparisonIcon value={row.discord} />
                      </td>
                      <td className="py-5 px-6 text-center">
                        <ComparisonIcon value={row.teamspeak} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Perfect for small groups who value privacy and simplicity over
            enterprise features. Have questions?{" "}
            <Link
              href="/docs/common-questions"
              className="text-primary hover:underline"
            >
              Read the FAQ
            </Link>
            .
          </p>
        </div>

        <div className="bg-muted/50 border border-border/40 rounded-lg p-8 md:p-12 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Why Not Large Communities?
            </h3>
            <p className="text-lg text-muted-foreground mb-4 text-pretty leading-relaxed">
              While Discord is built for large-scale communities with thousands
              of simultaneous users, Sharkord is designed to deliver fast,
              reliable, and meaningful conversations without the noise.
            </p>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Think of it as the difference between a cozy living room and a
              crowded convention center. Both have their place, but Sharkord is
              all about the living room.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
