import { Shield, Server, Code, Zap, BanknoteX, Podcast } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Privacy by Design",
    description:
      "Your messages stay on your server. No third-party access, ever.",
  },
  {
    icon: Server,
    title: "Self-Hosted Freedom",
    description:
      "Deploy on your infrastructure. Whether it's a tiny Raspberry PI or cloud provider, you choose where your data lives.",
  },
  {
    icon: Zap,
    title: "Unlimited",
    description:
      "No user caps, no message limits. Host as many users and store as much data as your server can handle.",
  },
  {
    icon: Code,
    title: "100% Open Source",
    description:
      "Audit the code, contribute features, or fork it. Complete transparency with no hidden backdoors.",
  },
  {
    icon: Podcast,
    title: "Powerful",
    description:
      "Supports video up to 4K@60fps video calls and screen sharing.",
  },
  {
    icon: BanknoteX,
    title: "No Paywalls",
    description:
      "All features are free forever. No premium tiers, no locked features. Just pure, unrestricted communication.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-balance">
            Built for Privacy Advocates
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Every feature designed with one goal: keeping your communications
            private and under your control.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border/50 hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
