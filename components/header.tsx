import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BookOpen, Github } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Image
            src="/logo.webp"
            alt="Sharkord Logo"
            width={40}
            height={40}
            className="sm:w-12 sm:h-12"
          />
          <span className="text-lg sm:text-xl font-bold">Sharkord</span>
        </div>

        <nav className="flex items-center gap-1.5 sm:gap-3">
          <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
            <Link href="/docs">Docs</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild className="sm:hidden px-2">
            <Link href="/docs" aria-label="Docs">
              <BookOpen className="w-5 h-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
            <Link href="https://github.com/sharkord/sharkord" target="_blank">
              GitHub
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild className="sm:hidden px-2">
            <Link
              href="https://github.com/sharkord/sharkord"
              target="_blank"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
          </Button>
          <Button size="sm" asChild className="text-xs sm:text-sm px-2 sm:px-4">
            <Link href="https://demo.sharkord.com" target="_blank">
              Demo
            </Link>
          </Button>
          <Button size="sm" asChild className="text-xs sm:text-sm px-2 sm:px-4">
            <Link href="#get-started">Get Started</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
