import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
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

  if (!project) return null;

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

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#F4F1E9] border border-[#D3CEC2] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col z-10 text-[#151513]"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#D3CEC2] bg-[#FAF8F2]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] font-bold text-[#7C2638] uppercase tracking-wider">
                  CASE STUDY
                </span>
                <span className="text-[#D3CEC2]">•</span>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#706C63]">
                  {project.category}
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 border border-[#D3CEC2] flex items-center justify-center text-[#151513] bg-[#FAF8F2] hover:bg-[#151513] hover:text-[#F4F1E9] transition-colors cursor-pointer"
                aria-label="Close Case Study"
              >
                <X size={15} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#F4F1E9]">
              {/* Title & Tagline */}
              <div className="space-y-3">
                <h2 className="font-['Syne'] text-3xl sm:text-4xl text-[#151513] font-extrabold tracking-tight">
                  {project.title}
                </h2>
                <p className="text-base sm:text-lg text-[#706C63] font-medium leading-relaxed">
                  {project.tagline}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 font-mono text-[11px] font-medium bg-[#FAF8F2] text-[#151513] border border-[#D3CEC2]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cover Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#EAE6DC] border border-[#D3CEC2]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Case Study Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Overview */}
                <div className="space-y-2 p-5 bg-[#FAF8F2] border border-[#D3CEC2]">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#7C2638]">
                    OVERVIEW
                  </span>
                  <p className="text-xs sm:text-sm text-[#706C63] leading-relaxed">
                    {project.caseStudy.overview}
                  </p>
                </div>

                {/* Problem */}
                <div className="space-y-2 p-5 bg-[#FAF8F2] border border-[#D3CEC2]">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#7C2638]">
                    THE PROBLEM
                  </span>
                  <p className="text-xs sm:text-sm text-[#706C63] leading-relaxed">
                    {project.caseStudy.problem}
                  </p>
                </div>

                {/* Approach */}
                <div className="space-y-2 p-5 bg-[#FAF8F2] border border-[#D3CEC2]">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#7C2638]">
                    ARCHITECTURAL APPROACH
                  </span>
                  <p className="text-xs sm:text-sm text-[#706C63] leading-relaxed">
                    {project.caseStudy.approach}
                  </p>
                </div>

                {/* Role */}
                <div className="space-y-2 p-5 bg-[#FAF8F2] border border-[#D3CEC2]">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#7C2638]">
                    MY ROLE &amp; OWNERSHIP
                  </span>
                  <p className="text-xs sm:text-sm text-[#706C63] leading-relaxed">
                    {project.caseStudy.myRole}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 pt-4 border-t border-[#D3CEC2]">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#7C2638]">
                  KEY FUNCTIONALITIES SHIPPED
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.caseStudy.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3.5 bg-[#FAF8F2] border border-[#D3CEC2]">
                      <CheckCircle2 size={15} className="text-[#7C2638] flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-[#151513] font-medium leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="space-y-4 pt-4 border-t border-[#D3CEC2]">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#7C2638]">
                  TECHNICAL CHALLENGES &amp; SOLUTIONS
                </span>
                <div className="space-y-3">
                  {project.caseStudy.challenges.map((challenge, idx) => (
                    <div key={idx} className="p-4 bg-[#FAF8F2] border border-[#D3CEC2] space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#151513]">
                        <AlertCircle size={14} className="text-[#7C2638]" />
                        <span>Challenge: {challenge}</span>
                      </div>
                      <div className="text-xs text-[#706C63] pl-4 border-l-2 border-[#7C2638] leading-relaxed">
                        <strong className="text-[#151513] font-semibold">Solution: </strong>
                        {project.caseStudy.solutions[idx]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-t border-[#D3CEC2] bg-[#FAF8F2]">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#151513] border border-[#D3CEC2] px-4 py-2 hover:border-[#7C2638] hover:text-[#7C2638] transition-colors"
                >
                  <Github size={14} />
                  <span>SOURCE CODE</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider bg-[#151513] text-[#F4F1E9] px-5 py-2 hover:bg-[#7C2638] transition-colors"
                >
                  <span>LIVE PROJECT</span>
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
