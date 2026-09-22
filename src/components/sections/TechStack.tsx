import React from "react";

// ─────────────────────────────────────────────
// Tech Stack / Toolbox: Clean Editorial Catalogue
// Colors: Paper #F4F1E9 | Ink #151513 | Muted #706C63 | Surface #FAF8F2 | Border #D3CEC2 | Wine #B02038
// Typography: Syne (headings) | Plus Jakarta Sans (tech names) | JetBrains Mono (labels/meta)
// Scope: TechStack.tsx ONLY
// ─────────────────────────────────────────────

interface ToolItem {
  id: string;
  name: string;
  role: string;
}

interface ToolCategory {
  num: string;
  title: string;
  items: ToolItem[];
}

const TOOLBOX_DATA: ToolCategory[] = [
  {
    num: "01",
    title: "FRONTEND",
    items: [
      { id: "react", name: "React", role: "UI Architecture" },
      { id: "typescript", name: "TypeScript", role: "Strict Typing" },
      { id: "nextjs", name: "Next.js", role: "SSR & App Router" },
      { id: "javascript", name: "JavaScript (ES6+)", role: "Async & Core Logic" },
      { id: "tailwind", name: "Tailwind CSS", role: "Design Tokens" },
      { id: "redux", name: "Redux", role: "State Management" },
    ],
  },
  {
    num: "02",
    title: "BACKEND & DATA",
    items: [
      { id: "nodejs", name: "Node.js", role: "Server Runtime" },
      { id: "express", name: "Express.js", role: "REST Middleware" },
      { id: "postgresql", name: "PostgreSQL", role: "Relational DB & ORMs" },
      { id: "sql", name: "SQL", role: "Queries & Indexing" },
      { id: "mongodb", name: "MongoDB", role: "NoSQL & Mongoose" },
      { id: "supabase", name: "Supabase", role: "BaaS & Realtime Auth" },
      { id: "graphql", name: "GraphQL", role: "Typed Schemas & APIs" },
      { id: "rest-apis", name: "REST APIs", role: "JSON Contracts" },
    ],
  },
  {
    num: "03",
    title: "AI & INTEGRATION",
    items: [
      { id: "ai-llm", name: "AI & LLM APIs", role: "Prompting & Pipelines" },
      { id: "python", name: "Python", role: "Automation & Scripting" },
    ],
  },
  {
    num: "04",
    title: "TOOLS & WORKFLOW",
    items: [
      { id: "git-github", name: "Git & GitHub", role: "Version Control" },
      { id: "postman", name: "Postman", role: "API Testing" },
      { id: "vercel-deployment", name: "Vercel & Netlify", role: "CI/CD & Edge" },
    ],
  },
];

export const TechStack: React.FC = () => {
  return (
    <section id="skills" className="tb-section" aria-label="Toolbox and Tech Stack">
      <div className="tb-container">
        {/* ── Section Header ── */}
        <header className="tb-header">
          <div className="tb-header-text">
            <span className="tb-label">TOOLBOX</span>
            <h2 className="tb-headline">
              Tools I use to turn ideas into working systems.
            </h2>
          </div>
          <div className="tb-header-count" aria-hidden="true">
            <span className="tb-count">
              {TOOLBOX_DATA.reduce((acc, cat) => acc + cat.items.length, 0)} TECHNOLOGIES
            </span>
          </div>
        </header>

        {/* ── Editorial Categories Grid ── */}
        <div className="tb-grid">
          {TOOLBOX_DATA.map((cat) => (
            <div key={cat.title} className="tb-category-card">
              {/* Category Header */}
              <div className="tb-category-header">
                <div className="tb-cat-left">
                  <span className="tb-cat-num">{cat.num}</span>
                  <span className="tb-cat-divider">/</span>
                  <h3 className="tb-cat-title">{cat.title}</h3>
                </div>
                <span className="tb-cat-badge">{cat.items.length} TOOLS</span>
              </div>

              {/* Items List */}
              <ul className="tb-items-list" role="list">
                {cat.items.map((item) => (
                  <li key={item.id} className="tb-item-row">
                    <div className="tb-item-main">
                      <span className="tb-item-dot" aria-hidden="true" />
                      <span className="tb-item-name">{item.name}</span>
                    </div>
                    <span className="tb-item-role">{item.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
          border-bottom: 1px solid #D3CEC2;
        }

        .tb-container {
          max-width: 1280px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        /* ══════════════════════════════════════
           HEADER & HEADLINE
        ══════════════════════════════════════ */
        .tb-header {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
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
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #B02038;
          margin-bottom: 0.75rem;
        }

        .tb-headline {
          margin: 0;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 3.8vw, 3.5rem);
          line-height: 1.12;
          letter-spacing: -0.018em;
          color: #151513;
          max-width: 22ch;
        }

        .tb-count {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #706C63;
        }

        /* ══════════════════════════════════════
           GRID LAYOUT (2 Columns Desktop)
        ══════════════════════════════════════ */
        .tb-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .tb-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }
        }

        /* ══════════════════════════════════════
           CATEGORY CARD
        ══════════════════════════════════════ */
        .tb-category-card {
          background-color: #FAF8F2;
          border: 1px solid #D3CEC2;
          padding: 1.75rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: border-color 220ms ease, transform 220ms ease;
        }

        .tb-category-card:hover {
          border-color: #B8B2A8;
        }

        /* Category Header */
        .tb-category-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          border-bottom: 1px solid #D3CEC2;
        }

        .tb-cat-left {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .tb-cat-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          color: #B02038;
        }

        .tb-cat-divider {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #D3CEC2;
        }

        .tb-cat-title {
          margin: 0;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #151513;
        }

        .tb-cat-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #706C63;
          background-color: #EAE6DC;
          padding: 3px 8px;
          border-radius: 2px;
        }

        /* ══════════════════════════════════════
           ITEMS LIST & ROWS
        ══════════════════════════════════════ */
        .tb-items-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .tb-item-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.625rem 0.5rem;
          border-radius: 2px;
          transition: background-color 180ms ease, transform 180ms ease;
          border-bottom: 1px solid rgba(211, 206, 194, 0.4);
        }

        .tb-item-row:last-child {
          border-bottom: none;
        }

        .tb-item-row:hover {
          background-color: #F4F1E9;
          transform: translateX(3px);
        }

        .tb-item-main {
          display: flex;
          align-items: center;
          gap: 0.625rem;
        }

        .tb-item-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #D3CEC2;
          transition: background-color 180ms ease;
        }

        .tb-item-row:hover .tb-item-dot {
          background-color: #B02038;
        }

        .tb-item-name {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #151513;
          letter-spacing: -0.01em;
        }

        .tb-item-role {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          color: #706C63;
          letter-spacing: 0.02em;
          text-align: right;
        }

        /* ══════════════════════════════════════
           REDUCED MOTION
        ══════════════════════════════════════ */
        @media (prefers-reduced-motion: reduce) {
          .tb-category-card,
          .tb-item-row {
            transition: none !important;
            transform: none !important;
          }
        }

      `}</style>
    </section>
  );
};

export default TechStack;
