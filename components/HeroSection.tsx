import React from 'react'
import { Cover } from './ui/cover'
import Header from './Header'
import { Spotlight } from './ui/Spotlight'

export default function HeroSection() {
    return (
        <div>
            <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-0"
                    fill="white"
                />
                <div className="relative z-10 flex  gap-2 p-8 ">
                    <p className="font-[family-name:var(--font-manrope)] text-xl font-bold text-black dark:text-white">
                        Logo
                    </p>
                </div>

                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="text-[72px] sm:text-7xl font-semibold relative z-20  font-[family-name:var(--font-manrope)] bg-clip-text  bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 mt-64 text-center">
                    Lorem ipsum dolor sit amet.<br />
                    {/* Build Your MVP, Fast, Affordable, */}
                    and <Cover>Warp speed</Cover>
                </div>
            </div>
        </div>
    )
}
