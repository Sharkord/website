import { source } from "@/lib/source";
import type { MetadataRoute } from "next";

const BASE_URL = "https://sharkord.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const docs = source
    .getPages()
    // `/docs` redirects to the quick start, so it is not a page to index
    .filter((page) => page.url !== "/docs")
    .map((page) => ({
      url: `${BASE_URL}${page.url}`,
      changeFrequency: "weekly" as const,
      priority: page.url.startsWith("/docs/introduction") ? 0.8 : 0.6,
    }));

  return [
    {
      url: BASE_URL,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...docs,
  ];
}
