import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { reviews } from "@/lib/data";

export default function Reviews() {
  return (
    <section className="py-12 my-12 dark:bg-zinc-900 bg-zinc-100 rounded-3xl border">
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-12">
        <div className="flex flex-col">
          <div className="flex items-center mb-16 leading-tight">
            <span className="inline-flex w-2 h-2 rounded-full bg-hero-green mr-2"></span>
            <p>Reviews</p>
          </div>
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold max-w-xs">
              Hear it from our <span className="text-hero-purple">clients</span>
            </h1>
            <p className="dark:text-zinc-500 mt-3">
              Read what they have to say
            </p>
          </div>
        </div>
        <Carousel className="w-full mt-12 md:mt-0">
          <CarouselContent className="-ml-1">
            {reviews.map((review, index) => (
              <CarouselItem key={review.id} className="pl-1 md:basis-full">
                <div className="h-full md:p-2">
                  <Card className="h-full">
                    <CardContent className="p-6 h-full flex flex-col justify-between">
                      <div className="mb-6">
                        <Badge>
                          {index + 1} of {reviews?.length}
                        </Badge>
                      </div>
                      <p className="text-base dark:text-zinc-400 text-zinc-600">
                        {review.content}
                      </p>
                      <div className="border-t dark:border-zinc-800 border-zinc-200 mt-8">
                        <div className="flex items-center pt-4">
                          <Avatar>
                            <AvatarImage src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <div className="ml-3">
                            <h4 className="font-medium">{review.name}</h4>
                            <p className="opacity-40 uppercase text-sm tracking-widest">
                              {review.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-end">
            <CarouselPrevious className="mr-2 w-12 h-12" />
            <CarouselNext className="w-12 h-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
