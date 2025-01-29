import Hero from "@/components/sections/1 - Hero";
import { Source_Sans_3 } from "next/font/google";
import React from "react";
import CollectionHero from "./CollectionHero";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex-col flex h-fit w-screen scroll-smooth overflow-hidden min-h-screen justify-between">
      <div>
        <div className=" bg-cover bg-center h-full w-full">
          <CollectionHero />
        </div>
      </div>
    </div>
  );
}
