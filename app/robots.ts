import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // generated plain-text mirrors of the docs, useful to fetch, pointless to index
        disallow: ["/api/", "/llms.mdx/"],
      },
    ],
    sitemap: "https://sharkord.com/sitemap.xml",
    host: "https://sharkord.com",
  };
}
