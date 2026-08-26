import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { ArrowRight, Download, ShieldCheck, Youtube } from "lucide-react";
import Link from "next/link";

const SETUP_VIDEO_URL = "https://www.youtube.com/watch?v=Baa7uEKUkgQ";

const steps = [
  {
    step: "1",
    title: "Run it",
    body: "Download the file and open it. There is nothing to configure and nothing else to install.",
  },
  {
    step: "2",
    title: "Open your browser",
    body: "Go to the address it prints and the whole app is there. Same on any device, nothing to download.",
  },
  {
    step: "3",
    title: "Send the link",
    body: "Your friends pick a name and they are in. That is the entire setup.",
  },
];

const DOCKER_COMMAND =
  "docker run \\\n  -p 4991:4991/tcp \\\n  -p 40000:40000/tcp \\\n  -p 40000:40000/udp \\\n  -v ./data:/home/bun/.config/sharkord \\\n  --name sharkord \\\n  sharkord/sharkord:latest";

export function InstallSection() {
  return (
    <section id="install" className="border-b border-border/40 py-24 md:py-28">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Running in about a minute
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            No setup wizard, no database to install, no account to create.
            Download it, run it, and it is already working.
          </p>
        </div>

        <ol className="mb-14 space-y-0">
          {steps.map((item) => (
            <li
              key={item.step}
              className="flex gap-5 border-t border-border/60 py-6 last:border-b"
            >
              <span className="mt-0.5 font-mono text-sm text-muted-foreground">
                {item.step}
              </span>
              <div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="space-y-8">
          <div>
            <div className="overflow-hidden rounded-xl border border-border/60 bg-card/60">
              <div className="flex items-center justify-between gap-3 border-b border-border/60 px-3 py-2">
                <span className="text-xs font-medium text-foreground">
                  The simple way
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  Windows, macOS, Linux
                </span>
              </div>
              <div className="px-4 py-4">
                <Button className="w-full sm:w-auto" asChild>
                  <Link
                    href="https://github.com/Sharkord/sharkord/releases/latest"
                    target="_blank"
                  >
                    <Download className="h-4 w-4" />
                    Download Sharkord
                  </Link>
                </Button>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Download the file for your system and open it. Done.
            </p>
          </div>

          <div>
            <CodeBlock
              label="With Docker"
              meta="If you already use it"
              code={DOCKER_COMMAND}
            />
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              One command, and it keeps itself running in the background.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-border/60 bg-card/40 p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <div>
              <h3 className="text-base font-semibold">
                Docker with Caddy is the setup we recommend
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                It puts your server on your own domain with HTTPS, which
                browsers insist on before they let anyone use a camera or share
                a screen. Two small files and one command.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button variant="outline" asChild>
                  <Link href="/docs/introduction/installation/docker-compose">
                    The recommended setup
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href={SETUP_VIDEO_URL} target="_blank">
                    <Youtube className="h-4 w-4" />
                    Watch it in one minute
                  </Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/docs">Read the docs</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          No domain of your own?{" "}
          <Link
            href="/docs/domains"
            className="text-foreground/80 underline-offset-4 hover:text-foreground hover:underline"
          >
            We give you one for free
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
