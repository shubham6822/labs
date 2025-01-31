import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <div className="relative z-10 flex  gap-2 p-8 ">
            <Image src="/logo.svg" alt="logo" width={25} height={25} />
            <p className="text-xl font-bold text-black dark:text-white">
                Logo
            </p>
        </div>
    )
}
