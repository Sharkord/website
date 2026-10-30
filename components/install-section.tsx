"use client";

import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";
import { ArrowRight, Download, Youtube } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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

const tabs = [
  { id: "download", label: "Download" },
  { id: "docker", label: "Docker" },
  { id: "caddy", label: "Docker + Caddy", recommended: true },
] as const;

type TabId = (typeof tabs)[number]["id"];

function DownloadPanel() {
  return (
    <div>
      <Button size="lg" asChild>
        <Link href="#download">
          <Download className="h-4 w-4" />
          Download Sharkord
        </Link>
      </Button>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Windows, macOS and Linux. Download the file for your system and open
        it. Done.
      </p>
    </div>
  );
}

function DockerPanel() {
  return (
    <div>
      <CodeBlock label="With Docker" meta="If you already use it" code={DOCKER_COMMAND} />
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        One command, and it keeps itself running in the background.
      </p>
    </div>
  );
}

function CaddyPanel() {
  return (
    <div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        It puts your server on your own domain with HTTPS, which browsers insist
        on before they let anyone use a camera or share a screen. Two small
        files and one command.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button asChild>
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
      </div>
      <p className="mt-5 text-sm text-muted-foreground">
        No domain of your own?{" "}
        <Link
          href="/docs/domains"
          className="text-foreground/80 underline underline-offset-4 transition-colors hover:text-foreground"
        >
          We give you one for free
        </Link>
        .
      </p>
    </div>
  );
}

const panels: Record<TabId, () => React.ReactNode> = {
  download: DownloadPanel,
  docker: DockerPanel,
  caddy: CaddyPanel,
};

export function InstallSection() {
  const [active, setActive] = useState<TabId>("download");
  const Panel = panels[active];

  return (
    <section
      id="install"
      className="scroll-mt-16 border-y border-border/40 bg-card/30 py-24 md:py-32"
    >
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Running in about a minute
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            No setup wizard, no database to install, no account to create.
            Download it, run it, and it is already working.
          </p>

          <ol className="mt-10">
            {steps.map((item) => (
              <li
                key={item.step}
                className="flex gap-5 border-t border-border/60 py-5 last:border-b"
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
        </div>

        <div className="self-center overflow-hidden rounded-2xl border border-border/60 bg-background">
          <div
            role="tablist"
            aria-label="Ways to install Sharkord"
            className="flex border-b border-border/60"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active === tab.id}
                onClick={() => setActive(tab.id)}
                className={cn(
                  "flex flex-1 flex-col items-center justify-center border-b-2 px-3 py-3 text-sm whitespace-nowrap transition-colors",
                  active === tab.id
                    ? "border-foreground font-medium text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                {tab.label}
                {"recommended" in tab ? (
                  <span className="text-[10px] font-normal uppercase tracking-wide text-muted-foreground">
                    Recommended
                  </span>
                ) : null}
              </button>
            ))}
          </div>

          <div role="tabpanel" className="p-6 md:p-8">
            <Panel />
          </div>
        </div>
      </div>
    </section>
  );
}
