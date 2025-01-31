import React from 'react'
import { SpotlightPreview } from './ui/SpotlightPreview'
import { Cover } from './ui/cover'
import Header from './Header'

export default function HeroSection() {
    return (
        <div>
            <SpotlightPreview >
                <Header />
                <div className="text-[72px] sm:text-7xl font-semibold relative z-20  font-[family-name:var(--font-manrope)] bg-clip-text  bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 mt-72 text-center">
                    Build Your MVP, Fast, Affordable,<br />
                    and <Cover>Warp speed</Cover>
                </div>
            </SpotlightPreview>
        </div>
    )
}
