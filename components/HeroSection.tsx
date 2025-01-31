import React from "react";
import { Cover } from "./ui/cover";
import { Spotlight } from "./ui/Spotlight";
import Header from "./Header";

export default function HeroSection() {
  return (
    <div>
      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] font-[family-name:var(--font-manrope)] text-center ">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-0"
          fill="white"
        />
        <Header />
        <div className="relative z-10 flex justify-center items-center ">
          <div className=" text-white py-1.5 sm:py-2 md:py-3 px-3 sm:px-4 md:px-6 rounded-full inline-flex items-center space-x-2 text-[13px] sm:text-sm md:text-base border border-gray-700 bg-gradient-to-r from-blue-500/20 to-purple-500/20 z-10 ">
            <span className="font-medium text-blue-400 z-10">
              Limited Availability:
            </span>
            <span className="text-purple-300 z-10">4 spots for February</span>
          </div>
        </div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="text-4xl sm:text-7xl font-semibold relative z-20  bg-clip-text  bg-gradient-to-b from-neutral-200 to-neutral-500 py-8  ">
          Build Your MVP, Fast, Affordable,
          <br />
          and{" "}
          <Cover className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Warp speed
          </Cover>
        </div>
        <div>
          <span className="text-xl  text-gray-300">
            Have an idea? We&apos;ll handle the nerdy stuff while you take
            credit at parties
            <br />
            <span>for being a tech genius.</span>
          </span>
        </div>
      </div>
    </div>
  );
}
