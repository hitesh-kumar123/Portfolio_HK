import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, ArrowUp, Copy, Check, Clock, Globe, Sparkles, Terminal } from "lucide-react";
import { siteNavItems } from "@/data/navigation";
import { Magnetic } from "../common/Magnetic";

const SOCIAL_CHANNELS = [
  { label: "GitHub", href: "https://github.com/hitesh-kumar123", icon: Github, handle: "@hitesh-kumar123" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hitesh-kumar-hk/", icon: Linkedin, handle: "in/hitesh-kumar-hk" },
  { label: "Email", href: "mailto:hiteshdevkumar2003@gmail.com", icon: Mail, handle: "hiteshdevkumar2003@gmail.com" },
];

const STACK_TAGS = [
  "TypeScript", "React 18", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Framer Motion", "Vite"
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hiteshdevkumar2003@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-canvas border-t border-gray-200 pt-20 pb-12 relative overflow-hidden text-ink">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* ── Top Status Ribbon ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-12 border-b border-gray-200">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white rounded-full border border-gray-200 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
              Available for Full-time Roles &amp; Select Projects
            </span>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs text-gray-500">
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white rounded-full border border-gray-200 shadow-xs">
              <Clock size={13} className="text-cobalt" />
              <span className="font-bold text-ink">{timeString || "18:30:00 PM"}</span>
              <span className="text-gray-400">IST (UTC+05:30)</span>
            </div>
          </div>
        </div>

        {/* ── Big Editorial Statement & Action Bar ── */}
        <div className="py-16 border-b border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end justify-between">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-cobalt flex items-center gap-2">
              <Sparkles size={14} />
              <span>Let's collaborate</span>
            </span>
            <h3 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-ink leading-[1.05]">
              Let's create <br />
              <span className="text-cobalt">something enduring.</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-600 font-normal max-w-xl leading-relaxed pt-1">
              Full Stack Engineer specializing in reactive user interfaces, performant APIs, and developer-first web architectures.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-between gap-3 px-5 py-3.5 bg-white hover:bg-ink hover:text-white text-ink text-xs font-mono font-bold uppercase tracking-wider rounded-2xl border border-gray-200 hover:border-ink transition-all duration-200 active:scale-95 group shadow-xs w-full sm:w-auto lg:w-full"
              aria-label="Copy email address"
            >
              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-cobalt group-hover:text-white transition-colors" />
                <span className="truncate">hiteshdevkumar2003@gmail.com</span>
              </div>
              {copied ? (
                <Check size={14} className="text-emerald-500 flex-shrink-0" />
              ) : (
                <Copy size={14} className="text-gray-400 group-hover:text-white transition-colors flex-shrink-0" />
              )}
            </button>

            <a
              href="https://github.com/hitesh-kumar123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 px-5 py-3.5 bg-gray-50 hover:bg-cobalt hover:text-white text-ink text-xs font-mono font-bold uppercase tracking-wider rounded-2xl border border-gray-200 hover:border-cobalt transition-all duration-200 active:scale-95 group shadow-xs w-full sm:w-auto lg:w-full"
            >
              <div className="flex items-center gap-2.5">
                <Github size={15} className="text-gray-600 group-hover:text-white transition-colors" />
                <span>Explore GitHub Code</span>
              </div>
              <ArrowUpRight size={14} className="text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
            </a>
          </div>
        </div>

        {/* ── Structured 4-Column Directory Grid ── */}
        <div className="py-16 border-b border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Col 1: Sitemap Index */}
          <div>
            <span className="block font-mono text-xs font-bold uppercase tracking-wider text-gray-400 mb-5">
              01 / Navigation
            </span>
            <ul className="space-y-3">
              {siteNavItems.map(({ id, number, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-xs font-medium text-gray-600 hover:text-cobalt transition-colors flex items-center gap-2 group text-left"
                  >
                    <span className="font-mono text-[10px] text-gray-400 group-hover:text-cobalt transition-colors">{number}</span>
                    <span>{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Online Profiles */}
          <div>
            <span className="block font-mono text-xs font-bold uppercase tracking-wider text-gray-400 mb-5">
              02 / Profiles
            </span>
            <ul className="space-y-3">
              {SOCIAL_CHANNELS.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 text-xs font-medium text-gray-600 hover:text-cobalt transition-colors"
                    >
                      <Icon size={14} className="text-gray-400 group-hover:text-cobalt transition-colors flex-shrink-0" />
                      <span>{item.label}</span>
                      <ArrowUpRight size={12} className="text-gray-400 group-hover:text-cobalt group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3: Tech Stack */}
          <div>
            <span className="block font-mono text-xs font-bold uppercase tracking-wider text-gray-400 mb-5">
              03 / Core Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {STACK_TAGS.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] font-mono font-medium bg-white text-gray-700 rounded-md border border-gray-200 shadow-2xs hover:border-cobalt hover:text-cobalt transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Col 4: Colophon & Status */}
          <div className="space-y-4">
            <span className="block font-mono text-xs font-bold uppercase tracking-wider text-gray-400 mb-5">
              04 / Architecture
            </span>
            <div className="p-4 bg-white rounded-2xl border border-gray-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-ink">
                <Terminal size={14} className="text-cobalt" />
                <span>Modern Web Stack</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Handcrafted with React 18, TypeScript, Tailwind CSS &amp; Framer Motion. Zero bloat.
              </p>
            </div>
          </div>

        </div>

        {/* ── Bottom Copyright & Back-to-Top Bar ── */}
        <div className="pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display font-bold text-ink text-lg tracking-tight">
              Hitesh Kumar<span className="text-cobalt">.</span>
            </span>
            <span className="text-gray-300 font-mono">•</span>
            <span className="font-mono text-xs text-gray-500 font-medium">
              © {currentYear} • Built in Public
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Magnetic strength={0.3}>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-white transition-all px-5 py-2.5 bg-white hover:bg-ink rounded-full border border-gray-200 hover:border-ink shadow-xs active:scale-95 group"
                aria-label="Back to top"
              >
                <span>Back to Top</span>
                <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </Magnetic>
          </div>
        </div>

      </div>

      {/* ── Large Subtle Kinetic Watermark ── */}
      <div className="w-full relative select-none pointer-events-none mt-14 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex gap-16 font-display font-extrabold text-[8rem] sm:text-[12rem] md:text-[16rem] tracking-tighter text-black/[0.02] leading-none uppercase"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            <span>HITESH KUMAR</span>
            <span>HITESH KUMAR</span>
            <span>HITESH KUMAR</span>
            <span>HITESH KUMAR</span>
          </motion.div>
        </div>
      </div>

    </footer>
  );
};
