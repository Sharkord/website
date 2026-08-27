"use client";

import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export interface CodeBlockProps {
  code: string;
  label?: string;
  meta?: string;
  className?: string;
}

function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard is unavailable outside secure contexts, nothing to do
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      className="rounded-md border border-border/60 bg-background/80 p-1.5 text-muted-foreground transition hover:border-border hover:text-foreground"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-foreground" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  );
}

export function CodeBlock({ code, label, meta, className }: CodeBlockProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border/60 bg-card/60",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-border/60 px-3 py-2">
        <div className="flex min-w-0 items-baseline gap-2">
          {label && (
            <span className="truncate text-xs font-medium text-foreground">
              {label}
            </span>
          )}
          {meta && (
            <span className="truncate font-mono text-[11px] text-muted-foreground">
              {meta}
            </span>
          )}
        </div>
        <CopyButton code={code} />
      </div>

      <pre className="overflow-x-auto px-4 py-3.5 text-[13px] leading-6">
        <code className="font-mono text-muted-foreground">{code}</code>
      </pre>
    </div>
  );
}
