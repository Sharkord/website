import { ComparisonSection } from "@/components/comparison-section";
import { CTASection } from "@/components/cta-section";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { InstallSection } from "@/components/install-section";
import { PluginsSection } from "@/components/plugins-section";
import { ScopeSection } from "@/components/scope-section";
import { ShowcaseSection } from "@/components/showcase-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sharkord.com/#organization",
      name: "Sharkord",
      url: "https://sharkord.com",
      logo: "https://sharkord.com/logo.webp",
      sameAs: [
        "https://github.com/Sharkord",
        "https://x.com/sharkordapp",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://sharkord.com/#website",
      name: "Sharkord",
      url: "https://sharkord.com",
      publisher: { "@id": "https://sharkord.com/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://sharkord.com/#software",
      name: "Sharkord",
      applicationCategory: "CommunicationApplication",
      operatingSystem: "Linux, macOS, Windows, Docker",
      url: "https://sharkord.com",
      description:
        "Open source voice, video, screen sharing and text chat for small groups, self-hosted on your own server.",
      license: "https://opensource.org/licenses/MIT",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      downloadUrl: "https://github.com/Sharkord/sharkord/releases/latest",
      softwareHelp: {
        "@type": "CreativeWork",
        url: "https://sharkord.com/docs",
      },
      author: { "@id": "https://sharkord.com/#organization" },
    },
  ],
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <InstallSection />
        <PluginsSection />
        <ComparisonSection />
        <ScopeSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
