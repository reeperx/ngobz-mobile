"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Maximize2,
  Calculator,
  Pause,
  Play,
  Sparkles,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-data";
import { Button } from "@/components/ui/button";
import { openQuoteModal } from "@/components/quote-modal";

interface ShowcasePhoto {
  id: string;
  src: string;
  location: string;
}

const SHOWCASE_PHOTOS: ShowcasePhoto[] = [
  {
    id: "p-1",
    src: "/images/showcase/480631305_1101248498473646_3279892248643713850_n.jpg",
    location: "Pretoria Event",
  },
  {
    id: "p-2",
    src: "/images/showcase/473332374_1539923037410052_884203722908243039_n.jpg",
    location: "Soshanguve Feast",
  },
  {
    id: "p-3",
    src: "/images/showcase/186496935_606919277377104_8201199303261366693_n.jpg",
    location: "Mabopane Ceremony",
  },
  {
    id: "p-4",
    src: "/images/showcase/134053434_476860987049601_7704482159405034626_n.jpg",
    location: "Hammanskraal Gathering",
  },
  {
    id: "p-5",
    src: "/images/showcase/118917366_380772963325071_4493756953176247080_n.jpg",
    location: "Centurion Setup",
  },
  {
    id: "p-6",
    src: "/images/showcase/103148205_307715297297505_2231334706333180757_n.jpg",
    location: "Ga-Rankuwa Event",
  },
  {
    id: "p-7",
    src: "/images/showcase/95143669_273543197381382_7075362345555329024_n.jpg",
    location: "Mamelodi Celebration",
  },
  {
    id: "p-8",
    src: "/images/showcase/81513094_180965276639175_517937768446296064_n.jpg",
    location: "Pretoria North Delivery",
  },
  {
    id: "p-9",
    src: "/images/showcase/75642394_158609285541441_5750532202240671744_n.jpg",
    location: "Winterveld Feast",
  },
  {
    id: "p-10",
    src: "/images/showcase/75439477_154065505995819_7143059435391287296_n.jpg",
    location: "Akasia Gathering",
  },
];

export function ShowcaseGallery() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SHOWCASE_PHOTOS.length);
  }, []);

  const prevSlide = React.useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + SHOWCASE_PHOTOS.length) % SHOWCASE_PHOTOS.length
    );
  }, []);

  // Auto-slide every 5.5 seconds unless paused or lightbox open
  React.useEffect(() => {
    if (isPaused || lightboxOpen) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, lightboxOpen, nextSlide]);

  const currentPhoto = SHOWCASE_PHOTOS[currentIndex];

  return (
    <section id="gallery" className="py-12 sm:py-16 scroll-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            <Camera className="h-3.5 w-3.5" />
            <span>Live Event Gallery</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Equipment in Action
          </h2>

          <p className="text-xs sm:text-sm text-muted-foreground">
            Explore authentic photos of our dual-axle chillers and commercial food warmers on-site across Pretoria.
          </p>
        </div>

        {/* Hero Single Image Carousel Frame */}
        <div
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-border/80 bg-slate-950 shadow-2xl group select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Visual Display */}
          <div
            className="relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10] w-full overflow-hidden cursor-pointer"
            onClick={() => setLightboxOpen(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhoto.id}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={currentPhoto.src}
                  alt={`NGOBZ Mobile Event Equipment - ${currentPhoto.location}`}
                  fill
                  priority={currentIndex === 0}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1024px"
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient Overlays for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 pointer-events-none" />

            {/* Top Left: Location Badge ONLY */}
            <div className="absolute top-4 left-4 z-20">
              <div className="px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-lg flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-blue-400" />
                <span>{currentPhoto.location}</span>
              </div>
            </div>

            {/* Top Right: Status & Fullscreen Trigger */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              <div className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-[11px] font-medium text-white/90 shadow-md flex items-center gap-1.5">
                {isPaused ? (
                  <>
                    <Pause className="h-3 w-3 text-amber-400" />
                    <span className="hidden sm:inline">Paused</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3 w-3 text-emerald-400" />
                    <span className="hidden sm:inline">Auto-Playing</span>
                  </>
                )}
              </div>

              <div className="h-8 w-8 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-md">
                <Maximize2 className="h-4 w-4" />
              </div>
            </div>

            {/* Left / Right Nav Arrows */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              aria-label="Previous photo"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-950/70 hover:bg-slate-950 border border-white/20 text-white flex items-center justify-center backdrop-blur-md shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer opacity-80 hover:opacity-100"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              aria-label="Next photo"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-950/70 hover:bg-slate-950 border border-white/20 text-white flex items-center justify-center backdrop-blur-md shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer opacity-80 hover:opacity-100"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Bottom Counter ONLY */}
            <div className="absolute bottom-4 right-4 z-20">
              <div className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-xs font-bold text-white shadow-md">
                {currentIndex + 1} / {SHOWCASE_PHOTOS.length}
              </div>
            </div>
          </div>

          {/* Thumbnail Dot Selectors */}
          <div className="p-3 sm:p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto">
            {SHOWCASE_PHOTOS.map((photo, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "w-8 sm:w-10 bg-blue-500 shadow-sm shadow-blue-500/50"
                      : "w-2 sm:w-2.5 bg-slate-700 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* Action Banner */}
        <div className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl border border-blue-500/20 bg-blue-500/5 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-foreground">
              Book this equipment for your event in Pretoria or surrounding areas
            </h4>
            <p className="text-xs text-muted-foreground">
              Same-day 06:00 AM delivery • Chafing dishes included with food warmers
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 h-10 text-xs sm:text-sm gap-2 cursor-pointer shadow-sm"
              onClick={openQuoteModal}
            >
              <Calculator className="h-4 w-4" />
              <span>Get Quote</span>
            </Button>

            <Button
              variant="outline"
              className="rounded-xl border-emerald-600/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-semibold px-4 h-10 text-xs sm:text-sm gap-2 cursor-pointer"
              onClick={() =>
                window.open(
                  `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Wandile,%20I'm%20looking%20at%20your%20photo%20gallery%20and%20want%20to%20check%20availability.`,
                  "_blank"
                )
              }
            >
              <MessageCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span>WhatsApp</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="relative max-w-4xl w-full bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Modal Controls */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-semibold text-white">
                    <MapPin className="h-3.5 w-3.5 text-blue-400" />
                    <span>{currentPhoto.location}</span>
                  </span>
                  <span className="text-xs text-slate-400">
                    {currentIndex + 1} / {SHOWCASE_PHOTOS.length}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setLightboxOpen(false)}
                  className="h-8 w-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center cursor-pointer transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Main Photo Display */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black">
                <Image
                  src={currentPhoto.src}
                  alt={`NGOBZ Mobile Event Rental - ${currentPhoto.location}`}
                  fill
                  className="object-contain"
                />

                {/* Left / Right Navigation */}
                <button
                  type="button"
                  onClick={() => prevSlide()}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md cursor-pointer transition-transform hover:scale-105"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => nextSlide()}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center backdrop-blur-md cursor-pointer transition-transform hover:scale-105"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Direct Booking CTA */}
              <div className="flex items-center justify-between gap-3 pt-2 text-left">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {currentPhoto.location}
                  </span>
                </div>

                <Button
                  className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 h-10 text-xs sm:text-sm gap-2 cursor-pointer shrink-0"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20Wandile,%20I'm%20inquiring%20about%20booking%20equipment%20from%20your%20${encodeURIComponent(
                        currentPhoto.location
                      )}%20event%20photo.`,
                      "_blank"
                    )
                  }
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
