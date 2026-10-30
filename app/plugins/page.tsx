/* eslint-disable @next/next/no-img-element -- logos come from any host a plugin author picks, so next/image cannot whitelist them */
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PluginScreenshots } from "@/components/plugin-screenshots";
import { Button } from "@/components/ui/button";
import { getRepoStats } from "@/lib/github";
import { getPlugins, type Plugin } from "@/lib/plugins";
import { ArrowRight, BadgeCheck, ExternalLink, Puzzle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

const REGISTRY_URL = "https://github.com/Sharkord/plugins";

export const metadata: Metadata = {
  title: "Plugins",
  description:
    "Free plugins for Sharkord: music bots, soundboards, live TV and more. Install them from your server settings in a couple of clicks.",
  alternates: {
    canonical: "/plugins",
  },
};

const dateFormat = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

function PluginCard({ plugin }: { plugin: Plugin }) {
  return (
    <article className="flex flex-col rounded-2xl border border-border/60 bg-card/40 p-6">
      <div className="flex items-start gap-4">
        {plugin.logo ? (
          <img
            src={plugin.logo}
            alt=""
            width={48}
            height={48}
            loading="lazy"
            className="size-12 shrink-0 rounded-xl bg-background object-contain"
          />
        ) : (
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-background">
            <Puzzle className="h-5 w-5 text-muted-foreground" />
          </div>
        )}

        <div className="min-w-0">
          <h2 className="flex items-center gap-1.5 text-lg font-semibold">
            {plugin.name}
            {plugin.verified ? (
              <BadgeCheck
                className="h-4 w-4 shrink-0 text-foreground"
                aria-label="Verified"
              />
            ) : null}
          </h2>
          <p className="truncate text-sm text-muted-foreground">
            by {plugin.author}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {plugin.description}
      </p>

      {plugin.screenshots.length > 0 ? (
        <PluginScreenshots
          name={plugin.name}
          screenshots={plugin.screenshots}
        />
      ) : null}

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
        {plugin.latest ? (
          <p className="font-mono text-xs text-muted-foreground">
            v{plugin.latest.version} ·{" "}
            {dateFormat.format(new Date(plugin.latest.timestamp))}
          </p>
        ) : (
          <span />
        )}
        {plugin.homepage ? (
          <Link
            href={plugin.homepage}
            target="_blank"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Source
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export default async function PluginsPage() {
  const [stats, plugins] = await Promise.all([getRepoStats(), getPlugins()]);

  return (
    <div className="min-h-screen">
      <Header stats={stats} />
      <main className="container mx-auto px-4 py-20 md:py-24">
        <div className="mb-14 max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Plugins
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Everything here is free. To add one, open your server settings, go
            to Plugins, then Marketplace, and press install.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="outline" asChild>
              <Link href="/docs/plugins/overview">
                Build your own
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/docs/plugins/marketplace">Publish a plugin</Link>
            </Button>
          </div>
        </div>

        {plugins ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plugins.map((plugin) => (
              <PluginCard key={plugin.id} plugin={plugin} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            The plugin list could not be loaded right now.{" "}
            <Link
              href={REGISTRY_URL}
              target="_blank"
              className="text-foreground/80 underline underline-offset-4 hover:text-foreground"
            >
              Browse it on GitHub
            </Link>
            .
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}
