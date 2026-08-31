"use client";

import * as React from "react";
import { MessageCircle, ArrowUp, PhoneCall, Calculator } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";
import { openQuoteModal } from "@/components/quote-modal";

export function WhatsAppFloating() {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappHref = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hi Wandile, I would like to inquire about event equipment rental in Pretoria."
  )}`;

  return (
    <>
      {/* Desktop Floating Action Group */}
      <div className="fixed bottom-6 right-6 z-50 hidden sm:flex flex-col items-center gap-3">
        {/* Scroll to Top */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="h-11 w-11 rounded-full bg-card/90 backdrop-blur-md border border-border text-foreground shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-accent hover:border-primary/50 cursor-pointer active:scale-95 animate-in fade-in zoom-in"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}

        {/* Floating WhatsApp chat bubble */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-14 w-14 rounded-full bg-emerald-600 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-emerald-500 hover:shadow-emerald-600/40 cursor-pointer active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-7 w-7 fill-white" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400" />
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Dock */}
      <div className="fixed bottom-3 inset-x-3 z-40 sm:hidden">
        <div className="bg-card/95 backdrop-blur-xl border border-border/80 rounded-2xl p-2 shadow-2xl flex items-center gap-2">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex-1 py-2.5 rounded-xl bg-muted text-foreground font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
          >
            <PhoneCall className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            <span>Call</span>
          </a>

          <button
            onClick={openQuoteModal}
            className="flex-[1.4] py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-blue-600/30 active:scale-95 transition-all cursor-pointer"
          >
            <Calculator className="h-3.5 w-3.5" />
            <span>Quote</span>
          </button>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-600/30 active:scale-95 transition-transform"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
