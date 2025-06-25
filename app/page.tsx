import ComparisonTable from "@/components/ComparsionTable";
import Floating from "@/components/Floating";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import { ProjectCard } from "@/components/ProjectCard";
import { DATA } from "@/lib/data";
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
      <Floating />
      <div className="max-w-4xl mx-auto  py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {DATA.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            href={item.href}
            description={item.description}
            dates={item.dates}
            technologies={item.technologies}
            video={item.video}
            image={item.image}
            active={item.active}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
