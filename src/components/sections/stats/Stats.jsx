import React from "react";
import SectionIntro from "../../shared/sectionIntro";

export default function Stats() {
  return (
    <section className="py-16 md:px-6">
      <SectionIntro text="Why we exist?" />
      <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-auto gap-y-16 md:gap-y-72 gap-x-16">
        <div className="md:col-start-5 md:col-end-13">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium dark:text-zinc-300 text-zinc-700">
            <span className="text-hero-green">Removing the complexity</span> of
            managing accounts to{" "}
            <span className="text-hero-green">
              accelerate setup, configuration and operation
            </span>{" "}
            of professional profiles.
          </h1>
        </div>
        <div className="md:col-span-4">
          <div className="border-t dark:border-zinc-800 border-zinc-200 py-4">
            <span className="text-7xl font-bold text-hero-green">
              50<span className="text-4xl">%</span>
            </span>
            <div className="mt-2">
              <h4 className="font-medium text-lg">Reduced Setup Time</h4>
              <p className="dark:text-zinc-400 max-w-xs">
                Reduced setup time optimises operational efficiency.
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="border-t dark:border-zinc-800 border-zinc-200 py-4">
            <span className="text-7xl font-bold text-hero-green">
              5<span className="text-5xl">x</span>
            </span>
            <div className="mt-2">
              <h4 className="font-medium text-lg">Simpler Configuration</h4>
              <p className="dark:text-zinc-400 max-w-xs">
                Use pre-configured templates to get going in no&nbsp;time.
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="border-t dark:border-zinc-800 border-zinc-200 py-4">
            <span className="text-7xl font-bold text-hero-green">
              100<span className="text-4xl">%</span>
            </span>
            <div className="mt-2">
              <h4 className="font-medium text-lg">User Empowerment</h4>
              <p className="dark:text-zinc-400 max-w-xs">
                Gain complete command of the dashboard via a&nbsp;user-friendly
                interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
