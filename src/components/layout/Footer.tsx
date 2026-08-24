import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, ArrowUp } from "lucide-react";
import { siteNavItems } from "@/data/navigation";

const SOCIAL_CHANNELS = [
  { label: "GitHub", href: "https://github.com/hitesh-kumar123", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hitesh-kumar-hk/", icon: Linkedin },
  { label: "Email", href: "mailto:hiteshdevkumar2003@gmail.com", icon: Mail },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F5F0E6] border-t border-[#D9D2C5] pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ── Top Statement & Connect Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#D9D2C5]">
          
          {/* Left: Statement */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-cobalt bg-cobalt/10 rounded-full border border-cobalt/20">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt" />
              Available for full-time roles &amp; freelance projects
            </div>

            <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink font-bold tracking-tight leading-[1.08]">
              Let's create <br />
              <span className="text-cobalt">something useful.</span>
            </h3>

            <p className="text-base sm:text-lg text-[#3A3630] font-normal max-w-lg leading-relaxed">
              Full Stack Developer building clean, high-performance web applications with React, Node.js, and modern cloud technologies.
            </p>
          </div>

          {/* Right: Navigation & Direct Channels */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-8">
            
            {/* Navigation */}
            <div>
              <span className="block font-mono text-xs font-bold uppercase tracking-wider text-[#555048] mb-4">
                Navigation
              </span>
              <ul className="space-y-3">
                {siteNavItems.map(({ id, number, label }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollTo(id)}
                      className="text-sm font-medium text-[#3A3630] hover:text-cobalt transition-colors flex items-center gap-2"
                    >
                      <span className="font-mono text-xs text-[#555048]">{number}</span>
                      <span>{label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Channels */}
            <div>
              <span className="block font-mono text-xs font-bold uppercase tracking-wider text-[#555048] mb-4">
                Connect
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
                        className="group inline-flex items-center gap-2.5 text-sm font-medium text-[#3A3630] hover:text-cobalt transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full border border-[#D9D2C5] bg-[#EEE8DC] flex items-center justify-center text-ink group-hover:border-cobalt group-hover:bg-cobalt group-hover:text-white transition-all">
                          <Icon size={14} />
                        </div>
                        <span>{item.label}</span>
                        <ArrowUpRight size={13} className="text-[#555048] group-hover:text-cobalt group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>

        </div>

        {/* ── Metadata & Back-To-Top Bar ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-ink text-lg tracking-tight">
              Hitesh Kumar<span className="text-cobalt">.</span>
            </span>
            <span className="font-mono text-xs text-[#555048] font-medium">
              © {currentYear} • BUILT IN PUBLIC
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#3A3630] hover:text-cobalt transition-colors px-4 py-2 bg-[#EEE8DC] rounded-full border border-[#D9D2C5] hover:border-cobalt shadow-2xs"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

      </div>

      {/* ── Large Subtle Background Watermark ── */}
      <div className="w-full relative select-none pointer-events-none mt-12 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex gap-16 font-display font-extrabold text-[8rem] sm:text-[12rem] md:text-[16rem] tracking-tighter text-[#111111]/[0.025] leading-none uppercase"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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
