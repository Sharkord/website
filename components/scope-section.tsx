import Link from "next/link";

export function ScopeSection() {
  return (
    <section id="scope" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Built for a group, not a crowd
          </h2>
          <p className="mt-8 text-2xl leading-snug text-foreground/90 text-pretty sm:text-3xl">
            Not for thousands of strangers. For your friends, your family and
            the people you game with, in a room that is always there with no one watching.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            <Link
              href="/docs/common-questions"
              className="text-foreground/80 underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Will it handle your group?
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
