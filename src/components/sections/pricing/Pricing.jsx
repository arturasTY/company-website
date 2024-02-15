"use client";
import SectionIntro from "@/components/shared/sectionIntro";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { pricingPlans } from "@/lib/data";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { Check, ChevronRight, Sparkles, Tag } from "lucide-react";

export default function Pricing() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    const { top, left } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };
  return (
    <section className="py-12">
      <SectionIntro text="Pricing" />
      <div>
        <div className="flex gap-8 flex-col md:flex-row justify-between md:items-end my-24">
          <div className="max-w-xl space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold">
              The perfect <span className="text-hero-purple">plan</span> for
              your needs
            </h1>
            <p className="dark:text-zinc-500">
              Our transparent pricing makes it easy to find a plan that works
              within&nbsp;your financial constraints.
            </p>
          </div>
          <div>
            <div className="flex items-center md:justify-end space-x-2 mb-4">
              <Label htmlFor="airplane-mode">Monthly</Label>
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Annually</Label>
            </div>
            <p className="dark:text-zinc-500 text-sm flex items-center">
              <Tag strokeWidth={1.75} className="w-4 h-4 mr-1" />
              Pay annually and save up&nbsp;to&nbsp;
              <span className="text-hero-green font-bold">25%</span>{" "}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pricingPlans.map((plan) => (
            <div
              className="border dark:border-zinc-800 border-zinc-200 rounded-3xl p-6 md:p-10 flex flex-col relative group"
              key={plan.id}
              onMouseMove={handleMouseMove}
            >
              <motion.div
                className="absolute -inset-px pointer-events-none sm:opacity-0 sm:group-hover:opacity-100 transition duration-300 rounded-3xl"
                style={{
                  background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgb(102 52 235 / 0.15), transparent 90%)`,
                }}
              />
              {plan.recommended && (
                <Badge className="bg-hero-purple self-start text-white">
                  Recommended
                </Badge>
              )}
              {plan.new_plan && (
                <Badge variant="secondary" className="self-start">
                  New
                </Badge>
              )}
              <div className="mt-4">
                <h2 className="font-medium text-2xl">{plan.plan_type}</h2>
                <p className="dark:text-zinc-500">{plan.plan_intro}</p>
                <div className="mt-10 flex items-center">
                  <p className="text-[2.5rem] leading-none">
                    &pound;<span className="font-bold">{plan.price}</span>
                  </p>
                  <p className="text-sm mt-1 ml-3">
                    <span className="dark:text-zinc-500">per user / month</span>
                  </p>
                </div>
              </div>
              <div className="mt-10 mb-10 pt-10 border-t dark:border-zinc-800 border-zinc-200">
                <ul className="space-y-4">
                  {plan?.features.map((feature) => (
                    <li className="flex" key={feature.id}>
                      <Check strokeWidth={1} className="text-hero-green" />
                      <p className="ml-3">{feature.feature_name}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:mt-auto">
                <Button className="flex-1">
                  Buy now <ChevronRight strokeWidth={1} className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="flex-1">
                  Contact us
                  <ChevronRight strokeWidth={1} className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
