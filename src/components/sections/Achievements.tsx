import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { achievementsList, AchievementRecord } from "@/data/achievements";

export const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      className="section-container border-b border-gray-200 bg-canvas"
      aria-labelledby="achievements-heading"
    >
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-gray-200">
        <div>
          <span className="section-tag">
            06 — MILESTONES
          </span>
          <h2 id="achievements-heading" className="display-title font-bold text-ink">
            Milestones, hackathons &amp; <br />
            <span className="text-cobalt">program recognitions</span>
          </h2>
        </div>

        <p className="text-sm font-medium text-gray-500 max-w-xs md:text-right">
          Verifiable recognitions from national hackathons, open-source programs, and developer events.
        </p>
      </div>

      {/* ── Editorial Milestone List ── */}
      <div className="border-t border-gray-200 divide-y divide-gray-200">
        {achievementsList.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group hover:bg-white px-5 -mx-5 rounded-2xl transition-all duration-200 border border-transparent hover:border-gray-200 hover:shadow-md"
          >
            {/* Year & Status Pill */}
            <div className="lg:col-span-3 space-y-2">
              <span className="font-mono text-xs font-bold text-gray-500 block">
                {item.year}
              </span>
              <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-wider text-cobalt bg-cobalt/10 px-2.5 py-1 rounded-full border border-cobalt/20">
                {item.status}
              </span>
            </div>

            {/* Title & Organization */}
            <div className="lg:col-span-5 space-y-1">
              <h3 className="font-display text-2xl text-ink font-bold tracking-tight group-hover:text-cobalt transition-colors">
                {item.title}
              </h3>
              <p className="font-mono text-xs text-gray-500 uppercase tracking-wider font-semibold">
                {item.organization}
              </p>
            </div>

            {/* Description & Link */}
            <div className="lg:col-span-4 space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed font-normal">
                {item.description}
              </p>
              {item.link && (
                <a
                  href={item.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-cobalt hover:underline"
                >
                  <span>{item.link.text}</span>
                  <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
