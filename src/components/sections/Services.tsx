import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { servicesList } from "@/data/services";

export const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>("01");

  const toggleExpand = (num: string) => {
    setExpandedId(prev => (prev === num ? null : num));
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="sv-section" aria-labelledby="services-heading">
      <div className="sv-container">

        {/* ── Section Header (Exact rhythm & font weights from TechStack & Projects) ── */}
        <header className="sv-header">
          <div className="sv-header-eyebrow">
            <span className="sv-eyebrow-line" aria-hidden="true" />
            <span className="sv-eyebrow-text">CAPABILITIES & SERVICES</span>
          </div>

          <div className="sv-header-body">
            <h2 id="services-heading" className="sv-headline">
              What I build, from idea to scale.
            </h2>
            <p className="sv-subhead">
              End-to-end full-stack engineering, accessible frontend interfaces, distributed backend APIs, and modern web application development.
            </p>
          </div>

          <div className="sv-header-rule" aria-hidden="true" />
        </header>

        {/* ── Editorial Capability Index ── */}
        <div className="sv-list" role="region" aria-label="Capabilities List">
          {servicesList.map((service) => {
            const isOpen = expandedId === service.number;

            return (
              <div
                key={service.number}
                className={`sv-item ${isOpen ? "sv-item--open" : ""}`}
              >
                {/* Row Trigger */}
                <button
                  type="button"
                  onClick={() => toggleExpand(service.number)}
                  className="sv-item-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`sv-panel-${service.number}`}
                >
                  <span className="sv-item-bullet" aria-hidden="true" />
                  <h3 className="sv-item-title">{service.title}</h3>
                  <div className="sv-item-icon" aria-hidden="true">
                    {isOpen ? <Minus size={14} strokeWidth={2} /> : <Plus size={14} strokeWidth={2} />}
                  </div>
                </button>

                {/* Expanded Details Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`sv-panel-${service.number}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="sv-item-body">
                        {/* Narrative description */}
                        <p className="sv-item-desc">
                          {service.description}
                        </p>

                        {/* Deliverables pills (clean, normal weight) */}
                        <div className="sv-item-deliverables">
                          <span className="sv-deliverables-label">DELIVERABLES & SCOPE</span>
                          <div className="sv-pills-wrap">
                            {service.deliverables.map((item) => (
                              <span key={item} className="sv-pill">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ── Section Footer Callout ── */}
        <footer className="sv-footer">
          <p className="sv-footer-text">
            Looking for a technical partner for your upcoming product or MVP?
          </p>
          <button
            onClick={scrollToContact}
            className="sv-footer-btn"
            aria-label="Discuss a project — scroll to contact"
          >
            <span>START A CONVERSATION</span>
            <span className="sv-footer-arrow" aria-hidden="true">↗</span>
          </button>
        </footer>

      </div>

      {/* ── Harmonized Typography & Styles ── */}
      <style>{`
        .sv-section {
          background-color: #F4F1E9;
          color: #151513;
          padding: clamp(4.5rem, 7vw, 6rem) 1.5rem clamp(3rem, 5vw, 4.5rem);
          border-bottom: 1px solid #D3CEC2;
          position: relative;
          box-sizing: border-box;
          width: 100%;
        }

        .sv-container {
          max-width: 1200px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        /* ── Header ── */
        .sv-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: clamp(2.5rem, 4vw, 3.5rem);
        }

        .sv-header-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .sv-eyebrow-line {
          width: 20px;
          height: 1.5px;
          background-color: #B02038;
        }

        .sv-eyebrow-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #B02038;
        }

        .sv-header-body {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .sv-headline {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          line-height: 1.15;
          letter-spacing: -0.018em;
          color: #151513;
          margin: 0;
          max-width: 620px;
        }

        .sv-subhead {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: clamp(0.925rem, 1.15vw, 1rem);
          color: #706C63;
          line-height: 1.65;
          max-width: 440px;
          margin: 0;
        }

        .sv-header-rule {
          width: 100%;
          height: 1px;
          background-color: #D3CEC2;
          margin-top: 0.5rem;
        }

        /* ── Capability List ── */
        .sv-list {
          display: flex;
          flex-direction: column;
        }

        .sv-item {
          border-bottom: 1px solid #D3CEC2;
        }

        .sv-item-trigger {
          width: 100%;
          background: none;
          border: none;
          padding: clamp(1.35rem, 2.4vw, 1.85rem) 0;
          display: grid;
          grid-template-columns: 16px 1fr auto;
          align-items: center;
          gap: 1.25rem;
          text-align: left;
          cursor: pointer;
        }

        @media (max-width: 640px) {
          .sv-item-trigger {
            grid-template-columns: 14px 1fr auto;
            gap: 0.85rem;
            padding: 1.25rem 0;
          }
        }

        .sv-item-trigger:focus-visible {
          outline: 2px solid #B02038;
          outline-offset: 4px;
        }

        .sv-item-bullet {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #C8C3B8;
          transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);
          display: inline-block;
          flex-shrink: 0;
        }

        .sv-item-trigger:hover .sv-item-bullet {
          background-color: #B02038;
          transform: scale(1.3);
        }

        .sv-item--open .sv-item-bullet {
          background-color: #B02038;
          box-shadow: 0 0 0 3px rgba(176, 32, 56, 0.18);
          transform: scale(1.25);
        }

        /* ── Title: Clean, elegant Plus Jakarta Sans ── */
        .sv-item-title {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: clamp(1.15rem, 1.8vw, 1.45rem);
          font-weight: 650;
          letter-spacing: -0.015em;
          line-height: 1.3;
          color: #1A1917;
          margin: 0;
          transition: color 180ms ease;
        }

        .sv-item-trigger:hover .sv-item-title {
          color: #B02038;
        }

        .sv-item--open .sv-item-title {
          color: #1A1917;
        }

        .sv-item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid #D3CEC2;
          color: #706C63;
          background: #FFFFFF;
          transition: all 180ms ease;
          flex-shrink: 0;
        }

        .sv-item-trigger:hover .sv-item-icon {
          border-color: #B02038;
          color: #B02038;
        }

        .sv-item--open .sv-item-icon {
          background-color: #151513;
          border-color: #151513;
          color: #F4F1E9;
        }

        /* ── Expandable Body Panel ── */
        .sv-item-body {
          padding-left: 28px;
          padding-bottom: clamp(1.5rem, 2.5vw, 2.25rem);
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }

        @media (max-width: 860px) {
          .sv-item-body {
            grid-template-columns: 1fr;
            padding-left: 0;
            gap: 1.5rem;
          }
        }

        .sv-item-desc {
          margin: 0;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: #605C55;
        }

        .sv-item-deliverables {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .sv-deliverables-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #8A857D;
        }

        .sv-pills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .sv-pill {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 500;
          color: #151513;
          background: #FFFFFF;
          border: 1px solid #D3CEC2;
          padding: 4px 9px;
          border-radius: 3px;
          letter-spacing: 0.01em;
          transition: border-color 180ms ease, color 180ms ease;
        }

        .sv-pill:hover {
          border-color: #B02038;
          color: #B02038;
        }

        /* ── Footer Callout (Attached seamlessly, no double line or empty gap) ── */
        .sv-footer {
          margin-top: 0;
          padding-top: 1.75rem;
          border-top: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.25rem;
        }

        .sv-footer-text {
          margin: 0;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #151513;
        }

        .sv-footer-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #B02038;
          transition: opacity 180ms ease;
        }

        .sv-footer-btn:hover {
          opacity: 0.75;
        }

        .sv-footer-arrow {
          font-size: 12px;
          transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sv-footer-btn:hover .sv-footer-arrow {
          transform: translate(2px, -2px);
        }

        @media (prefers-reduced-motion: reduce) {
          .sv-footer-arrow,
          .sv-item-trigger {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
