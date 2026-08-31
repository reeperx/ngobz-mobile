import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { TrustLogos } from "@/components/trust-logos";
import { FeatureGrid } from "@/components/feature-grid";
import { ShowcaseGallery } from "@/components/showcase-gallery";
import { CaseStudySlider } from "@/components/case-study-slider";
import { FAQSection } from "@/components/faq-section";
import { DarkFooter } from "@/components/dark-footer";
import { WhatsAppFloating } from "@/components/whatsapp-floating";
import { QuoteModal } from "@/components/quote-modal";
import { JsonLd } from "@/components/seo/json-ld";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-blue-500/20 selection:text-blue-600">
      <JsonLd />
      <Header />
      <main className="flex-1 space-y-4">
        <HeroSection />
        <TrustLogos />
        <FeatureGrid />
        <ShowcaseGallery />
        <CaseStudySlider />
        <FAQSection />
      </main>
      <DarkFooter />
      <WhatsAppFloating />
      <QuoteModal />
    </div>
  );
}
