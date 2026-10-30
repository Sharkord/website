"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const screenshots = [
  {
    src: "/screenshots/watch-party.png",
    alt: "A football match playing on a shared screen while the people in the voice room watch",
    title: "Watch something together",
    description:
      "Share your screen with the sound, put your cameras on, and hang out like you are in the same room.",
  },
  {
    src: "/screenshots/screen-share.png",
    alt: "Two webcams and a game being shared in a voice room",
    title: "Play together",
    description:
      "Cameras on, game on screen, everyone in the same room. Crystal clear quality.",
  },
  {
    src: "/screenshots/music-bot.png",
    alt: "A music bot playing a song in the voice room, with its queue open",
    title: "Extend with plugins",
    description:
      "Extend the core experience with plugins like music bots, soundboards and more.",
  },
  {
    src: "/screenshots/chat.png",
    alt: "The chat view, with rooms down the side, a conversation in the middle and people online on the right",
    title: "Rooms for whatever you are into",
    description:
      "Replies, reactions, your own emojis and a list of who is around. It works the way you already expect.",
  },
  {
    src: "/screenshots/settings-general.png",
    alt: "The settings screen, showing the server name, description and a few switches",
    title: "Under your control",
    description:
      "Name it, decide who can join, hand out roles. The server is yours, you are in control.",
  },
  {
    src: "/screenshots/settings-emojis.png",
    alt: "A grid of custom emojis uploaded to the server",
    title: "Your own emojis",
    description:
      "Upload the ones your group actually uses, GIFs included, and react with them anywhere. No limits, no restrictions.",
  },
  {
    src: "/screenshots/plugin-marketplace.png",
    alt: "The plugin marketplace inside server settings, with a soundboard, live TV and more to install",
    title: "Plugins in a couple of clicks",
    description:
      "Browse what the community made and install it straight from your settings. No files to copy around.",
  },
  {
    src: "/screenshots/settings-roles.png",
    alt: "A role being edited, with a switch for every permission",
    title: "Roles that do what they say",
    description:
      "Who can talk, post, share a screen or change things. One switch each, nothing hidden.",
  },
  {
    src: "/screenshots/settings-users.png",
    alt: "The list of people on the server, with their roles and when they last joined",
    title: "Know who is around",
    description:
      "Everyone on your server in one list, with their roles, when they joined and whether they are online.",
  },
  {
    src: "/screenshots/settings-storage.png",
    alt: "Storage settings allowing 2 GB uploads and unlimited space per user",
    title: "Share freely",
    description:
      "Set your own upload limits and quotas. If your disk can hold it, your friends can send it.",
  },
  {
    src: "/screenshots/devices.png",
    alt: "Screen sharing settings set to 1440p, 60 fps and 30 Mbit/s",
    title: "Sharp picture, no subscription",
    description:
      "Share your screen at up to 4k 60fps, no subscription required. Everything stays sharp for everyone.",
  },
  {
    src: "/screenshots/profile.png",
    alt: "A profile with an avatar, a banner, a profile colour and a bio",
    title: "Make your profile yours",
    description:
      "Pick an avatar, a banner, a colour and a bio, so people know it is you.",
  },
];

export function ShowcaseSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (zoomedIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setZoomedIndex(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [zoomedIndex]);

  return (
    <section
      id="screenshots"
      className="relative overflow-hidden border-b border-border/40 py-24 md:py-28"
    >
      <div className="container relative mx-auto px-4">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            See Sharkord in Action
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            A glimpse into Sharkord&apos;s sleek interface and powerful
            features.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="relative">
            <div
              ref={emblaRef}
              className="overflow-hidden rounded-2xl border border-border/50 bg-card/70 shadow-sm"
            >
              <div className="flex">
                {screenshots.map((shot, index) => (
                  <figure
                    key={shot.src}
                    className="min-w-0 shrink-0 grow-0 basis-full"
                  >
                    <button
                      type="button"
                      onClick={() => setZoomedIndex(index)}
                      className="block w-full cursor-zoom-in bg-black/85"
                      aria-label={`Zoom screenshot: ${shot.title}`}
                    >
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        width={2560}
                        height={1281}
                        className="h-auto w-full object-contain"
                        sizes="(max-width: 768px) 100vw, 80vw"
                        priority={index === 0}
                      />
                    </button>

                    <figcaption className="space-y-1 border-t border-border/50 px-5 py-4 md:px-6">
                      <h3 className="text-lg font-semibold">{shot.title}</h3>
                      <p className="text-sm text-muted-foreground md:text-base">
                        {shot.description}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={scrollPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-border/50 bg-background/85 p-2 text-foreground shadow-sm backdrop-blur transition hover:bg-background disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={scrollNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-border/50 bg-background/85 p-2 text-foreground shadow-sm backdrop-blur transition hover:bg-background disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Next screenshot"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-3 flex items-center justify-center">
            {screenshots.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => emblaApi?.scrollTo(index)}
                className="flex h-6 items-center justify-center px-2"
                aria-label={`Go to screenshot ${index + 1}`}
                aria-current={index === selectedIndex}
              >
                <span
                  className={`block h-2.5 rounded-full transition-all ${
                    index === selectedIndex
                      ? "w-7 bg-primary"
                      : "w-2.5 bg-muted-foreground/35"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {zoomedIndex !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setZoomedIndex(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full border border-white/25 bg-black/60 px-3 py-1 text-sm text-white transition hover:bg-black"
            onClick={() => setZoomedIndex(null)}
            aria-label="Close zoomed screenshot"
          >
            Close
          </button>

          <div
            className="relative max-h-[92vh] max-w-[96vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={screenshots[zoomedIndex].src}
              alt={screenshots[zoomedIndex].alt}
              width={2560}
              height={1281}
              className="max-h-[92vh] w-auto rounded-xl border border-white/20 object-contain"
              sizes="96vw"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
