"use client";
import { useEffect, useRef } from "react";
import {
  Rocket,
  Palette,
  Code,
  CheckSquare,
  Upload,
  TrendingUp,
} from "lucide-react";
import ProcessCard from "./ProcessCard";

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const processes = [
    {
      number: 1,
      title: "Discovery & Ideation",
      description:
        "We kick things off by diving deep into your vision. Together, we define a clear product strategy that sets you up for success.",
      Icon: Rocket,
    },
    {
      number: 2,
      title: "UI/UX Design",
      description:
        "Design isn't just about looking good it's about  experiences users love. We craft user journeys that make your app delightful.",
      Icon: Palette,
    },
    {
      number: 3,
      title: "Development",
      description:
        "From frontend magic to backend power, we bring your vision to life with clean, efficient code and seamless UI/UX implementation.",
      Icon: Code,
    },
    {
      number: 4,
      title: "Testing & QA",
      description:
        "Before your launch, we test rigorously to ensure everything runs smoothly — no bugs, just great user experiences.",
      Icon: CheckSquare,
    },
    {
      number: 5,
      title: "Launch & Support",
      description:
        "Go live with confidence! We handle the deployment, so your users get the perfect first impression.",
      Icon: Upload,
    },
    {
      number: 6,
      title: "Growth & Iteration",
      description:
        "Launching is just the beginning! We help you scale with feature updates and performance enhancements based on real user insights.",
      Icon: TrendingUp,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 md:px-6 lg:px-8 bg-black "
      id="process"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gradient">
            How We Build Your MVP
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our proven process transforms your idea into a market-ready product
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processes.map((process, index) => (
            <div
              key={process.number}
              className="reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProcessCard {...process} />
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-16 reveal">
          <Button
            size="lg"
            className="bg-white text-background hover:bg-white/90 transition-all duration-300"
          >
            Start Your Journey
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProcessSection;
