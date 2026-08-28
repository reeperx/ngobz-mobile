"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border/40 transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo matching reference: leaf/sparkle green icon + brand name */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group whitespace-nowrap">
          <div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
            <Sparkles className="h-4 w-4 fill-primary" />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-foreground">
            ngobz<span className="text-primary font-black">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground whitespace-nowrap">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground hover:font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions matching reference: Login + Green Pill CTA */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <ModeToggle />
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="hidden sm:inline-flex text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors px-2 py-1 whitespace-nowrap"
          >
            076 707 6120
          </a>

          <Button
            size="sm"
            className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 h-10 shadow-sm text-xs sm:text-sm gap-1.5 cursor-pointer whitespace-nowrap"
            onClick={() => {
              const el = document.getElementById("calculator");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>Get in touch</span>
            <ArrowUpRight className="h-4 w-4" />
          </Button>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-9 w-9 rounded-full shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-2xl px-5 py-4 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-border/40 flex flex-col gap-2">
            <Button
              className="w-full rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold h-11 text-xs gap-1.5"
              onClick={() => {
                setMenuOpen(false);
                const el = document.getElementById("calculator");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Instant Quote Builder</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
