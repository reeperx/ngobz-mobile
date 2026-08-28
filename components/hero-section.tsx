"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BUSINESS_INFO } from "@/lib/business-data";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Snowflake, Bath, Sparkles, MessageCircle } from "lucide-react";

export function HeroSection() {
  const { scrollY } = useScroll();
  const yFloatingLeft = useTransform(scrollY, [0, 400], [0, -30]);
  const yFloatingRight = useTransform(scrollY, [0, 400], [0, -50]);

  return (
    <section id="home" className="relative pt-8 sm:pt-14 pb-20 sm:pb-28 overflow-hidden">
      {/* Dynamic Animated Ambient Glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] h-[350px] bg-primary rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-4 max-w-3xl mx-auto"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.2]">
            Hire event equipment with ease.{" "}
            <span className="text-muted-foreground font-medium inline-block">Keep food fresh & hot.</span>{" "}
            <span className="text-foreground inline-block">Stay in control.</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Heavy-duty mobile coolers, commercial food warmers with chafing dishes, and VIP portable restrooms delivered across Pretoria & Gauteng.
          </p>
        </motion.div>

        {/* Centered Pill Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-3"
        >
          <Button
            size="lg"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-sm sm:text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all cursor-pointer whitespace-nowrap"
            onClick={() => {
              const el = document.getElementById("calculator");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book equipment now
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-6 py-6 text-sm font-semibold gap-2 hover:bg-accent whitespace-nowrap cursor-pointer"
            onClick={() =>
              window.open(
                `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20NGOBZ%20Mobile,%20I'd%20like%20to%20inquire%20about%20event%20rentals.`,
                "_blank"
              )
            }
          >
            <MessageCircle className="h-4 w-4 text-emerald-500" />
            <span>Chat on WhatsApp</span>
          </Button>
        </motion.div>

        {/* Central Device Mockup with Parallax Floating Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative pt-6 max-w-4xl mx-auto"
        >
          {/* Main Central Card Mockup */}
          <div className="relative mx-auto w-full max-w-md rounded-[2.5rem] border-[6px] border-slate-900 dark:border-slate-800 bg-card p-6 shadow-2xl overflow-hidden text-left space-y-5">
            <div className="flex items-center justify-between border-b border-border/50 pb-4">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border">
                  <Image
                    src={BUSINESS_INFO.logoUrl}
                    alt={BUSINESS_INFO.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground whitespace-nowrap">{BUSINESS_INFO.name}</h3>
                  <p className="text-[11px] text-muted-foreground whitespace-nowrap">Pretoria Event Hub</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                Active Fleet
              </span>
            </div>

            <div className="rounded-2xl bg-accent/40 p-4 border border-border/40 space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-foreground">Same Day</span>
              <p className="text-xs text-muted-foreground">Morning Delivery Guaranteed</p>
            </div>

            <div className="rounded-2xl bg-slate-950 p-5 text-white shadow-md space-y-3">
              <div className="flex justify-between items-center text-xs opacity-70">
                <span className="whitespace-nowrap">NGOBZ EVENT PASS</span>
                <Sparkles className="h-3.5 w-3.5 text-primary" />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] tracking-wider opacity-80 whitespace-nowrap">VIP SANITATION & TEMPERATURE</p>
                <p className="text-base font-bold font-mono tracking-widest">**** **** 6120</p>
              </div>
              <div className="flex justify-between items-center text-[10px] opacity-75">
                <span className="whitespace-nowrap">GIFT WANDILE</span>
                <span className="whitespace-nowrap text-emerald-400 font-semibold">CONFIRMED</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-accent/30 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Bath className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-semibold text-foreground truncate">VIP Mobile Restrooms</span>
                </div>
                <span className="text-emerald-500 font-bold shrink-0 whitespace-nowrap">Sanitized</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-accent/30 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Snowflake className="h-4 w-4 text-blue-500 shrink-0" />
                  <span className="font-semibold text-foreground truncate">Mobile Cooler Unit</span>
                </div>
                <span className="text-blue-500 font-bold shrink-0 whitespace-nowrap">-2°C Cold</span>
              </div>
            </div>
          </div>

          {/* Left Parallax Floating Badge */}
          <motion.div
            style={{ y: yFloatingLeft }}
            className="hidden md:flex absolute left-0 top-24 items-center gap-3 rounded-2xl border border-border bg-card/95 backdrop-blur-md p-4 shadow-xl text-left whitespace-nowrap"
          >
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">100% Hospital Sanitized</p>
              <p className="text-[11px] text-muted-foreground">Certified Clean Restrooms</p>
            </div>
          </motion.div>

          {/* Right Parallax Floating Badge */}
          <motion.div
            style={{ y: yFloatingRight }}
            className="hidden md:block absolute right-0 top-32 rounded-2xl border border-border bg-card/95 backdrop-blur-md p-4 shadow-xl text-left space-y-2 whitespace-nowrap"
          >
            <div className="flex items-center justify-between gap-4 text-xs">
              <span className="text-muted-foreground">Booking Status:</span>
              <span className="font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                Confirmed
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 text-xs">
              <span className="text-muted-foreground">Dispatch Hub:</span>
              <span className="font-semibold text-foreground">Pretoria / Soshanguve</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
