"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

export function AccordionItem({ title, children }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-fd-border last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-2 py-4 text-left font-medium text-fd-foreground transition-colors hover:text-fd-primary"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-fd-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {/* Content is always in the DOM for SEO, visually hidden when collapsed */}
      <div
        className={`overflow-hidden transition-all duration-200 ${open ? "max-h-500 pb-4 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="text-sm leading-7 text-fd-muted-foreground [&_a]:text-fd-primary [&_a]:underline [&_p:last-child]:mb-0">
          {children}
        </div>
      </div>
    </div>
  );
}

export interface AccordionProps {
  children: ReactNode;
}

export function Accordion({ children }: AccordionProps) {
  return (
    <div className="my-6 rounded-lg border border-fd-border">
      <div className="px-4">{children}</div>
    </div>
  );
}
