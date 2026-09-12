import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Search, BookOpen, ArrowUpRight } from "lucide-react";
import { projectsData, Project } from "@/data/projects";

interface ProjectArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCaseStudy: (project: Project) => void;
}

const CATEGORIES = ["All", "Full Stack", "Full Stack + AI", "Frontend", "JavaScript"] as const;

export const ProjectArchiveModal: React.FC<ProjectArchiveModalProps> = ({
  isOpen,
  onClose,
  onSelectCaseStudy,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const filteredProjects = projectsData.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-gray-200 bg-gray-50">
              <span className="font-mono text-xs font-bold text-cobalt uppercase tracking-wider">
                All Projects ({projectsData.length})
              </span>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-ink bg-white hover:bg-ink hover:text-white transition-colors"
                aria-label="Close Project Archive"
              >
                <X size={16} />
              </button>
            </div>

            {/* Filter & Search Controls */}
            <div className="px-6 sm:px-8 py-4 border-b border-gray-200 bg-gray-50/50 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider rounded-full transition-all border ${
                      selectedCategory === category
                        ? "bg-cobalt text-white border-cobalt shadow-xs"
                        : "bg-white text-ink border-gray-200 hover:border-black/30"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative min-w-[240px]">
                <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Filter by technology or name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-full pl-9 pr-4 py-2 font-mono text-xs text-ink placeholder-gray-400 focus:outline-none focus:border-cobalt"
                />
              </div>
            </div>

            {/* Project Grid */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 flex-1">
              {filteredProjects.length === 0 ? (
                <div className="py-12 text-center text-gray-500 text-sm font-medium">
                  No projects match your filter criteria.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProjects.map((project) => (
                    <div
                      key={project.id}
                      className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-cobalt hover:shadow-lg transition-all duration-200 flex flex-col justify-between group space-y-4 shadow-2xs"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold uppercase tracking-wider text-cobalt bg-cobalt/10 px-3 py-0.5 rounded-full">
                            {project.category}
                          </span>
                          <span className="font-mono text-xs text-gray-500 font-semibold">
                            {project.year}
                          </span>
                        </div>

                        <div className="aspect-[16/9] overflow-hidden rounded-xl border border-gray-200 relative bg-gray-50">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        <h3 className="font-display text-xl text-ink font-bold group-hover:text-cobalt transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 text-[11px] font-semibold bg-gray-100 text-ink rounded-md border border-gray-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Actions */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-200 gap-2">
                        <button
                          onClick={() => onSelectCaseStudy(project)}
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-cobalt hover:underline"
                        >
                          <BookOpen size={13} />
                          <span>Case Study</span>
                        </button>

                        <div className="flex items-center gap-2">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 border border-gray-200 bg-white text-ink hover:bg-black hover:text-white rounded-full transition-colors"
                            aria-label={`${project.title} Source`}
                          >
                            <Github size={13} />
                          </a>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-cobalt text-white font-mono text-xs font-bold uppercase tracking-wider rounded-full hover:bg-cobalt-hover transition-colors shadow-xs"
                          >
                            <span>Live</span>
                            <ArrowUpRight size={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between font-mono text-xs text-gray-500">
              <span>Showing {filteredProjects.length} of {projectsData.length} projects</span>
              <button
                onClick={onClose}
                className="font-bold text-ink hover:text-cobalt transition-colors uppercase tracking-wider"
              >
                Close Archive [ESC]
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
