"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Calculator,
  Check,
  Snowflake,
  Flame,
  Bath,
  Loader2,
  CheckCircle2,
  MapPin,
  Calendar,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { toast } from "sonner";
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

const POPULAR_TOWNSHIPS = [
  "Soshanguve",
  "Mabopane",
  "Hammanskraal",
  "Ga-Rankuwa",
  "Centurion",
  "Pretoria Central",
  "Mamelodi",
  "Akasia",
  "Winterveld"
];

const EVENT_TYPES = [
  "Wedding / Traditional Ceremony",
  "Memorial Service / Funeral",
  "Birthday / Milestone Party",
  "Corporate / Community Gathering",
];

export function QuoteModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState<string[]>(["mobile-coolers"]);
  const [eventType, setEventType] = React.useState("Wedding / Traditional Ceremony");
  const [fullName, setFullName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [eventDate, setEventDate] = React.useState("");
  const [location, setLocation] = React.useState("Soshanguve");
  const [notes, setNotes] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // Listen for global open event
  React.useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsSubmitting(false);
      setIsSubmitted(false);
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
*Client Name:* ${fullName || "Event Host"}
*Contact Number:* ${phone || "Not specified"}
*Event Type:* ${eventType}
*Event Date:* ${eventDate || "Upcoming Date"}
*Venue Location:* ${location || "Pretoria / Gauteng"}
*Selected Equipment:* ${serviceNames || "Custom Equipment Package"}
*Special Notes / Timing:* ${notes || "None"}
----------------------------------------
_Please confirm availability and quotation for prompt 06:00 AM delivery._`;

    const encoded = encodeURIComponent(message);

    setTimeout(() => {
      window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`, "_blank");
      setIsSubmitting(false);
      setIsSubmitted(true);

      toast.success("Quote Request Sent via WhatsApp!", {
        description: "Wandile will confirm equipment availability shortly.",
      });

      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
      }, 2500);
    }, 500);
  };

  const getServiceIcon = (id: string) => {
    if (id.includes("cooler")) return <Snowflake className="h-4 w-4 text-sky-500" />;
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-card border border-border/80 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto text-left"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-border/60 bg-accent/20">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <Calculator className="h-5 w-5" />
                </div>
                <div>
                  <h2 id="quote-modal-title" className="text-base sm:text-lg font-black text-foreground leading-tight">
                    Instant Quote &amp; Booking
                  </h2>
                  <p className="text-[11px] text-muted-foreground font-medium">
                    Pretoria &amp; Gauteng • Instant WhatsApp Dispatch
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

            {/* Form or Confirmation */}
            {isSubmitted ? (
              <div className="p-8 text-center space-y-3">
                <div className="h-14 w-14 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-black text-foreground">Thank You, {fullName || "Event Host"}!</h3>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
                  Your quote request has been generated and dispatched to Wandile on WhatsApp. We will confirm your date and package shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleWhatsAppBooking} className="p-5 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto">
                {/* Step 1: Equipment Selection */}
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground">
                    1. Select Equipment:
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {SERVICES.map((s) => {
                      const isSelected = selectedItems.includes(s.id);
                      return (
                        <button
                          type="button"
                          key={s.id}
                          disabled={isSubmitting}
                          onClick={() => toggleItem(s.id)}
                          className={`flex items-center justify-between p-3 rounded-2xl border text-left transition-all cursor-pointer disabled:opacity-60 ${
                            isSelected
                              ? "border-blue-600 bg-blue-500/10 shadow-xs ring-1 ring-blue-500/20"
                              : "border-border/70 bg-background/60 hover:bg-accent/40"
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="shrink-0">{getServiceIcon(s.id)}</div>
                            <div>
                              <span className="text-xs font-black text-foreground block truncate">
                                {s.name}
                              </span>
                              <span className="text-[10px] text-muted-foreground block truncate">
                                {s.tagline}
                              </span>
                            </div>
                          </div>
                          <div
                            className={`h-5 w-5 rounded-full flex items-center justify-center border shrink-0 ml-2 ${
                              isSelected
                                ? "bg-blue-600 border-blue-600 text-white"
                                : "border-muted-foreground/30 bg-background"
                            }`}
                          >
                            {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Event Type */}
                <div className="space-y-1.5 pt-2 border-t border-border/50">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground">
                    2. Event Type:
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full h-10 px-3 text-xs rounded-xl bg-background border border-border/80 text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    {EVENT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Step 3: Location Chips & Date */}
                <div className="space-y-2 pt-2 border-t border-border/50">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-foreground">
                    3. Delivery Area &amp; Date:
                  </label>

                  <div className="flex flex-wrap gap-1.5">
                    {POPULAR_TOWNSHIPS.map((town) => (
                      <button
                        type="button"
                        key={town}
                        onClick={() => setLocation(town)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer border ${
                          location === town
                            ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                            : "bg-muted/60 text-muted-foreground border-border/60 hover:text-foreground"
                        }`}
                      >
                        {town}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div>
                      <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-1">
                        Exact Suburb / Address *
                      </label>
                      <Input
                        required
                        disabled={isSubmitting}
                        placeholder="e.g. Soshanguve Block L"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="h-9 px-3 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-1">
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
                  </div>
                </div>

                {/* Step 4: Contact Details */}
                <div className="space-y-2.5 pt-2 border-t border-border/50">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-1">
                        Your Full Name *
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
                      <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-1">
                        WhatsApp Number *
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
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-muted-foreground uppercase mb-1">
                      Special Notes (Optional)
                    </label>
                    <Textarea
                      disabled={isSubmitting}
                      placeholder="e.g. Early 06:00 AM delivery needed, generator available..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={2}
                      className="text-xs px-3 py-2 resize-none"
                    />
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-2 space-y-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm gap-2 shadow-lg shadow-emerald-600/25 cursor-pointer transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Generating Quote...</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="h-5 w-5" />
                        <span>Send to WhatsApp (+27 76 707 6120)</span>
                      </>
                    )}
                  </Button>
                  <p className="text-[10px] text-center text-muted-foreground">
                    ⚡ Fast response from Wandile within 15 minutes • Guaranteed morning delivery
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
