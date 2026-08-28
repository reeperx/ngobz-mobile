"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/business-data";
import { Phone, Mail, MapPin, MessageCircle, ExternalLink, ShieldCheck, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/95 pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-border/40">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-primary/30">
                <Image
                  src={BUSINESS_INFO.logoUrl}
                  alt={BUSINESS_INFO.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-foreground">
                {BUSINESS_INFO.name}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {BUSINESS_INFO.slogan}. Delivering high-performance mobile coolers, warmers with chafing dishes, and VIP portable sanitation across Pretoria.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 text-xs"
                onClick={() => window.open(BUSINESS_INFO.facebookUrl, "_blank")}
              >
                <span>Facebook Page</span>
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Equipment Hire */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-foreground uppercase tracking-wider">
              Equipment Hire
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  VIP & Standard Mobile Toilets
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Mobile Refrigeration & Cold Rooms
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Mobile Food Warmers & Chafing Trays
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Weekend Event Rental Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Coverage Areas */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-foreground uppercase tracking-wider">
              Service Hubs
            </h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>Soshanguve & Mabopane</li>
              <li>Hammanskraal & Temba</li>
              <li>Pretoria North & CBD</li>
              <li>Ga-Rankuwa & Winterveld</li>
              <li>Centurion & Mamelodi</li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-foreground uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-muted-foreground">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>{BUSINESS_INFO.location}</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="gradient"
                size="sm"
                className="w-full gap-2 text-xs"
                onClick={() =>
                  window.open(
                    `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20NGOBZ%20Mobile,%20I'd%20like%20to%20inquire%20about%20renting%20equipment.`,
                    "_blank"
                  )
                }
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>Chat on WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for excellence in event rentals
          </p>
        </div>
      </div>
    </footer>
  );
}
