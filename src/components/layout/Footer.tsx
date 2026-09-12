import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  ArrowUp,
  Copy,
  Check,
  Clock,
  MapPin,
  Terminal,
  Code2,
  Sparkles,
  ExternalLink
} from "lucide-react";
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
    <footer className="bg-canvas border-t border-gray-200/80 pt-16 pb-12 relative overflow-hidden text-ink">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* ── Bento Grid Layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 mb-12">

          {/* ── Bento Card 1: Identity & Live Telemetry (7 Cols) ── */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-gray-200/90 p-7 sm:p-8 shadow-xs hover:border-gray-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 rounded-full font-mono text-[11px] font-bold uppercase tracking-wider text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Hire
                </span>
                <span className="font-mono text-xs text-gray-400">01 // TELEMETRY</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-3">
                Hitesh Kumar<span className="text-cobalt">.</span>
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal max-w-xl mb-6">
                Full Stack Developer &amp; Open-Source Engineer crafting resilient web apps, reactive interfaces, and developer-first cloud architectures.
              </p>
            </div>

            {/* Status & Location Pill Badges */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-xl border border-gray-200/70 text-xs font-mono text-gray-700 shadow-2xs">
                <Clock size={13} className="text-cobalt flex-shrink-0" />
                <span className="font-bold text-ink">{timeString || "18:30:00 PM"}</span>
                <span className="text-gray-400">IST (UTC+05:30)</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-xl border border-gray-200/70 text-xs font-mono text-gray-700 shadow-2xs">
                <MapPin size={13} className="text-cobalt flex-shrink-0" />
                <span>Surat, India • Remote Ready</span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 hover:bg-ink hover:text-white rounded-xl border border-gray-200/70 text-xs font-mono font-semibold text-gray-700 hover:border-ink transition-all active:scale-95 shadow-2xs ml-auto"
                title="Click to copy email"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald-500" />
                    <span className="text-emerald-600 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} className="text-gray-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* ── Bento Card 2: Codebase & Architecture (5 Cols) ── */}
          <div className="md:col-span-5 bg-white rounded-2xl border border-gray-200/90 p-7 sm:p-8 shadow-xs hover:border-gray-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-cobalt flex items-center gap-1.5">
                  <Terminal size={13} />
                  <span>Architecture</span>
                </span>
                <span className="font-mono text-xs text-gray-400">02 // SPEC</span>
              </div>

              <h4 className="font-display font-bold text-base text-ink mb-2">
                Modern Web Engineering Stack
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Designed with strict TypeScript, modular components, and fluid micro-interactions with zero unnecessary weight.
              </p>

              {/* Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {STACK_TAGS.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[10px] font-mono font-medium bg-gray-50 text-gray-600 rounded-md border border-gray-200 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
              <a
                href="https://github.com/hitesh-kumar123/Portfolio_HK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-2 w-full px-4 py-2.5 bg-gray-50 hover:bg-cobalt hover:text-white rounded-xl border border-gray-200 hover:border-cobalt text-xs font-mono font-bold text-ink transition-all group"
              >
                <span className="flex items-center gap-2">
                  <Code2 size={14} className="text-gray-500 group-hover:text-white" />
                  <span>View Source Repository</span>
                </span>
                <ExternalLink size={12} className="text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* ── Bento Card 3: Quick Sitemap (6 Cols) ── */}
          <div className="md:col-span-6 bg-white rounded-2xl border border-gray-200/90 p-7 sm:p-8 shadow-xs hover:border-gray-300 transition-all">
            <div className="flex items-center justify-between gap-4 mb-5">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-gray-400">
                03 // Directory
              </span>
              <span className="font-mono text-xs text-gray-400">Jump to section</span>
            </div>

            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
              {siteNavItems.map(({ id, number, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left group flex items-center gap-2.5 py-1 text-xs font-medium text-gray-600 hover:text-cobalt transition-colors"
                >
                  <span className="font-mono text-[10px] font-bold text-gray-400 group-hover:text-cobalt transition-colors">
                    {number}
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Bento Card 4: Online Profiles (6 Cols) ── */}
          <div className="md:col-span-6 bg-white rounded-2xl border border-gray-200/90 p-7 sm:p-8 shadow-xs hover:border-gray-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-gray-400">
                  04 // Connect
                </span>
                <span className="font-mono text-xs text-gray-400">Social Channels</span>
              </div>

              <div className="space-y-2.5">
                {SOCIAL_CHANNELS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-2.5 px-3.5 bg-gray-50 hover:bg-white rounded-xl border border-gray-200/80 hover:border-cobalt transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={14} className="text-gray-500 group-hover:text-cobalt transition-colors" />
                        <span className="text-xs font-bold text-ink group-hover:text-cobalt transition-colors">{item.label}</span>
                        <span className="font-mono text-[11px] text-gray-400 hidden sm:inline">{item.handle}</span>
                      </div>
                      <ArrowUpRight size={13} className="text-gray-400 group-hover:text-cobalt group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Copyright Bar ── */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-ink">Hitesh Kumar</span>
            <span>•</span>
            <span>© {currentYear} • Built in Public</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-gray-400">Zero bloat • 100% Accessible</span>
            <Magnetic strength={0.25}>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-ink hover:text-white rounded-full border border-gray-200 hover:border-ink text-gray-700 transition-all font-bold shadow-2xs group"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </Magnetic>
          </div>
        </div>

      </div>
    </footer>
  );
};

