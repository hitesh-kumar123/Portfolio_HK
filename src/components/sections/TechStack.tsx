import React, { useState } from "react";

// Real project preview assets from repository
import smartRentImage from "@/assets/smartRent.png";
import SayloImage from "@/assets/Saylo.png";
import packGoImage from "@/assets/PackGo.png";
import weatherImage from "@/assets/Weather.png";
import simonGameImage from "@/assets/Simon_Game.png";

// ─────────────────────────────────────────────
// Tech Stack / Toolbox: Interactive Editorial Catalogue
// Colors: Paper #F4F1E9 | Ink #151513 | Muted #706C63 | Surface #FAF8F2 | Border #D3CEC2 | Wine #7C2638
// Typography: Syne (headings/techs) | Plus Jakarta Sans (body) | JetBrains Mono (labels/meta)
// Scope: TechStack.tsx ONLY
// ─────────────────────────────────────────────

interface ToolItem {
  id: string;
  name: string;
  category: string;
  context: string;
  projectUsage?: {
    name: string;
    role: string;
    tagline: string;
    image: string;
    url?: string;
  };
}

interface ToolCategory {
  title: string;
  items: ToolItem[];
}

// Strictly factual data based on repository code and real project implementations
const TOOLBOX_DATA: ToolCategory[] = [
  {
    title: "FRONTEND",
    items: [
      {
        id: "react",
        name: "React",
        category: "FRONTEND",
        context: "Component-driven architecture, custom hooks, and reactive UI state handling.",
        projectUsage: {
          name: "Smart Rent System",
          role: "Full Stack MERN",
          tagline: "End-to-end property discovery & rental booking platform.",
          image: smartRentImage,
          url: "https://smartrentsystem.netlify.app/",
        },
      },
      {
        id: "typescript",
        name: "TypeScript",
        category: "FRONTEND / FULL STACK",
        context: "Strict type safety, typed API contracts, and robust interfaces across full-stack applications.",
        projectUsage: {
          name: "Portfolio & Full-Stack Apps",
          role: "Type Architecture",
          tagline: "End-to-end type safety for scalable web applications.",
          image: smartRentImage,
        },
      },
      {
        id: "nextjs",
        name: "Next.js",
        category: "FRONTEND",
        context: "App Router conventions, server-side rendering, and production web performance.",
      },
      {
        id: "javascript",
        name: "JavaScript (ES6+)",
        category: "LANGUAGES",
        context: "Modern asynchronous workflows, DOM manipulation, and native browser APIs.",
        projectUsage: {
          name: "Simon Memory Game",
          role: "Vanilla JS Engine",
          tagline: "Audio-visual sequence game with asynchronous state queues.",
          image: simonGameImage,
          url: "https://simon-by-hitesh.netlify.app/",
        },
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        category: "FRONTEND",
        context: "Design tokens, responsive fluid layouts, and structured utility systems.",
        projectUsage: {
          name: "Smart Rent System",
          role: "Design System & UI",
          tagline: "Responsive listing grid and tenant dashboard styling.",
          image: smartRentImage,
        },
      },
      {
        id: "redux",
        name: "Redux",
        category: "FRONTEND",
        context: "Predictable global application state management with unidirectional data flow.",
      },
    ],
  },
  {
    title: "BACKEND & DATA",
    items: [
      {
        id: "nodejs",
        name: "Node.js",
        category: "BACKEND",
        context: "Non-blocking event loop execution, server runtimes, and REST microservices.",
        projectUsage: {
          name: "Smart Rent API",
          role: "Backend Architecture",
          tagline: "RESTful API handling bookings, listings, and auth flows.",
          image: smartRentImage,
        },
      },
      {
        id: "express",
        name: "Express.js",
        category: "BACKEND",
        context: "Modular middleware chaining, route controllers, and secure endpoint design.",
        projectUsage: {
          name: "Smart Rent API",
          role: "Express REST Server",
          tagline: "Authentication middleware and property query pipelines.",
          image: smartRentImage,
        },
      },
      {
        id: "mongodb",
        name: "MongoDB",
        category: "DATA",
        context: "NoSQL document collections, indexing strategies, and Mongoose schema modeling.",
        projectUsage: {
          name: "Smart Rent Database",
          role: "Database Design",
          tagline: "Document schemas for accommodations, users, and reservations.",
          image: smartRentImage,
        },
      },
      {
        id: "rest-apis",
        name: "REST APIs",
        category: "BACKEND",
        context: "Clean JSON contracts, HTTP status protocols, and client integration layers.",
        projectUsage: {
          name: "Weather Forecast App",
          role: "API Integration",
          tagline: "Consuming real-time meteorological weather endpoints.",
          image: weatherImage,
          url: "https://raincheckr.netlify.app/",
        },
      },
    ],
  },
  {
    title: "AI / INTEGRATION",
    items: [
      {
        id: "ai-llm",
        name: "AI & LLM APIs",
        category: "AI / INTEGRATION",
        context: "Prompt engineering, structured output parsing, and conversational feedback loops.",
        projectUsage: {
          name: "Saylo — AI Coach",
          role: "AI Workflow Integration",
          tagline: "Technical mock interview prep with dynamic question generation.",
          image: SayloImage,
          url: "https://saylo-ten.vercel.app/",
        },
      },
      {
        id: "python",
        name: "Python",
        category: "LANGUAGES",
        context: "Scripting, data transformation, automation routines, and AI prototyping.",
      },
    ],
  },
  {
    title: "TOOLS & WORKFLOW",
    items: [
      {
        id: "git-github",
        name: "Git & GitHub",
        category: "WORKFLOW",
        context: "Branching strategies, PR code reviews, issue tracking, and open-source project governance.",
      },
      {
        id: "postman",
        name: "Postman",
        category: "TESTING",
        context: "Automated API request assertions, mock servers, and test collection runners.",
      },
      {
        id: "vercel-deployment",
        name: "Vercel & Netlify",
        category: "DEPLOYMENT & CI/CD",
        context: "Production edge builds, continuous deployments, environment variables, and CDN caching.",
        projectUsage: {
          name: "PackGo",
          role: "Production Deployment",
          tagline: "Travel planner deployed with automated CI/CD pipeline.",
          image: packGoImage,
          url: "https://packngo.netlify.app/",
        },
      },
    ],
  },
];

export const TechStack: React.FC = () => {
  // Default active item on desktop
  const [activeItem, setActiveItem] = useState<ToolItem>(TOOLBOX_DATA[0].items[0]);
  // Mobile accordion expanded item ID (toggle on tap)
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(TOOLBOX_DATA[0].items[0].id);

  const handleItemSelect = (item: ToolItem) => {
    setActiveItem(item);
    setMobileExpandedId((prev) => (prev === item.id ? null : item.id));
  };

  return (
    <section id="skills" className="tb-section" aria-label="Toolbox and Tech Stack">
      <div className="tb-container">
        {/* ── Section Header ── */}
        <header className="tb-header">
          <div className="tb-header-text">
            <span className="tb-label">TOOLBOX</span>
            <h2 className="tb-headline">
              TOOLS I USE<br />
              TO TURN IDEAS<br />
              INTO WORKING<br />
              SYSTEMS.
            </h2>
          </div>
          <div className="tb-header-hint" aria-hidden="true">
            <span className="tb-hint">HOVER TO EXPLORE →</span>
          </div>
        </header>

        {/* ── Editorial Catalogue Content ── */}
        <div className="tb-body">
          {/* Left / Main Column: Categories & Items */}
          <div className="tb-list-column">
            {TOOLBOX_DATA.map((cat) => (
              <div key={cat.title} className="tb-category-block">
                <div className="tb-category-header">
                  <h3 className="tb-category-title">{cat.title}</h3>
                </div>

                <div className="tb-items-grid">
                  {cat.items.map((item) => {
                    const isActive = activeItem.id === item.id;
                    const isMobileExpanded = mobileExpandedId === item.id;

                    return (
                      <div key={item.id} className="tb-item-wrap">
                        <button
                          type="button"
                          className={`tb-item-btn ${isActive ? "tb-item-btn--active" : ""}`}
                          onClick={() => handleItemSelect(item)}
                          onMouseEnter={() => setActiveItem(item)}
                          onFocus={() => setActiveItem(item)}
                          aria-expanded={isMobileExpanded}
                          aria-label={`Inspect ${item.name} engineering context`}
                        >
                          <span className="tb-item-name">{item.name}</span>
                          <span className="tb-item-arrow" aria-hidden="true">→</span>
                        </button>

                        {/* Mobile Inline Detail Accordion (visible only below 1024px) */}
                        {isMobileExpanded && (
                          <div className="tb-mobile-inline-card">
                            <span className="tb-preview-tag">{item.category}</span>
                            <p className="tb-mobile-context">{item.context}</p>
                            {item.projectUsage && (
                              <div className="tb-mobile-usage">
                                <span className="tb-usage-label">REAL USAGE</span>
                                <div className="tb-usage-project">
                                  <img
                                    src={item.projectUsage.image}
                                    alt={item.projectUsage.name}
                                    className="tb-usage-img"
                                    loading="lazy"
                                  />
                                  <div className="tb-usage-meta">
                                    <div className="tb-usage-name">{item.projectUsage.name}</div>
                                    <div className="tb-usage-desc">{item.projectUsage.tagline}</div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Desktop Context Preview Panel (Quiet Editorial Annotation) */}
          <aside className="tb-preview-column" aria-live="polite">
            <div className="tb-preview-card">
              <div className="tb-preview-header">
                <span className="tb-preview-tag">{activeItem.category}</span>
                <h4 className="tb-preview-title">{activeItem.name}</h4>
              </div>

              <p className="tb-preview-context">{activeItem.context}</p>

              {activeItem.projectUsage ? (
                <div className="tb-preview-project-box">
                  <span className="tb-usage-label">PROJECT USAGE</span>
                  <div className="tb-project-card">
                    <div className="tb-project-img-wrap">
                      <img
                        src={activeItem.projectUsage.image}
                        alt={activeItem.projectUsage.name}
                        className="tb-project-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="tb-project-meta">
                      <span className="tb-project-role">{activeItem.projectUsage.role}</span>
                      <div className="tb-project-title">{activeItem.projectUsage.name}</div>
                      <p className="tb-project-tagline">{activeItem.projectUsage.tagline}</p>
                      {activeItem.projectUsage.url && (
                        <a
                          href={activeItem.projectUsage.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="tb-project-link"
                          aria-label={`View live ${activeItem.projectUsage.name}`}
                        >
                          EXPLORE ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="tb-preview-standard-box">
                  <span className="tb-usage-label">SYSTEM CORE</span>
                  <p className="tb-standard-note">
                    Integrated across core development tooling, code modularity standards, and system architecture.
                  </p>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* ── Scoped Styling ── */}
      <style>{`
        /* ══════════════════════════════════════
           SECTION CONTAINER & BACKGROUND
        ══════════════════════════════════════ */
        .tb-section {
          background-color: #F4F1E9;
          color: #151513;
          padding: clamp(4rem, 8vw, 7.5rem) 1.5rem;
          position: relative;
          box-sizing: border-box;
          width: 100%;
        }

        .tb-container {
          max-width: 1320px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        /* ══════════════════════════════════════
           HEADER & HEADLINE
        ══════════════════════════════════════ */
        .tb-header {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: clamp(2.5rem, 5vw, 4rem);
          padding-bottom: 2rem;
          border-bottom: 1px solid #D3CEC2;
        }

        @media (min-width: 768px) {
          .tb-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
          }
        }

        .tb-label {
          display: block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7C2638;
          margin-bottom: 1rem;
        }

        .tb-headline {
          margin: 0;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 3.8vw, 3.6rem);
          line-height: 1.02;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          color: #151513;
        }

        .tb-hint {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #706C63;
        }

        /* ══════════════════════════════════════
           BODY LAYOUT (Catalogue + Sticky Preview)
        ══════════════════════════════════════ */
        .tb-body {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          align-items: flex-start;
        }

        @media (min-width: 1024px) {
          .tb-body {
            flex-direction: row;
            gap: 4.5rem;
          }
        }

        .tb-list-column {
          flex: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        /* ══════════════════════════════════════
           CATEGORY BLOCK & 1PX DIVIDERS
        ══════════════════════════════════════ */
        .tb-category-block {
          padding-top: 1.25rem;
          border-top: 1px solid #D3CEC2;
        }

        .tb-category-header {
          margin-bottom: 1rem;
        }

        .tb-category-title {
          margin: 0;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #706C63;
        }

        /* ══════════════════════════════════════
           ITEMS GRID & BREAKPOINTS
        ══════════════════════════════════════ */
        .tb-items-grid {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        @media (min-width: 768px) {
          .tb-items-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem 2rem;
          }
        }

        /* ══════════════════════════════════════
           TECHNOLOGY ITEM BUTTON
        ══════════════════════════════════════ */
        .tb-item-wrap {
          display: flex;
          flex-direction: column;
        }

        .tb-item-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0.75rem 0.25rem;
          background: transparent;
          border: none;
          border-bottom: 1px solid transparent;
          cursor: pointer;
          text-align: left;
          transition: transform 220ms ease, color 220ms ease, border-color 220ms ease;
        }

        .tb-item-name {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: clamp(1.125rem, 1.4vw, 1.35rem);
          font-weight: 600;
          color: #706C63;
          letter-spacing: -0.01em;
          transition: color 200ms ease;
        }

        .tb-item-arrow {
          font-size: 14px;
          color: #7C2638;
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 200ms ease, transform 200ms ease;
        }

        /* Hover & Focus State */
        .tb-item-btn:hover,
        .tb-item-btn:focus-visible {
          transform: translateX(4px);
          outline: none;
        }

        .tb-item-btn:hover .tb-item-name,
        .tb-item-btn:focus-visible .tb-item-name {
          color: #151513;
        }

        .tb-item-btn:hover .tb-item-arrow,
        .tb-item-btn:focus-visible .tb-item-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* Active / Selected State */
        .tb-item-btn--active {
          border-bottom-color: #7C2638;
          transform: translateX(4px);
        }

        .tb-item-btn--active .tb-item-name {
          color: #151513;
          font-weight: 700;
        }

        .tb-item-btn--active .tb-item-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* ══════════════════════════════════════
           DESKTOP PREVIEW COLUMN (Quiet & Sticky)
        ══════════════════════════════════════ */
        .tb-preview-column {
          display: none;
        }

        @media (min-width: 1024px) {
          .tb-preview-column {
            display: block;
            width: 320px;
            flex-shrink: 0;
            position: sticky;
            top: 6rem;
          }
        }

        .tb-preview-card {
          background-color: #FAF8F2;
          border: 1px solid #D3CEC2;
          padding: 1.75rem;
          box-sizing: border-box;
          transition: all 260ms ease;
        }

        .tb-preview-header {
          margin-bottom: 0.75rem;
        }

        .tb-preview-tag {
          display: inline-block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #7C2638;
          margin-bottom: 0.35rem;
        }

        .tb-preview-title {
          margin: 0;
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          color: #151513;
        }

        .tb-preview-context {
          margin: 0 0 1.5rem 0;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 13px;
          line-height: 1.6;
          color: #706C63;
        }

        .tb-usage-label {
          display: block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #706C63;
          margin-bottom: 0.75rem;
        }

        .tb-preview-project-box {
          padding-top: 1.25rem;
          border-top: 1px solid #D3CEC2;
        }

        .tb-project-card {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .tb-project-img-wrap {
          width: 100%;
          height: 130px;
          overflow: hidden;
          background-color: #EAE6DC;
          border: 1px solid #D3CEC2;
        }

        .tb-project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: grayscale(15%);
          transition: transform 300ms ease;
        }

        .tb-project-card:hover .tb-project-img {
          transform: scale(1.03);
          filter: grayscale(0%);
        }

        .tb-project-role {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #7C2638;
        }

        .tb-project-title {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #151513;
          margin-top: 0.15rem;
        }

        .tb-project-tagline {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 12px;
          line-height: 1.5;
          color: #706C63;
          margin: 0.35rem 0 0.75rem 0;
        }

        .tb-project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          color: #151513;
          transition: color 200ms ease;
        }

        .tb-project-link:hover {
          color: #7C2638;
        }

        .tb-preview-standard-box {
          padding-top: 1.25rem;
          border-top: 1px solid #D3CEC2;
        }

        .tb-standard-note {
          margin: 0;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 12px;
          line-height: 1.55;
          color: #706C63;
        }

        /* ══════════════════════════════════════
           MOBILE INLINE CONTEXT ACCORDION
        ══════════════════════════════════════ */
        .tb-mobile-inline-card {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 1rem;
          margin: 0.25rem 0 0.75rem 0;
          background-color: #FAF8F2;
          border-left: 2px solid #7C2638;
          box-sizing: border-box;
          width: 100%;
        }

        @media (min-width: 1024px) {
          .tb-mobile-inline-card {
            display: none;
          }
        }

        .tb-mobile-context {
          margin: 0;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 12px;
          line-height: 1.55;
          color: #706C63;
        }

        .tb-mobile-usage {
          padding-top: 0.75rem;
          border-top: 1px solid #D3CEC2;
        }

        .tb-usage-project {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 0.35rem;
        }

        .tb-usage-img {
          width: 50px;
          height: 38px;
          object-fit: cover;
          border: 1px solid #D3CEC2;
          flex-shrink: 0;
        }

        .tb-usage-name {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #151513;
        }

        .tb-usage-desc {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 11px;
          color: #706C63;
          line-height: 1.4;
        }

        /* ══════════════════════════════════════
           REDUCED MOTION
        ══════════════════════════════════════ */
        @media (prefers-reduced-motion: reduce) {
          .tb-item-btn,
          .tb-item-arrow,
          .tb-project-img,
          .tb-project-link {
            transition: none !important;
            transform: none !important;
          }
        }

      `}</style>
    </section>
  );
};

export default TechStack;
