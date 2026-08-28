"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";

export function WhatsAppFloating() {
  return (
    <a
      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20NGOBZ%20Mobile,%20I'm%20visiting%20your%20website%20and%20would%20like%20to%20inquire%20about%20event%20rentals.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-emerald-600 px-4 py-3.5 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-emerald-500 hover:shadow-emerald-600/40 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 fill-white" />
      <span className="hidden sm:inline text-sm font-bold tracking-wide">
        Chat with Us
      </span>
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400" />
      </span>
    </a>
  );
}
