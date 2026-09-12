import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const METADATA_FIELDS = [
  { label: "ROLE", value: "Full Stack Developer" },
  { label: "FOCUS", value: "Web Applications (MERN & TypeScript)" },
  { label: "COMMUNITY", value: "Open Source Contributor & Project Admin" },
  { label: "EXPLORING", value: "AI Integration & LLM APIs" },
  { label: "LOCATION", value: "India (Available Remotely)" },
  { label: "STATUS", value: "Open for Full-Time & Freelance Builds" },
];

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="section-container border-b border-gray-200 bg-canvas"
      aria-labelledby="about-heading"
    >
      {/* ── Section Tag ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <span className="section-tag">
          01 — ABOUT
        </span>
      </motion.div>

      {/* ── Open Split Composition ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Left: Clean Heading & Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-6"
        >
          <h2 id="about-heading" className="display-title font-bold text-ink">
            Crafting software with <br />
            <span className="text-cobalt">structural clarity</span> <br />
            &amp; purpose.
          </h2>

          <div className="h-1 w-16 bg-cobalt rounded-full" />

          <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-medium">
            "I believe good web development is not just about writing code that compiles — it is about engineering software that is fast, maintainable, and genuinely useful."
          </p>
        </motion.div>

        {/* Right: Personal Narrative & Metadata */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-8"
        >
          {/* High Contrast Narrative */}
          <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            <p>
              I am a Full Stack Developer based in India, specializing in building responsive web applications using the MERN stack (MongoDB, Express.js, React, Node.js) and TypeScript.
            </p>
            <p>
              My background includes extensive involvement in open-source programs like GirlScript Summer of Code (GSSOC), where I served as both a contributor and Project Admin managing PRs, guiding contributors, and reviewing architectures.
            </p>
            <p>
              I actively participate in hackathons like Odoo, explore emerging AI interfaces and LLM APIs, and strive to deliver clean, dependable digital experiences.
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {METADATA_FIELDS.map((item) => (
              <div key={item.label} className="space-y-1 p-4 bg-white rounded-xl border border-gray-200 shadow-2xs hover:border-cobalt hover:shadow-sm transition-all duration-200">
                <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-cobalt">
                  {item.label}
                </span>
                <span className="block text-sm font-semibold text-ink">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Direct Link */}
          <div className="pt-2">
            <a
              href="https://github.com/hitesh-kumar123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-cobalt hover:underline group"
            >
              <span>Explore GitHub Repositories</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
