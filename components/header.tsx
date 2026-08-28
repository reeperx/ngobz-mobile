"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, Sparkles, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Toilets & VIP", href: "#toilets" },
    { label: "Coolers & Warmers", href: "#coolers" },
    { label: "Quote Calculator", href: "#calculator" },
    { label: "Service Areas", href: "#areas" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/40 shadow-sm transition-transform group-hover:scale-105">
            <Image
              src={BUSINESS_INFO.logoUrl}
              alt={BUSINESS_INFO.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-foreground flex items-center gap-1.5">
              {BUSINESS_INFO.name}
              <Sparkles className="h-4 w-4 text-primary fill-primary/20" />
            </span>
            <span className="text-xs text-muted-foreground font-medium hidden sm:inline-block">
              Mobile Rentals & VIP Sanitation
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary hover:font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ModeToggle />
          <Button
            variant="gradient"
            size="sm"
            className="hidden sm:inline-flex gap-2"
            onClick={() =>
              window.open(
                `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20NGOBZ%20Mobile,%20I%20would%20like%20to%20inquire%20about%20event%20rentals.`,
                "_blank"
              )
            }
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp Us</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-xl px-4 py-5 shadow-xl transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-border flex flex-col gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground px-3 py-2"
              >
                <Phone className="h-4 w-4 text-primary" />
                {BUSINESS_INFO.phone}
              </a>
              <Button
                variant="gradient"
                className="w-full justify-center gap-2"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.open(
                    `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20NGOBZ%20Mobile,%20I%20would%20like%20to%20inquire%20about%20event%20rentals.`,
                    "_blank"
                  );
                }}
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
