import React, { useState } from "react";
import { motion } from "framer-motion";
import { currentlyExploringList } from "@/data/exploring";

/* ─────────────────────────────────────────────
   Palette — matches global editorial system
   ───────────────────────────────────────────── */
const PAL = {
  paper:   "#F4F1E9",
  surface: "#FAF8F2",
  ink:     "#151513",
  muted:   "#706C63",
  border:  "#D3CEC2",
  wine:    "#7C2638",
};

export const CurrentlyExploring: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section
      id="explore"
      aria-labelledby="explore-heading"
      style={{ background: PAL.surface, borderBottom: `1px solid ${PAL.border}` }}
    >
      {/* ── Scoped styles ── */}
      <style>{`
        .lab-mono    { font-family: 'JetBrains Mono', 'Fira Mono', monospace; }
        .lab-display { font-family: 'Syne', sans-serif; }

        /* Row */
        .lab-row {
          display: grid;
          grid-template-columns: 160px 1fr;
          align-items: start;
          gap: 0 40px;
          padding: 44px 0;
          border-bottom: 1px solid ${PAL.border};
          transition: transform 0.22s ease;
        }
        @media (hover: hover) {
          .lab-row:hover { transform: translateY(-3px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .lab-row { transition: none !important; }
          .lab-row:hover { transform: none !important; }
        }
        @media (max-width: 640px) {
          .lab-row {
            grid-template-columns: 1fr;
            gap: 14px 0;
            padding: 32px 0;
          }
        }

        /* Status badge */
        .lab-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${PAL.muted};
          border: 1px solid ${PAL.border};
          padding: 3px 8px;
          border-radius: 2px;
          background: transparent;
          display: inline-block;
          margin-top: 6px;
          transition: border-color 0.22s, color 0.22s;
        }
        .lab-row:hover .lab-badge {
          border-color: ${PAL.wine};
          color: ${PAL.wine};
        }
        @media (prefers-reduced-motion: reduce) {
          .lab-badge { transition: none; }
        }

        /* Topic title underline expand */
        .lab-topic-wrap { position: relative; display: inline-block; }
        .lab-topic-wrap::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: ${PAL.wine};
          transition: width 0.28s ease;
        }
        .lab-row:hover .lab-topic-wrap::after { width: 100%; }
        @media (prefers-reduced-motion: reduce) {
          .lab-topic-wrap::after { transition: none; }
        }

        /* Focus ring on row */
        .lab-row:focus-visible {
          outline: 2px solid ${PAL.wine};
          outline-offset: 8px;
          border-radius: 2px;
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 40px" }}>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 24,
            paddingBottom: 40,
            borderBottom: `1px solid ${PAL.border}`,
          }}
        >
          <div>
            <p
              className="lab-mono"
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: PAL.wine,
                marginBottom: 14,
              }}
            >
              07 — DIGITAL LAB
            </p>
            <h2
              id="explore-heading"
              className="lab-display"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 800,
                color: PAL.ink,
                lineHeight: 1.05,
                letterSpacing: "-0.022em",
                margin: 0,
              }}
            >
              CURRENTLY
              <br />
              <span style={{ color: PAL.wine }}>IN THE LAB.</span>
            </h2>
          </div>

          <p
            className="lab-mono"
            style={{
              fontSize: 11,
              color: PAL.muted,
              maxWidth: 300,
              lineHeight: 1.8,
              textAlign: "right",
            }}
          >
            What I am actively learning, testing,
            and experimenting with outside
            of finished projects.
          </p>
        </motion.div>

        {/* ── Exploration Records ── */}
        <div
          role="list"
          style={{ borderTop: `1px solid ${PAL.border}` }}
        >
          {currentlyExploringList.map((item, idx) => (
            <motion.div
              key={item.id}
              role="listitem"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="lab-row"
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
                onFocus={() => setActiveIdx(idx)}
                onBlur={() => setActiveIdx(null)}
                tabIndex={0}
                aria-label={`${item.topic} — ${item.category} — ${item.status}`}
              >
                {/* ── Left: Category + Status + accent rule ── */}
                <div style={{ paddingTop: 4 }}>
                  <p
                    className="lab-mono"
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: PAL.muted,
                      lineHeight: 1.5,
                      marginBottom: 0,
                    }}
                  >
                    {item.category}
                  </p>
                  <span className="lab-badge">{item.status}</span>

                  {/* Animated accent rule */}
                  <div
                    style={{
                      width: activeIdx === idx ? 28 : 14,
                      height: 2,
                      background: PAL.wine,
                      marginTop: 16,
                      borderRadius: 1,
                      transition: "width 0.28s ease",
                    }}
                  />
                </div>

                {/* ── Right: Topic + Description ── */}
                <div>
                  {/* Tag chip */}
                  <p
                    className="lab-mono"
                    style={{
                      fontSize: 9.5,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: PAL.wine,
                      marginBottom: 8,
                    }}
                  >
                    {item.tag}
                  </p>

                  <h3
                    className="lab-display lab-topic-wrap"
                    style={{
                      fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)",
                      fontWeight: 700,
                      color: PAL.ink,
                      letterSpacing: "-0.012em",
                      lineHeight: 1.15,
                      margin: 0,
                      marginBottom: 10,
                    }}
                  >
                    {item.topic}
                  </h3>

                  <p
                    style={{
                      fontFamily: "inherit",
                      fontSize: 14,
                      color: PAL.muted,
                      lineHeight: 1.8,
                      margin: 0,
                      maxWidth: 560,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Footer note ── */}
        <motion.p
          className="lab-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontSize: 10.5,
            color: PAL.muted,
            marginTop: 48,
            paddingTop: 32,
            borderTop: `1px solid ${PAL.border}`,
            lineHeight: 1.7,
          }}
        >
          This section reflects active exploration — not claimed expertise.
          Topics are learning-in-progress, not completed credentials.
        </motion.p>

      </div>
    </section>
  );
};
