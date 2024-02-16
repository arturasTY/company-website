import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionIntro from "../../shared/sectionIntro";
import { faqs } from "@/lib/data";

export default function Faq() {
  return (
    <section className="py-12">
      <SectionIntro text="Why us?" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Accordion type="single" collapsible className="w-full md:col-start-2">
          {faqs.map((faq) => (
            <AccordionItem value={faq.id} key={faq.id}>
              <AccordionTrigger className="text-2xl md:text-4xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
