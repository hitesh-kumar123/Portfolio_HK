import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, BookOpen, ArrowUpRight, Grid } from "lucide-react";
import { projectsData, Project } from "@/data/projects";
import { CaseStudyModal } from "../modals/CaseStudyModal";
import { ProjectArchiveModal } from "../modals/ProjectArchiveModal";
import { TiltCard } from "../common/TiltCard";
import { Magnetic } from "../common/Magnetic";

export const Projects: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  // Signature Interaction: Floating Cursor Preview for Desktop
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouchDevice) return;
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // Featured 3 curated projects
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <>
      <section
        id="work"
        onMouseMove={handleMouseMove}
        className="section-container border-b border-gray-200 bg-canvas relative"
        aria-labelledby="work-heading"
      >
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-gray-200">
          <div>
            <span className="section-tag">
              03 — SELECTED WORK
            </span>
            <h2 id="work-heading" className="display-title font-bold text-ink">
              Selected builds &amp; <br />
              <span className="text-cobalt">production web applications</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Magnetic strength={0.2}>
              <button
                onClick={() => setIsArchiveOpen(true)}
                className="btn-secondary group"
              >
                <Grid size={14} className="group-hover:rotate-90 transition-transform duration-300" />
                <span>Browse All Work ({projectsData.length})</span>
              </button>
            </Magnetic>
          </div>
        </div>

        {/* ── Curated Balanced 3-Column Editorial Grid with 3D Tilt ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              className="h-full"
            >
              <TiltCard
                maxTilt={4}
                spotlight={true}
                spotlightColor="rgba(37, 99, 235, 0.12)"
                className="h-full group flex flex-col bg-white rounded-2xl border border-gray-200 hover:border-cobalt hover:shadow-2xl transition-all duration-300 overflow-hidden shadow-xs"
              >
                <article className="flex flex-col h-full">
                  {/* Image Preview Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/5 border-b border-gray-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-all duration-700 ease-[0.16,1,0.3,1]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Project Number & Category Pill */}
                    <div className="absolute top-4 left-4 bg-ink px-2.5 py-0.5 text-[10px] font-mono font-bold text-white rounded shadow-sm">
                      0{idx + 1}
                    </div>

                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink shadow-sm rounded-full border border-gray-200 transition-transform group-hover:scale-105">
                      {project.category}
                    </div>
                  </div>

                  {/* Information Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded-md border border-gray-200 transition-all duration-200 hover:border-cobalt hover:text-cobalt hover:-translate-y-0.5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-2xl text-ink font-bold tracking-tight group-hover:text-cobalt transition-colors duration-200">
                        {project.title}
                      </h3>

                      {/* Description with WCAG contrast */}
                      <p className="text-sm text-gray-600 leading-relaxed font-normal">
                        {project.description}
                      </p>
                    </div>

                    {/* Card Actions Footer */}
                    <div className="pt-5 border-t border-gray-200 flex flex-col gap-2.5">
                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        className="w-full py-2.5 bg-gray-50 hover:bg-ink hover:text-white text-ink text-xs font-mono font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 border border-gray-200 transition-all duration-200 hover:shadow-xs active:scale-98 group/btn"
                      >
                        <BookOpen size={14} className="group-hover/btn:scale-110 transition-transform" />
                        <span>Read Case Study</span>
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 bg-white hover:bg-ink hover:text-white border border-gray-200 text-ink text-xs font-mono font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-98 group/gh shadow-2xs"
                        >
                          <Github size={14} className="group-hover/gh:rotate-12 transition-transform" />
                          <span>Code</span>
                        </a>

                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 bg-cobalt hover:bg-cobalt-hover text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition-all duration-200 shadow-xs hover:shadow-md active:scale-98 group/live"
                        >
                          <span>Live App</span>
                          <ArrowUpRight size={14} className="group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>

                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* ── Global Archive Banner CTA ── */}
        <div className="p-8 sm:p-12 rounded-2xl border border-gray-200 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:shadow-lg transition-shadow shadow-xs">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-cobalt">
              CATALOG ARCHIVE
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-ink font-bold tracking-tight">
              Looking for more projects &amp; experiments?
            </h3>
            <p className="text-sm text-gray-500 max-w-lg font-medium">
              Explore the complete archive containing frontends, API prototypes, and open-source challenges.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Magnetic strength={0.2}>
              <button
                onClick={() => setIsArchiveOpen(true)}
                className="btn-primary"
              >
                <span>View All Work →</span>
              </button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a
                href="https://github.com/hitesh-kumar123"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={14} />
                <span>GitHub Archive</span>
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* Signature Interaction: Smooth Floating Cursor Preview on Desktop */}
      <AnimatePresence>
        {!isTouchDevice && hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: "fixed",
              left: mousePos.x + 20,
              top: mousePos.y + 20,
              pointerEvents: "none",
              zIndex: 60,
            }}
            className="hidden md:block w-72 p-2 bg-white rounded-xl border border-black/15 shadow-2xl overflow-hidden"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-lg relative bg-black/5">
              <img
                src={hoveredProject.image}
                alt={hoveredProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2 space-y-0.5">
              <div className="text-xs font-bold text-ink truncate">{hoveredProject.title}</div>
              <div className="text-[10px] font-mono text-cobalt font-semibold uppercase">{hoveredProject.category}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        isOpen={Boolean(selectedCaseStudy)}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Interactive Project Archive Modal */}
      <ProjectArchiveModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
        onSelectCaseStudy={(project) => {
          setIsArchiveOpen(false);
          setSelectedCaseStudy(project);
        }}
      />
    </>
  );
};
