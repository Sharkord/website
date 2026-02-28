import { Button } from "@/components/ui/button";
import { Download, Github, Terminal, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function CTASection() {
  return (
    <section
      id="get-started"
      className="py-24 md:py-32 border-b border-border/40 bg-linear-to-b from-primary/5 to-transparent"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-balance">
            Ready to Take Control?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Set up your own Sharkord server in minutes. Choose your deployment
            method and start chatting on your terms.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Alert className="mb-8 text-left border-amber-500/50 bg-amber-500/10">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-sm text-foreground">
              <strong>Alpha Release:</strong> Sharkord is under active
              development. Expect bugs and potential breaking changes between
              updates.
            </AlertDescription>
          </Alert>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="w-full sm:w-auto group" asChild>
              <Link
                href="https://github.com/sharkord/sharkord/releases/latest"
                target="_blank"
              >
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Download Latest
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto group"
              asChild
            >
              <Link href="https://github.com/sharkord/sharkord" target="_blank">
                <Github className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                View on GitHub
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto group"
              asChild
            >
              <Link href="/docs">
                <Terminal className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Read the Docs
              </Link>
            </Button>
          </div>

          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold mb-2 text-balance">
              Quick Start
            </h3>
            <p className="text-muted-foreground">
              Choose your preferred deployment method
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-card border border-border/50 rounded-lg p-6 text-left hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="h-5 w-5 text-primary" />
                <span className="font-semibold">Standalone Binary</span>
                <span className="ml-auto text-xs text-muted-foreground">
                  Linux x64
                </span>
              </div>
              <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
                <code className="text-foreground font-mono">
                  {`curl -L https://github.com/sharkord/sharkord/releases/latest/download/sharkord-linux-x64 -o sharkord
 chmod +x sharkord
 ./sharkord`}
                </code>
              </pre>
              <div className="mt-3 text-right text-xs">
                <Link
                  href="/docs/introduction/installation/linux"
                  className="text-primary hover:underline"
                >
                  Full Linux install guide
                </Link>
              </div>
            </div>

            <div className="bg-card border border-border/50 rounded-lg p-6 text-left hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="h-5 w-5 text-primary" />
                <span className="font-semibold">Docker</span>
                <span className="ml-auto text-xs text-muted-foreground">
                  All platforms
                </span>
              </div>
              <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">
                <code className="text-foreground font-mono">
                  {`docker run \\
   -p 4991:4991/tcp \\
   -p 40000:40000/tcp \\
   -p 40000:40000/udp \\
   -v /data:/home/bun/.config/sharkord \\
   --name sharkord \\
   sharkord/sharkord:latest`}
                </code>
              </pre>
              <div className="mt-3 text-right text-xs">
                <Link
                  href="/docs/introduction/installation/docker"
                  className="text-primary hover:underline"
                >
                  Full Docker guide
                </Link>
              </div>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-4 text-center">
            Windows builds are experimental; Docker or WSL2 is recommended. See{" "}
            <Link
              href="/docs/introduction/installation/windows"
              className="text-primary hover:underline"
            >
              Windows Installation
            </Link>
            .
          </p>

          <p className="text-sm text-muted-foreground mt-8 text-center">
            Need help? Check out the{" "}
            <Link href="/docs" className="text-primary hover:underline">
              documentation
            </Link>{" "}
            or open an issue on GitHub.
          </p>
        </div>
      </div>
    </section>
  );
}
