import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { servicesList } from "@/data/services";

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

export const Services: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      style={{ background: PAL.paper, borderBottom: `1px solid ${PAL.border}` }}
    >
      {/* ── Scoped styles ── */}
      <style>{`
        .svc-mono { font-family: 'JetBrains Mono', 'Fira Mono', monospace; }
        .svc-display { font-family: 'Syne', sans-serif; }

        /* Row */
        .svc-row {
          display: grid;
          grid-template-columns: 44px 1fr auto;
          align-items: start;
          gap: 0 28px;
          padding: 40px 0;
          border-bottom: 1px solid ${PAL.border};
          cursor: default;
          transition: transform 0.22s ease;
        }
        @media (hover: hover) {
          .svc-row:hover { transform: translateY(-3px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .svc-row { transition: none !important; }
          .svc-row:hover { transform: none !important; }
        }
        @media (max-width: 640px) {
          .svc-row {
            grid-template-columns: 32px 1fr auto;
            gap: 0 16px;
            padding: 28px 0;
          }
        }

        /* Underline expand on hover */
        .svc-title-wrap { position: relative; display: inline-block; }
        .svc-title-wrap::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1px;
          background: ${PAL.wine};
          transition: width 0.28s ease;
        }
        .svc-row:hover .svc-title-wrap::after { width: 100%; }
        @media (prefers-reduced-motion: reduce) {
          .svc-title-wrap::after { transition: none; }
        }

        /* Arrow button */
        .svc-arrow {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid ${PAL.border};
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${PAL.muted};
          transition: border-color 0.22s, color 0.22s, background 0.22s, transform 0.22s;
          flex-shrink: 0;
          margin-top: 4px;
        }
        .svc-row:hover .svc-arrow {
          border-color: ${PAL.wine};
          color: ${PAL.wine};
          background: transparent;
          transform: translate(2px, -2px);
        }
        @media (prefers-reduced-motion: reduce) {
          .svc-arrow { transition: none; }
          .svc-row:hover .svc-arrow { transform: none; }
        }

        /* Deliverable tags */
        .svc-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${PAL.muted};
          border: 1px solid ${PAL.border};
          padding: 4px 9px;
          border-radius: 2px;
          background: transparent;
        }

        /* CTA link */
        .svc-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${PAL.wine};
          border-bottom: 1px solid transparent;
          padding-bottom: 1px;
          transition: border-color 0.2s, opacity 0.2s;
          cursor: pointer;
          background: none;
          border-left: none;
          border-right: none;
          border-top: none;
          text-decoration: none;
        }
        .svc-cta:hover { border-color: ${PAL.wine}; opacity: 0.78; }
        .svc-cta:focus-visible {
          outline: 2px solid ${PAL.wine};
          outline-offset: 4px;
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
            marginBottom: 0,
          }}
        >
          <div>
            <p
              className="svc-mono"
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: PAL.wine,
                marginBottom: 14,
              }}
            >
              05 — WHAT I BUILD
            </p>
            <h2
              id="services-heading"
              className="svc-display"
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                fontWeight: 800,
                color: PAL.ink,
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
                margin: 0,
              }}
            >
              FROM IDEA
              <br />
              TO WORKING
              <br />
              <span style={{ color: PAL.wine }}>PRODUCT.</span>
            </h2>
          </div>

          <p
            className="svc-mono"
            style={{
              fontSize: 11,
              color: PAL.muted,
              maxWidth: 280,
              lineHeight: 1.8,
              textAlign: "right",
            }}
          >
            Available for contract engineering,
            full-stack MVP builds, and
            custom web product development.
          </p>
        </motion.div>

        {/* ── Capability Index Rows ── */}
        <div
          role="list"
          style={{ borderTop: `1px solid ${PAL.border}` }}
        >
          {servicesList.map((service, idx) => {
            const isOpen = activeIdx === idx;
            return (
              <motion.div
                key={service.number}
                role="listitem"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* ── Main row ── */}
                <div
                  className="svc-row"
                  onMouseEnter={() => setActiveIdx(idx)}
                  onMouseLeave={() => setActiveIdx(null)}
                  onFocus={() => setActiveIdx(idx)}
                  onBlur={() => setActiveIdx(null)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isOpen}
                  aria-label={`${service.title} — ${service.shortSummary}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveIdx(isOpen ? null : idx);
                    }
                  }}
                >
                  {/* Index number */}
                  <span
                    className="svc-mono"
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: isOpen ? PAL.wine : PAL.border,
                      letterSpacing: "0.06em",
                      paddingTop: 6,
                      transition: "color 0.22s",
                      userSelect: "none",
                    }}
                    aria-hidden="true"
                  >
                    {service.number}
                  </span>

                  {/* Title + summary + detail */}
                  <div>
                    <h3
                      className="svc-display svc-title-wrap"
                      style={{
                        fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
                        fontWeight: 700,
                        color: PAL.ink,
                        letterSpacing: "-0.015em",
                        lineHeight: 1.15,
                        margin: 0,
                        marginBottom: 6,
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      className="svc-mono"
                      style={{
                        fontSize: 11,
                        color: PAL.muted,
                        lineHeight: 1.65,
                        margin: 0,
                        maxWidth: 520,
                      }}
                    >
                      {service.shortSummary}
                    </p>

                    {/* Expanded detail */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          style={{ overflow: "hidden" }}
                        >
                          {/* Full description */}
                          <p
                            style={{
                              fontFamily: "inherit",
                              fontSize: 14,
                              color: PAL.muted,
                              lineHeight: 1.8,
                              marginBottom: 16,
                              maxWidth: 560,
                            }}
                          >
                            {service.description}
                          </p>

                          {/* Deliverable tags */}
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                            {service.deliverables.map((item) => (
                              <span key={item} className="svc-tag">{item}</span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Arrow */}
                  <div className="svc-arrow" aria-hidden="true">
                    <ArrowUpRight size={15} strokeWidth={2.2} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom editorial CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            marginTop: 64,
            paddingTop: 40,
            borderTop: `1px solid ${PAL.border}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <p
              className="svc-display"
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                fontWeight: 700,
                color: PAL.ink,
                letterSpacing: "-0.01em",
                marginBottom: 6,
              }}
            >
              Have a project or idea in mind?
            </p>
            <p
              className="svc-mono"
              style={{ fontSize: 11, color: PAL.muted, lineHeight: 1.65 }}
            >
              Let's discuss timelines, tech stack, and deliverables.
            </p>
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="svc-cta"
            aria-label="Discuss a project — scroll to contact section"
          >
            <span>DISCUSS A PROJECT</span>
            <ArrowUpRight size={12} strokeWidth={2.5} />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
