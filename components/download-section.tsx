import { Button } from "@/components/ui/button";
import {
  DESKTOP_REPO,
  SERVER_REPO,
  type DesktopRelease,
  type RepoStats,
} from "@/lib/github";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

type Platform = {
  name: string;
  detail: string;
  href: string;
};

const SERVER_DOWNLOAD = `https://github.com/${SERVER_REPO}/releases/latest/download`;
const DESKTOP_RELEASES = `https://github.com/${DESKTOP_REPO}/releases/latest`;

const serverPlatforms: Platform[] = [
  {
    name: "Windows",
    detail: "64-bit",
    href: `${SERVER_DOWNLOAD}/sharkord-windows-x64.exe`,
  },
  {
    name: "macOS",
    detail: "Apple silicon",
    href: `${SERVER_DOWNLOAD}/sharkord-macos-arm64`,
  },
  {
    name: "Linux",
    detail: "x64",
    href: `${SERVER_DOWNLOAD}/sharkord-linux-x64`,
  },
  {
    name: "Linux",
    detail: "ARM64, for a Raspberry Pi and similar boards",
    href: `${SERVER_DOWNLOAD}/sharkord-linux-arm64`,
  },
];

const desktopTargets = [
  { name: "Windows", detail: "64-bit installer", pattern: /win-x64\.exe$/ },
  { name: "macOS", detail: "Apple silicon", pattern: /mac-arm64\.dmg$/ },
  { name: "macOS", detail: "Intel", pattern: /mac-x64\.dmg$/ },
  {
    name: "Linux",
    detail: "AppImage, x64",
    pattern: /linux-x86_64\.AppImage$/,
  },
];

function PlatformList({ platforms }: { platforms: Platform[] }) {
  return (
    <ul className="divide-y divide-border/60">
      {platforms.map((platform) => (
        <li
          key={`${platform.name}-${platform.detail}`}
          className="flex items-center justify-between gap-4 py-4"
        >
          <div>
            <p className="text-sm font-medium">{platform.name}</p>
            <p className="text-sm text-muted-foreground">{platform.detail}</p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link
              href={platform.href}
              aria-label={`Download for ${platform.name}, ${platform.detail}`}
            >
              <Download className="h-4 w-4" />
              Download
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  );
}

export function DownloadSection({
  stats,
  desktop,
}: {
  stats: RepoStats;
  desktop: DesktopRelease;
}) {
  // falls back to the release page when github could not be reached at build time
  const desktopPlatforms = desktopTargets.map((target) => {
    const asset = desktop.assets.find((item) => target.pattern.test(item.name));

    return {
      name: target.name,
      detail: target.detail,
      href: asset?.url ?? DESKTOP_RELEASES,
    };
  });

  return (
    <section
      id="download"
      className="scroll-mt-16 border-b border-border/40 py-24 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Download Sharkord
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            The app to join, the server to host. Both free, both open source.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-semibold">Desktop app</h3>
              {desktop.version ? (
                <span className="font-mono text-xs text-muted-foreground">
                  {desktop.version}
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              For everyone joining a server. The browser works too, the app
              gives the best experience.
            </p>
            <div className="mt-4">
              <PlatformList platforms={desktopPlatforms} />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              A mobile app is planned.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-semibold">Server</h3>
              {stats.version ? (
                <span className="font-mono text-xs text-muted-foreground">
                  {stats.version}
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              For whoever hosts. One file, nothing else to install.
            </p>
            <div className="mt-4">
              <PlatformList platforms={serverPlatforms} />
            </div>
            <Link
              href="/docs/introduction/installation/docker"
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Prefer Docker? Use sharkord/sharkord
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
