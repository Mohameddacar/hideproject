import { HeritageTranslator } from "@/components/tools/heritage-translator";
import { PhotoRestorationSection } from "@/components/tools/photo-restoration-section";
import { SectionDivider } from "@/components/shared/section-divider";
import { SiteLayout } from "@/components/shared/site-layout";

export default function PhotoRestorationPage() {
  return (
    <SiteLayout showSearch={false}>
      <PhotoRestorationSection />
      <SectionDivider />
      <HeritageTranslator />
    </SiteLayout>
  );
}
