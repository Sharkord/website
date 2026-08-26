import { Button } from "@/components/ui/button";
import { BookOpen, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between gap-4 px-4 sm:h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.webp"
            alt=""
            width={32}
            height={32}
            className="size-8 sm:size-9"
          />
          <span className="text-lg font-semibold sm:text-xl">Sharkord</span>
        </Link>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button variant="ghost" size="icon-sm" asChild>
            <Link href="/docs" aria-label="Documentation">
              <BookOpen className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon-sm" asChild>
            <Link
              href="https://github.com/Sharkord/sharkord"
              target="_blank"
              aria-label="Sharkord on GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="https://demo.sharkord.com" target="_blank">
              Live demo
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
