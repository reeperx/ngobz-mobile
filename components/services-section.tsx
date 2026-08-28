"use client";

import * as React from "react";
import { SERVICES, BUSINESS_INFO } from "@/lib/business-data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle, Sparkles, Shield, Flame, Snowflake, Bath } from "lucide-react";

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");

  const filteredServices = activeCategory === "all"
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "toilets":
        return <Bath className="h-5 w-5 text-indigo-500" />;
      case "coolers":
        return <Snowflake className="h-5 w-5 text-blue-500" />;
      case "warmers":
        return <Flame className="h-5 w-5 text-amber-500" />;
      default:
        return <Sparkles className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-accent/20 border-y border-border/40 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <Badge variant="gradient" className="px-3 py-1 text-xs">
            Comprehensive Event Inventory
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Complete Mobile Event Equipment Hire
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            From spotless sanitation to precision temperature control, our modern mobile units keep your food, drinks, and guests perfectly taken care of.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: "all", label: "All Equipment" },
              { id: "toilets", label: "Mobile & VIP Toilets" },
              { id: "coolers", label: "Mobile Coolers" },
              { id: "warmers", label: "Food Warmers" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-muted-foreground border border-border hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card
              key={service.id}
              className="flex flex-col justify-between overflow-hidden border-border/70 bg-card hover:border-primary/50 hover:shadow-xl transition-all duration-300 group"
            >
              <CardHeader className="space-y-3 pb-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-accent border border-border/60">
                    {getCategoryIcon(service.category)}
                  </div>
                  {service.badge && (
                    <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 font-semibold">
                      {service.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.name}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {service.tagline}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 flex-1">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {service.description}
                </p>

                {/* Features checklist */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Included Features
                  </span>
                  <ul className="space-y-1.5">
                    {service.features.slice(0, 4).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical specs pill container */}
                <div className="rounded-xl bg-accent/40 p-3 border border-border/40 space-y-1.5">
                  {service.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between text-xs">
                      <span className="text-muted-foreground">{spec.label}:</span>
                      <span className="font-semibold text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-4 border-t border-border/40 flex gap-2">
                <Button
                  variant="gradient"
                  className="w-full gap-2 text-sm"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20NGOBZ%20Mobile,%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(
                        service.name
                      )}%20for%20my%20event.`,
                      "_blank"
                    )
                  }
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Book on WhatsApp</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
