import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp, Copy, Check } from "lucide-react";
import { siteNavItems } from "@/data/navigation";

const PAL = {
  paper:   "#F4F1E9",
  surface: "#FAF8F2",
  ink:     "#151513",
  muted:   "#706C63",
  border:  "#D3CEC2",
  wine:    "#7C2638",
};

const NAV_LINKS = [
  { id: "about",   label: "About" },
  { id: "work",    label: "Projects" },
  { id: "contact", label: "Contact" },
];

const EXTERNAL_LINKS = [
  { label: "GitHub",   href: "https://github.com/hitesh-kumar123", copyable: false },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hitesh-kumar-hk/", copyable: false },
  { label: "Email",    href: "mailto:hiteshdevkumar2003@gmail.com", copyable: true },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hiteshdevkumar2003@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer
      aria-label="Site footer"
      style={{ background: PAL.paper, borderTop: `1px solid ${PAL.border}` }}
    >
      <style>{`
        .ftr-mono    { font-family: 'JetBrains Mono', 'Fira Mono', monospace; }
        .ftr-display { font-family: 'Syne', sans-serif; }

        .ftr-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          text-decoration: none;
          color: ${PAL.muted};
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: color 0.22s;
        }
        .ftr-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: ${PAL.wine};
          transition: width 0.26s ease;
        }
        .ftr-link:hover { color: ${PAL.ink}; }
        .ftr-link:hover::after { width: 100%; }
        .ftr-link:focus-visible {
          outline: 2px solid ${PAL.wine};
          outline-offset: 5px;
          border-radius: 2px;
        }
        @media (prefers-reduced-motion: reduce) {
          .ftr-link { transition: none; }
          .ftr-link::after { transition: none; }
        }

        .ftr-arrow { transition: transform 0.2s ease; color: ${PAL.border}; }
        .ftr-link:hover .ftr-arrow { transform: translate(2px,-2px); color: ${PAL.wine}; }
        @media (prefers-reduced-motion: reduce) {
          .ftr-arrow { transition: none; }
          .ftr-link:hover .ftr-arrow { transform: none; }
        }

        .ftr-top {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: 1px solid ${PAL.border};
          padding: 9px 16px;
          border-radius: 2px;
          cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: ${PAL.muted};
          transition: border-color 0.22s, color 0.22s, transform 0.22s;
        }
        .ftr-top:hover { border-color: ${PAL.ink}; color: ${PAL.ink}; transform: translateY(-2px); }
        .ftr-top:focus-visible { outline: 2px solid ${PAL.wine}; outline-offset: 4px; border-radius: 2px; }
        .ftr-top-arrow { transition: transform 0.22s ease; }
        .ftr-top:hover .ftr-top-arrow { transform: translateY(-3px); }
        @media (prefers-reduced-motion: reduce) {
          .ftr-top { transition: none; }
          .ftr-top:hover { transform: none; }
          .ftr-top-arrow { transition: none; }
          .ftr-top:hover .ftr-top-arrow { transform: none; }
        }

        .ftr-copy {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${PAL.muted};
          background: none;
          border: 1px solid ${PAL.border};
          border-radius: 2px;
          padding: 2px 7px;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }
        .ftr-copy:hover { border-color: ${PAL.wine}; color: ${PAL.wine}; }
        .ftr-copy:focus-visible { outline: 2px solid ${PAL.wine}; outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) { .ftr-copy { transition: none; } }

        .ftr-links-row {
          display: flex;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
        }
        @media (max-width: 600px) { .ftr-links-row { gap: 18px; } }

        .ftr-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .ftr-sep {
          width: 1px;
          height: 18px;
          background: ${PAL.border};
          flex-shrink: 0;
        }
        @media (max-width: 720px) { .ftr-sep { display: none; } }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 40px 48px" }}>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ paddingBottom: 36, borderBottom: `1px solid ${PAL.border}` }}
        >
          <p
            className="ftr-display"
            style={{
              fontSize: "clamp(1.05rem, 2.5vw, 1.9rem)",
              fontWeight: 700,
              color: PAL.ink,
              letterSpacing: "-0.014em",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            DESIGNED WITH CURIOSITY.{" "}
            <span style={{ color: PAL.wine }}>BUILT WITH CODE.</span>
          </p>
        </motion.div>

        {/* Nav + External links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{
            padding: "32px 0",
            borderBottom: `1px solid ${PAL.border}`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <nav aria-label="Footer navigation">
            <div className="ftr-links-row">
              {NAV_LINKS.map(({ id, label }) => (
                <button
                  key={id}
                  className="ftr-link"
                  onClick={() => scrollTo(id)}
                  aria-label={`Jump to ${label} section`}
                >
                  {label}
                </button>
              ))}
            </div>
          </nav>

          <div aria-hidden="true" className="ftr-sep" />

          <div className="ftr-links-row">
            {EXTERNAL_LINKS.map((link) => (
              <span key={link.label} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <a
                  className="ftr-link"
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={
                    link.href.startsWith("http")
                      ? `${link.label} profile — opens in new tab`
                      : `Send email to Hitesh Kumar`
                  }
                >
                  {link.label}
                  {link.href.startsWith("http") && (
                    <ArrowUpRight size={10} strokeWidth={2.5} className="ftr-arrow" />
                  )}
                </a>
                {link.copyable && (
                  <button
                    className="ftr-copy"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address to clipboard"
                  >
                    {copied
                      ? <><Check size={8} /><span>COPIED</span></>
                      : <><Copy size={8} /><span>COPY</span></>
                    }
                  </button>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bottom metadata bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="ftr-bottom"
          style={{ paddingTop: 26 }}
        >
          <p className="ftr-mono" style={{ fontSize: 10, color: PAL.muted, letterSpacing: "0.08em" }}>
            © {currentYear} Hitesh Kumar. All rights reserved.
          </p>

          <button
            className="ftr-top"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={11} strokeWidth={2.5} className="ftr-top-arrow" />
          </button>
        </motion.div>

      </div>
    </footer>
  );
};