"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  MessageCircle,
  Home,
  ShieldCheck,
  Calculator,
  HelpCircle,
  MapPin,
  ChevronRight,
  Layers,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

interface NavLinkItem {
  label: string;
  href: string;
  description: string;
  icon: React.ElementType;
}

// Content sections only - "Get Quote" is reserved strictly for the dedicated CTA button
const NAV_LINKS: NavLinkItem[] = [
  {
    label: "Home",
    href: "#home",
    description: "Overview & event rental highlights",
    icon: Home,
  },
  {
    label: "Rental Services",
    href: "#services",
    description: "VIP Toilets, Coolers & Warmers",
    icon: Layers,
  },
  {
    label: "Why Choose Us",
    href: "#features",
    description: "Hygiene guarantee & reliable delivery",
    icon: ShieldCheck,
  },
  {
    label: "FAQs",
    href: "#faq",
    description: "Delivery times, bookings & coverage",
    icon: HelpCircle,
  },
  {
    label: "Contact",
    href: "#contact",
    description: "Pretoria, Soshanguve, Mabopane & more",
    icon: MapPin,
  },
];

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // Track scroll position for subtle glassmorphism elevation
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile/tablet menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on ESC key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Close menu if viewport expands to desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const whatsappHref = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hi Ngobz Mobile Rentals, I would like to inquire about event equipment rental in Pretoria."
  )}`;

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-sm"
          : "bg-background/80 backdrop-blur-lg border-b border-border/30"
      }`}
    >
      {/* Top Navbar Container */}
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Client Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 group select-none whitespace-nowrap"
          onClick={() => setMenuOpen(false)}
        >
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-xl overflow-hidden bg-white p-1 border border-slate-200 dark:border-slate-800 shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
            <Image
              src={BUSINESS_INFO.logoUrl}
              alt="Ngobz Mobile Rentals Logo"
              width={44}
              height={44}
              priority
              className="object-contain w-full h-full"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-black text-lg sm:text-xl tracking-tight text-blue-700 dark:text-blue-400 leading-none">
                Ngobz
              </span>
              <span className="font-extrabold text-xs sm:text-sm text-red-600 dark:text-red-500 tracking-tight leading-none">
                Rentals
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
              Mobile Hire • Pretoria
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (>= 1024px) */}
        <nav
          aria-label="Desktop Navigation"
          className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-muted-foreground whitespace-nowrap"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="px-3.5 py-2 rounded-lg text-xs xl:text-sm font-semibold text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/60 dark:hover:bg-blue-950/40 transition-all cursor-pointer whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Header Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Theme Toggle */}
          <ModeToggle />

          {/* Single Dedicated CTA Button on Desktop */}
          <Button
            size="sm"
            className="hidden lg:inline-flex rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-5 h-10 shadow-sm text-xs sm:text-sm gap-1.5 cursor-pointer whitespace-nowrap"
            onClick={() => handleNavClick("#calculator")}
          >
            <span>Get Quote</span>
            <ArrowUpRight className="h-4 w-4" />
          </Button>

          {/* Mobile & Tablet Hamburger Toggle Button (< 1024px) */}
          <button
            type="button"
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/80 text-foreground border border-border/60 hover:bg-secondary active:scale-95 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 shrink-0"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 top-16 sm:top-20 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
              aria-hidden="true"
            />

            {/* Drawer Content Panel */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              className="fixed top-16 sm:top-20 left-0 right-0 z-50 max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-5rem)] overflow-y-auto bg-background/95 backdrop-blur-2xl border-b border-border/60 shadow-2xl lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
            >
              <div className="px-4 sm:px-6 py-5 sm:py-6 space-y-5 max-w-xl mx-auto">
                {/* Navigation Links Grid */}
                <div className="space-y-1">
                  <div className="px-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Menu
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {NAV_LINKS.map((link) => {
                      const IconComponent = link.icon;
                      return (
                        <button
                          key={link.href}
                          type="button"
                          onClick={() => handleNavClick(link.href)}
                          className="w-full flex items-center justify-between p-3 rounded-xl bg-accent/20 sm:bg-transparent hover:bg-blue-50/80 dark:hover:bg-blue-950/40 active:bg-blue-100/80 transition-all text-left group border border-transparent hover:border-blue-500/20 cursor-pointer"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="h-9 w-9 rounded-xl bg-muted flex items-center justify-center text-foreground group-hover:bg-blue-500/10 group-hover:text-blue-600 transition-colors shrink-0">
                              <IconComponent className="h-4 w-4" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                                {link.label}
                              </div>
                              <div className="text-[11px] text-muted-foreground truncate">
                                {link.description}
                              </div>
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Unified Bottom Actions in Drawer */}
                <div className="pt-4 border-t border-border/50 space-y-3">
                  {/* Dedicated Primary Quote CTA */}
                  <Button
                    size="lg"
                    className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold h-11 text-sm gap-2 shadow-sm"
                    onClick={() => handleNavClick("#calculator")}
                  >
                    <Calculator className="h-4 w-4" />
                    <span>Get Instant Quote</span>
                  </Button>

                  {/* Direct Contact Links */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-muted/60 hover:bg-muted border border-border/40 text-xs font-semibold text-foreground transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                      <span>Call Us</span>
                    </a>

                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/30 text-xs font-semibold text-emerald-700 dark:text-emerald-400 transition-colors"
                    >
                      <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  {/* Operating Hours & Area Note */}
                  <div className="text-center text-[11px] text-muted-foreground/80 pt-1">
                    <span>Mon - Sun: 06:00 - 20:00 • Pretoria & Surrounding Areas</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
