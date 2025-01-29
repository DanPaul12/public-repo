import React from "react";
import { Button } from "../ui/button";
import Header from "../ui/1 - header";
import { Lora, Source_Serif_4, Roboto } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });
const sourceSerif = Source_Serif_4({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[url('/rockBG.png')]">
      <div className="mx-auto hero overflow-hidden p-4 md:px-6 pt-6 lg:pt-10 lg:px-8 py-32 relative">
        <Header />
        <div className="grid lg:grid-cols-3 gap-8 lg:justify-between mt-36 lg:mt-56 z-10 relative max-w-[1040px] mx-auto w-full">
          <div className="flex flex-col justify-start items-start lg:col-span-2">
            <div className="flex flex-col gap-2 sm:flex-row lg:gap-0 lg:flex-col justify-start items-start">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-black tracking-tight text-left">
                <span className={sourceSerif.className}>
                  An Archive Of <br className="hidden lg:block" />
                  <span className="text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-600 tracking-tight text-center">
                    <span className={sourceSerif.className}>
                      Ukrainian <span className="text-amber-400">Poetry.</span>
                    </span>
                  </span>
                </span>
              </h1>
            </div>
            <p className="text-lg lg:max-w-[605px] text-neutral-600 text-left mt-6">
              We have collected hundreds of videos of Ukrainian poetry from
              Tiktok, post-Russian invasion into Ukrainian. Though typically
              disregarded, social media is an incredible tool to gauge impact on
              real people.
            </p>
            <div className="flex gap-4 lg:max-w-[335px] mt-6 justify-start flex-col md:flex-row w-full">
              <Button className="w-full bg-blue-600 hover:bg-blue-600/80 border-black/30 border outline outline-1 ease-linear hover:outline hover:outline-offset-[-2.5px] hover:shadow-lg transition-all hover:outline-white/30  outline-white/30 outline-offset-[-2.5px]">
                Explore Collection
              </Button>
              <Button
                variant="outline"
                className="w-full hover:shadow-md transition-all"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="sm:w-[570px] ml-auto mt-48 lg:mt-12 h-full relative">
            <div className="ml-auto w-56 absolute lg:-rotate-12 translate-y-24 sm:-translate-x-24 lg:translate-x-0 lg:translate-y-24 hover:z-10 ">
              <div className="relative hover:scale-105 transition-all hover:shadow-2xl rounded-xl hover:relative">
                <div className="aspect-[4/5] w-full rounded-xl bg-white object-cover shadow-lg overflow-hidden relative p-4">
                  <div className=" aspect-square bg-neutral-100 rounded-md" />
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="ml-auto w-56 absolute translate-x-48 lg:rotate-12 hover:z-10">
              <div className="relative hover:scale-105 transition-all hover:shadow-2xl rounded-xl">
                <div className="aspect-[4/5] w-full rounded-xl bg-white object-cover shadow-lg overflow-hidden relative p-4">
                  <div className=" aspect-square bg-neutral-100 rounded-md" />
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="ml-auto w-56 absolute -translate-y-36 translate-x-24 hover:z-10">
              <div className="relative hover:scale-105 transition-all hover:shadow-2xl rounded-xl">
                <div className="aspect-[4/5] w-full rounded-xl bg-white object-cover shadow-lg overflow-hidden relative p-4">
                  <div className=" aspect-square bg-neutral-100 rounded-md" />
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
