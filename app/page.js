import Hero from "@/components/sections/1 - Hero";
import Info from "@/components/sections/2 - Info";
import { Source_Sans_3 } from "next/font/google";
import React from "react";

const sourceSans = Source_Sans_3({ subsets: ["latin"], display: "swap" });

export default function Home() {
  return (
    <div className="flex-col flex w-screen scroll-smooth overflow-hidden">
      <div className="bg-[url('/shadowdrop.png')] bg-cover bg-center">
        <Hero />
      </div>
      <Info />
    </div>
  );
}
