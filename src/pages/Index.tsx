import { useEffect } from "react";
import Navigation from "../components/common/Navigation";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Certificates from "../components/sections/Certificates";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import MouseTrail from "../components/common/MouseTrail";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Set page title
    document.title = "Hitesh Kumar - Software Engineer | Portfolio";
  }, []);

  return (
    <>
      <MouseTrail />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
