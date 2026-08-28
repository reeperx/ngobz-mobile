"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Benefits", href: "#benefits" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full px-3 sm:px-6 lg:px-8 pt-3 pb-1">
      <header className="mx-auto max-w-6xl rounded-full border border-border/60 bg-background/85 backdrop-blur-2xl shadow-sm transition-all">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 gap-4">
          {/* Logo matching reference */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group whitespace-nowrap">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-border/80 shadow-xs">
              <Image
                src={BUSINESS_INFO.logoUrl}
                alt={BUSINESS_INFO.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-foreground">
              ngobz<span className="text-primary font-black text-2xl leading-none">.</span>
            </span>
          </Link>

          {/* Desktop Navigation - whitespace-nowrap prevents any stacking */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-muted-foreground whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 whitespace-nowrap">
            <ModeToggle />
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="hidden xl:inline-flex text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors px-2 py-1 whitespace-nowrap"
            >
              076 707 6120
            </a>

            <Button
              size="sm"
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 h-9 shadow-xs text-xs sm:text-sm cursor-pointer whitespace-nowrap"
              onClick={() => {
                const el = document.getElementById("calculator");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book Now
            </Button>

            {/* Mobile / Tablet Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-9 w-9 rounded-full shrink-0"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Navigation"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile / Tablet Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-border/60 px-5 py-4 space-y-3 rounded-b-[2rem] bg-background/95 backdrop-blur-2xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-border/40 flex flex-col gap-2">
              <Button
                className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-semibold h-10 text-xs whitespace-nowrap"
                onClick={() => {
                  setMenuOpen(false);
                  const el = document.getElementById("calculator");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Instant Quote Builder
              </Button>
              <Button
                variant="outline"
                className="w-full rounded-full gap-2 h-10 text-xs whitespace-nowrap"
                onClick={() => {
                  setMenuOpen(false);
                  window.open(
                    `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20NGOBZ%20Mobile,%20I'd%20like%20to%20inquire%20about%20event%20rentals.`,
                    "_blank"
                  );
                }}
              >
                <MessageCircle className="h-3.5 w-3.5 text-emerald-500" />
                <span>WhatsApp: {BUSINESS_INFO.phone}</span>
              </Button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
