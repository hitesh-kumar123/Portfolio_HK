import React from "react";
import { motion } from "framer-motion";
import { GitBranch, GitPullRequest, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { openSourceTimeline, OpenSourceMilestone } from "@/data/openSource";

export const OpenSourceTimeline: React.FC = () => {
  return (
    <section
      id="journey"
      className="section-container border-b border-[#D9D2C5] bg-[#F5F0E6]"
      aria-labelledby="journey-heading"
    >
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#D9D2C5]">
        <div>
          <span className="section-tag">
            04 — OPEN SOURCE
          </span>
          <h2 id="journey-heading" className="display-title font-bold text-ink">
            Collaborating in public &amp; <br />
            <span className="text-cobalt">community engineering</span>
          </h2>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-cobalt bg-[#EEE8DC] px-4 py-2 rounded-full border border-[#D9D2C5]">
          <GitBranch size={16} />
          <span>2+ Years Active Involvement</span>
        </div>
      </div>

      {/* ── Editorial Timeline Layout ── */}
      <div className="space-y-12 max-w-4xl">
        {openSourceTimeline.map((milestone, idx) => (
          <motion.div
            key={milestone.year + milestone.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-8 sm:pl-12 border-l-2 border-cobalt/40 space-y-4 group"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#F5F0E6] border-4 border-cobalt group-hover:scale-125 transition-transform" />

            {/* Year and Program Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-bold text-white bg-cobalt px-3 py-1 rounded-full shadow-xs">
                {milestone.year}
              </span>
              <span className="font-mono text-xs font-bold text-[#555048] uppercase tracking-wider">
                {milestone.program}
              </span>
            </div>

            {/* Role & Org */}
            <div className="space-y-1">
              <h3 className="font-display text-2xl sm:text-3xl text-ink font-bold tracking-tight">
                {milestone.role}
              </h3>
              <p className="font-mono text-xs text-cobalt font-bold uppercase tracking-wider">
                {milestone.organization}
              </p>
            </div>

            {/* Summary */}
            <p className="text-base text-[#3A3630] leading-relaxed font-normal max-w-3xl">
              {milestone.summary}
            </p>

            {/* Contributions Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {milestone.contributions.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3.5 bg-[#EEE8DC] rounded-xl border border-[#D9D2C5] text-xs text-ink font-medium"
                >
                  <CheckCircle2 size={16} className="text-cobalt flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* External Link */}
            {milestone.link && (
              <div className="pt-2">
                <a
                  href={milestone.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-cobalt hover:underline"
                >
                  <span>{milestone.link.label}</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* ── Bottom Callout ── */}
      <div className="mt-16 pt-8 border-t border-[#D9D2C5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[#555048] font-medium">
          <GitPullRequest size={16} className="text-cobalt" />
          <span>All pull requests, issues, and code reviews are auditable on GitHub</span>
        </div>

        <a
          href="https://github.com/hitesh-kumar123"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cobalt hover:text-ink transition-colors"
        >
          <span>Audit GitHub Activity</span>
          <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
};
