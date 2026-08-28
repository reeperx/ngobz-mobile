"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Loader2,
  Calendar,
  Layers,
} from "lucide-react";
import { toast } from "sonner";
import { BUSINESS_INFO } from "@/lib/business-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function DarkFooter() {
  const currentYear = new Date().getFullYear();

  // Contact Form State
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [eventDate, setEventDate] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [equipmentType, setEquipmentType] = React.useState("Mobile Cooler Trailer");
  const [message, setMessage] = React.useState("");
  const [contactSubmitted, setContactSubmitted] = React.useState(false);
  const [isSubmittingContact, setIsSubmittingContact] = React.useState(false);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = React.useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = React.useState(false);
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = React.useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingContact(true);

    const waText = `*DIRECT EVENT INQUIRY - NGOBZ MOBILE*
----------------------------------------
*Client Name:* ${name || "Not provided"}
*Contact / WhatsApp:* ${phone || "Not provided"}
*Event Date:* ${eventDate || "To be confirmed"}
*Venue Location:* ${location || "Pretoria / Gauteng"}
*Equipment Required:* ${equipmentType}
*Event Details & Notes:* ${message || "Standard event package request"}
----------------------------------------
_Please confirm availability and rate for prompt 06:00 AM venue dispatch._`;

    setTimeout(() => {
      window.open(
        `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(waText)}`,
        "_blank"
      );
      setIsSubmittingContact(false);
      setContactSubmitted(true);
      setName("");
      setPhone("");
      setEventDate("");
      setLocation("");
      setMessage("");

      // Toast notification from sonner
      toast.success("Inquiry Sent via WhatsApp!", {
        description: "Wandile will confirm equipment availability shortly.",
      });

      // Auto-dismiss thank you message after 4.5 seconds
      setTimeout(() => {
        setContactSubmitted(false);
      }, 4500);
    }, 550);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubmittingNewsletter(true);

    setTimeout(() => {
      setIsSubmittingNewsletter(false);
      setNewsletterSubmitted(true);
      setNewsletterEmail("");

      toast.success("Subscribed to Event Rental Specials!", {
        description: "You'll receive holiday discount reminders in Pretoria.",
      });

      // Auto-dismiss newsletter thank you message after 4.5 seconds
      setTimeout(() => {
        setNewsletterSubmitted(false);
      }, 4500);
    }, 500);
  };

  return (
    <footer
      id="contact"
      className="mt-16 sm:mt-24 bg-card text-foreground rounded-t-[2rem] sm:rounded-t-[3rem] pt-12 sm:pt-16 pb-10 overflow-hidden border-t border-border/80 scroll-mt-10 shadow-xs"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Top Section: Contact & Booking Hub with Equalized Heights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch text-left">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Direct Event Reservations</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-snug">
                Reserve Your Mobile Coolers &amp; Food Warmers
              </h2>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Contact Wandile and the NGOBZ Mobile team directly. Delivered early at 06:00 AM across all Pretoria and Gauteng locations.
              </p>
            </div>

            {/* Clean Contact Information Rows */}
            <div className="space-y-2.5 pt-1">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-background border border-border/70 hover:border-blue-500/40 transition-colors group shadow-xs"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-muted-foreground block font-medium">
                    Direct Phone Hotline
                  </span>
                  <strong className="text-xs sm:text-sm font-bold text-foreground block">
                    {BUSINESS_INFO.phone}
                  </strong>
                </div>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Wandile,%20I%20would%20like%20to%20check%20availability%20for%20an%20event.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-background border border-border/70 hover:border-emerald-500/40 transition-colors group shadow-xs"
              >
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-muted-foreground block font-medium">
                    WhatsApp Direct Chat
                  </span>
                  <strong className="text-xs sm:text-sm font-bold text-foreground block">
                    {BUSINESS_INFO.phone}
                  </strong>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-background border border-border/70 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-muted-foreground block font-medium">
                    Working Hours
                  </span>
                  <strong className="text-xs sm:text-sm font-bold text-foreground block">
                    {BUSINESS_INFO.workingHours}
                  </strong>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-background border border-border/70 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-muted-foreground block font-medium">
                    Service Hub
                  </span>
                  <strong className="text-xs sm:text-sm font-bold text-foreground block">
                    {BUSINESS_INFO.location}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form with Full Height Balance */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="h-full flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-5 sm:p-7 lg:p-8 backdrop-blur-xl shadow-lg space-y-4">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground">
                  Send Direct Message
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Instant response on equipment pricing and date availability
                </p>
              </div>

              {contactSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-center space-y-2.5 my-auto">
                  <CheckCircle2 className="h-8 w-8 mx-auto text-emerald-600 dark:text-emerald-400" />
                  <h4 className="text-sm sm:text-base font-bold">Inquiry Sent via WhatsApp!</h4>
                  <p className="text-xs text-emerald-600/90 dark:text-emerald-300">
                    Wandile has received your message and will confirm shortly.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-1 text-xs border-emerald-500/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/10 cursor-pointer"
                    onClick={() => setContactSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    {/* Row 1: Name & WhatsApp Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[11px] font-semibold text-foreground mb-1">
                          Your Full Name *
                        </label>
                        <Input
                          required
                          disabled={isSubmittingContact}
                          placeholder="e.g. Gift Wandile"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="bg-background border-border text-foreground placeholder:text-muted-foreground px-3.5 py-2 h-9 text-xs focus-visible:ring-blue-500 rounded-xl"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-foreground mb-1">
                          WhatsApp Number *
                        </label>
                        <Input
                          required
                          disabled={isSubmittingContact}
                          placeholder="e.g. 076 707 6120"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="bg-background border-border text-foreground placeholder:text-muted-foreground px-3.5 py-2 h-9 text-xs focus-visible:ring-blue-500 rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Row 2: Event Date & Venue Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[11px] font-semibold text-foreground mb-1">
                          Event Date *
                        </label>
                        <Input
                          required
                          disabled={isSubmittingContact}
                          type="date"
                          value={eventDate}
                          onChange={(e) => setEventDate(e.target.value)}
                          className="bg-background border-border text-foreground placeholder:text-muted-foreground px-3.5 py-2 h-9 text-xs focus-visible:ring-blue-500 rounded-xl"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-foreground mb-1">
                          Venue Location / Suburb *
                        </label>
                        <Input
                          required
                          disabled={isSubmittingContact}
                          placeholder="e.g. Soshanguve, Pretoria"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="bg-background border-border text-foreground placeholder:text-muted-foreground px-3.5 py-2 h-9 text-xs focus-visible:ring-blue-500 rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Row 3: Equipment Selection */}
                    <div>
                      <label className="block text-[11px] font-semibold text-foreground mb-1">
                        Equipment Needed
                      </label>
                      <select
                        value={equipmentType}
                        disabled={isSubmittingContact}
                        onChange={(e) => setEquipmentType(e.target.value)}
                        className="w-full bg-background border border-border text-foreground text-xs rounded-xl h-9 px-3 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
                      >
                        <option value="Mobile Cooler Trailer (-2°C Hold)">
                          Mobile Cooler Trailer (-2°C Cold Hold)
                        </option>
                        <option value="Commercial Mobile Food Warmer">
                          Commercial Mobile Food Warmer (+ Chafing Dishes)
                        </option>
                        <option value="Combo Package (Cooler + Food Warmer)">
                          Combo Package (Mobile Cooler + Food Warmer)
                        </option>
                        <option value="VIP Mobile Restrooms Trailer">
                          VIP Mobile Restrooms Trailer
                        </option>
                        <option value="Custom Full Fleet Rental">
                          Custom Full Fleet Rental
                        </option>
                      </select>
                    </div>

                    {/* Row 4: Event Details & Specific Notes */}
                    <div>
                      <label className="block text-[11px] font-semibold text-foreground mb-1">
                        Event Details &amp; Equipment Notes
                      </label>
                      <Textarea
                        disabled={isSubmittingContact}
                        placeholder="Guest count, delivery time preference, or specific power arrangements..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={3}
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground px-3.5 py-2 text-xs focus-visible:ring-blue-500 resize-none rounded-xl min-h-[75px] sm:min-h-[90px]"
                      />
                    </div>
                  </div>

                  <div className="pt-1">
                    <Button
                      type="submit"
                      disabled={isSubmittingContact}
                      className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm gap-2 cursor-pointer shadow-lg shadow-blue-600/25 disabled:opacity-80"
                    >
                      {isSubmittingContact ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Send</span>
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Banner */}
        <div className="rounded-3xl border border-border/80 bg-accent/40 dark:bg-accent/20 p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 text-left shadow-xs">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-foreground tracking-tight leading-snug">
              Stay Updated on Seasonal Event Rental Specials
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Get holiday booking availability, weekend package discounts, and catering tips across Pretoria.
            </p>
          </div>

          <div className="w-full lg:w-auto lg:min-w-[360px]">
            {newsletterSubmitted ? (
              <div className="px-5 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-semibold text-center">
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5 w-full">
                <Input
                  type="email"
                  required
                  disabled={isSubmittingNewsletter}
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground text-xs sm:text-sm h-11 px-4 focus-visible:ring-blue-500 rounded-xl flex-1"
                />
                <Button
                  type="submit"
                  disabled={isSubmittingNewsletter}
                  className="h-11 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shrink-0 cursor-pointer shadow-md shadow-blue-600/20 disabled:opacity-80 gap-2"
                >
                  {isSubmittingNewsletter ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Streamlined Minimalist Brand & Navigation Bar */}
        <div className="border-t border-border/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand with Pure White Round Logo Avatar */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-11 w-11 rounded-full bg-white p-1 border border-border shadow-xs overflow-hidden flex items-center justify-center shrink-0">
              <Image
                src={BUSINESS_INFO.logoUrl}
                alt={BUSINESS_INFO.name}
                width={44}
                height={44}
                className="object-contain w-full h-full bg-white"
              />
            </div>
            <div>
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-foreground block">
                NGOBZ mobile<span className="text-blue-600 dark:text-blue-400 font-black">.</span>
              </span>
              <span className="text-[11px] text-muted-foreground block">
                Event Equipment Rentals • Pretoria
              </span>
            </div>
          </Link>

          {/* Clean Inline Navigation Matching Navbar */}
          <nav className="flex flex-wrap items-center justify-center md:justify-end gap-x-5 gap-y-2 text-xs font-semibold text-muted-foreground">
            <a href="#home" className="hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#equipment" className="hover:text-foreground transition-colors">
              Equipment
            </a>
            <a href="#gallery" className="hover:text-foreground transition-colors">
              Live Gallery
            </a>
            <a href="#reviews" className="hover:text-foreground transition-colors">
              Reviews
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              FAQs
            </a>
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              <span>Facebook</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </nav>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-6 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-2 text-center sm:text-left">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p>Pretoria &bull; Soshanguve &bull; Mabopane &bull; Hammanskraal &bull; Centurion &bull; Gauteng</p>
        </div>
      </div>
    </footer>
  );
}
