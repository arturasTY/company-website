import React from "react";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import { downloads } from "@/lib/data";

export default function Downloads() {
  return (
    <section className="py-12 px-4 md:px-6 dark:bg-zinc-900 bg-zinc-100 border rounded-3xl my-12">
      <div className="mb-6 md:mb-12">
        <h1 className="text-3xl font-bold dark:text-zinc-300 md:flex items-center relative max-w-sm md:max-w-none">
          Get Started with Downloads
          <Badge
            variant="secondary"
            className="bg-badge-light-purple text-hero-purple hover:bg-hero-purple hover:text-badge-light-purple ml-2 absolute md:static bottom-1.5"
          >
            {downloads.length}+
          </Badge>
        </h1>
      </div>
      <div className="grid grid-cols-12 auto-rows-auto gap-y-4 gap-x-4 p-6">
        <div className="col-span-full md:col-span-6 hidden md:block">
          <div className="flex items-start">
            <p className="text-sm dark:text-zinc-400">Item</p>
          </div>
        </div>
        <div className="col-span-2 hidden md:block">
          <p className="text-sm dark:text-zinc-400">Size</p>
        </div>
        <div className="col-span-2 hidden md:block">
          <p className="text-sm dark:text-zinc-400">Downloads</p>
        </div>
        <div className="col-span-2 hidden md:block">
          <p className="text-sm dark:text-zinc-400">
            Sorted by{" "}
            <a href="" className="underline">
              <strong>Popular</strong>
            </a>
          </p>
        </div>
      </div>
      <div className="mb-12 md:mt-2">
        {downloads.map((download) => (
          <div
            className="border dark:border-zinc-800 border-zinc-200 rounded-lg p-6 mb-4 bg-transparent hover:dark:bg-zinc-800 hover:bg-zinc-200 ease-in-out duration-300 cursor-pointer"
            key={download.id}
          >
            <div className="grid grid-cols-12 auto-rows-auto gap-y-4 gap-x-4 items-center">
              <div className="col-span-full md:col-span-6 md:flex gap-4 items-center">
                <div className="dark:bg-white bg-black w-10 h-10 rounded-full flex items-center justify-center mb-4 md:mb-0">
                  <span className="dark:text-black text-white font-bold">
                    {download.id}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <h1 className="text-xl font-medium order-last md:order-none">
                      {download.title}
                    </h1>
                    <div className="mb-3 md:mb-0">
                      {download.badges.map((badge) => (
                        <Badge
                          variant="secondary"
                          className={`${badge.colour} text-badge-light-purple mr-3 md:mr-0 md:ml-3 dark:hover:bg-transparent hover:border-zinc-500 dark:hover:text-zinc-300 hover:text-zinc-800 ease-in-out duration-300`}
                          key={badge.id}
                        >
                          {badge.title}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-full md:col-span-2">
                <h3 className="flex justify-between items-center">
                  <span className="inline-block md:hidden text-sm dark:text-zinc-400">
                    Size
                  </span>
                  <strong>{download.size}</strong>
                </h3>
              </div>
              <div className="col-span-full md:col-span-2">
                <h3 className="flex justify-between items-center">
                  <span className="inline-block md:hidden text-sm dark:text-zinc-400">
                    Downloads
                  </span>
                  <strong>{download.downloads}+</strong>
                </h3>
              </div>
              <div className="col-span-full md:col-span-2 lg:block mt-4 md:mt-0">
                <Button className="md:hidden lg:inline-flex w-full md:w-auto">
                  {download.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="icon" className="hidden md:inline-flex lg:hidden">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button variant="outline">
          <ArrowDown strokeWidth={1} className="mr-2 h-4 w-4" />
          See more
        </Button>
      </div>
    </section>
  );
}
