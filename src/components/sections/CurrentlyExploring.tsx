import React from "react";
import { motion } from "framer-motion";
import { currentlyExploringList } from "@/data/exploring";

export const CurrentlyExploring: React.FC = () => {
  return (
    <section
      id="explore"
      className="py-16 sm:py-20 border-b border-gray-200 bg-gray-50/50"
      aria-labelledby="explore-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Top Status Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-emerald-600/30 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink">
              Currently Exploring &amp; Learning
            </span>
          </div>

          <span className="text-xs font-mono text-gray-500 font-medium">
            Active Developer Log • 2026
          </span>
        </div>

        {/* 4-Item Compact Status Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentlyExploringList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-cobalt hover:shadow-lg transition-all duration-200 space-y-3 group shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cobalt bg-cobalt/10 px-2.5 py-0.5 rounded-full">
                  {item.tag}
                </span>
                <span className="text-[10px] font-mono text-gray-400 font-semibold uppercase">
                  {item.status}
                </span>
              </div>

              <h3 className="font-display text-lg text-ink font-bold group-hover:text-cobalt transition-colors">
                {item.topic}
              </h3>

              <p className="text-xs text-gray-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
