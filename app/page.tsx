"use client";

import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Roadmap from "@/components/roadmap";
import Tokenomics from "@/components/tokenomics";
import Ecosystem from "@/components/ecosystem";
import QA from "@/components/qa";
import Footer from "@/components/footer";

export default function OnlyCastLanding() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <Navigation scrollToSection={scrollToSection} />
      <Hero />
      <Roadmap />
      <Tokenomics />
      <Ecosystem />
      <QA />
      <Footer scrollToTop={scrollToTop} />
    </div>
  );
}
