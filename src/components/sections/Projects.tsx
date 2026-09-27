import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projectsData } from "@/data/projects";

// ─────────────────────────────────────────────────────────────
// Selected Work — Editorial / Magazine-Grade Project Cards
// Palette: Paper #F4F1E9 | Ink #151513 | Muted #706C63 | Wine #B02038
// Fonts:   Syne (headlines) · Plus Jakarta Sans (body) · JetBrains Mono (meta)
// Style:   Each card = large editorial print layout
//          Left half = visual canvas with image + colour swatch strip
//          Right half = structured typographic narrative
// ─────────────────────────────────────────────────────────────

const ACCENT_COLORS: Record<string, string> = {
  "smart-rent":    "#1E3A5F",
  saylo:           "#3B2A6E",
  packgo:          "#1A5C3A",
  "weather-app":   "#2A4E6E",
  "simon-game":    "#5C2A1A",
  "spotify-clone": "#1A3D1A",
};

const ACCENT_LIGHT: Record<string, string> = {
  "smart-rent":    "#E8EFF8",
  saylo:           "#EDE8F8",
  packgo:          "#E8F5ED",
  "weather-app":   "#E8F0F8",
  "simon-game":    "#F8EDE8",
  "spotify-clone": "#E8F0E8",
};

const PROJECT_BADGES: Record<string, string> = {
  "smart-rent":    "MERN FULL STACK",
  saylo:           "AI · NLP ENGINE",
  packgo:          "TRAVEL ITINERARY",
  "weather-app":   "METEOROLOGY API",
  "simon-game":    "VANILLA JS",
  "spotify-clone": "STREAMING UI",
};

export const Projects: React.FC = () => {
  return (
    <section id="work" className="pj-section" aria-labelledby="work-heading">
      <div className="pj-container">

        {/* ── Section Header ── */}
        <header className="pj-header">
          <div className="pj-header-eyebrow">
            <span className="pj-eyebrow-line" aria-hidden="true" />
            <span className="pj-eyebrow-text">SELECTED WORK</span>
          </div>
          <div className="pj-header-body">
            <h2 id="work-heading" className="pj-headline">
              Featured projects,<br />
              <em>crafted with intent.</em>
            </h2>
            <p className="pj-subhead">
              Production-grade web applications and full-stack systems — built for performance, scale, and real-world users.
            </p>
          </div>
          <div className="pj-header-rule" aria-hidden="true" />
        </header>

        {/* ── Sticky-Stack Editorial Cards ── */}
        <div className="pj-feed">
          {projectsData.map((project, index) => {
            const accent = ACCENT_COLORS[project.id] || "#151513";
            const accentLight = ACCENT_LIGHT[project.id] || "#F4F1E9";
            const badge = PROJECT_BADGES[project.id] || project.category.toUpperCase();
            const isEven = index % 2 === 0;
            // Each card pins slightly lower so previous ones stay visible behind
            const stickyTop = `calc(80px + ${index * 18}px)`;

            return (
              <div
                key={project.id}
                className="pj-sticky-wrapper"
                style={{ top: stickyTop, zIndex: index + 1 }}
              >
              <article
                className={`pj-card ${isEven ? "pj-card--normal" : "pj-card--flip"}`}
                aria-label={`Project: ${project.title}`}
                style={{
                  "--accent": accent,
                  "--accent-light": accentLight,
                } as React.CSSProperties}
              >
                {/* ── Visual Panel ── */}
                <div className="pj-visual">
                  <div className="pj-color-strip" aria-hidden="true" />
                  <div className="pj-mockup">
                    <div className="pj-mockup-bar" aria-hidden="true">
                      <span className="pj-dot pj-dot--r" />
                      <span className="pj-dot pj-dot--y" />
                      <span className="pj-dot pj-dot--g" />
                      <div className="pj-url-pill">
                        <span className="pj-url-dot" />
                        <span className="pj-url-text">
                          {(project.liveUrl || "localhost:3000").replace(/^https?:\/\//, "")}
                        </span>
                      </div>
                    </div>
                    <div className="pj-mockup-screen">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="pj-screenshot"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="pj-stamp" aria-hidden="true">
                    <span className="pj-stamp-text">{badge}</span>
                  </div>
                </div>

                {/* ── Narrative Panel ── */}
                <div className="pj-narrative">
                  <div className="pj-narrative-top">
                    <span className="pj-badge">{badge}</span>
                  </div>
                  <div className="pj-title-block">
                    <h3 className="pj-title">{project.title}</h3>
                    <div className="pj-title-rule" aria-hidden="true" />
                    <p className="pj-tagline">{project.tagline}</p>
                  </div>
                  <p className="pj-desc">{project.description}</p>
                  <div className="pj-tech-section" aria-label="Technologies used">
                    <span className="pj-tech-label">STACK</span>
                    <div className="pj-tech-pills">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="pj-pill">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="pj-actions">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pj-btn-live"
                        aria-label={`Open live site for ${project.title}`}
                      >
                        <span>LIVE PREVIEW</span>
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pj-btn-gh"
                        aria-label={`View ${project.title} source on GitHub`}
                      >
                        <Github size={13} aria-hidden="true" />
                        <span>SOURCE</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Scoped Styles ── */}
      <style>{`

        /* ═══════════════════════════════════════
           SECTION BASE
        ═══════════════════════════════════════ */
        .pj-section {
          background-color: #F4F1E9;
          color: #151513;
          padding: clamp(5rem, 9vw, 8rem) 1.5rem;
          position: relative;
          box-sizing: border-box;
          width: 100%;
          border-bottom: 1px solid #D3CEC2;
        }

        .pj-container {
          max-width: 1200px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        /* ═══════════════════════════════════════
           HEADER
        ═══════════════════════════════════════ */
        .pj-header {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: clamp(4rem, 7vw, 5.5rem);
        }

        .pj-header-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .pj-eyebrow-line {
          display: block;
          width: 28px;
          height: 1.5px;
          background: #B02038;
          flex-shrink: 0;
        }

        .pj-eyebrow-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #B02038;
        }

        .pj-header-body {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          max-width: 700px;
        }

        .pj-headline {
          margin: 0;
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.4rem, 4.2vw, 3.8rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.025em;
          color: #151513;
        }

        .pj-headline em {
          font-style: italic;
          font-weight: 400;
          color: #706C63;
        }

        .pj-subhead {
          margin: 0;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: clamp(0.9rem, 1.15vw, 1rem);
          line-height: 1.65;
          color: #706C63;
          max-width: 520px;
        }

        .pj-header-rule {
          width: 100%;
          height: 1px;
          background: #D3CEC2;
          margin-top: 0.5rem;
        }

        /* ═══════════════════════════════════════
           FEED — STICKY STACK CONTAINER
        ═══════════════════════════════════════ */
        .pj-feed {
          display: flex;
          flex-direction: column;
          /* Extra bottom padding gives the last card room to scroll into view */
          padding-bottom: 6rem;
        }

        /* Each card is wrapped in a sticky sentinel */
        .pj-sticky-wrapper {
          position: sticky;
          /* top is set inline per card (staggered offsets) */
          will-change: transform;
        }

        /* ═══════════════════════════════════════
           CARD — EDITORIAL LAYOUT
        ═══════════════════════════════════════ */
        .pj-card {
          display: grid;
          grid-template-columns: 1fr;
          background: #FDFCF8;
          border: 1px solid #D3CEC2;
          border-radius: 18px;
          overflow: hidden;
          /* Bottom margin so scrolled-under cards don't fully disappear */
          margin-bottom: 2rem;
          box-shadow:
            0 2px 4px rgba(21,21,19,0.04),
            0 8px 24px rgba(21,21,19,0.06);
          transition: box-shadow 300ms ease, transform 300ms ease;
          /* When a new card slides over, this one scales back subtly */
          transform-origin: center top;
        }

        .pj-card:hover {
          box-shadow:
            0 4px 8px rgba(21,21,19,0.06),
            0 20px 48px rgba(21,21,19,0.1);
        }


        @media (min-width: 900px) {
          .pj-card {
            grid-template-columns: 1.05fr 0.95fr;
            min-height: 460px;
          }
          .pj-card--flip {
            grid-template-columns: 0.95fr 1.05fr;
          }
          .pj-card--flip .pj-visual { order: 2; }
          .pj-card--flip .pj-narrative { order: 1; }
        }

        /* ── Visual Panel ── */
        .pj-visual {
          position: relative;
          background: var(--accent-light);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: clamp(1.5rem, 3vw, 2.5rem);
          overflow: hidden;
          min-height: 300px;
        }

        .pj-color-strip {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: var(--accent);
        }

        .pj-index-mark {
          position: absolute;
          bottom: 1.2rem;
          right: 1.4rem;
          font-family: 'Syne', sans-serif;
          font-size: clamp(3.5rem, 6vw, 5.5rem);
          font-weight: 800;
          line-height: 1;
          color: var(--accent);
          opacity: 0.08;
          letter-spacing: -0.04em;
          user-select: none;
          pointer-events: none;
        }

        .pj-stamp {
          position: absolute;
          bottom: 1.1rem;
          left: 1.4rem;
        }

        .pj-stamp-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--accent);
          opacity: 0.55;
        }

        /* Browser Mockup */
        .pj-mockup {
          width: 100%;
          max-width: 520px;
          background: #FFFFFF;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(21,21,19,0.1);
          box-shadow:
            0 2px 8px rgba(21,21,19,0.08),
            0 12px 32px rgba(21,21,19,0.12);
        }

        .pj-mockup-bar {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 8px 12px;
          background: #F7F5EF;
          border-bottom: 1px solid #EAE7DE;
        }

        .pj-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .pj-dot--r { background: #EF4444; opacity: 0.75; }
        .pj-dot--y { background: #F59E0B; opacity: 0.75; }
        .pj-dot--g { background: #10B981; opacity: 0.75; }

        .pj-url-pill {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 5px;
          background: #EDEAE2;
          border-radius: 4px;
          padding: 3px 8px;
          margin-left: 6px;
          overflow: hidden;
        }

        .pj-url-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10B981;
          flex-shrink: 0;
          opacity: 0.8;
        }

        .pj-url-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px;
          color: #706C63;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .pj-mockup-screen { width: 100%; overflow: hidden; }

        .pj-screenshot {
          width: 100%;
          height: auto;
          max-height: 340px;
          object-fit: cover;
          object-position: top;
          display: block;
          user-select: none;
          -webkit-user-drag: none;
        }

        /* ── Narrative Panel ── */
        .pj-narrative {
          padding: clamp(2rem, 4vw, 3.25rem);
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.5rem;
          border-left: 1px solid #E8E4DA;
          box-sizing: border-box;
        }

        @media (max-width: 899px) {
          .pj-narrative {
            border-left: none;
            border-top: 1px solid #E8E4DA;
          }
        }

        .pj-narrative-top { display: flex; align-items: center; }

        .pj-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          background: var(--accent-light);
          border: 1px solid var(--accent);
          padding: 4px 10px;
          border-radius: 3px;
        }

        .pj-title-block {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .pj-title {
          margin: 0;
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.65rem, 2.5vw, 2.2rem);
          font-weight: 700;
          letter-spacing: -0.022em;
          line-height: 1.12;
          color: #151513;
        }

        .pj-title-rule {
          width: 36px;
          height: 2.5px;
          background: var(--accent);
          border-radius: 2px;
        }

        .pj-tagline {
          margin: 0;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.5;
          color: #151513;
        }

        .pj-desc {
          margin: 0;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 13.5px;
          line-height: 1.65;
          color: #706C63;
        }

        .pj-tech-section {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .pj-tech-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #9A9490;
        }

        .pj-tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .pj-pill {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 600;
          color: #151513;
          background: #FFFFFF;
          border: 1px solid #D3CEC2;
          padding: 3.5px 9px;
          border-radius: 3px;
          letter-spacing: 0.015em;
        }

        .pj-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          padding-top: 1.25rem;
          border-top: 1px solid #E8E4DA;
        }

        .pj-btn-live {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 18px;
          background: #151513;
          color: #F4F1E9;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-decoration: none;
          border-radius: 5px;
          transition: background 200ms ease;
        }

        .pj-btn-live:hover { background: var(--accent); }

        .pj-btn-gh {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 9px 16px;
          background: transparent;
          border: 1px solid #D3CEC2;
          color: #151513;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.09em;
          text-decoration: none;
          border-radius: 5px;
          transition: border-color 200ms ease, background 200ms ease;
        }

        .pj-btn-gh:hover {
          border-color: #151513;
          background: rgba(21,21,19,0.04);
        }

        /* ═══════════════════════════════════════
           REDUCED MOTION
        ═══════════════════════════════════════ */
        @media (prefers-reduced-motion: reduce) {
          .pj-sticky-wrapper {
            position: static !important;
          }
          .pj-card,
          .pj-btn-live,
          .pj-btn-gh {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;

