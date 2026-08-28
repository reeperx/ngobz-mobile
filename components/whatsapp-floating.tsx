"use client";

import * as React from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";

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

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Scroll to top button directly ABOVE the WhatsApp bubble */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="h-11 w-11 rounded-full bg-card/90 backdrop-blur-md border border-border text-foreground shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-accent hover:border-primary/50 cursor-pointer active:scale-95 animate-in fade-in zoom-in"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Floating WhatsApp chat bubble - ICON ONLY (no text) */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20NGOBZ%20Mobile,%20I%20would%20like%20to%20inquire%20about%20event%20rentals.`}
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
  );
}
