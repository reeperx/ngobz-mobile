"use client";

import * as React from "react";
import { FAQS } from "@/lib/business-data";
import { AccordionItem } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-accent/20 border-t border-border/40 scroll-mt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <Badge variant="gradient" className="px-3 py-1 text-xs gap-1">
            <HelpCircle className="h-3.5 w-3.5 text-primary" />
            Got Questions?
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Everything you need to know about renting mobile coolers, warmers, and VIP toilets with NGOBZ Mobile.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              title={faq.question}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            >
              <p>{faq.answer}</p>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}
