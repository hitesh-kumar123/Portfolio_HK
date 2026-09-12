import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col z-10"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-cobalt uppercase tracking-wider">
                  Case Study
                </span>
                <span className="text-gray-300 font-bold">•</span>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {project.category}
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-ink bg-white hover:bg-ink hover:text-white transition-colors"
                aria-label="Close Case Study"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-10">
              
              {/* Title & Tagline */}
              <div className="space-y-3">
                <h2 className="font-display text-3xl sm:text-4xl text-ink font-bold tracking-tight">
                  {project.title}
                </h2>
                <p className="text-xl sm:text-2xl text-gray-500 font-medium">
                  {project.tagline}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1 text-xs font-semibold bg-gray-100 text-gray-800 rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cover Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-black/5 border border-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Case Study Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                
                {/* Overview */}
                <div className="space-y-2 p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-cobalt">
                    Overview
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed font-normal">
                    {project.caseStudy.overview}
                  </p>
                </div>

                {/* Problem */}
                <div className="space-y-2 p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-cobalt">
                    The Problem
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed font-normal">
                    {project.caseStudy.problem}
                  </p>
                </div>

                {/* Approach */}
                <div className="space-y-2 p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-cobalt">
                    Architectural Approach
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed font-normal">
                    {project.caseStudy.approach}
                  </p>
                </div>

                {/* Role */}
                <div className="space-y-2 p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-cobalt">
                    My Role &amp; Ownership
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed font-normal">
                    {project.caseStudy.myRole}
                  </p>
                </div>

              </div>

              {/* Features List */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-cobalt">
                  Key Functionalities Shipped
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.caseStudy.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3.5 bg-gray-50 rounded-xl border border-gray-200">
                      <CheckCircle2 size={16} className="text-cobalt flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-ink font-medium leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-cobalt">
                  Technical Challenges &amp; Solutions
                </span>
                <div className="space-y-3">
                  {project.caseStudy.challenges.map((challenge, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-ink">
                        <AlertCircle size={14} className="text-cobalt" />
                        <span>Challenge: {challenge}</span>
                      </div>
                      <div className="text-xs text-gray-700 font-normal pl-5 border-l-2 border-cobalt leading-relaxed">
                        <strong className="text-cobalt font-semibold">Solution: </strong>
                        {project.caseStudy.solutions[idx]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Actions Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-t border-gray-200 bg-gray-50">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={14} />
                <span>Source Code</span>
              </a>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Open Live Project</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
