"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MessageCircle,
  Calculator,
  Check,
  Snowflake,
  Flame,
  Bath,
  Loader2,
} from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "@/lib/business-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Global helper so any button can trigger the modal easily
export function openQuoteModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-quote-modal"));
  }
}

export function QuoteModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
  const [fullName, setFullName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [eventDate, setEventDate] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Listen for global open event
  React.useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsSubmitting(false);
    };
    window.addEventListener("open-quote-modal", handleOpen);
    return () => window.removeEventListener("open-quote-modal", handleOpen);
  }, []);

  // Close on Escape key & manage body scroll
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isSubmitting) setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isSubmitting]);

  const toggleItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceNames = SERVICES.filter((s) => selectedItems.includes(s.id))
      .map((s) => s.name)
      .join(", ");

    const message = `*NEW EVENT EQUIPMENT INQUIRY - NGOBZ MOBILE*
----------------------------------------
*Client Name:* ${fullName || "Not specified"}
*Contact Number:* ${phone || "Not specified"}
*Event Date:* ${eventDate || "To be confirmed"}
*Event Location / Suburb:* ${location || "Pretoria / Gauteng"}
*Selected Equipment:* ${serviceNames || "Custom Equipment Package"}
*Special Notes / Timing:* ${notes || "None"}
----------------------------------------
_Please confirm availability and quotation for prompt 06:00 AM delivery._`;

    const encoded = encodeURIComponent(message);

    setTimeout(() => {
      window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`, "_blank");
      setIsSubmitting(false);
      setIsOpen(false);
      // Reset fields
      setSelectedItems([]);
      setFullName("");
      setPhone("");
      setEventDate("");
      setLocation("");
      setNotes("");
    }, 600);
  };

  const getServiceIcon = (id: string) => {
    if (id.includes("cooler")) return <Snowflake className="h-4 w-4 text-cyan-500" />;
    if (id.includes("warmer")) return <Flame className="h-4 w-4 text-amber-500" />;
    return <Bath className="h-4 w-4 text-emerald-500" />;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !isSubmitting && setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="relative w-full max-w-lg bg-card border border-border/80 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto text-left"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-border/60 bg-accent/20">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Calculator className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h2 id="quote-modal-title" className="text-base sm:text-lg font-bold text-foreground leading-tight">
                    Instant Quote &amp; Booking
                  </h2>
                  <p className="text-[11px] text-muted-foreground">
                    Pretoria &amp; Gauteng • Fast WhatsApp Confirmation
                  </p>
                </div>
              </div>

              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full bg-muted hover:bg-accent text-muted-foreground hover:text-foreground flex items-center justify-center transition-colors cursor-pointer disabled:opacity-50"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleWhatsAppBooking} className="p-5 sm:p-6 space-y-4">
              {/* Step 1: Equipment Selection */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground">
                  1. Select Equipment to Hire:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICES.map((s) => {
                    const isSelected = selectedItems.includes(s.id);
                    return (
                      <button
                        type="button"
                        key={s.id}
                        disabled={isSubmitting}
                        onClick={() => toggleItem(s.id)}
                        className={`flex items-center justify-between p-2.5 rounded-xl border text-left transition-all cursor-pointer disabled:opacity-60 ${
                          isSelected
                            ? "border-blue-600 bg-blue-500/10 shadow-xs ring-1 ring-blue-500/20"
                            : "border-border/70 bg-background/60 hover:bg-accent/40"
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="shrink-0">{getServiceIcon(s.id)}</div>
                          <span className="text-xs font-bold text-foreground truncate">
                            {s.name}
                          </span>
                        </div>
                        <div
                          className={`h-4 w-4 rounded-full flex items-center justify-center border shrink-0 ml-2 ${
                            isSelected
                              ? "bg-blue-600 border-blue-600 text-white"
                              : "border-muted-foreground/30 bg-background"
                          }`}
                        >
                          {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Client & Event Details */}
              <div className="space-y-2.5 pt-2 border-t border-border/50">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground">
                  2. Your Details:
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-muted-foreground mb-1">
                      Full Name *
                    </label>
                    <Input
                      required
                      disabled={isSubmitting}
                      placeholder="e.g. Gift Wandile"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="h-9 px-3 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-muted-foreground mb-1">
                      WhatsApp / Phone *
                    </label>
                    <Input
                      required
                      disabled={isSubmitting}
                      placeholder="e.g. 076 707 6120"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-9 px-3 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-muted-foreground mb-1">
                      Event Date *
                    </label>
                    <Input
                      required
                      disabled={isSubmitting}
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="h-9 px-3 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-muted-foreground mb-1">
                      Venue Location *
                    </label>
                    <Input
                      required
                      disabled={isSubmitting}
                      placeholder="e.g. Soshanguve, Pretoria"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="h-9 px-3 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-muted-foreground mb-1">
                    Special Notes / Timing (Optional)
                  </label>
                  <Textarea
                    disabled={isSubmitting}
                    placeholder="Guest count, delivery time preference..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    className="text-xs px-3 py-2 resize-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-1">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm gap-2 shadow-lg shadow-blue-600/25 cursor-pointer disabled:opacity-80"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Opening WhatsApp Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="h-4 w-4" />
                      <span>Send Request to Wandile via WhatsApp</span>
                    </>
                  )}
                </Button>
                <p className="text-[10px] text-center text-muted-foreground mt-1.5">
                  Mon-Sun: 06:00 - 20:00 • Fast confirmation • Pretoria &amp; Gauteng
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
