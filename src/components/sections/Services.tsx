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
      className="section-container border-b border-gray-200 bg-canvas"
      aria-labelledby="services-heading"
    >
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-gray-200">
        <div>
          <span className="section-tag">
            05 — WHAT I BUILD
          </span>
          <h2 id="services-heading" className="display-title font-bold text-ink">
            What I build <br />
            <span className="text-cobalt">for products, people &amp; the web</span>
          </h2>
        </div>

        <p className="text-sm font-medium text-gray-500 max-w-xs md:text-right">
          Available for contract engineering, full-stack MVP builds, and custom web product development.
        </p>
      </div>

      {/* ── Editorial Interactive List ── */}
      <div className="border-t border-gray-200 divide-y divide-gray-200">
        {servicesList.map((service, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <motion.div
              key={service.number}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="py-8 sm:py-10 transition-all duration-200 cursor-pointer group px-5 -mx-5 rounded-2xl hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                {/* Number & Service Title */}
                <div className="flex items-start sm:items-center gap-6">
                  <span className={`font-mono text-sm sm:text-base font-bold transition-colors ${
                    isHovered ? "text-cobalt" : "text-gray-400"
                  }`}>
                    {service.number}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-ink font-bold tracking-tight group-hover:text-cobalt transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-gray-500 mt-1 font-medium">
                      {service.shortSummary}
                    </p>
                  </div>
                </div>

                {/* Arrow Indicator */}
                <div className="flex items-center gap-4 self-end lg:self-center">
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                    isHovered
                      ? "border-cobalt bg-cobalt text-white scale-110 shadow-sm"
                      : "border-gray-200 bg-gray-50 text-ink"
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
                    className="overflow-hidden pt-6 mt-4 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-6"
                  >
                    <p className="lg:col-span-8 text-sm sm:text-base text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="lg:col-span-4 flex flex-wrap gap-2 justify-start lg:justify-end self-start">
                      {service.deliverables.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-800 border border-gray-200 rounded-full"
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
      <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-white border border-gray-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-ink">
            Have a specific feature, MVP, or application in mind?
          </h3>
          <p className="text-sm text-gray-500 font-medium">
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
