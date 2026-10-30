/* eslint-disable @next/next/no-img-element -- screenshots come from any host a plugin author picks, so next/image cannot whitelist them */
"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export function PluginScreenshots({
  name,
  screenshots,
}: {
  name: string;
  screenshots: string[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const hasMany = screenshots.length > 1;

  return (
    <div className="mt-5">
      <div className="relative">
        <div
          ref={emblaRef}
          className="overflow-hidden rounded-lg border border-border/60 bg-neutral-950"
        >
          <div className="flex">
            {screenshots.map((src, index) => (
              <a
                key={src}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="block min-w-0 shrink-0 grow-0 basis-full cursor-zoom-in"
              >
                <img
                  src={src}
                  alt={`${name} screenshot ${index + 1}`}
                  loading="lazy"
                  className="aspect-video w-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {hasMany ? (
          <>
            <button
              type="button"
              onClick={scrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-border/50 bg-background/85 p-1.5 text-foreground shadow-sm backdrop-blur transition hover:bg-background"
              aria-label={`Previous ${name} screenshot`}
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-border/50 bg-background/85 p-1.5 text-foreground shadow-sm backdrop-blur transition hover:bg-background"
              aria-label={`Next ${name} screenshot`}
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </>
        ) : null}
      </div>

      {hasMany ? (
        <div className="mt-2 flex items-center justify-center">
          {screenshots.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              className="flex h-5 items-center justify-center px-1.5"
              aria-label={`Go to ${name} screenshot ${index + 1}`}
              aria-current={index === selectedIndex}
            >
              <span
                className={`block h-1.5 rounded-full transition-all ${
                  index === selectedIndex
                    ? "w-5 bg-primary"
                    : "w-1.5 bg-muted-foreground/35"
                }`}
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
