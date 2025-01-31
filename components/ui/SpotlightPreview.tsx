import React from "react";
import { Spotlight } from "./Spotlight";

export function SpotlightPreview({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex  justify-center">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-0"
                fill="white"
            />
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            {children}
        </div>
    );
}
