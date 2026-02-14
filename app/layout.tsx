import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { RootProvider } from "fumadocs-ui/provider/next";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sharkord.com"),
  title: "Sharkord - Open Source Self-Hosted Chat Platform",
  description:
    "Privacy-first, self-hosted real-time chat platform. Own your data, control your conversations.",
  icons: {
    icon: [
      {
        url: "logo.webp",
        type: "image/webp",
      },
    ],
  },
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
