import { Header } from "@/components/header";
import { HeroCard } from "@/components/hero-card";
import { TrustLogos } from "@/components/trust-logos";
import { FeatureGrid } from "@/components/feature-grid";
import { ServicesNumbered } from "@/components/services-numbered";
import { QuoteCalculator } from "@/components/quote-calculator";
import { CaseStudySlider } from "@/components/case-study-slider";
import { FAQSection } from "@/components/faq-section";
import { DarkFooter } from "@/components/dark-footer";
import { WhatsAppFloating } from "@/components/whatsapp-floating";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-emerald-500/20 selection:text-emerald-600">
      <Header />
      <main className="flex-1 space-y-4">
        <HeroCard />
        <TrustLogos />
        <FeatureGrid />
        <ServicesNumbered />
        <QuoteCalculator />
        <CaseStudySlider />
        <FAQSection />
      </main>
      <DarkFooter />
      <WhatsAppFloating />
    </div>
  );
}
