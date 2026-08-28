"use client";

import * as React from "react";
import { BUSINESS_INFO, SERVICES } from "@/lib/business-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Calculator, Check, Sparkles, Send } from "lucide-react";

export function QuoteCalculator() {
  const [selectedItems, setSelectedItems] = React.useState<string[]>(["mobile-toilets", "mobile-coolers"]);
  const [fullName, setFullName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [eventDate, setEventDate] = React.useState("");
  const [notes, setNotes] = React.useState("");

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
*Selected Rentals:* ${serviceNames || "None specified"}
*Additional Notes:* ${notes || "None"}
----------------------------------
Please confirm availability and send a quotation.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`, "_blank");
  };

  return (
    <section id="calculator" className="py-20 scroll-mt-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border/70 bg-card/60 p-6 sm:p-10 backdrop-blur-xl shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Badge variant="gradient" className="px-3 py-1 text-xs gap-1">
              <Calculator className="h-3.5 w-3.5 text-primary" />
              Instant Booking & Quote Request
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Build Your Event Rental Package
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Select your required equipment below. We will immediately generate your booking request for WhatsApp confirmation.
            </p>
          </div>

          <form onSubmit={handleWhatsAppBooking} className="space-y-8">
            {/* Equipment Selection */}
            <div>
              <label className="block text-sm font-bold text-foreground mb-3">
                1. Select Equipment to Hire:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SERVICES.map((s) => {
                  const isSelected = selectedItems.includes(s.id);
                  return (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => toggleItem(s.id)}
                      className={`flex flex-col text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "border-primary bg-primary/10 shadow-md ring-2 ring-primary/20"
                          : "border-border bg-background/50 hover:bg-accent"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span className="font-bold text-sm text-foreground">{s.name}</span>
                        <div
                          className={`h-5 w-5 rounded-full flex items-center justify-center border transition-colors ${
                            isSelected
                              ? "bg-primary border-primary text-white"
                              : "border-muted-foreground/40 bg-background"
                          }`}
                        >
                          {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground line-clamp-2">
                        {s.tagline}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Event & Client Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5">
                  Your Full Name *
                </label>
                <Input
                  required
                  placeholder="e.g. Gift / Lerato"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <Input
                  required
                  placeholder="e.g. 076 707 6120"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5">
                  Event Date *
                </label>
                <Input
                  required
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5">
                  Event Location / Suburb *
                </label>
                <Input
                  required
                  placeholder="e.g. Soshanguve Block XX, Mabopane"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-foreground mb-1.5">
                  Special Notes or Requirements (Optional)
                </label>
                <Textarea
                  placeholder="Mention guest count, ceremony timing, or specific setup instructions..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full gap-2 text-base font-semibold shadow-xl"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Send Booking Request via WhatsApp</span>
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-3">
                Instant delivery confirmation • Direct chat with Wandile & NGOBZ Mobile Team
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
