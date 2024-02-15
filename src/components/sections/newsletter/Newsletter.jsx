import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gauge, Send } from "lucide-react";
import React from "react";

export default function Newsletter() {
  return (
    <section className="my-24 ">
      <div className="md:max-w-7xl mx-auto w-full max-w-5xl px-4 text-center border  py-10 rounded-3xl dark:bg-zinc-900 bg-zinc-100">
        <div>
          <div className="flex justify-center mb-4">
            <Gauge strokeWidth={2} className="text-hero-green w-12 h-12" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold">Stay Informed</h1>
          <p className="dark:text-zinc-400 max-w-md mx-auto my-6">
            Get quarterly notifications regarding significant new features,
            events and releases.
          </p>
        </div>
        <form action="" className="max-w-md mx-auto">
          <div className="md:flex space-x-4">
            <Input type="email" placeholder="Email" />
            <Button className="w-full md:w-auto">
              <Send strokeWidth={1} className="w-4 h-4 mr-1" />
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
