import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <div>
            <Image src="/logo.svg" width={100} height={100} alt="logo" />
            <p className='font-[family-name:var(--font-manrope)] font-bold'>Logo</p>
        </div>
    )
}
