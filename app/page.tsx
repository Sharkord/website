import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ComparisonSection } from "@/components/comparison-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { CommunityFocusSection } from "@/components/focus-section";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ComparisonSection />
        <CommunityFocusSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
