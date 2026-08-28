"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MessageCircle,
  Calculator,
  Check,
  Calendar,
  MapPin,
  User,
  Phone,
  Snowflake,
  Flame,
  Bath,
} from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "@/lib/business-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Global custom event helper so any button can trigger the modal easily
export function openQuoteModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-quote-modal"));
  }
}

export function QuoteModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState<string[]>([
    "mobile-coolers",
    "mobile-warmers",
  ]);
  const [fullName, setFullName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [eventDate, setEventDate] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [notes, setNotes] = React.useState("");

  // Listen for global open event
  React.useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-quote-modal", handleOpen);
    return () => window.removeEventListener("open-quote-modal", handleOpen);
  }, []);

  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
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
  }, [isOpen]);

  const toggleItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceNames = SERVICES.filter((s) => selectedItems.includes(s.id))
      .map((s) => s.name)
      .join(", ");

    const message = `*NEW BOOKING INQUIRY - NGOBZ MOBILE*
----------------------------------
*Name:* ${fullName || "Not provided"}
*Phone:* ${phone || "Not provided"}
*Event Date:* ${eventDate || "To be confirmed"}
*Location:* ${location || "Pretoria / Gauteng"}
*Selected Equipment:* ${serviceNames || "Custom Inquiry"}
*Notes:* ${notes || "None"}
----------------------------------
Please confirm availability and send a quotation.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`, "_blank");
    setIsOpen(false);
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
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-card border border-border/80 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto text-left"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-border/60 bg-accent/20">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Calculator className="h-5 w-5" />
                </div>
                <div>
                  <h2 id="quote-modal-title" className="text-lg sm:text-xl font-bold text-foreground">
                    Get Instant Quote &amp; Booking
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Pretoria &amp; Gauteng • Fast WhatsApp Confirmation
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleWhatsAppBooking} className="p-5 sm:p-6 space-y-5 max-h-[calc(85vh-100px)] overflow-y-auto">
              {/* Step 1: Equipment Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  1. Select Equipment to Hire:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICES.map((s) => {
                    const isSelected = selectedItems.includes(s.id);
                    return (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => toggleItem(s.id)}
                        className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? "border-blue-600 bg-blue-500/10 shadow-xs ring-1 ring-blue-500/20"
                            : "border-border/70 bg-card hover:bg-accent/40"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
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
              <div className="space-y-3 pt-1 border-t border-border/40">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  2. Your Event Details:
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-muted-foreground mb-1">
                      Full Name *
                    </label>
                    <Input
                      required
                      placeholder="e.g. Gift Wandile"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="h-10 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-muted-foreground mb-1">
                      WhatsApp / Phone *
                    </label>
                    <Input
                      required
                      placeholder="e.g. 076 707 6120"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-10 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-muted-foreground mb-1">
                      Event Date *
                    </label>
                    <Input
                      required
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="h-10 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-muted-foreground mb-1">
                      Venue Location / Suburb *
                    </label>
                    <Input
                      required
                      placeholder="e.g. Soshanguve, Pretoria"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="h-10 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-muted-foreground mb-1">
                    Special Notes / Timing (Optional)
                  </label>
                  <Textarea
                    placeholder="e.g. Estimated guest count, delivery time preference..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    className="text-xs"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm gap-2 shadow-lg shadow-blue-600/25 cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Send Request to Wandile via WhatsApp</span>
                </Button>
                <p className="text-[11px] text-center text-muted-foreground mt-2">
                  Fast confirmation • Mon-Sun: 06:00 - 20:00 • No obligations
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
