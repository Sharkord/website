import { Shield, Server, Code, Zap, Users, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Your Data, Your Rules",
    description:
      "Everything stays on your server. No corporate middleman reading your messages or mining your data.",
  },
  {
    icon: Server,
    title: "Run It Anywhere",
    description:
      "Works on a $35 Raspberry Pi 4 or any cloud provider. Your server specs determine your limits, not arbitrary paywalls.",
  },
  {
    icon: Video,
    title: "Crystal Clear Quality",
    description:
      "Modern WebRTC codecs deliver pristine voice and video up to 4K@60fps for screen sharing. No compression artifacts.",
  },
  {
    icon: Zap,
    title: "Lightweight & Fast",
    description:
      "Clean, minimal interface that doesn't hog your RAM or slow down your computer. Just the features you actually use.",
  },
  {
    icon: Code,
    title: "Fully Open Source",
    description:
      "Inspect the code, customize it, contribute improvements. No hidden telemetry or mysterious updates.",
  },
  {
    icon: Users,
    title: "No Artificial Limits",
    description:
      "No premium tiers, user caps, or feature restrictions. Your hardware is the only limit.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-balance">
            Everything You Need, Nothing You Don't
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Voice, video, text, and screen sharing—without the bloat, memory
            leaks, or corporate surveillance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border/50 hover:border-primary/50 transition-all duration-200 group"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
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
