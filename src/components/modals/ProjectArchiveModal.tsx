import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Search, BookOpen, ArrowUpRight } from "lucide-react";
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
            className="fixed inset-0 bg-[#151513]/70 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-[#F4F1E9] border border-[#D3CEC2] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col z-10 text-[#151513]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#D3CEC2] bg-[#FAF8F2]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] font-bold text-[#B02038] uppercase tracking-wider">
                  PROJECT ARCHIVE
                </span>
                <span className="text-[#D3CEC2]">•</span>
                <span className="font-mono text-[11px] font-semibold text-[#706C63]">
                  {projectsData.length} TOTAL BUILDS
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 border border-[#D3CEC2] flex items-center justify-center text-[#151513] bg-[#FAF8F2] hover:bg-[#151513] hover:text-[#F4F1E9] transition-colors cursor-pointer"
                aria-label="Close Project Archive"
              >
                <X size={15} />
              </button>
            </div>

            {/* Filter & Search Controls */}
            <div className="px-6 sm:px-8 py-4 border-b border-[#D3CEC2] bg-[#FAF8F2] flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider transition-all border cursor-pointer ${
                      selectedCategory === category
                        ? "bg-[#151513] text-[#F4F1E9] border-[#151513]"
                        : "bg-[#FAF8F2] text-[#706C63] border-[#D3CEC2] hover:border-[#151513] hover:text-[#151513]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative min-w-[240px]">
                <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#706C63]" />
                <input
                  type="text"
                  placeholder="Filter by tech or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#FAF8F2] border border-[#D3CEC2] pl-9 pr-4 py-1.5 font-mono text-xs text-[#151513] placeholder-[#706C63] focus:outline-none focus:border-[#B02038]"
                />
              </div>
            </div>

            {/* Project Grid */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 flex-1 bg-[#F4F1E9]">
              {filteredProjects.length === 0 ? (
                <div className="py-12 text-center text-[#706C63] text-sm font-medium font-mono">
                  No projects match your filter criteria.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProjects.map((project) => (
                    <div
                      key={project.id}
                      className="p-6 bg-[#FAF8F2] border border-[#D3CEC2] hover:border-[#151513] transition-all duration-200 flex flex-col justify-between group space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#B02038]">
                            {project.category}
                          </span>
                          <span className="font-mono text-[10px] text-[#706C63] font-semibold">
                            {project.year}
                          </span>
                        </div>

                        <div className="aspect-[16/9] overflow-hidden border border-[#D3CEC2] relative bg-[#EAE6DC]">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                          />
                        </div>

                        <h3 className="font-['Syne'] text-xl text-[#151513] font-bold">
                          {project.title}
                        </h3>

                        <p className="text-xs text-[#706C63] leading-relaxed line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 font-mono text-[10px] font-medium bg-[#F4F1E9] text-[#151513] border border-[#D3CEC2]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Actions */}
                      <div className="flex items-center justify-between pt-3 border-t border-[#D3CEC2] gap-2">
                        <button
                          onClick={() => onSelectCaseStudy(project)}
                          className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#706C63] hover:text-[#B02038] underline text-underline-offset-2 cursor-pointer"
                        >
                          <BookOpen size={12} />
                          <span>CASE STUDY</span>
                        </button>

                        <div className="flex items-center gap-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 border border-[#D3CEC2] bg-[#FAF8F2] text-[#151513] hover:border-[#B02038] hover:text-[#B02038] transition-colors"
                              aria-label={`${project.title} Source`}
                            >
                              <Github size={13} />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1 bg-[#151513] text-[#F4F1E9] font-mono text-[10px] font-semibold uppercase tracking-wider hover:bg-[#B02038] transition-colors"
                            >
                              <span>LIVE</span>
                              <ArrowUpRight size={12} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 py-4 border-t border-[#D3CEC2] bg-[#FAF8F2] flex items-center justify-between font-mono text-[11px] text-[#706C63]">
              <span>SHOWING {filteredProjects.length} OF {projectsData.length} PROJECTS</span>
              <button
                onClick={onClose}
                className="font-bold text-[#151513] hover:text-[#B02038] transition-colors uppercase tracking-wider cursor-pointer"
              >
                CLOSE [ESC]
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
