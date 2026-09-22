import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
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
import { Preloader } from "@/components/common/Preloader";

export const Index: React.FC = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true);
  }, []);

  return (
    <>
      {/* Preloader sits on top (fixed z-9999) while site loads beneath */}
      {!preloaderDone && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Site fades in once preloader exits */}
      <motion.div
        className="min-h-screen bg-ivory text-ink flex flex-col relative selection:bg-lime selection:text-ink"
        initial={{ opacity: 0 }}
        animate={{ opacity: preloaderDone ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
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
      </motion.div>
    </>
  );
};

export default Index;
