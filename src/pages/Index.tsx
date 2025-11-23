import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MouseTrail from "../components/MouseTrail";
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
