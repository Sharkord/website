import { generate } from "fumadocs-ui/og";
import { ImageResponse } from "next/og";

export const alt = "Sharkord, self-hosted voice and text chat";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    generate({
      title: "Your conversations. Your data. Your control.",
      description:
        "Open-source voice, video, screen sharing and chat, running on your own server.",
      site: "Sharkord",
    }),
    size,
  );
}
