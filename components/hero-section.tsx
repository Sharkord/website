import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Play } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_50%_at_50%_0%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container relative mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Your conversations. Your data. Your control.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Open-source chat platform for friends who value privacy. Voice,
            video, and screen sharing without the bloat or surveillance.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="https://demo.sharkord.com" target="_blank">
                <Play className="h-4 w-4" />
                Try it right now
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              asChild
            >
              <Link href="#install">
                Set up your own
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="w-full sm:w-auto"
              asChild
            >
              <Link
                href="https://github.com/Sharkord/sharkord"
                target="_blank"
                aria-label="Sharkord on GitHub"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No account with us. No subscription. No upsells, ever.
          </p>
        </div>
      </div>
    </section>
  );
}
