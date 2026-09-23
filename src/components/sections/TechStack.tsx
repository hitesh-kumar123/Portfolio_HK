import React from "react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiGraphql,
  SiPython,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { Sparkles, Server } from "lucide-react";
import { type IconType } from "react-icons";

// ─────────────────────────────────────────────
// Skills & Tech Stack: Unified, Button-less Minimalist Showcase
// Colors: Paper #F4F1E9 | Ink #151513 | Muted #706C63 | Border #D3CEC2 | Wine #B02038
// Typography: Syne (headings) | Plus Jakarta Sans (names) | JetBrains Mono (labels)
// Scope: TechStack.tsx ONLY
// ─────────────────────────────────────────────

interface SkillItem {
  id: string;
  name: string;
  role: string;
  icon: IconType | React.ComponentType<{ className?: string; size?: number }>;
  brandColor: string;
  glowColor: string;
}

const ALL_SKILLS: SkillItem[] = [
  { id: "react", name: "React", role: "UI & Hooks", icon: SiReact, brandColor: "#087EA4", glowColor: "rgba(8, 126, 164, 0.25)" },
  { id: "typescript", name: "TypeScript", role: "Type Safety", icon: SiTypescript, brandColor: "#3178C6", glowColor: "rgba(49, 120, 198, 0.25)" },
  { id: "nextjs", name: "Next.js", role: "SSR & App Router", icon: SiNextdotjs, brandColor: "#151513", glowColor: "rgba(21, 21, 19, 0.2)" },
  { id: "javascript", name: "JavaScript", role: "ES6+ Async", icon: SiJavascript, brandColor: "#D97706", glowColor: "rgba(217, 119, 6, 0.25)" },
  { id: "nodejs", name: "Node.js", role: "Server Runtime", icon: SiNodedotjs, brandColor: "#339933", glowColor: "rgba(51, 153, 51, 0.25)" },
  { id: "express", name: "Express.js", role: "REST APIs", icon: SiExpress, brandColor: "#151513", glowColor: "rgba(21, 21, 19, 0.2)" },
  { id: "postgresql", name: "PostgreSQL", role: "Relational DB", icon: SiPostgresql, brandColor: "#4169E1", glowColor: "rgba(65, 105, 225, 0.25)" },
  { id: "supabase", name: "Supabase", role: "BaaS & Auth", icon: SiSupabase, brandColor: "#3ECF8E", glowColor: "rgba(62, 207, 142, 0.25)" },
  { id: "graphql", name: "GraphQL", role: "Typed Schemas", icon: SiGraphql, brandColor: "#E10098", glowColor: "rgba(225, 0, 152, 0.25)" },
  { id: "sql", name: "SQL", role: "Queries & Indexing", icon: SiMysql, brandColor: "#00758F", glowColor: "rgba(0, 117, 143, 0.25)" },
  { id: "mongodb", name: "MongoDB", role: "NoSQL Schemas", icon: SiMongodb, brandColor: "#47A248", glowColor: "rgba(71, 162, 72, 0.25)" },
  { id: "tailwind", name: "Tailwind CSS", role: "Design Tokens", icon: SiTailwindcss, brandColor: "#06B6D4", glowColor: "rgba(6, 182, 212, 0.25)" },
  { id: "redux", name: "Redux", role: "State Store", icon: SiRedux, brandColor: "#764ABC", glowColor: "rgba(118, 74, 188, 0.25)" },
  { id: "python", name: "Python", role: "Automation", icon: SiPython, brandColor: "#3776AB", glowColor: "rgba(55, 118, 171, 0.25)" },
  { id: "ai-llm", name: "AI & LLMs", role: "APIs & Pipelines", icon: Sparkles, brandColor: "#8B5CF6", glowColor: "rgba(139, 92, 246, 0.25)" },
  { id: "rest-apis", name: "REST APIs", role: "HTTP Contracts", icon: Server, brandColor: "#B02038", glowColor: "rgba(176, 32, 56, 0.25)" },
  { id: "git-github", name: "Git & GitHub", role: "Version Control", icon: SiGit, brandColor: "#F05032", glowColor: "rgba(240, 80, 50, 0.25)" },
  { id: "postman", name: "Postman", role: "API Testing", icon: SiPostman, brandColor: "#FF6C37", glowColor: "rgba(255, 108, 55, 0.25)" },
  { id: "vercel", name: "Vercel", role: "Cloud Deployments", icon: SiVercel, brandColor: "#151513", glowColor: "rgba(21, 21, 19, 0.2)" },
];

export const TechStack: React.FC = () => {
  return (
    <section id="skills" className="sk-section" aria-labelledby="skills-heading">
      <div className="sk-container">
        {/* ── Section Header ── */}
        <header className="sk-header">
          <div className="sk-header-top">
            <span className="sk-label">TECHNICAL STACK & SKILLS</span>
            <div className="sk-wine-line" aria-hidden="true" />
          </div>

          <div className="sk-header-main">
            <h2 id="skills-heading" className="sk-headline">
              Technologies I work with to build scalable applications.
            </h2>
            <p className="sk-subhead">
              A comprehensive stack spanning frontend engineering, backend API services, relational & NoSQL databases, and modern developer workflows.
            </p>
          </div>
        </header>

        {/* ── Unified Button-less Skill Showcase ── */}
        <div className="sk-showcase-grid">
          {ALL_SKILLS.map((skill) => {
            const SkillIcon = skill.icon;
            return (
              <div
                key={skill.id}
                className="sk-item"
                style={
                  {
                    "--brand-color": skill.brandColor,
                    "--glow-color": skill.glowColor,
                  } as React.CSSProperties
                }
              >
                {/* Real-color Brand Icon */}
                <div className="sk-icon-wrap" aria-hidden="true">
                  <SkillIcon size={34} className="sk-icon" />
                </div>

                {/* Skill Name & Role */}
                <div className="sk-meta">
                  <span className="sk-name">{skill.name}</span>
                  <span className="sk-role">{skill.role}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Scoped Styling (No Button/Capsule Containers) ── */}
      <style>{`
        /* ══════════════════════════════════════
           BASE SECTION
        ══════════════════════════════════════ */
        .sk-section {
          background-color: #F4F1E9;
          color: #151513;
          padding: clamp(4.5rem, 8vw, 7.5rem) 1.5rem;
          position: relative;
          box-sizing: border-box;
          width: 100%;
          border-bottom: 1px solid #D3CEC2;
        }

        .sk-container {
          max-width: 1280px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        /* ══════════════════════════════════════
           HEADER
        ══════════════════════════════════════ */
        .sk-header {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: clamp(3rem, 6vw, 4.5rem);
          padding-bottom: 2rem;
          border-bottom: 1px solid #D3CEC2;
        }

        .sk-header-top {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .sk-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #B02038;
        }

        .sk-wine-line {
          width: 24px;
          height: 1.5px;
          background-color: #B02038;
        }

        .sk-header-main {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          max-width: 820px;
        }

        .sk-headline {
          margin: 0;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 3.8vw, 3.4rem);
          line-height: 1.1;
          letter-spacing: -0.018em;
          color: #151513;
        }

        .sk-subhead {
          margin: 0;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: clamp(0.95rem, 1.2vw, 1.05rem);
          line-height: 1.6;
          color: #706C63;
        }

        /* ══════════════════════════════════════
           UNIFIED SKILL SHOWCASE GRID (Button-less)
        ══════════════════════════════════════ */
        .sk-showcase-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem 1.5rem;
          padding: 1rem 0;
        }

        @media (min-width: 640px) {
          .sk-showcase-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem 2rem;
          }
        }

        @media (min-width: 900px) {
          .sk-showcase-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 3.5rem 2.5rem;
          }
        }

        @media (min-width: 1200px) {
          .sk-showcase-grid {
            grid-template-columns: repeat(5, 1fr);
            gap: 3.5rem 2.5rem;
          }
        }

        /* Individual Skill Item (Pure, airy, no capsule button) */
        .sk-item {
          display: flex;
          align-items: center;
          gap: 1.125rem;
          padding: 0.5rem;
          box-sizing: border-box;
          cursor: default;
          background: transparent;
          border: none;
          transition: transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .sk-item:hover {
          transform: translateY(-4px);
        }

        /* Brand Icon */
        .sk-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brand-color, #151513);
          flex-shrink: 0;
          transition: transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1),
                      filter 240ms ease;
        }

        .sk-item:hover .sk-icon-wrap {
          transform: scale(1.14);
          filter: drop-shadow(0 6px 14px var(--glow-color, rgba(0, 0, 0, 0.15)));
        }

        .sk-icon {
          display: block;
        }

        /* Meta details */
        .sk-meta {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          min-width: 0;
        }

        .sk-name {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #151513;
          letter-spacing: -0.012em;
          line-height: 1.25;
          transition: color 180ms ease;
        }

        .sk-item:hover .sk-name {
          color: var(--brand-color, #151513);
        }

        .sk-role {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          color: #706C63;
          letter-spacing: 0.01em;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* ══════════════════════════════════════
           REDUCED MOTION
        ══════════════════════════════════════ */
        @media (prefers-reduced-motion: reduce) {
          .sk-item,
          .sk-icon-wrap {
            transition: none !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
