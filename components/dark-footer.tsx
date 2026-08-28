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
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function DarkFooter() {
  const currentYear = new Date().getFullYear();

  // Contact Form State
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [contactSubmitted, setContactSubmitted] = React.useState(false);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = React.useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = React.useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = `*DIRECT MESSAGE VIA WEBSITE - NGOBZ MOBILE*
----------------------------------
*Name:* ${name || "Not provided"}
*Phone:* ${phone || "Not provided"}
*Message:* ${message || "General inquiry"}
----------------------------------`;
    window.open(
      `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(waText)}`,
      "_blank"
    );
    setContactSubmitted(true);
    setName("");
    setPhone("");
    setMessage("");
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitted(true);
    setNewsletterEmail("");
  };

  return (
    <footer
      id="contact"
      className="mt-16 sm:mt-24 bg-slate-950 text-white rounded-t-[2rem] sm:rounded-t-[3rem] pt-12 sm:pt-16 pb-10 overflow-hidden border-t border-slate-800 scroll-mt-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Top Section: Contact & Booking Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Direct Event Reservations</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Reserve Your Mobile Coolers &amp; Food Warmers
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Contact Wandile and the NGOBZ Mobile team directly. Delivered early at 06:00 AM across all Pretoria and Gauteng locations.
              </p>
            </div>

            {/* Clean Contact Information Rows */}
            <div className="space-y-2.5 pt-1">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition-colors group"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-slate-400 block">Direct Phone Hotline</span>
                  <strong className="text-xs sm:text-sm font-bold text-white block">
                    {BUSINESS_INFO.phone}
                  </strong>
                </div>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Wandile,%20I%20would%20like%20to%20check%20availability%20for%20an%20event.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-slate-400 block">WhatsApp Direct Chat</span>
                  <strong className="text-xs sm:text-sm font-bold text-white block">
                    {BUSINESS_INFO.phone}
                  </strong>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-slate-400 block">Working Hours</span>
                  <strong className="text-xs sm:text-sm font-bold text-white block">
                    {BUSINESS_INFO.workingHours}
                  </strong>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="h-10 w-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] text-slate-400 block">Service Hub</span>
                  <strong className="text-xs sm:text-sm font-bold text-white block">
                    {BUSINESS_INFO.location}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5 sm:p-7 lg:p-8 backdrop-blur-xl shadow-2xl space-y-4">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white">
                  Send Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Instant response on equipment pricing and date availability
                </p>
              </div>

              {contactSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center space-y-2.5">
                  <CheckCircle2 className="h-8 w-8 mx-auto text-emerald-400" />
                  <h4 className="text-sm sm:text-base font-bold">Inquiry Sent via WhatsApp!</h4>
                  <p className="text-xs text-emerald-300">
                    Wandile has received your message and will confirm shortly.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-1 text-xs border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10 cursor-pointer"
                    onClick={() => setContactSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <Input
                        required
                        placeholder="e.g. Gift Wandile"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-500 px-3.5 py-2.5 h-10 text-xs focus-visible:ring-blue-500 rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        WhatsApp Number *
                      </label>
                      <Input
                        required
                        placeholder="e.g. 076 707 6120"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-500 px-3.5 py-2.5 h-10 text-xs focus-visible:ring-blue-500 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Event Details &amp; Equipment Needed *
                    </label>
                    <Textarea
                      required
                      placeholder="Event date, location suburb, and equipment (mobile cooler / food warmers)..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-500 px-3.5 py-2 text-xs focus-visible:ring-blue-500 resize-none rounded-xl"
                    />
                  </div>

                  <div className="pt-1">
                    <Button
                      type="submit"
                      className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm gap-2 cursor-pointer shadow-lg shadow-blue-600/25"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send Inquiry via WhatsApp</span>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Banner */}
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white tracking-tight leading-snug">
              Stay Updated on Seasonal Event Rental Specials
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Get holiday booking availability, weekend package discounts, and catering tips across Pretoria.
            </p>
          </div>

          <div className="w-full lg:w-auto lg:min-w-[360px]">
            {newsletterSubmitted ? (
              <div className="px-5 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold text-center">
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5 w-full">
                <Input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-500 text-xs sm:text-sm h-11 px-4 focus-visible:ring-blue-500 rounded-xl flex-1"
                />
                <Button
                  type="submit"
                  className="h-11 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shrink-0 cursor-pointer shadow-md shadow-blue-600/20"
                >
                  <span>Subscribe</span>
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Multi-Column Clean Navigation & Brand Area */}
        <div className="border-t border-slate-800/80 pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {/* Brand Col with Pure White Round Logo Avatar */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-11 w-11 rounded-full bg-white p-1 shadow-md overflow-hidden flex items-center justify-center shrink-0">
                <Image
                  src={BUSINESS_INFO.logoUrl}
                  alt={BUSINESS_INFO.name}
                  width={44}
                  height={44}
                  className="object-contain w-full h-full bg-white"
                />
              </div>
              <div>
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white block">
                  NGOBZ mobile<span className="text-blue-500 font-black">.</span>
                </span>
                <span className="text-[11px] text-slate-400 block">
                  Event Equipment Rentals
                </span>
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Delivering high-capacity mobile chillers and commercial food warmers across Pretoria &amp; Gauteng.
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="space-y-2.5">
            <strong className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
              Quick Navigation
            </strong>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-white transition-colors">
                  Equipment Specs
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Live Event Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Client Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas Col */}
          <div className="space-y-2.5">
            <strong className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
              Service Locations
            </strong>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Pretoria &amp; Centurion</li>
              <li>Soshanguve &amp; Mabopane</li>
              <li>Hammanskraal &amp; Ga-Rankuwa</li>
              <li>Mamelodi &amp; Akasia</li>
              <li>Winterveld &amp; Surrounds</li>
            </ul>
          </div>

          {/* Connect & Social Col */}
          <div className="space-y-2.5">
            <strong className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
              Direct Contact
            </strong>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p>{BUSINESS_INFO.phone}</p>
              <p>{BUSINESS_INFO.email}</p>
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 pt-1"
              >
                <span>Visit Facebook Page</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 text-center sm:text-left">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p>Prompt 06:00 AM Morning Delivery • Transparent Flat Rates</p>
        </div>
      </div>
    </footer>
  );
}
