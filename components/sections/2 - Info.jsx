import React from "react";
import { Button } from "../ui/button";
import Header from "../ui/1 - header";
import { Source_Serif_4, Roboto } from "next/font/google";

const sourceSerif = Source_Serif_4({ subsets: ["latin"] });

export default function Info() {
  return (
    <div className="relative overflow-hidden bg-blue-600">
      <div className="mx-auto overflow-hidden p-4 md:px-6 pt-6 lg:pt-10 lg:px-8 py-32 relative">
        <div className="grid lg:grid-cols-3 gap-8 lg:justify-between mt-36 lg:mt-56 z-10 relative max-w-[1340px] mx-auto w-full">
          <div className="flex flex-col justify-start items-start lg:col-span-2 bg-neutral-100 w-full bg-[url('/rockBG.png')]"></div>
        </div>
      </div>
    </div>
  );
}
