import React from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../../ui/button";
import { MoveRight, MoveUp, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="my-12">
      <div className="grid grid-cols-12 auto-rows-auto gap-y-4 gap-x-4 min-h-[75vh] tall:min-h-[50vh] [&>*]:rounded-3xl">
        <div className="col-span-full md:col-span-5 lg:col-span-6 relative p-6 flex flex-col items-start justify-between">
          <Badge>Stream Application</Badge>
          <div className="pt-6">
            <Avatar>
              <AvatarImage src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" />
              <AvatarFallback>UA</AvatarFallback>
            </Avatar>
            <div className="flex gap-4 items-center mb-4 md:mb-8 mt-4">
              <h1 className="text-2xl font-medium text-white flex-1 lg:flex-none">
                Business Conference
              </h1>
              <Button size="icon" className="bg-hero-green rounded-full">
                <MoveRight className="h-4 w-4 text-white" />
              </Button>
            </div>
            <p className="text-zinc-300">
              Application and solution for companies to conduct training and
              remote classes with{" "}
              <a href="" className="underline">
                unlimited video
              </a>{" "}
              conferencing.
            </p>
          </div>
          <Image
            src="/images/hero_img.jpg"
            fill
            sizes="100vw"
            className="rounded-3xl object-cover z-[-1]"
            alt="Two individuals working on laptops at a desk."
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/95 md:from-black/90 to-transparent z-[-1] rounded-3xl"></div>
        </div>
        <div className="bg-hero-purple col-span-full sm:col-span-6 md:col-span-3 row-start-2 md:row-auto p-6 flex flex-col items-start justify-between">
          <Badge>Tutorials</Badge>
          <div className="self-center pt-6">
            <Button
              size="icon"
              className="rounded-full w-24 h-24 bg-transparent border border-white group hover:bg-white"
            >
              <Play
                className="text-white h-6 w-6 fill-white group-hover:fill-hero-purple ease-in-out duration-300"
                strokeWidth={1}
              />
            </Button>
          </div>
          <div>
            <h1 className="text-2xl font-medium mt-4 text-white">
              Solutions and guides for meetings
            </h1>
          </div>
        </div>
        <div className="col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3 grid gap-4 auto-rows-fr [&>*]:rounded-3xl">
          <div className="bg-hero-green p-6 flex flex-col items-start justify-between">
            <Badge>Meeting System</Badge>
            <div className="text-white pt-6">
              <h3 className="text-2xl font-medium mb-4">
                Streaming experience
              </h3>
              <p>
                Configuration and management of the video{" "}
                <a href="" className="underline">
                  streaming panel.
                </a>
              </p>
            </div>
          </div>
          <div className="bg-hero-pink p-6 flex flex-col items-start justify-between text-white">
            <div className="flex items-end gap-4">
              <strong className="text-4xl">10M+</strong>
              <Button size="icon" className="rounded-full">
                <MoveUp className="h-4 w-4" />
              </Button>
            </div>
            <div className="pt-6">
              <p>
                Active and{" "}
                <a href="" className="underline">
                  registered users
                </a>{" "}
                in the system and platform community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
