import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Github, Play } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden border-b border-border/40 py-24 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_100%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Ready to take control?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            The demo is a real server you can wander around in, no sign-up. It
            is a small one, so bring a friend rather than a football team, and
            see if it feels right.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="https://demo.sharkord.com" target="_blank">
                <Play className="h-4 w-4" />
                Open the demo
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
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link
              href="/docs"
              className="inline-flex items-center gap-1.5 underline-offset-4 transition hover:text-foreground hover:underline"
            >
              <BookOpen className="h-3.5 w-3.5" />
              Documentation
            </Link>
            <Link
              href="https://github.com/Sharkord/sharkord"
              target="_blank"
              className="inline-flex items-center gap-1.5 underline-offset-4 transition hover:text-foreground hover:underline"
            >
              <Github className="h-3.5 w-3.5" />
              Source and issues
            </Link>
            <Link
              href="https://github.com/Sharkord/sharkord/releases/latest"
              target="_blank"
              className="underline-offset-4 transition hover:text-foreground hover:underline"
            >
              Latest release
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
