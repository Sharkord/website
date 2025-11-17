import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const _geist = Geist({ subsets: ["latin"] });
const _geist_mono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
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

console.log(process.env.NODE_ENV);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {process.env.NODE_ENV !== "development" && (
          <script
            defer
            src="https://eye.sharkord.com/hyperion.js"
            data-website-id="0f06df6e-b77f-4cd5-8065-6d819bcd1381"
          ></script>
        )}
      </head>
      <body className={cn("font-sans antialiased")}>{children}</body>
    </html>
  );
}
