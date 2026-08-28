import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { KeyBenefits } from "@/components/key-benefits";
import { HowItWorks } from "@/components/how-it-works";
import { ServicesSection } from "@/components/services-section";
import { QuoteCalculator } from "@/components/quote-calculator";
import { SafetyBanner } from "@/components/safety-banner";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CtaBanner } from "@/components/cta-banner";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { WhatsAppFloating } from "@/components/whatsapp-floating";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-1 space-y-4">
        <HeroSection />
        <KeyBenefits />
        <HowItWorks />
        <ServicesSection />
        <QuoteCalculator />
        <SafetyBanner />
        <TestimonialsSection />
        <CtaBanner />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
