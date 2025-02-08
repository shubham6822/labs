import Card from "@/components/Card";
import ComparisonTable from "@/components/ComparsionTable";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Price from "@/components/Price";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import React from "react";

export default function page() {
  return (
    <div className="font-[family-name:var(--font-manrope)] bg-black">
      <HeroSection />
      <div className="min-h-screen md:mx-32">
        <ProcessSection />
        <ComparisonTable />
      </div>
      <PricingSection />
      {/* <Card /> */}
      {/* <Price /> */}
      {/* <Footer /> */}
    </div>
  );
}
