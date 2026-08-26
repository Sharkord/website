import { Github, Heart, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Start",
    links: [
      { label: "Quick start", href: "/docs/introduction/quick-start" },
      { label: "Installation", href: "/docs/introduction/installation/docker" },
      { label: "HTTPS setup", href: "/docs/https/why" },
      { label: "Free subdomain", href: "/docs/domains" },
    ],
  },
  {
    title: "Run it",
    links: [
      { label: "Configuration", href: "/docs/configuration" },
      { label: "Roles and permissions", href: "/docs/administration/roles-permissions" },
      { label: "Updating", href: "/docs/updating" },
      { label: "Troubleshooting", href: "/docs/troubleshooting" },
    ],
  },
  {
    title: "Build",
    links: [
      { label: "Plugin docs", href: "/docs/plugins/overview" },
      { label: "Plugin marketplace", href: "https://github.com/Sharkord/plugins" },
      { label: "Contributing", href: "/docs/contributing" },
      { label: "License", href: "/docs/license" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="py-14">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo.webp"
                alt=""
                width={28}
                height={28}
                className="size-7"
              />
              <span className="font-semibold">Sharkord</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A self-hosted place for your group to talk. Open source, MIT
              licensed, currently in alpha.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Link
                href="https://github.com/Sharkord/sharkord"
                target="_blank"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/sharkordapp"
                target="_blank"
                aria-label="Sharkord on X"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://ko-fi.com/B0B71U3476"
                target="_blank"
                aria-label="Support Sharkord on Ko-fi"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Heart className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold">{column.title}</h3>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border/40 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sharkord</p>
        </div>
      </div>
    </footer>
  );
}
