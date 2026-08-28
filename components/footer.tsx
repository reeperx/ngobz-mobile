"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/business-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/95 pt-16 pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo & Tagline matching reference Image 1 */}
          <div className="space-y-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full border border-border">
                <Image
                  src={BUSINESS_INFO.logoUrl}
                  alt={BUSINESS_INFO.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-foreground">
                ngobz<span className="text-primary font-black text-3xl leading-none">.</span>
              </span>
            </Link>
            <p className="text-xs text-muted-foreground max-w-xs">
              Mobile coolers, food warmers & VIP sanitary hire across Pretoria.
            </p>
          </div>

          {/* Minimalist 2-column footer links matching reference Image 1 */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-12 gap-y-3 text-xs text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">
              Equipment
            </a>
            <a href="#benefits" className="hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">
              How it Works
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </a>
            <a href="#calculator" className="hover:text-foreground transition-colors">
              Quote Builder
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors font-semibold text-primary"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Bottom Copyright line matching reference Image 1 */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
          <p>Copyright © {currentYear} {BUSINESS_INFO.name}</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
