import {
  EyeOff,
  Infinity as InfinityIcon,
  Lock,
  MonitorPlay,
  Puzzle,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Your conversations stay yours",
    description:
      "Everything anyone says or shares sits on your machine. No company reads it, sells it, trains on it, or hands it to anyone else.",
  },
  {
    icon: MonitorPlay,
    title: "Hang out, not just chat",
    description:
      "Voice, webcam and screen sharing with sound, so you can play something together or watch a film without anyone paying for a better picture.",
  },
  {
    icon: InfinityIcon,
    title: "No limits and no upsells",
    description:
      "No premium tier, no member cap, no locked features. The only limit is the machine you put it on, and it asks for very little.",
  },
  {
    icon: Users,
    title: "You decide who does what",
    description:
      "Give people the run of the place or keep them to one room. Who can talk, post, invite or change things is entirely up to you.",
  },
  {
    icon: Puzzle,
    title: "Make it your own",
    description:
      "Add a music bot, a soundboard, or something nobody has built yet. Extras are one click away, and anyone can make more.",
  },
  {
    icon: EyeOff,
    title: "Nobody is watching",
    description:
      "No ads, no tracking, no algorithm deciding what you see. Nothing about your server is reported to us, because there is no us to report it to.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="border-b border-border/40 py-24 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Everything you liked about group chat, none of the landlord
          </h2>
        </div>

        <div className="mx-auto grid overflow-hidden rounded-xl border-l border-t border-border/60 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex flex-col gap-3 border-b border-r border-border/60 p-7 transition-colors hover:bg-card/60"
              >
                <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                <h3 className="text-base font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
