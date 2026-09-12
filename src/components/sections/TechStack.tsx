import React from "react";
import { motion } from "framer-motion";
import { toolboxGroups } from "@/data/skills";

export const TechStack: React.FC = () => {
  return (
    <section
      id="toolbox"
      className="section-container border-b border-gray-200 bg-canvas"
      aria-labelledby="toolbox-heading"
    >
      {/* ── Section Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-gray-200">
        <div>
          <span className="section-tag">
            02 — TOOLBOX
          </span>
          <h2 id="toolbox-heading" className="display-title font-bold text-ink">
            My Toolbox &amp; <br />
            <span className="text-cobalt">technologies I work with</span>
          </h2>
        </div>

        <p className="text-sm font-medium text-gray-500 max-w-xs md:text-right">
          A catalog of languages, libraries, and frameworks I use to engineer full-stack systems.
        </p>
      </div>

      {/* ── Toolbox Groups ── */}
      <div className="space-y-12">
        {toolboxGroups.map((group) => (
          <motion.div
            key={group.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
              <span className="font-mono text-xs font-bold text-cobalt">
                {group.number}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-ink">
                {group.category}
              </span>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-cobalt hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 cursor-default shadow-2xs"
                  >
                    {/* Icon Container */}
                    <div
                      className="w-11 h-11 rounded-lg border border-gray-100 flex items-center justify-center flex-shrink-0 bg-gray-50 group-hover:bg-white group-hover:scale-105 transition-all shadow-xs"
                      style={{ color: skill.color }}
                    >
                      {Icon ? (
                        <Icon size={22} />
                      ) : (
                        <span className="font-bold font-mono text-xs text-cobalt">AI</span>
                      )}
                    </div>

                    {/* Information */}
                    <div className="space-y-1 overflow-hidden">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm font-bold text-ink group-hover:text-cobalt transition-colors truncate">
                          {skill.name}
                        </h3>
                        {group.category === "EXPLORING" && (
                          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-cobalt bg-cobalt/10 px-2 py-0.5 rounded">
                            Active
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 leading-snug font-medium">
                        {skill.context}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
