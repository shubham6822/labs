import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="relative z-10 flex  gap-2 px-8 pt-5 justify-between ">
      <div className="flex items-center gap-2">
        <Image src="/loop.png" alt="logo" width={25} height={25} />
        <p className="text-xl font-bold text-black dark:text-white">Looply</p>
      </div>
      <Link
        href={"https://x.com/shubham6822"}
        target="_blank"
        className="z-[100] relative group flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer active:scale-95 touch-auto"
      >
        <span className="text-sm text-gray-400 group-hover:text-white font-medium transition-colors pointer-events-none">
          @shubham6822
        </span>
        <span className="hidden sm:inline-block px-2 py-0.5 text-xs bg-gradient-to-r from-blue-400/20 to-purple-400/20 text-blue-300 rounded-full border border-blue-400/20 pointer-events-none">
          Follow Us
        </span>
      </Link>
    </div>
  );
}
