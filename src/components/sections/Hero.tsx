import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import hiteshImage from "@/assets/Hitesh_Kumar.jpg";
import { Magnetic } from "@/components/common/Magnetic";

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full relative pt-28 sm:pt-36 pb-24 flex flex-col justify-between border-b border-gray-200 bg-canvas"
      aria-label="Hero Introduction"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto">

        {/* ── Top Metadata Tag ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-4 border-b border-gray-200"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white rounded-full border border-gray-200 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
              Full Stack Developer &amp; Open Source Contributor
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-gray-500 font-semibold">
            <span>MERN STACK</span>
            <span>•</span>
            <span>OPEN SOURCE</span>
            <span>•</span>
            <span className="text-cobalt">AI EXPLORATION</span>
            <span>•</span>
            <span>2026</span>
          </div>
        </motion.div>

        {/* ── Main Hero Composition ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Clean Architectural Headline */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-bold tracking-tight text-ink leading-[0.98] uppercase">
                Building <br />
                meaningful web <br />
                <span className="text-cobalt">products.</span>
              </h1>
            </motion.div>

            {/* High Contrast Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl space-y-4"
            >
              <p className="text-lg sm:text-2xl text-gray-700 font-normal leading-relaxed">
                Hi, I'm <strong className="text-ink font-bold">Hitesh Kumar</strong>. I build scalable full-stack web applications, lead open-source initiatives, and design intuitive digital experiences.
              </p>
            </motion.div>

            {/* Unified CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Magnetic strength={0.25}>
                <button
                  onClick={() => scrollTo("work")}
                  className="btn-primary group"
                >
                  <span>View Selected Work</span>
                  <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform duration-200" />
                </button>
              </Magnetic>

              <Magnetic strength={0.25}>
                <button
                  onClick={() => scrollTo("contact")}
                  className="btn-secondary group"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </Magnetic>

              {/* Social Channels Minimal */}
              <div className="flex items-center gap-2 sm:ml-4 border-l border-gray-200 pl-4 py-1">
                <Magnetic strength={0.35}>
                  <a
                    href="https://github.com/hitesh-kumar123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    aria-label="GitHub Profile"
                  >
                    <Github size={16} />
                  </a>
                </Magnetic>
                <Magnetic strength={0.35}>
                  <a
                    href="https://www.linkedin.com/in/hitesh-kumar-hk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={16} />
                  </a>
                </Magnetic>
                <Magnetic strength={0.35}>
                  <a
                    href="mailto:hiteshdevkumar2003@gmail.com"
                    className="icon-btn"
                    aria-label="Email Hitesh"
                  >
                    <Mail size={16} />
                  </a>
                </Magnetic>
              </div>
            </motion.div>

          </div>

          {/* Right: Personal Photo Frame */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[320px] sm:max-w-[360px] group"
            >
              {/* Offset Accent Layer */}
              <div className="absolute inset-0 bg-cobalt rounded-3xl translate-x-3 translate-y-3 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 shadow-lg shadow-cobalt/20" />

              {/* Main Photo Card */}
              <div className="relative rounded-3xl border-2 border-ink bg-white p-3 shadow-xl group-hover:-translate-y-1 transition-transform duration-300">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-black/5">
                  <img
                    src={hiteshImage}
                    alt="Hitesh Kumar Full Stack Developer"
                    className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom Image Annotation */}
                <div className="pt-3 px-1 flex items-center justify-between text-xs text-ink">
                  <span className="font-bold tracking-tight">Hitesh Kumar</span>
                  <span className="text-cobalt font-semibold font-mono">Full Stack Dev</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* ── Bottom Section Pointer ── */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-cobalt" />
            <span>AVAILABLE FOR FULL-TIME ROLES &amp; FREELANCE BUILDS</span>
          </div>

          <button
            onClick={() => scrollTo("about")}
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink hover:text-cobalt transition-colors"
          >
            <span>Read Biography &amp; Toolbox</span>
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
