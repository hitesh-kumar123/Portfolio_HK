import React from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { OpenSourceTimeline } from "@/components/sections/OpenSourceTimeline";
import { Services } from "@/components/sections/Services";
import { Achievements } from "@/components/sections/Achievements";
import { CurrentlyExploring } from "@/components/sections/CurrentlyExploring";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { ScrollProgress } from "@/components/common/ScrollProgress";

export const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory text-ink flex flex-col relative selection:bg-lime selection:text-ink">
      <ScrollProgress />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <OpenSourceTimeline />
        <Services />
        <Achievements />
        <CurrentlyExploring />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
