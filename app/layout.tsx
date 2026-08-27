import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { RootProvider } from "fumadocs-ui/provider/next";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

const title = "Sharkord, self-hosted voice and text chat";
const description =
  "Open source voice, video, screen sharing and text chat for small groups, running on your own server. One binary, one data directory, no accounts anywhere but yours.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sharkord.com"),
  title: {
    default: title,
    template: "%s | Sharkord",
  },
  description,
  applicationName: "Sharkord",
  keywords: [
    "self-hosted chat",
    "open source Discord alternative",
    "TeamSpeak alternative",
    "voice chat server",
    "WebRTC",
    "mediasoup",
  ],
  openGraph: {
    type: "website",
    url: "https://sharkord.com",
    siteName: "Sharkord",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    site: "@sharkordapp",
    title,
    description,
  },
  icons: {
    icon: [
      {
        url: "logo.webp",
        type: "image/webp",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV !== "development" && (
          <script
            defer
            src="https://eye.sharkord.com/hyperion.js"
            data-website-id="0f06df6e-b77f-4cd5-8065-6d819bcd1381"
          ></script>
        )}
      </head>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "font-sans antialiased flex flex-col min-h-screen",
        )}
      >
        <RootProvider theme={{ enableColorScheme: false }}>{children}</RootProvider>
      </body>
    </html>
  );
}
