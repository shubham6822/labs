import Card from "@/components/Card";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import React from "react";

export default function page() {
  return (
    <div className="font-[family-name:var(--font-manrope)] bg-black">
      <HeroSection />
      <Card />
      <Footer />
      <div className="w-full flex flex-col lg:flex-row lg:flex items-center justify-center  space-x-0 lg:space-x-10 space-y-10 lg:space-y-0">
        <div
          className="h-[600px] md:h-[850px] w-full bg-black rounded-3xl p-6 lg:p-8 xl:p-16 border"
        // style="opacity: 1;"
        >
          <span className="text-white">Hobby</span>
          <div className="flex items-end gap-1 my-9">
            <span className="text=[#737373] font-semibold">$</span>
            <span className="text-4xl md:text-7xl text-white -mb-1 font-bold">
              99
            </span>
            <span className="text=[#737373]">/month</span>
          </div>
          <button
            // style="box-shadow:0px 4px 14.8px rgba(0, 0, 0, 0.2)"
            className="flex items-center justify-center w-full h-10 rounded-2xl p-6 font-medium text-lg bg-gradient-to-b border border-emerald-700 from-emerald-500 to-brand text-white my-10"
          >
            Get Hobby
          </button>
          <div className="space-y-2">
            <div className="flex items-start gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#000000"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#F2F1FF"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-sm md:text-base mt-1">
                Access to basic analytics reports
              </p>
            </div>
            <div className="flex items-start gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#000000"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#F2F1FF"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-sm md:text-base mt-1">
                Up to 10,000 data points per month
              </p>
            </div>
            <div className="flex items-start gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#000000"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#F2F1FF"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-sm md:text-base mt-1">Email support</p>
            </div>
            <div className="flex items-start gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#000000"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#F2F1FF"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-sm md:text-base mt-1">Community forum access</p>
            </div>
            <div className="flex items-start gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#000000"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#F2F1FF"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-sm md:text-base mt-1">Cancel anytime</p>
            </div>
          </div>
        </div>
        <div
          className="relative h-[1050px] w-full my-16 md:my-0 bg-white rounded-3xl p-6 lg:p-8 xl:p-16 border shadow-[0px_10px_23px_0px_#0000001a,0px_41px_41px_0px_#00000017,0px_92px_55px_0px_#0000000d,0px_164px_66px_0px_#00000003,0px_257px_72px_0px_#00000000]"
        // style="opacity: 1; transform: none;"
        >
          <div className="flex items-center justify-between">
            <span className="text-black text-lg font-semibold">Starter</span>
            <div className="bg-black py-1 px-3 rounded-full">Featured</div>
          </div>
          <div className="flex items-end gap-1 my-9">
            <span className="text-black font-semibold">$</span>
            <span className="text-4xl md:text-4xl md:text-7xl text-black -mb-1 font-bold">
              299
            </span>
            <span className="text-black font-bold">/month</span>
          </div>
          <button
            // style="box-shadow:0px 4px 14.8px rgba(0, 0, 0, 0.2)"
            className="flex items-center justify-center w-full h-10 rounded-2xl p-6 font-medium text-lg bg-black my-10"
          >
            Get Starter
          </button>
          <div className="space-y-3">
            <div className="flex items-center gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#ffffff"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#2BC8FD"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-black text-sm md:text-base mt-0.5">
                Advanced analytics dashboard
              </p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#ffffff"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#2BC8FD"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-black text-sm md:text-base mt-0.5">
                Customizable reports and charts
              </p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#ffffff"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#2BC8FD"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-black text-sm md:text-base mt-0.5">
                Real-time data tracking
              </p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#ffffff"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#2BC8FD"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-black text-sm md:text-base mt-0.5">
                Integration with third-party tools
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center my-16">
            <div className="w-full h-0.5 bg-black"></div>
            <div className="absolute left-1/2 flex items-center justify-center size-6 rounded-full bg-black text-white -ml-2 text-2xl shadow-[0px_0px_0px_0px_#00000000,0px_0px_0px_0px_#00000000,0px_-1px_0px_0px_#E5E5E5]">
              <span className="-mt-1">+</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#ffffff"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#2BC8FD"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-black text-sm md:text-base mt-1">
                Access to basic analytics reports
              </p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#ffffff"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#2BC8FD"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-black text-sm md:text-base mt-1">
                Community forum access
              </p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#ffffff"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#2BC8FD"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-black text-sm md:text-base mt-1">
                Unlimited Tokens
              </p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#ffffff"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#2BC8FD"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-black text-sm md:text-base mt-1">24x7 Support</p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#ffffff"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#2BC8FD"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-black text-sm md:text-base mt-1">
                Everything in Hobby Plan
              </p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#ffffff"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#2BC8FD"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-black text-sm md:text-base mt-1">Cancel anytime</p>
            </div>
          </div>
          <div className="absolute md:-top-20 -top-8 md:-right-6 right-0 rotate-[-15deg]">
            <div >
              <div
                // style="background:linear-gradient(147.09deg, #fbfbfb 9.63%, #e8e8e8 91.74%)"
                className="size-16 md:size-20 lg:size-28 flex items-center justify-center rounded-xl lg:rounded-3xl border border-[#f3f3f3] shadow-[0px_5px_11px_0px_rgba(0,0,0,0.1),0px_20px_20px_0px_rgba(0,0,0,0.09),0px_44px_27px_0px_rgba(0,0,0,0.05),0px_79px_32px_0px_rgba(0,0,0,0.01),0px_123px_35px_0px_rgba(0,0,0,0)]"
              >
                <svg
                  width="39"
                  height="51"
                  viewBox="0 0 39 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 md:h-20 md:w-20 h-10 w-10"
                >
                  <g filter="url(#filter0_di_309_821)">
                    <path
                      d="M28.4037 17H22.9204C22.3083 17 21.8399 16.455 21.9318 15.8498L23.0424 8.53875C23.0806 8.28789 23.0686 8.03089 23.0071 7.78565C22.9456 7.54042 22.8361 7.31285 22.6863 7.11878C22.5365 6.92471 22.3499 6.76882 22.1396 6.66195C21.9292 6.55509 21.7002 6.49982 21.4684 6.5H13.2526C12.8753 6.50012 12.5103 6.647 12.2225 6.91454C11.9346 7.18207 11.7425 7.55294 11.6802 7.96125L9.02186 25.4612C8.98364 25.712 8.99565 25.9688 9.05706 26.2139C9.11847 26.459 9.2278 26.6865 9.37745 26.8806C9.52709 27.0746 9.71347 27.2305 9.9236 27.3375C10.1337 27.4445 10.3626 27.4999 10.5942 27.5H15.973C16.5253 27.5 16.973 27.9477 16.973 28.5V37.8148C16.973 38.8346 18.3204 39.2002 18.8358 38.3203L29.7465 19.6968C29.9015 19.4323 29.9887 19.1269 29.999 18.8126C30.0092 18.4983 29.9421 18.1868 29.8047 17.9109C29.6673 17.6349 29.4647 17.4047 29.2182 17.2444C28.9716 17.0841 28.6903 16.9997 28.4037 17Z"
                      fill="#25A18E"
                    ></path>
                    <path
                      d="M28.4037 17H22.9204C22.3083 17 21.8399 16.455 21.9318 15.8498L23.0424 8.53875C23.0806 8.28789 23.0686 8.03089 23.0071 7.78565C22.9456 7.54042 22.8361 7.31285 22.6863 7.11878C22.5365 6.92471 22.3499 6.76882 22.1396 6.66195C21.9292 6.55509 21.7002 6.49982 21.4684 6.5H13.2526C12.8753 6.50012 12.5103 6.647 12.2225 6.91454C11.9346 7.18207 11.7425 7.55294 11.6802 7.96125L9.02186 25.4612C8.98364 25.712 8.99565 25.9688 9.05706 26.2139C9.11847 26.459 9.2278 26.6865 9.37745 26.8806C9.52709 27.0746 9.71347 27.2305 9.9236 27.3375C10.1337 27.4445 10.3626 27.4999 10.5942 27.5H15.973C16.5253 27.5 16.973 27.9477 16.973 28.5V37.8148C16.973 38.8346 18.3204 39.2002 18.8358 38.3203L29.7465 19.6968C29.9015 19.4323 29.9887 19.1269 29.999 18.8126C30.0092 18.4983 29.9421 18.1868 29.8047 17.9109C29.6673 17.6349 29.4647 17.4047 29.2182 17.2444C28.9716 17.0841 28.6903 16.9997 28.4037 17Z"
                      fill="url(#paint0_linear_309_821)"
                      fill-opacity="0.7"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_di_309_821"
                      x="0"
                      y="0.5"
                      width="39"
                      height="50.3164"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset dy="3"></feOffset>
                      <feGaussianBlur stdDeviation="4.5"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_309_821"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_309_821"
                        result="shape"
                      ></feBlend>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset></feOffset>
                      <feGaussianBlur stdDeviation="1.24444"></feGaussianBlur>
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      ></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect2_innerShadow_309_821"
                      ></feBlend>
                    </filter>
                    <linearGradient
                      id="paint0_linear_309_821"
                      x1="15"
                      y1="3.93902"
                      x2="41.039"
                      y2="28.2012"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#7BD1FF"></stop>
                      <stop
                        offset="1"
                        stop-color="#7BD1FF"
                        stop-opacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-[800px] md:h-[850px] w-full bg-[#F5F5F5] rounded-3xl p-6 lg:p-8 xl:p-16 border"
        // style="opacity: 1;"
        >
          <span className="text-black">Pro</span>
          <div className="flex items-end gap-1 my-9">
            <span className="text=[#737373] font-semibold">$</span>
            <span className="text-4xl md:text-7xl text-black -mb-1 font-bold">
              1490
            </span>
            <span className="text=[#737373]">/month</span>
          </div>
          <button
            // style={{boxShadow:0px 4px 14.8px rgba(0, 0, 0, 0.2)}}
            className="flex items-center justify-center w-full h-10 rounded-2xl p-6 font-medium text-lg bg-gradient-to-b border border-emerald-700 from-emerald-500 to-brand text-white my-10"
          >
            Get Pro
          </button>
          <div className="space-y-2">
            <div className="flex items-center gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#000000"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#F2F1FF"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-sm md:text-base mt-1">Unlimited data storage</p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#000000"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#F2F1FF"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-sm md:text-base mt-1">Customizable dashboards</p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#000000"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#F2F1FF"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-sm md:text-base mt-1">
                Advanced data segmentation
              </p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#000000"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#F2F1FF"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-sm md:text-base mt-1">Real-time data processing</p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#000000"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#F2F1FF"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-sm md:text-base mt-1">AI-powered insights</p>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center my-14">
            <div className="w-full h-0.5 bg-[#E5E5E5]"></div>
            <div className="absolute left-1/2 flex items-center justify-center size-6 rounded-full bg-white text-[#515151] -ml-2 text-2xl shadow-[0px_0px_0px_0px_#00000000,0px_0px_0px_0px_#00000000,0px_-1px_0px_0px_#E5E5E5]">
              <span className="-mt-1">+</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#0EA5E9"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#0EA5E9"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#F2F1FF"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-sm md:text-base mt-1">Everything in Hobby Plan</p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 h-8 w-8"
              >
                <g clip-path="url(#clip0_294_975)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2969 32.25C7.59612 32.25 0.546875 25.1962 0.546875 16.5C0.546875 7.80375 7.59612 0.75 16.2969 0.75C24.9931 0.75 32.0469 7.80375 32.0469 16.5C32.0469 25.1962 24.9931 32.25 16.2969 32.25Z"
                    fill="#9BE9FF"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    fill="#0EA5E9"
                  ></path>
                  <path
                    d="M16.3007 25.6952C11.2232 25.6952 7.10938 21.5788 7.10938 16.5038C7.10938 11.4289 11.2232 7.3125 16.3007 7.3125C21.3757 7.3125 25.4921 11.4289 25.4921 16.5038C25.4921 21.5788 21.3757 25.6952 16.3007 25.6952Z"
                    stroke="#0EA5E9"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M20.3832 14.4619L15.2768 19.5684L12.2148 16.5037"
                    stroke="#F2F1FF"
                    stroke-width="1.96875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_294_975">
                    <rect
                      width="32"
                      height="33"
                      fill="white"
                      transform="translate(0.296875)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-sm md:text-base mt-1">Cancel anytime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
