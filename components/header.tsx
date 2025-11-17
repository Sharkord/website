import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.webp" alt="Sharkord Logo" width={48} height={48} />
          <span className="text-xl font-bold">Sharkord</span>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://github.com/sharkord/sharkord" target="_blank">
              GitHub
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="https://demo.sharkord.com" target="_blank">
              Demo
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="#get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
