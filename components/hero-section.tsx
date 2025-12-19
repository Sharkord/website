import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent" />

      <div className="container relative mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-linear-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
              Your conversations.
            </span>{" "}
            <span className="bg-linear-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              Your data.
            </span>{" "}
            <span className="bg-linear-to-r from-foreground/80 via-foreground to-foreground bg-clip-text text-transparent">
              Your control.
            </span>
          </h1>

          <p className="mb-10 text-lg text-muted-foreground text-pretty md:text-xl max-w-3xl mx-auto leading-relaxed">
            Open-source chat platform for friends who value privacy over
            features. Voice, video, and screen sharing—without the bloat or
            surveillance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto group" asChild>
              <Link href="#get-started">
                Get Started{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto group"
              asChild
            >
              <Link href="https://github.com/sharkord/sharkord" target="_blank">
                <Github className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />{" "}
                Star on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
