import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Terminal } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section
      id="get-started"
      className="py-24 md:py-32 border-b border-border/40 bg-gradient-to-b from-primary/5 to-transparent"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-balance">
            Ready to Take Control?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
            Deploy Sharkord in seconds. Download the binary. Run it anywhere.
            Start owning your conversations today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link
                href="https://github.com/sharkord/sharkord/releases/latest"
                target="_blank"
              >
                Download <Download className="ml-2 h-4 w-4" />
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

          <div className="flex flex-col gap-2">
            <div className="bg-card border border-border/50 rounded-lg p-6 text-left">
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">
                  Deploy with binary (Linux x64)
                </span>
              </div>
              <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
                <code className="text-muted-foreground font-mono">
                  {/* set code to download with curl, set chmod and execute: https://github.com/sharkord/sharkord/releases/latest/download/sharkord-linux-x64 */}
                  {`curl -L https://github.com/sharkord/sharkord/releases/latest/download/sharkord-linux-x64 -o sharkord
chmod +x sharkord
./sharkord`}
                </code>
              </pre>
            </div>

            <div className="bg-card border border-border/50 rounded-lg p-6 text-left">
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold">
                  Deploy with docker
                </span>
              </div>
              <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
                <code className="text-muted-foreground font-mono">
                  {`docker run \\
  -p 4991:4991/tcp \\
  -p 40000-40020:40000-40020/tcp \\
  -p 40000-40020:40000-40020/udp \\
  -v "./data":/root/.config/sharkord \\
  --name sharkord \\
  sharkord/sharkord:latest`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
