import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { servicesList, ServiceOffering } from "@/data/services";

export const Services: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="section-container border-b border-[#D9D2C5] bg-[#F5F0E6]"
      aria-labelledby="services-heading"
    >
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#D9D2C5]">
        <div>
          <span className="section-tag">
            05 — WHAT I BUILD
          </span>
          <h2 id="services-heading" className="display-title font-bold text-ink">
            What I build <br />
            <span className="text-cobalt">for products, people &amp; the web</span>
          </h2>
        </div>

        <p className="text-sm font-medium text-[#555048] max-w-xs md:text-right">
          Available for contract engineering, full-stack MVP builds, and custom web product development.
        </p>
      </div>

      {/* ── Editorial Interactive List ── */}
      <div className="border-t border-[#D9D2C5] divide-y divide-[#D9D2C5]">
        {servicesList.map((service, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <motion.div
              key={service.number}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="py-8 sm:py-10 transition-colors duration-200 cursor-pointer group px-4 -mx-4 rounded-xl hover:bg-[#EEE8DC]/70"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                {/* Number & Service Title */}
                <div className="flex items-start sm:items-center gap-6">
                  <span className={`font-mono text-sm sm:text-base font-bold transition-colors ${
                    isHovered ? "text-cobalt" : "text-[#555048]"
                  }`}>
                    {service.number}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-ink font-bold tracking-tight group-hover:text-cobalt transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-[#555048] mt-1 font-medium">
                      {service.shortSummary}
                    </p>
                  </div>
                </div>

                {/* Arrow Indicator */}
                <div className="flex items-center gap-4 self-end lg:self-center">
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                    isHovered
                      ? "border-cobalt bg-cobalt text-white scale-110"
                      : "border-[#D9D2C5] bg-white text-ink"
                  }`}>
                    <ArrowUpRight size={16} className={`transition-transform duration-200 ${
                      isHovered ? "translate-x-0.5 -translate-y-0.5" : ""
                    }`} />
                  </div>
                </div>

              </div>

              {/* Expandable Narrative */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden pt-6 mt-4 border-t border-[#D9D2C5]/60 grid grid-cols-1 lg:grid-cols-12 gap-6"
                  >
                    <p className="lg:col-span-8 text-sm sm:text-base text-[#3A3630] leading-relaxed">
                      {service.description}
                    </p>
                    <div className="lg:col-span-4 flex flex-wrap gap-2 justify-start lg:justify-end self-start">
                      {service.deliverables.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider bg-white text-ink border border-[#D9D2C5] rounded-full shadow-2xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* ── Consultation CTA Bar ── */}
      <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-[#EEE8DC] border border-[#D9D2C5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-ink">
            Have a specific feature, MVP, or application in mind?
          </h3>
          <p className="text-sm text-[#555048] font-medium">
            Let's discuss timelines, tech stack architecture, and deliverables.
          </p>
        </div>

        <button
          onClick={() => scrollTo("contact")}
          className="btn-primary"
        >
          <span>Start a Conversation</span>
          <ArrowUpRight size={14} />
        </button>
      </div>
    </section>
  );
};
