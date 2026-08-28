import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { QuoteCalculator } from "@/components/quote-calculator";
import { CoverageSection } from "@/components/coverage-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { WhatsAppFloating } from "@/components/whatsapp-floating";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <QuoteCalculator />
        <CoverageSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
