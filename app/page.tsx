"use client";

import { GridBackgroundDemo } from '@/components/GridBackgroundDemo'
import { SpotlightPreview } from '@/components/SpotlightPreview';
import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'

export default function page() {
  useEffect(() => {
    document.documentElement.classList.add("dark"); // Forces dark mode
  }, []);
  return (
    <div>
      <SpotlightPreview />
    </div>
  )
}
