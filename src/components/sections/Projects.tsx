import React, { useState } from "react";
import { ArrowUpRight, Github, BookOpen, Layers } from "lucide-react";
import { projectsData, Project } from "@/data/projects";
import { CaseStudyModal } from "../modals/CaseStudyModal";
import { ProjectArchiveModal } from "../modals/ProjectArchiveModal";

export const Projects: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  // Separate projects based on curation hierarchy
  // Featured project: Smart Rent System (index 0)
  const featuredProject = projectsData[0];
  // Secondary projects: Saylo (index 1) & PackGo (index 2)
  const secondaryProjects = projectsData.slice(1, 3);
  // Supporting projects: Weather, Simon Game, Spotify Replica (index 3+)
  const supportingProjects = projectsData.slice(3);

  return (
    <>
      <section id="work" className="pj-section" aria-labelledby="work-heading">
        <div className="pj-container">
          {/* -- Section Header -- */}
          <header className="pj-header">
            <div className="pj-header-text">
              <span className="pj-label">SELECTED WORK</span>
              <h2 id="work-heading" className="pj-headline">
                Built for
                real users.
                Designed with
                purpose.
              </h2>
            </div>
            <div className="pj-header-action">
              <button
                type="button"
                onClick={() => setIsArchiveOpen(true)}
                className="pj-archive-btn"
                aria-label="Browse all projects in catalog archive"
              >
                <Layers size={13} aria-hidden="true" />
                <span>ARCHIVE ({projectsData.length}) ?</span>
              </button>
            </div>
          </header>

          {/* -- 1. Featured Project Showcase -- */}
          {featuredProject && (
            <article className="pj-featured-card" aria-label={`Featured Project: ${featuredProject.title}`}>
              <div className="pj-featured-img-wrap">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="pj-featured-img"
                  loading="lazy"
                />
              </div>

              <div className="pj-featured-info">
                <div className="pj-meta-top">
                  <span className="pj-tag-accent">{featuredProject.category}</span>
                  <span className="pj-meta-dot">�</span>
                  <span className="pj-meta-year">{featuredProject.year}</span>
                </div>

                <h3 className="pj-featured-title">{featuredProject.title}</h3>
                <p className="pj-featured-desc">{featuredProject.description}</p>

                {/* Tech Tags */}
                <div className="pj-tech-list">
                  {featuredProject.technologies.map((tech) => (
                    <span key={tech} className="pj-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Actions */}
                <div className="pj-actions-row">
                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pj-btn-primary"
                      aria-label={`View live ${featuredProject.title}`}
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  )}

                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pj-btn-secondary"
                      aria-label={`View ${featuredProject.title} source code on GitHub`}
                    >
                      <Github size={14} aria-hidden="true" />
                      <span>GITHUB</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedCaseStudy(featuredProject)}
                    className="pj-btn-text"
                    aria-label={`Read case study for ${featuredProject.title}`}
                  >
                    <BookOpen size={13} aria-hidden="true" />
                    <span>CASE STUDY</span>
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* -- 2. Secondary Projects (2-Column Editorial Grid) -- */}
          <div className="pj-secondary-grid">
            {secondaryProjects.map((project) => (
              <article key={project.id} className="pj-secondary-card" aria-label={`Project: ${project.title}`}>
                <div className="pj-secondary-img-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="pj-secondary-img"
                    loading="lazy"
                  />
                </div>

                <div className="pj-secondary-info">
                  <div className="pj-meta-top">
                    <span className="pj-tag-accent">{project.category}</span>
                    <span className="pj-meta-dot">�</span>
                    <span className="pj-meta-year">{project.year}</span>
                  </div>

                  <h3 className="pj-secondary-title">{project.title}</h3>
                  <p className="pj-secondary-desc">{project.description}</p>

                  <div className="pj-tech-list">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="pj-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pj-actions-row">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pj-btn-primary"
                        aria-label={`View live ${project.title}`}
                      >
                        <span>VIEW PROJECT</span>
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pj-btn-secondary"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <Github size={14} aria-hidden="true" />
                        <span>GITHUB</span>
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => setSelectedCaseStudy(project)}
                      className="pj-btn-text"
                      aria-label={`Read case study for ${project.title}`}
                    >
                      <BookOpen size={13} aria-hidden="true" />
                      <span>CASE STUDY</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* -- 3. Supporting Projects (Compact Editorial Rows) -- */}
          {supportingProjects.length > 0 && (
            <div className="pj-supporting-section">
              <div className="pj-supporting-header">
                <span className="pj-supporting-label">ADDITIONAL IMPLEMENTATIONS</span>
              </div>

              <div className="pj-supporting-list">
                {supportingProjects.map((project) => (
                  <div key={project.id} className="pj-supporting-row">
                    <div className="pj-supporting-main">
                      <div className="pj-supporting-meta">
                        <span className="pj-supporting-num">{project.number}</span>
                        <span className="pj-supporting-cat">{project.category}</span>
                      </div>
                      <h4 className="pj-supporting-title">{project.title}</h4>
                      <p className="pj-supporting-desc">{project.tagline || project.description}</p>
                    </div>

                    <div className="pj-supporting-techs">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="pj-tech-tag-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pj-supporting-links">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pj-row-link"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <span>LIVE</span>
                          <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pj-row-link"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <span>CODE</span>
                          <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => setSelectedCaseStudy(project)}
                        className="pj-row-btn"
                        aria-label={`Case study for ${project.title}`}
                      >
                        <span>CASE STUDY</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* -- 4. Catalog Archive Banner CTA -- */}
          <footer className="pj-footer-banner">
            <div className="pj-banner-content">
              <span className="pj-banner-tag">FULL REPOSITORY INDEX</span>
              <h3 className="pj-banner-title">EXPLORE THE COMPLETE CATALOGUE</h3>
              <p className="pj-banner-desc">
                Browse all engineering prototypes, full-stack microservices, API experiments, and open-source packages.
              </p>
            </div>

            <div className="pj-banner-actions">
              <button
                type="button"
                onClick={() => setIsArchiveOpen(true)}
                className="pj-btn-primary"
              >
                <span>OPEN PROJECT ARCHIVE</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </button>

              <a
                href="https://github.com/hitesh-kumar123"
                target="_blank"
                rel="noopener noreferrer"
                className="pj-btn-secondary"
              >
                <Github size={14} aria-hidden="true" />
                <span>GITHUB REPOSITORIES</span>
              </a>
            </div>
          </footer>
        </div>

        {/* -- Scoped Editorial Styling -- */}
        <style>{`
          /* --------------------------------------
             SECTION & CONTAINER
          -------------------------------------- */
          .pj-section {
            background-color: #F4F1E9;
            color: #151513;
            padding: clamp(4rem, 8vw, 7.5rem) 1.5rem;
            position: relative;
            box-sizing: border-box;
            width: 100%;
          }

          .pj-container {
            max-width: 1320px;
            margin: 0 auto;
            box-sizing: border-box;
          }

          /* --------------------------------------
             HEADER
          -------------------------------------- */
          .pj-header {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            margin-bottom: clamp(2.5rem, 5vw, 4rem);
            padding-bottom: 2rem;
            border-bottom: 1px solid #D3CEC2;
          }

          @media (min-width: 768px) {
            .pj-header {
              flex-direction: row;
              justify-content: space-between;
              align-items: flex-end;
            }
          }

          .pj-label {
            display: block;
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            font-weight: 500;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #B02038;
            margin-bottom: 1rem;
          }

          .pj-headline {
            margin: 0;
            font-family: 'Syne', sans-serif;
            font-weight: 700;
            font-size: clamp(2rem, 3.8vw, 3.6rem);
            line-height: 1.1;
            letter-spacing: -0.018em;
            color: #151513;
          }

          .pj-archive-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.45rem;
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #151513;
            background: transparent;
            border: 1px solid #D3CEC2;
            padding: 0.65rem 1.25rem;
            cursor: pointer;
            transition: color 200ms ease, border-color 200ms ease, transform 200ms ease;
          }

          .pj-archive-btn:hover {
            color: #B02038;
            border-color: #B02038;
            transform: translateY(-1px);
          }

          /* --------------------------------------
             COMMON META & TAGS
          -------------------------------------- */
          .pj-meta-top {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
          }

          .pj-tag-accent {
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #B02038;
          }

          .pj-meta-dot {
            color: #D3CEC2;
            font-size: 12px;
          }

          .pj-meta-year {
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            font-weight: 500;
            color: #706C63;
          }

          .pj-tech-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.35rem 0.5rem;
            margin: 1.25rem 0 1.75rem 0;
          }

          .pj-tech-tag {
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            font-weight: 500;
            color: #151513;
            background-color: #FAF8F2;
            border: 1px solid #D3CEC2;
            padding: 0.25rem 0.6rem;
            letter-spacing: 0.02em;
          }

          .pj-tech-tag-sm {
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            color: #706C63;
            background-color: #FAF8F2;
            border: 1px solid #D3CEC2;
            padding: 0.15rem 0.45rem;
          }

          /* --------------------------------------
             ACTION BUTTONS
          -------------------------------------- */
          .pj-actions-row {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 0.75rem 1rem;
            margin-top: auto;
          }

          .pj-btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            background-color: #151513;
            color: #F4F1E9;
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            text-decoration: none;
            padding: 0.65rem 1.15rem;
            border: 1px solid #151513;
            cursor: pointer;
            transition: background-color 200ms ease, color 200ms ease, transform 200ms ease;
          }

          .pj-btn-primary:hover {
            background-color: #B02038;
            border-color: #B02038;
            transform: translateY(-2px);
          }

          .pj-btn-secondary {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            background: transparent;
            color: #151513;
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            text-decoration: none;
            padding: 0.65rem 1.15rem;
            border: 1px solid #D3CEC2;
            cursor: pointer;
            transition: color 200ms ease, border-color 200ms ease, transform 200ms ease;
          }

          .pj-btn-secondary:hover {
            color: #B02038;
            border-color: #B02038;
            transform: translateY(-2px);
          }

          .pj-btn-text {
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            background: transparent;
            border: none;
            color: #706C63;
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            cursor: pointer;
            padding: 0.65rem 0.25rem;
            text-decoration: underline;
            text-decoration-color: #D3CEC2;
            text-underline-offset: 4px;
            transition: color 200ms ease, text-decoration-color 200ms ease;
          }

          .pj-btn-text:hover {
            color: #B02038;
            text-decoration-color: #B02038;
          }

          /* --------------------------------------
             1. FEATURED PROJECT (Horizontal Showcase)
          -------------------------------------- */
          .pj-featured-card {
            display: flex;
            flex-direction: column;
            background-color: #FAF8F2;
            border: 1px solid #D3CEC2;
            margin-bottom: 2.5rem;
            box-sizing: border-box;
          }

          @media (min-width: 960px) {
            .pj-featured-card {
              flex-direction: row;
            }
          }

          .pj-featured-img-wrap {
            width: 100%;
            overflow: hidden;
            background-color: #EAE6DC;
            border-bottom: 1px solid #D3CEC2;
          }

          @media (min-width: 960px) {
            .pj-featured-img-wrap {
              width: 58%;
              flex-shrink: 0;
              border-bottom: none;
              border-right: 1px solid #D3CEC2;
            }
          }

          .pj-featured-img {
            width: 100%;
            height: 100%;
            min-height: 280px;
            max-height: 480px;
            object-fit: cover;
            display: block;
            filter: grayscale(10%);
            transition: transform 350ms ease, filter 350ms ease;
          }

          .pj-featured-card:hover .pj-featured-img {
            transform: scale(1.025);
            filter: grayscale(0%);
          }

          .pj-featured-info {
            padding: clamp(1.5rem, 3.5vw, 2.75rem);
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            box-sizing: border-box;
          }

          .pj-featured-title {
            margin: 0;
            font-family: 'Syne', sans-serif;
            font-size: clamp(1.65rem, 2.4vw, 2.25rem);
            font-weight: 700;
            letter-spacing: -0.014em;
            line-height: 1.12;
            color: #151513;
          }

          .pj-featured-desc {
            margin: 0.85rem 0 0 0;
            font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
            font-size: 14px;
            line-height: 1.65;
            color: #706C63;
          }

          /* --------------------------------------
             2. SECONDARY PROJECTS (2-Column Grid)
          -------------------------------------- */
          .pj-secondary-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2.5rem;
            margin-bottom: 3.5rem;
          }

          @media (min-width: 860px) {
            .pj-secondary-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          .pj-secondary-card {
            display: flex;
            flex-direction: column;
            background-color: #FAF8F2;
            border: 1px solid #D3CEC2;
            box-sizing: border-box;
          }

          .pj-secondary-img-wrap {
            width: 100%;
            height: 240px;
            overflow: hidden;
            background-color: #EAE6DC;
            border-bottom: 1px solid #D3CEC2;
          }

          .pj-secondary-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            filter: grayscale(10%);
            transition: transform 350ms ease, filter 350ms ease;
          }

          .pj-secondary-card:hover .pj-secondary-img {
            transform: scale(1.025);
            filter: grayscale(0%);
          }

          .pj-secondary-info {
            padding: clamp(1.25rem, 2.5vw, 2rem);
            display: flex;
            flex-direction: column;
            flex: 1;
            box-sizing: border-box;
          }

          .pj-secondary-title {
            margin: 0;
            font-family: 'Syne', sans-serif;
            font-size: 1.45rem;
            font-weight: 700;
            letter-spacing: -0.014em;
            line-height: 1.15;
            color: #151513;
          }

          .pj-secondary-desc {
            margin: 0.65rem 0 0 0;
            font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
            font-size: 13px;
            line-height: 1.6;
            color: #706C63;
          }

          /* --------------------------------------
             3. SUPPORTING PROJECTS (Editorial Rows)
          -------------------------------------- */
          .pj-supporting-section {
            margin-top: 2rem;
            margin-bottom: 3.5rem;
            border-top: 1px solid #D3CEC2;
            padding-top: 2rem;
          }

          .pj-supporting-header {
            margin-bottom: 1.25rem;
          }

          .pj-supporting-label {
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #706C63;
          }

          .pj-supporting-list {
            display: flex;
            flex-direction: column;
          }

          .pj-supporting-row {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1.5rem 0;
            border-bottom: 1px solid #D3CEC2;
            transition: background-color 200ms ease;
          }

          @media (min-width: 900px) {
            .pj-supporting-row {
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              gap: 2rem;
            }
          }

          .pj-supporting-main {
            flex: 1;
          }

          .pj-supporting-meta {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 0.35rem;
          }

          .pj-supporting-num {
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            font-weight: 600;
            color: #B02038;
          }

          .pj-supporting-cat {
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: #706C63;
          }

          .pj-supporting-title {
            margin: 0;
            font-family: 'Syne', sans-serif;
            font-size: 1.2rem;
            font-weight: 700;
            letter-spacing: -0.012em;
            line-height: 1.2;
            color: #151513;
          }

          .pj-supporting-desc {
            margin: 0.35rem 0 0 0;
            font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
            font-size: 13px;
            line-height: 1.5;
            color: #706C63;
          }

          .pj-supporting-techs {
            display: flex;
            flex-wrap: wrap;
            gap: 0.35rem;
          }

          .pj-supporting-links {
            display: flex;
            align-items: center;
            gap: 1.25rem;
            flex-shrink: 0;
          }

          .pj-row-link {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            text-decoration: none;
            color: #151513;
            transition: color 200ms ease;
          }

          .pj-row-link:hover {
            color: #B02038;
          }

          .pj-row-btn {
            display: inline-flex;
            align-items: center;
            background: transparent;
            border: none;
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            text-decoration: underline;
            text-decoration-color: #D3CEC2;
            text-underline-offset: 3px;
            color: #706C63;
            cursor: pointer;
            padding: 0;
            transition: color 200ms ease, text-decoration-color 200ms ease;
          }

          .pj-row-btn:hover {
            color: #B02038;
            text-decoration-color: #B02038;
          }

          /* --------------------------------------
             4. FOOTER BANNER CTA
          -------------------------------------- */
          .pj-footer-banner {
            padding: clamp(2rem, 4vw, 3rem);
            background-color: #FAF8F2;
            border: 1px solid #D3CEC2;
            display: flex;
            flex-direction: column;
            gap: 1.75rem;
          }

          @media (min-width: 860px) {
            .pj-footer-banner {
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
            }
          }

          .pj-banner-content {
            max-width: 600px;
          }

          .pj-banner-tag {
            display: block;
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #B02038;
            margin-bottom: 0.5rem;
          }

          .pj-banner-title {
            margin: 0;
            font-family: 'Syne', sans-serif;
            font-size: clamp(1.35rem, 2vw, 1.75rem);
            font-weight: 700;
            letter-spacing: -0.014em;
            line-height: 1.15;
            color: #151513;
          }

          .pj-banner-desc {
            margin: 0.5rem 0 0 0;
            font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
            font-size: 13px;
            line-height: 1.55;
            color: #706C63;
          }

          .pj-banner-actions {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 0.75rem;
            flex-shrink: 0;
          }

          /* --------------------------------------
             REDUCED MOTION
          -------------------------------------- */
          @media (prefers-reduced-motion: reduce) {
            .pj-featured-img,
            .pj-secondary-img,
            .pj-btn-primary,
            .pj-btn-secondary,
            .pj-archive-btn {
              transition: none !important;
              transform: none !important;
            }
          }
        `}</style>
      </section>

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

export default Projects;
