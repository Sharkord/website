import { cn } from "@/lib/utils";
import Image from "next/image";

// every screenshot is a full 2560x1281 capture of the dark app, framed dark in both themes
// so it never looks like a hole in the light one
export function Screenshot({
  src,
  alt,
  sizes,
  priority,
  className,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border/60 bg-neutral-950 shadow-2xl shadow-black/40 ring-1 ring-black/5",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={2560}
        height={1281}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}
