import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { achievementsList } from "@/data/achievements";

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

export const Achievements: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      style={{ background: PAL.paper, borderBottom: `1px solid ${PAL.border}` }}
    >
      {/* ── Scoped styles ── */}
      <style>{`
        .ach-mono  { font-family: 'JetBrains Mono', 'Fira Mono', monospace; }
        .ach-display { font-family: 'Syne', sans-serif; }

        /* Row */
        .ach-row {
          display: grid;
          grid-template-columns: 140px 1fr auto;
          align-items: start;
          gap: 0 36px;
          padding: 44px 0;
          border-bottom: 1px solid ${PAL.border};
          transition: transform 0.22s ease;
        }
        @media (hover: hover) {
          .ach-row:hover { transform: translateY(-3px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ach-row { transition: none !important; }
          .ach-row:hover { transform: none !important; }
        }
        @media (max-width: 700px) {
          .ach-row {
            grid-template-columns: 1fr;
            gap: 16px 0;
            padding: 32px 0;
          }
        }

        /* Title underline expand */
        .ach-title-wrap { position: relative; display: inline-block; }
        .ach-title-wrap::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: ${PAL.wine};
          transition: width 0.28s ease;
        }
        .ach-row:hover .ach-title-wrap::after { width: 100%; }
        @media (prefers-reduced-motion: reduce) {
          .ach-title-wrap::after { transition: none; }
        }

        /* Status badge */
        .ach-badge {
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
        }
        .ach-row:hover .ach-badge {
          border-color: ${PAL.wine};
          color: ${PAL.wine};
          transition: border-color 0.22s, color 0.22s;
        }
        @media (prefers-reduced-motion: reduce) {
          .ach-row:hover .ach-badge { transition: none; }
        }

        /* Link */
        .ach-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${PAL.wine};
          border-bottom: 1px solid transparent;
          padding-bottom: 1px;
          text-decoration: none;
          transition: border-color 0.2s, opacity 0.2s;
        }
        .ach-link:hover { border-color: ${PAL.wine}; opacity: 0.78; }
        .ach-link:focus-visible {
          outline: 2px solid ${PAL.wine};
          outline-offset: 4px;
          border-radius: 2px;
        }
        .ach-link-arrow {
          transition: transform 0.2s ease;
        }
        .ach-link:hover .ach-link-arrow {
          transform: translate(2px, -2px);
        }
        @media (prefers-reduced-motion: reduce) {
          .ach-link-arrow { transition: none; }
          .ach-link:hover .ach-link-arrow { transform: none; }
        }

        /* Row focus ring */
        .ach-row:focus-visible {
          outline: 2px solid ${PAL.wine};
          outline-offset: 8px;
          border-radius: 2px;
        }

        /* Mobile: show inline link, hide right-column link */
        @media (max-width: 700px) {
          .ach-link-mobile { display: block !important; }
          .ach-link-col { display: none !important; }
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
            marginBottom: 0,
          }}
        >
          <div>
            <p
              className="ach-mono"
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: PAL.wine,
                marginBottom: 14,
              }}
            >
              06 — RECOGNITION
            </p>
            <h2
              id="achievements-heading"
              className="ach-display"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 800,
                color: PAL.ink,
                lineHeight: 1.05,
                letterSpacing: "-0.022em",
                margin: 0,
              }}
            >
              WHAT I'VE PUT
              <br />
              <span style={{ color: PAL.wine }}>INTO PRACTICE.</span>
            </h2>
          </div>

          <p
            className="ach-mono"
            style={{
              fontSize: 11,
              color: PAL.muted,
              maxWidth: 300,
              lineHeight: 1.8,
              textAlign: "right",
            }}
          >
            A factual record of hackathons,
            programs, and community work —
            built through consistency, not claims.
          </p>
        </motion.div>

        {/* ── Achievement Records ── */}
        <div
          role="list"
          style={{ borderTop: `1px solid ${PAL.border}` }}
        >
          {achievementsList.map((item, idx) => (
            <motion.div
              key={item.id}
              role="listitem"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="ach-row"
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
                onFocus={() => setActiveIdx(idx)}
                onBlur={() => setActiveIdx(null)}
                tabIndex={0}
                aria-label={`${item.title} — ${item.organization}, ${item.year}`}
              >
                {/* ── Left: Year + Status ── */}
                <div style={{ paddingTop: 4 }}>
                  <p
                    className="ach-mono"
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: PAL.ink,
                      letterSpacing: "0.04em",
                      marginBottom: 0,
                    }}
                  >
                    {item.year}
                  </p>
                  <span className="ach-badge">{item.status}</span>

                  {/* Wine accent rule */}
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

                {/* ── Centre: Title + Org + Description ── */}
                <div>
                  <div style={{ marginBottom: 10 }}>
                    <h3
                      className="ach-display ach-title-wrap"
                      style={{
                        fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)",
                        fontWeight: 700,
                        color: PAL.ink,
                        letterSpacing: "-0.012em",
                        lineHeight: 1.15,
                        margin: 0,
                        marginBottom: 5,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="ach-mono"
                      style={{
                        fontSize: 10.5,
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: PAL.wine,
                        margin: 0,
                      }}
                    >
                      {item.organization}
                    </p>
                  </div>

                  <p
                    style={{
                      fontFamily: "inherit",
                      fontSize: 14,
                      color: PAL.muted,
                      lineHeight: 1.8,
                      margin: 0,
                      maxWidth: 540,
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Link — visible below description on mobile */}
                  {item.link && (
                    <div style={{ marginTop: 16, display: "none" }} className="ach-link-mobile">
                      <a
                        href={item.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ach-link"
                      >
                        <span>{item.link.text}</span>
                        <ArrowUpRight size={11} strokeWidth={2.5} className="ach-link-arrow" />
                      </a>
                    </div>
                  )}
                </div>

                {/* ── Right: External link arrow (desktop) ── */}
                <div className="ach-link-col" style={{ paddingTop: 4, minWidth: 32 }}>
                  {item.link ? (
                    <a
                      href={item.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ach-link"
                      aria-label={`${item.link.text} — opens in new tab`}
                      style={{ flexDirection: "column", alignItems: "flex-end" }}
                    >
                      <ArrowUpRight size={16} strokeWidth={2} className="ach-link-arrow" />
                      <span
                        style={{
                          fontSize: 9,
                          letterSpacing: "0.1em",
                          marginTop: 4,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.link.text}
                      </span>
                    </a>
                  ) : (
                    /* Spacer to keep grid aligned when no link */
                    <div style={{ width: 32 }} aria-hidden="true" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom note ── */}
        <motion.p
          className="ach-mono"
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
          All records listed are verifiable. No rankings, placement numbers, or outcome
          metrics have been fabricated.
        </motion.p>

      </div>
    </section>
  );
};
