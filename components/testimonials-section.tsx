"use client";

import * as React from "react";
import { TESTIMONIALS } from "@/lib/business-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, CheckCircle } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <Badge variant="gradient" className="px-3 py-1 text-xs">
            Client Feedback
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Trusted by Families & Event Organizers
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Read real feedback from clients who trusted NGOBZ Mobile for their weddings, celebrations, and ceremonies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <Card
              key={t.id}
              className="flex flex-col justify-between border-border/70 bg-card/60 backdrop-blur-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-primary/30" />
                </div>

                <p className="text-sm text-foreground/90 italic leading-relaxed">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </CardContent>

              <div className="pt-4 border-t border-border/40 mt-4 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-foreground flex items-center gap-1">
                    {t.name}
                    <CheckCircle className="h-3 w-3 text-emerald-500" />
                  </h4>
                  <span className="text-muted-foreground">{t.location}</span>
                </div>
                <Badge variant="secondary" className="text-[10px]">
                  {t.eventType}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
