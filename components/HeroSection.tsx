import React from "react";
import { Cover } from "./ui/cover";
import { Spotlight } from "./ui/Spotlight";
import Header from "./Header";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] text-center ">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-0" fill="white" />
      <Header />
      <div className="flex flex-col justify-center items-center h-[80vh]">
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
          Affordable MVPs Built to Scale with
          <br />
          Your Vision
          <Cover className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Faster
          </Cover>
        </div>
        <div>
          <span className="sm:text-2xl  text-gray-300">
            Turning your SaaS, Marketplace, Website, or App idea into reality is tough. We make
            <br className="sm:flex sm:flex-row hidden" />
            <span> it faster,affordable, and stress-free for busy founders.</span>
          </span>
        </div>
        <div className=" w-full max-w-[250px] mx-auto flex flex-col sm:flex-row justify-center items-stretch space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 mt-7">
          <button className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 flex-1 bg-gradient-to-r from-blue-400 to-purple-600 text-white hover:from-blue-500 hover:to-purple-700 px-4 sm:px-6 py-3 sm:py-4 rounded-xl flex items-center justify-center space-x-2 text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-[220px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-calendar w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            <span>Book a call</span>
          </button>
        </div>
        <span className="sm:text-sm pt-6 opacity-70 text-gray-300">
          No commitment. Book a free 30-minute call today.
        </span>
        <div className="pt-8 sm:pt-14">
          <div className="cursor-pointer flex flex-col items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right w-5 h-5 transform rotate-90"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
