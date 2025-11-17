import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="container relative mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Your conversations. <span className="text-primary">Your data.</span>{" "}
            Your control.
          </h1>

          <p className="mb-10 text-lg text-muted-foreground text-pretty md:text-xl max-w-3xl mx-auto leading-relaxed">
            Sharkord is the open-source, self-hosted real-time chat platform
            that puts privacy first. No third parties. No data mining. Just
            secure communication you own.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="#get-started">
                Deploy Sharkord <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              asChild
            >
              <Link href="https://github.com/sharkord/sharkord" target="_blank">
                <Github className="mr-2 h-4 w-4" /> View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
