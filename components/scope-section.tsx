import Link from "next/link";

export function ScopeSection() {
  return (
    <section id="scope" className="border-b border-border/40 py-24 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-xl border border-border/60 bg-card/40 p-8 md:p-12">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Built for a group, not a crowd
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            Discord is built to hold rooms of thousands of strangers. Sharkord
            is not trying to be that, and never will be. It is for the people
            you would actually invite round: your family, your friends, the
            group you game with, the handful of you who work together.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            No public directory, no growing an audience, no moderating
            newcomers you have never met. Just a room that is always there when
            you want it.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Wondering whether it will handle your group?{" "}
            <Link
              href="/docs/common-questions"
              className="text-foreground/80 underline-offset-4 hover:text-foreground hover:underline"
            >
              We answer that here
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
