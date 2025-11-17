import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const comparisons = [
  {
    feature: "Open Source",
    sharkord: true,
    discord: false,
    teamspeak: false,
  },
  {
    feature: "Data Ownership",
    sharkord: true,
    discord: false,
    teamspeak: true,
  },
  {
    feature: "Self-Hosted",
    sharkord: true,
    discord: false,
    teamspeak: true,
  },
  {
    feature: "Free Forever",
    sharkord: true,
    discord: "limited",
    teamspeak: "limited",
  },
  {
    feature: "Voice & Video",
    sharkord: true,
    discord: true,
    teamspeak: "limited",
  },
  {
    feature: "Needs License",
    sharkord: false,
    discord: false,
    teamspeak: "limited",
  },
  {
    feature: "Paid Features",
    sharkord: false,
    discord: true,
    teamspeak: false,
  },
  {
    feature: "Data Mining",
    sharkord: false,
    discord: true,
    teamspeak: false,
  },
  {
    feature: "Bloated Interface",
    sharkord: false,
    discord: true,
    teamspeak: false,
  },
  {
    feature: "Built for Huge Communities",
    sharkord: false,
    discord: true,
    teamspeak: false,
  },
];

function ComparisonIcon({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="h-5 w-5 text-primary" />;
  }
  if (value === false) {
    return <X className="h-5 w-5 text-muted-foreground" />;
  }
  return <span className="text-xs text-muted-foreground">Partial</span>;
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
            How Sharkord Compares
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            See how Sharkord stacks up against other popular chat platforms
          </p>
        </div>

        <Card className="max-w-5xl mx-auto overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 px-6 text-left font-semibold">
                      Feature
                    </th>
                    <th className="py-4 px-6 text-center font-semibold bg-primary/5">
                      <div className="flex items-center justify-center gap-2">
                        Sharkord
                      </div>
                    </th>
                    <th className="py-4 px-6 text-center font-semibold">
                      Discord
                    </th>
                    <th className="py-4 px-6 text-center font-semibold">
                      Teamspeak 3
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-border/50 last:border-0"
                    >
                      <td className="py-4 px-6 font-medium">{row.feature}</td>
                      <td className="py-4 px-6 text-center bg-primary/5">
                        <div className="flex justify-center">
                          <ComparisonIcon value={row.sharkord} />
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex justify-center">
                          <ComparisonIcon value={row.discord} />
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex justify-center">
                          <ComparisonIcon value={row.teamspeak} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
