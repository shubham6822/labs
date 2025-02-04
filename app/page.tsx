import Card from "@/components/Card";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Price from "@/components/Price";
import React from "react";

export default function page() {
  return (
    <div className="font-[family-name:var(--font-manrope)] bg-black">
      <HeroSection />
      <Card />
      <Price />
      <Footer />

    </div>
  );
}
