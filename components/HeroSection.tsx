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
          Your On-Demand Startup Team,
          <br />
          Ready to
          <Cover className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Build at speed
          </Cover>
        </div>
        <div>
          <span className="sm:text-2xl  text-gray-300">
            Have an idea? We&apos;ll handle the nerdy stuff while you take
            credit at parties
            <br className="sm:flex sm:flex-row hidden" />
            <span>for being a tech genius.</span>
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
            <span>Book a Call</span>
          </button>
        </div>
        <div className="fixed bottom-6 w-full flex justify-center z-50">
          <div
            className="border-2 border-black rounded-full bg-white text-black py-2 px-3 sm:px-6 shadow-lg mx-auto w-auto sm:w-auto"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="flex items-center justify-center gap-4 sm:gap-4">
              <nav className="flex items-center gap-6 sm:gap-4">
                <div className="hidden sm:flex items-center gap-4">
                  <a
                    className="text-sm text-gray-600 hover:text-black hover:underline transition-colors whitespace-nowrap"
                    href="#how-it-works"
                  >
                    How it works
                  </a>
                  <a
                    className="text-sm text-gray-600 hover:text-black hover:underline transition-colors whitespace-nowrap"
                    href="#pricing"
                  >
                    Pricing
                  </a>
                </div>
                <a
                  className="text-sm text-gray-600 hover:text-black hover:underline transition-colors whitespace-nowrap"
                  href="#portfolio"
                >
                  Work
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex text-sm text-gray-600 hover:text-black hover:underline transition-colors items-center"
                  href="https://twitter.com/prajwaltomar_"
                >
                  <span className="flex items-center">
                    <span>Connect on X</span>
                  </span>
                </a>
              </nav>
              <button className="justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 rounded-full bg-black text-white hover:bg-gray-800 text-xs px-3 py-2 flex items-center gap-1 whitespace-nowrap">
                <span>Book a Call</span>
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
                  className="lucide lucide-arrow-right w-3 h-3"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
