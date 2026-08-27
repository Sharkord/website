import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { ArrowRight, Music, Radio } from "lucide-react";
import Link from "next/link";

const PLUGIN_SAMPLE = `import { createRegisterCommand } from "@sharkord/plugin-sdk";

export const onLoad = async (ctx) => {
  const registerCommand = createRegisterCommand(ctx);

  registerCommand("hello", { description: "Says hello" }, async (invoker) =>
    \`Hello, user \${invoker.userId}\`,
  );

  ctx.events.on("user:joined", ({ username }) => {
    ctx.messages.send(1, \`<p>\${username} just joined</p>\`);
  });
};`;

const examples = [
  {
    icon: Music,
    name: "Music bot",
    body: "Queue up something and let it play in the voice room while you talk over it.",
  },
  {
    icon: Radio,
    name: "Live TV",
    body: "Put a channel or a stream on for everyone in the room at once.",
  },
];

export function PluginsSection() {
  return (
    <section id="plugins" className="border-b border-border/40 py-24 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Bare by default, yours by the evening
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              We keep the app small so it stays fast and easy to understand.
              Anything else you want, you add in a couple of clicks from a
              growing list of free plugins.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {examples.map((example) => {
                const Icon = example.icon;

                return (
                  <div
                    key={example.name}
                    className="rounded-xl border border-border/60 bg-card/40 p-5 transition-colors hover:bg-card/70"
                  >
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    <h3 className="mt-3 text-sm font-semibold">
                      {example.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {example.body}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="outline" asChild>
                <Link href="https://github.com/Sharkord/plugins" target="_blank">
                  See what people made
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/docs/plugins/overview">Build your own</Link>
              </Button>
            </div>
          </div>

          <div className="lg:pl-4">
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              Missing something? If you can write a little TypeScript, you can
              build it yourself. This is a whole working plugin:
            </p>
            <CodeBlock label="my-plugin" meta="TypeScript" code={PLUGIN_SAMPLE} />
          </div>
        </div>
      </div>
    </section>
  );
}
