import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─────────────────────────────────────────────
// About: Editorial Engineering Manifesto
// Color system: Paper #F4F1E9 | Ink #151513 | Wine #B02038 | Muted #706C63 | Border #D3CEC2
// Typography: Syne (manifesto) | Plus Jakarta Sans (body) | JetBrains Mono (label/CTA)
// Scope: About section ONLY
// Preserved: id="about", id="about-heading", GitHub URL, factual bio content
// ─────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.25, 0, 0, 1];

// Container: drives staggered line reveals
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// Line clip-reveal
const lineVariants = {
  hidden: { y: "108%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.55, ease: EASE },
  },
};

// Subtle fade-up for non-manifesto elements
const fadeVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export const About: React.FC = () => {
  const manifestoRef = useRef<HTMLDivElement>(null);
  const manifestoInView = useInView(manifestoRef, {
    once: true,
    margin: "-60px 0px -60px 0px",
  });

  const narrativeRef = useRef<HTMLDivElement>(null);
  const narrativeInView = useInView(narrativeRef, {
    once: true,
    margin: "-50px 0px -50px 0px",
  });

  const labelRef = useRef<HTMLDivElement>(null);
  const labelInView = useInView(labelRef, {
    once: true,
    margin: "-30px 0px -30px 0px",
  });

  return (
    <section
      id="about"
      className="ab-section"
      aria-labelledby="about-heading"
    >
      <div className="ab-container">

        {/* ── Section Label ── */}
        <motion.div
          ref={labelRef}
          className="ab-label-wrap"
          initial="hidden"
          animate={labelInView ? "visible" : "hidden"}
          variants={fadeVariants}
        >
          <span className="ab-label">ABOUT</span>
        </motion.div>

        {/* ── Editorial Composition ── */}
        <div className="ab-composition">

          {/* ── Left: Manifesto ── */}
          <div className="ab-manifesto-col" ref={manifestoRef}>

            {/* Wine signature vertical rule */}
            <div className="ab-wine-rule" aria-hidden="true" />

            {/* Manifesto content wrapper */}
            <div className="ab-manifesto-content">
              <motion.h2
                id="about-heading"
                className="ab-manifesto"
                initial="hidden"
                animate={manifestoInView ? "visible" : "hidden"}
                variants={containerVariants}
              >
                {/* Line 1 */}
                <span className="ab-line-clip">
                  <motion.span className="ab-line" variants={lineVariants}>
                    I don&apos;t just
                  </motion.span>
                </span>
                {/* Line 2 */}
                <span className="ab-line-clip">
                  <motion.span className="ab-line" variants={lineVariants}>
                    write code.
                  </motion.span>
                </span>

                {/* Breathing gap between the two phrases */}
                <span className="ab-phrase-gap" aria-hidden="true" />

                {/* Line 3 */}
                <span className="ab-line-clip">
                  <motion.span className="ab-line" variants={lineVariants}>
                    I build systems
                  </motion.span>
                </span>
                {/* Line 4 — Wine accent */}
                <span className="ab-line-clip">
                  <motion.span className="ab-line ab-line--wine" variants={lineVariants}>
                    people can use.
                  </motion.span>
                </span>
              </motion.h2>
            </div>

          </div>

          {/* ── Right: Supporting Narrative ── */}
          <motion.div
            ref={narrativeRef}
            className="ab-narrative-col"
            initial="hidden"
            animate={narrativeInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div className="ab-narrative-text" variants={fadeVariants}>
              <p>
                I'm Hitesh Kumar — a Full Stack Engineer based in India,
                specialising in building responsive web applications with
                the MERN stack and TypeScript. I care about the{" "}
                <em>full product journey</em>: from architecture decisions
                to the moment a user actually accomplishes something.
              </p>
              <p>
                My open-source work spans contribution and project administration
                through programmes like GirlScript Summer of Code, alongside
                building AI-assisted developer tools and LLM integrations with
                engineering precision.
              </p>
            </motion.div>

            {/* GitHub editorial link (single CTA) */}
            <motion.div variants={fadeVariants}>
              <a
                href="https://github.com/hitesh-kumar123"
                target="_blank"
                rel="noopener noreferrer"
                className="ab-github-link"
                aria-label="Explore Hitesh Kumar's GitHub repositories"
              >
                <span className="ab-github-text">EXPLORE GITHUB</span>
                <span className="ab-github-arrow" aria-hidden="true">↗</span>
              </a>
            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* ── Scoped styles ── */}
      <style>{`

        /* ══════════════════════════════════════
           SECTION BASE
        ══════════════════════════════════════ */
        .ab-section {
          position: relative;
          background-color: #EDE9DC;
          border-bottom: 1px solid #D3CEC2;
          box-sizing: border-box;
          padding-top: clamp(4rem, 7vw, 6.5rem);
          padding-bottom: clamp(4rem, 7vw, 6.5rem);
        }

        .ab-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          box-sizing: border-box;
        }

        @media (min-width: 640px)  { .ab-container { padding: 0 2rem; } }
        @media (min-width: 1024px) { .ab-container { padding: 0 3rem; } }

        /* ══════════════════════════════════════
           SECTION LABEL — ABOUT
        ══════════════════════════════════════ */
        .ab-label-wrap {
          margin-bottom: 2.25rem;
        }
        .ab-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #B02038;
        }

        /* ══════════════════════════════════════
           COMPOSITION — mobile: column, desktop: row
        ══════════════════════════════════════ */
        .ab-composition {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        /* ══════════════════════════════════════
           MANIFESTO COLUMN
        ══════════════════════════════════════ */
        .ab-manifesto-col {
          display: flex;
          flex-direction: row;
          gap: 1.5rem;
          align-items: stretch;
          min-width: 0;
        }

        .ab-manifesto-content {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          min-width: 0;
        }

        /* Wine vertical rule — editorial signature accent */
        .ab-wine-rule {
          flex-shrink: 0;
          width: 2px;
          align-self: stretch;
          background-color: #B02038;
          opacity: 0.55;
          margin-top: 0.25rem;
          margin-bottom: 0.25rem;
        }

        /* ══════════════════════════════════════
           MANIFESTO HEADING
        ══════════════════════════════════════ */
        .ab-manifesto {
          display: flex;
          flex-direction: column;
          margin: 0;
          padding: 0;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: clamp(1.75rem, 6.5vw, 2.5rem);
          line-height: 1.05;
          letter-spacing: -0.018em;
          /* Sentence case — text-transform removed for human feel */
          color: #151513;
        }

        /* Line clipping for animation */
        .ab-line-clip {
          display: block;
          overflow: hidden;
          padding-bottom: 0.08em;
          padding-right: 0.12em;
          box-sizing: border-box;
        }

        .ab-line {
          display: block;
          white-space: nowrap;
        }

        /* Wine accent on "PEOPLE CAN USE." */
        .ab-line--wine {
          color: #B02038;
        }

        /* Breathing gap between phrases */
        .ab-phrase-gap {
          display: block;
          height: 0.5em;
        }

        /* ══════════════════════════════════════
           NARRATIVE COLUMN (Quiet body text)
        ══════════════════════════════════════ */
        .ab-narrative-col {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .ab-narrative-text {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .ab-narrative-text p {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: clamp(0.9375rem, 1.15vw, 1.05rem);
          font-weight: 400;
          line-height: 1.75;
          color: #706C63;
          margin: 0;
        }

        .ab-narrative-text em {
          font-style: italic;
          color: #151513;
          font-weight: 500;
        }

        /* ══════════════════════════════════════
           GITHUB EDITORIAL LINK (Only CTA)
        ══════════════════════════════════════ */
        .ab-github-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          text-decoration: none;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: #151513;
        }

        .ab-github-text {
          position: relative;
        }

        .ab-github-text::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          height: 1px;
          width: 0%;
          background-color: #151513;
          transition: width 260ms cubic-bezier(0.25, 0, 0, 1);
        }

        .ab-github-link:hover .ab-github-text::after {
          width: 100%;
        }

        .ab-github-link:focus-visible {
          outline: 2px solid #B02038;
          outline-offset: 4px;
          border-radius: 2px;
        }

        .ab-github-arrow {
          display: inline-block;
          font-size: 13px;
          color: #B02038;
          transition: transform 260ms cubic-bezier(0.25, 0, 0, 1);
        }

        .ab-github-link:hover .ab-github-arrow {
          transform: translate(4px, -4px);
        }

        /* ══════════════════════════════════════
           DESKTOP — Asymmetrical Editorial (58% / 42%)
        ══════════════════════════════════════ */
        @media (min-width: 1024px) {
          .ab-composition {
            flex-direction: row;
            align-items: flex-start;
            gap: 4.5rem;
          }

          .ab-manifesto-col {
            flex: 0 0 58%;
            min-width: 0;
          }

          .ab-manifesto {
            font-size: clamp(1.85rem, 2.2vw, 2.55rem);
            line-height: 1.06;
          }

          .ab-narrative-col {
            flex: 1 1 0;
            min-width: 0;
            padding-top: 0.25rem;
          }
        }

        @media (min-width: 1280px) {
          .ab-manifesto {
            font-size: clamp(1.9rem, 2.2vw, 2.65rem);
            line-height: 1.07;
          }
        }

        /* ══════════════════════════════════════
           REDUCED MOTION
        ══════════════════════════════════════ */
        @media (prefers-reduced-motion: reduce) {
          .ab-github-text::after,
          .ab-github-arrow {
            transition: none !important;
          }
        }

      `}</style>
    </section>
  );
};
