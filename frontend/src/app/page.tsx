import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";
import { MissionStatsSection } from "@/components/home/mission-stats-section";
import { NewsletterSection } from "@/components/shared/newsletter-section";
import { SiteLayout } from "@/components/shared/site-layout";

export default function HomePage() {
  return (
    <SiteLayout>
      <div className="pattern-bg">
        <HeroSection />
        <FeaturesSection />
        <MissionStatsSection />
        <NewsletterSection />
      </div>
    </SiteLayout>
  );
}
