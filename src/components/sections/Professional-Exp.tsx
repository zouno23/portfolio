"use client";

import { cn } from "@/lib/utils";
import { usePath } from "../../store/position";
import { useEffect, useState } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function ProExp() {
  const [display, setDisplay] = useState(false);
  const path = usePath((state) => state.path);
  useEffect(() => {
    let timeout;
    if (path === "Professional Experiences") {
      timeout = setTimeout(() => {
        setDisplay(true);
      }, 1000); // Shorter delay for quicker responsiveness
    } else {
      timeout = setTimeout(() => {
        setDisplay(false);
      }, 1000); // Delay hides the component after the animation
    }
    return () => clearTimeout(timeout);
  }, [path]);
  return (
    (path === "Professional Experiences" ?? display) && (
      <div className="flex h-full w-full px-20 pb-40 pt-20">
        <Carousel className={cn("w-0 px-8 relative transition-all duration-1000 ease-in-out",display&&"w-full")}   opts={{
        align: "start",
      }}>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <CardContainer className="inter-var m-2">
                  <CardBody className="group/card relative h-auto w-auto rounded-xl shadow-sm shadow-slate-400 backdrop-blur-[0.5px] bg-transparent p-4  sm:w-[30rem]">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      Make things float in air
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                    >
                      Hover over this card to unleash the power of CSS
                      perspective
                    </CardItem>
                    <CardItem
                      translateZ="100"
                      rotateX={20}
                      rotateZ={-10}
                      className="mt-4 w-full"
                    >
                      <Image
                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        height="1000"
                        width="1000"
                        className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="mt-20 flex items-center justify-between">
                      <CardItem
                        translateZ={20}
                        translateX={-40}
                        as="button"
                        className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                      >
                        Try now →
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        translateX={40}
                        as="button"
                        className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                      >
                        Sign up
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </CarouselItem>
            ))}
          </CarouselContent>

        </Carousel>
      </div>
      //   </div>
    )
  );
}
