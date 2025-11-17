import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/sharkord"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
              target="_blank"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://x.com/sharkordapp"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
              target="_blank"
            >
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div className="pt-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sharkord</p>
        </div>
      </div>
    </footer>
  );
}
