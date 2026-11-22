import { Button } from "@/components/ui/button";
import { readSupporters, tierSupporters } from "@/lib/supporters";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { connection } from "next/server";
import Link from "next/link";

const KOFI_URL = "https://ko-fi.com/B0B71U3476";

function TierLabel({ children }: { children: string }) {
  return (
    <h3 className="mb-3 text-xs font-normal uppercase tracking-widest text-muted-foreground/70">
      {children}
    </h3>
  );
}

function Pills({ names, className }: { names: string[]; className: string }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {names.map((name) => (
        <li
          key={name}
          className={cn("rounded-full border border-border", className)}
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

export async function SupportersSection() {
  // the list lives on the server's persistent storage, so it has to be read per request and never baked in at build
  await connection();

  const supporters = await readSupporters();
  const { podium, champions, rest } = tierSupporters(supporters);

  return (
    <section
      id="supporters"
      className="border-b border-border/40 py-24 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
            Kept going by its community
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Sharkord is free and always will be. These are the public supporters
            on Ko-fi, and a big thank you as well to everyone who chose to
            support anonymously.
          </p>
        </div>

        {podium.length > 0 && (
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border p-6 sm:p-8">
            <TierLabel>Top supporters</TierLabel>
            <ol className="grid gap-3 sm:grid-cols-3">
              {podium.map((name, index) => (
                <li
                  key={name}
                  className={cn(
                    "flex flex-col gap-3 rounded-xl border px-5 py-4",
                    index === 0
                      ? "border-transparent bg-primary text-primary-foreground"
                      : "border-border bg-card",
                  )}
                >
                  <span className="text-sm opacity-60">#{index + 1}</span>
                  <span className="truncate text-2xl font-semibold tracking-tight">
                    {name}
                  </span>
                </li>
              ))}
            </ol>

            {champions.length > 0 && (
              <div className="mt-8">
                <TierLabel>Champions</TierLabel>
                <Pills
                  names={champions}
                  className="bg-card px-4 py-1.5 text-base"
                />
              </div>
            )}

            {rest.length > 0 && (
              <div className="mt-8">
                <TierLabel>Supporters</TierLabel>
                <Pills
                  names={rest}
                  className="px-3 py-1 text-sm text-muted-foreground"
                />
              </div>
            )}
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <Button size="lg" variant="outline" asChild>
            <Link href={KOFI_URL} target="_blank">
              <Heart className="h-4 w-4" />
              Support Sharkord on Ko-fi
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
