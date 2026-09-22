import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { openSourceTimeline } from "@/data/openSource";

/* ─────────────────────────────────────────────
   Palette tokens — matches global editorial system
   ───────────────────────────────────────────── */
const PAL = {
  paper:   "#F4F1E9",
  surface: "#FAF8F2",
  ink:     "#151513",
  muted:   "#706C63",
  border:  "#D3CEC2",
  wine:    "#B02038",
};

export const OpenSourceTimeline: React.FC = () => {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      style={{ background: PAL.paper, borderBottom: `1px solid ${PAL.border}` }}
    >
      <style>{`
        .ost-mono { font-family: 'JetBrains Mono', 'Fira Mono', monospace; }
        .ost-display { font-family: 'Syne', sans-serif; }

        .ost-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #B02038;
          border-bottom: 1px solid transparent;
          padding-bottom: 1px;
          transition: border-color 0.2s, opacity 0.2s;
          text-decoration: none;
        }
        .ost-link:hover { border-color: #B02038; opacity: 0.78; }

        .ost-pill {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 0.05em;
          color: #706C63;
          line-height: 1.65;
          padding: 7px 0;
          border-bottom: 1px solid #D3CEC2;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .ost-pill:last-child { border-bottom: none; }
        .ost-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #B02038;
          flex-shrink: 0;
          margin-top: 7px;
        }

        .ost-record {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 0 48px;
          padding: 52px 0;
          border-bottom: 1px solid #D3CEC2;
        }
        @media (max-width: 700px) {
          .ost-record {
            grid-template-columns: 1fr;
            gap: 24px 0;
            padding: 40px 0;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 40px" }}>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
            <p className="ost-mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: PAL.wine, marginBottom: 12 }}>
              04 — OPEN SOURCE
            </p>
            <h2
              id="journey-heading"
              className="ost-display"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: PAL.ink, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}
            >
              CONTRIBUTING
              <br />
              <span style={{ color: PAL.wine }}>BEYOND THE CODE</span>
            </h2>
          </div>

          <p className="ost-mono" style={{ fontSize: 11, color: PAL.muted, maxWidth: 300, lineHeight: 1.75, textAlign: "right" }}>
            A documented record of community engineering,<br />project administration &amp; public contribution.
          </p>
        </motion.div>

        {/* ── Contribution Records ── */}
        <div>
          {openSourceTimeline.map((milestone, idx) => (
            <motion.div
              key={milestone.year + milestone.role}
              className="ost-record"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* ── Left: Year / Program metadata ── */}
              <div style={{ paddingTop: 4 }}>
                <p className="ost-mono" style={{ fontSize: 13, fontWeight: 700, color: PAL.ink, marginBottom: 6, letterSpacing: "0.04em" }}>
                  {milestone.year}
                </p>
                <p className="ost-mono" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: PAL.muted, lineHeight: 1.55 }}>
                  {milestone.program}
                </p>
                {/* Wine accent rule */}
                <div style={{ width: 28, height: 2, background: PAL.wine, marginTop: 20, borderRadius: 1 }} />
              </div>

              {/* ── Right: Role / Org / Summary / Contributions ── */}
              <div>
                {/* Role + Org */}
                <div style={{ marginBottom: 16 }}>
                  <h3
                    className="ost-display"
                    style={{ fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)", fontWeight: 700, color: PAL.ink, letterSpacing: "-0.01em", lineHeight: 1.1, margin: 0, marginBottom: 6 }}
                  >
                    {milestone.role}
                  </h3>
                  <p className="ost-mono" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: PAL.wine, margin: 0 }}>
                    {milestone.organization}
                  </p>
                </div>

                {/* Summary */}
                <p style={{ fontFamily: "inherit", fontSize: 14.5, color: PAL.muted, lineHeight: 1.8, marginBottom: 24, maxWidth: 560 }}>
                  {milestone.summary}
                </p>

                {/* Contributions */}
                <div style={{ borderTop: `1px solid ${PAL.border}`, marginBottom: 20 }}>
                  {milestone.contributions.map((item, i) => (
                    <div key={i} className="ost-pill">
                      <span className="ost-dot" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* External link */}
                {milestone.link && (
                  <a href={milestone.link.url} target="_blank" rel="noopener noreferrer" className="ost-link">
                    <span>{milestone.link.label}</span>
                    <ArrowUpRight size={11} strokeWidth={2.5} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom attribution bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginTop: 56, paddingTop: 32, borderTop: `1px solid ${PAL.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}
        >
          <p className="ost-mono" style={{ fontSize: 10.5, color: PAL.muted, letterSpacing: "0.06em" }}>
            All contributions, pull requests &amp; code reviews are publicly auditable on GitHub.
          </p>
          <a href="https://github.com/hitesh-kumar123" target="_blank" rel="noopener noreferrer" className="ost-link">
            <span>AUDIT GITHUB ACTIVITY</span>
            <ArrowUpRight size={11} strokeWidth={2.5} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
