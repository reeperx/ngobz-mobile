"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Phone, Mail, MapPin, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";
import { Button } from "@/components/ui/button";

export function DarkFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="mt-20 bg-slate-950 text-white rounded-t-[3rem] pt-16 sm:pt-20 pb-12 overflow-hidden border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top High-Impact Call to Action Block matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              It&apos;s time to elevate your event, <br />
              <span className="text-slate-400 font-medium">with reliable mobile rentals</span>
            </h2>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                Over 350+ ceremonies catered
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                100% On-time delivery guarantee
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5 text-left lg:text-right">
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md ml-auto">
              By providing prompt delivery, precision cooling, and hospital-grade sanitization, we take the stress out of catering and sanitary logistics.
            </p>
            <div className="flex justify-start lg:justify-end">
              <Button
                className="rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold px-8 h-12 text-xs sm:text-sm gap-2 shadow-xl cursor-pointer"
                onClick={() => {
                  const el = document.getElementById("calculator");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>Get in touch</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-slate-800/80 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Sparkles className="h-3.5 w-3.5 fill-emerald-400" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">
              ngobz<span className="text-emerald-400 font-black">.</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6 text-xs text-slate-400 font-medium">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About Us</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors text-emerald-400 font-bold">
              WhatsApp Support
            </a>
          </nav>

          {/* Contact snippets */}
          <div className="text-xs text-slate-400 space-y-1 text-left md:text-right">
            <p>{BUSINESS_INFO.phone} • {BUSINESS_INFO.email}</p>
            <p>{BUSINESS_INFO.location}</p>
          </div>
        </div>

        {/* Bottom Copyright matching reference */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
