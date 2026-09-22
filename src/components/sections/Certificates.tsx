import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { certificatesData } from "@/data/certificates";
import { CertificateArchiveModal } from "../modals/CertificateArchiveModal";

/* ─────────────────────────────────────────────
   Palette — matches global editorial system
   ───────────────────────────────────────────── */
const PAL = {
  paper:   "#F4F1E9",
  surface: "#FAF8F2",
  ink:     "#151513",
  muted:   "#706C63",
  border:  "#D3CEC2",
  wine:    "#B02038",
};

/* Sort: most recent year first */
const sorted = [...certificatesData].sort(
  (a, b) => parseInt(b.year) - parseInt(a.year)
);

export const Certificates: React.FC = () => {
  const [hoveredId, setHoveredId]   = useState<string | null>(null);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  const hovered = sorted.find((c) => c.id === hoveredId) ?? null;

  return (
    <>
      <section
        id="certificates"
        aria-labelledby="cert-heading"
        style={{ background: PAL.paper, borderBottom: `1px solid ${PAL.border}`, position: "relative" }}
      >
        {/* ── Scoped styles ── */}
        <style>{`
          .cert-mono    { font-family: 'JetBrains Mono', 'Fira Mono', monospace; }
          .cert-display { font-family: 'Syne', sans-serif; }

          .cert-row {
            display: grid;
            grid-template-columns: 100px 1fr 110px;
            align-items: start;
            gap: 0 28px;
            padding: 36px 0;
            border-bottom: 1px solid ${PAL.border};
            transition: transform 0.22s ease;
            position: relative;
            cursor: default;
          }
          @media (hover: hover) { .cert-row:hover { transform: translateY(-3px); } }
          @media (prefers-reduced-motion: reduce) {
            .cert-row { transition: none !important; }
            .cert-row:hover { transform: none !important; }
          }
          @media (max-width: 680px) {
            .cert-row { grid-template-columns: 1fr; gap: 10px 0; padding: 28px 0; }
          }

          .cert-row--featured::before {
            content: '';
            position: absolute;
            left: -20px; top: 36px; bottom: 36px;
            width: 2px;
            background: ${PAL.wine};
            border-radius: 1px;
          }
          @media (max-width: 680px) {
            .cert-row--featured::before { left: -16px; top: 28px; bottom: 28px; }
          }

          .cert-title-wrap { position: relative; display: inline; }
          .cert-title-wrap::after {
            content: '';
            position: absolute;
            bottom: -2px; left: 0;
            width: 0; height: 1px;
            background: ${PAL.wine};
            transition: width 0.28s ease;
          }
          .cert-row:hover .cert-title-wrap::after,
          .cert-row:focus-within .cert-title-wrap::after { width: 100%; }
          @media (prefers-reduced-motion: reduce) { .cert-title-wrap::after { transition: none; } }

          .cert-badge {
            font-family: 'JetBrains Mono', monospace;
            font-size: 8.5px; font-weight: 700;
            letter-spacing: 0.12em; text-transform: uppercase;
            color: ${PAL.muted};
            border: 1px solid ${PAL.border};
            padding: 3px 7px; border-radius: 2px;
            display: inline-block;
            transition: border-color 0.22s, color 0.22s;
          }
          .cert-row:hover .cert-badge { border-color: ${PAL.wine}; color: ${PAL.wine}; }
          @media (prefers-reduced-motion: reduce) { .cert-badge { transition: none; } }

          .cert-num {
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px; font-weight: 700;
            color: ${PAL.border}; letter-spacing: 0.06em;
            user-select: none; transition: color 0.22s;
          }
          .cert-row:hover .cert-num { color: ${PAL.wine}; }
          @media (prefers-reduced-motion: reduce) { .cert-num { transition: none; } }

          .cert-rule {
            width: 14px; height: 2px;
            background: ${PAL.wine}; border-radius: 1px;
            margin-top: 14px;
            transition: width 0.28s ease;
          }
          .cert-row:hover .cert-rule { width: 28px; }
          @media (prefers-reduced-motion: reduce) { .cert-rule { transition: none; } }

          .cert-link {
            display: inline-flex; align-items: center; gap: 4px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 9.5px; font-weight: 700;
            letter-spacing: 0.11em; text-transform: uppercase;
            color: ${PAL.wine};
            border-bottom: 1px solid transparent;
            padding-bottom: 1px; text-decoration: none;
            transition: border-color 0.2s, opacity 0.2s;
          }
          .cert-link:hover { border-color: ${PAL.wine}; opacity: 0.78; }
          .cert-link:focus-visible { outline: 2px solid ${PAL.wine}; outline-offset: 4px; border-radius: 2px; }
          .cert-link-arrow { transition: transform 0.2s ease; }
          .cert-link:hover .cert-link-arrow { transform: translate(2px, -2px); }
          @media (prefers-reduced-motion: reduce) {
            .cert-link-arrow { transition: none; }
            .cert-link:hover .cert-link-arrow { transform: none; }
          }

          .cert-cta {
            display: inline-flex; align-items: center; gap: 6px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 10.5px; font-weight: 700;
            letter-spacing: 0.14em; text-transform: uppercase;
            color: ${PAL.wine};
            border-bottom: 1px solid transparent; padding-bottom: 1px;
            background: none; border-left: none; border-right: none; border-top: none;
            cursor: pointer; text-decoration: none;
            transition: border-color 0.2s, opacity 0.2s;
          }
          .cert-cta:hover { border-color: ${PAL.wine}; opacity: 0.78; }
          .cert-cta:focus-visible { outline: 2px solid ${PAL.wine}; outline-offset: 4px; border-radius: 2px; }

          .cert-row:focus-visible { outline: 2px solid ${PAL.wine}; outline-offset: 8px; border-radius: 2px; }

          .cert-right {
            text-align: right; display: flex;
            flex-direction: column; align-items: flex-end; gap: 12px;
          }
          @media (max-width: 680px) {
            .cert-right { text-align: left; align-items: flex-start; flex-direction: row; gap: 16px; flex-wrap: wrap; }
          }

          /* Floating preview — desktop only */
          .cert-preview-wrap {
            position: fixed;
            pointer-events: none;
            z-index: 50;
            right: 48px;
            top: 50%;
            width: 250px;
          }
          @media (max-width: 1100px) { .cert-preview-wrap { display: none !important; } }
        `}</style>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 40px" }}>

          {/* ── Section Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "flex-end", flexWrap: "wrap",
              gap: 24, paddingBottom: 40,
              borderBottom: `1px solid ${PAL.border}`,
            }}
          >
            <div>
              <h2
                id="cert-heading"
                className="cert-display"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: PAL.ink, lineHeight: 1.05, letterSpacing: "-0.022em", margin: 0 }}
              >
                A RECORD OF
                <br />
                <span style={{ color: PAL.wine }}>CONTINUOUS LEARNING.</span>
              </h2>
              <p
                className="cert-mono"
                style={{ fontSize: 11, color: PAL.muted, marginTop: 16, lineHeight: 1.8, maxWidth: 460 }}
              >
                Formal credentials and program recognitions earned through structured
                learning, open-source participation, and practical development.
              </p>
            </div>

            <button
              onClick={() => setIsArchiveOpen(true)}
              className="cert-cta"
              aria-label="View all credentials"
            >
              <span>VIEW ALL CREDENTIALS</span>
              <ArrowUpRight size={12} strokeWidth={2.5} />
            </button>
          </motion.div>

          {/* ── Archive List ── */}
          <div role="list" style={{ borderTop: `1px solid ${PAL.border}` }}>
            {sorted.map((cert, idx) => {
              const isFeatured = idx === 0;
              return (
                <motion.div
                  key={cert.id}
                  role="listitem"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className={`cert-row${isFeatured ? " cert-row--featured" : ""}`}
                    onMouseEnter={() => setHoveredId(cert.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onFocus={() => setHoveredId(cert.id)}
                    onBlur={() => setHoveredId(null)}
                    tabIndex={0}
                    aria-label={`${cert.title} — ${cert.issuer}, ${cert.year}`}
                  >
                    {/* Left: index + category + rule */}
                    <div style={{ paddingTop: 4 }}>
                      <span className="cert-num" aria-hidden="true">{cert.number}</span>
                      <br />
                      <span className="cert-badge">{cert.category}</span>
                      <div className="cert-rule" />
                    </div>

                    {/* Centre: title + issuer + description */}
                    <div>
                      {isFeatured && (
                        <p className="cert-mono" style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: PAL.wine, marginBottom: 6 }}>
                          MOST RECENT
                        </p>
                      )}

                      <h3
                        className="cert-display"
                        style={{ fontSize: "clamp(1.15rem, 2vw, 1.55rem)", fontWeight: 700, color: PAL.ink, letterSpacing: "-0.01em", lineHeight: 1.15, margin: 0, marginBottom: 5 }}
                      >
                        <span className="cert-title-wrap">{cert.title}</span>
                      </h3>

                      <p className="cert-mono" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: PAL.wine, marginBottom: 10 }}>
                        {cert.issuer}
                      </p>

                      <p style={{ fontFamily: "inherit", fontSize: 13.5, color: PAL.muted, lineHeight: 1.75, margin: 0, maxWidth: 520 }}>
                        {cert.description}
                      </p>
                    </div>

                    {/* Right: year + verify */}
                    <div className="cert-right" style={{ paddingTop: 4 }}>
                      <p className="cert-mono" style={{ fontSize: 13, fontWeight: 700, color: PAL.ink, letterSpacing: "0.04em" }}>
                        {cert.year}
                      </p>
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-link"
                        aria-label={`Verify ${cert.title} — opens in new tab`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>VERIFY</span>
                        <ArrowUpRight size={11} strokeWidth={2.5} className="cert-link-arrow" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── Bottom bar ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{ marginTop: 52, paddingTop: 32, borderTop: `1px solid ${PAL.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}
          >
            <p className="cert-mono" style={{ fontSize: 10.5, color: PAL.muted, lineHeight: 1.7 }}>
              All credentials link to their original issuing organisations.
            </p>
            <button onClick={() => setIsArchiveOpen(true)} className="cert-cta" aria-label="Open full certificate archive">
              <span>OPEN FULL ARCHIVE</span>
              <ArrowUpRight size={12} strokeWidth={2.5} />
            </button>
          </motion.div>
        </div>

        {/* ── Floating image preview — desktop ≥1100px only, aria-hidden ── */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              key={hovered.id}
              className="cert-preview-wrap"
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{   opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transform: "translateY(-50%)" }}
              aria-hidden="true"
            >
              <div
                style={{
                  background: PAL.surface,
                  border: `1px solid ${PAL.border}`,
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(21,21,19,0.12)",
                }}
              >
                <img
                  src={hovered.image}
                  alt=""
                  loading="lazy"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <div style={{ padding: "10px 14px", borderTop: `1px solid ${PAL.border}` }}>
                  <p className="cert-mono" style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: PAL.muted }}>
                    {hovered.issuer} · {hovered.year}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── Certificate Archive Modal (preserved) ── */}
      <CertificateArchiveModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
      />
    </>
  );
};


