import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────
// SiteHeader: Editorial Minimal Navigation
// Color system: Paper #F4F1E9 | Ink #151513 | Wine #B02038 | Muted #706C63 | Border #D3CEC2
// Fonts: Plus Jakarta Sans (name) | JetBrains Mono (MENU/CLOSE/metadata)
// Scope: SiteHeader ONLY — no other components modified
//
// Verified section IDs (from DOM inspection):
//   about    → About section
//   work     → Projects section
//   journey  → Open Source / Exploration (mapped to "EXPERIMENTS")
//   contact  → Contact section
// ─────────────────────────────────────────────

const MENU_ITEMS = [
  { label: "ABOUT",       id: "about"   },
  { label: "WORK",        id: "work"    },
  { label: "EXPERIMENTS", id: "journey" },
  { label: "CONTACT",     id: "contact" },
] as const;

const SOCIAL_LINKS = [
  { label: "GitHub",   href: "https://github.com/hitesh-kumar123",         rel: "noopener noreferrer" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hitesh-kumar-hk/", rel: "noopener noreferrer" },
  { label: "Email",    href: "mailto:hiteshdevkumar2003@gmail.com",          rel: undefined },
] as const;

export const SiteHeader: React.FC = () => {
  const [isScrolled,  setIsScrolled]  = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const firstMenuItemRef = useRef<HTMLButtonElement>(null);

  // ── Scroll detection ──────────────────────
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Body scroll lock (no layout jump) ─────
  useEffect(() => {
    if (menuOpen) {
      // Measure scrollbar width to prevent layout shift
      const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow   = "hidden";
      document.body.style.paddingRight = `${scrollbarW}px`;
    } else {
      document.body.style.overflow   = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow   = "";
      document.body.style.paddingRight = "";
    };
  }, [menuOpen]);

  // ── Escape key ────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // ── Focus management ─────────────────────
  const openMenu = useCallback(() => {
    setMenuOpen(true);
    // Move focus into overlay after paint
    requestAnimationFrame(() => {
      closeBtnRef.current?.focus();
    });
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    requestAnimationFrame(() => {
      menuBtnRef.current?.focus();
    });
  }, []);

  // ── Smooth scroll + close ─────────────────
  const navigateTo = useCallback((id: string) => {
    closeMenu();
    // Small delay so overlay can begin closing before scroll fires
    setTimeout(() => {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }, 80);
  }, [closeMenu]);

  // ── Reduced-motion detection ──────────────
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ── Framer variants ───────────────────────
  const overlayVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { duration: prefersReduced ? 0.01 : 0.28, ease: "easeOut" as const } },
    exit:    { opacity: 0, transition: { duration: prefersReduced ? 0.01 : 0.22, ease: "easeIn"  as const } },
  };

  const itemVariants = {
    hidden:  { opacity: 0, y: prefersReduced ? 0 : 18 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReduced ? 0.01 : 0.38,
        ease: [0.25, 0, 0, 1] as [number, number, number, number],
        delay: prefersReduced ? 0 : 0.14 + i * 0.07,
      },
    }),
    exit: { opacity: 0, transition: { duration: prefersReduced ? 0.01 : 0.15 } },
  };

  const controlVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { duration: prefersReduced ? 0.01 : 0.25, delay: prefersReduced ? 0 : 0.08 } },
    exit:    { opacity: 0, transition: { duration: prefersReduced ? 0.01 : 0.12 } },
  };

  return (
    <>
      {/* ── Bar ─────────────────────────────── */}
      <header
        className={`sh-bar ${isScrolled ? "sh-bar--scrolled" : ""}`}
        role="banner"
      >
        <div className="sh-inner">

          {/* Wordmark */}
          <button
            onClick={() => navigateTo("home")}
            className="sh-wordmark"
            aria-label="Hitesh Kumar — scroll to top"
          >
            <span className="sh-name">Hitesh Kumar</span>
            <span className="sh-dot" aria-hidden="true">•</span>
          </button>

          {/* MENU trigger */}
          <button
            ref={menuBtnRef}
            onClick={openMenu}
            className="sh-menu-btn"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-haspopup="dialog"
          >
            <span>MENU</span>
            <span className="sh-menu-arrow" aria-hidden="true">↗</span>
          </button>

        </div>
      </header>

      {/* ── Full-screen editorial overlay ─── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="nav-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="sh-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Overlay inner container */}
            <div className="sh-overlay-inner">

              {/* Overlay top bar: wordmark + CLOSE */}
              <motion.div
                className="sh-overlay-topbar"
                variants={controlVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <button
                  onClick={() => navigateTo("home")}
                  className="sh-wordmark sh-wordmark--overlay"
                  aria-label="Hitesh Kumar — go to top"
                >
                  <span className="sh-name">Hitesh Kumar</span>
                  <span className="sh-dot" aria-hidden="true">•</span>
                </button>

                <button
                  ref={closeBtnRef}
                  onClick={closeMenu}
                  className="sh-close-btn"
                  aria-label="Close navigation menu"
                >
                  <span>CLOSE</span>
                  <span className="sh-close-x" aria-hidden="true">×</span>
                </button>
              </motion.div>

              {/* Primary navigation items */}
              <nav aria-label="Primary navigation" className="sh-overlay-nav">
                {MENU_ITEMS.map(({ label, id }, i) => (
                  <motion.div
                    key={id}
                    className="sh-nav-item-wrap"
                    variants={itemVariants}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <button
                      ref={i === 0 ? firstMenuItemRef : undefined}
                      onClick={() => navigateTo(id)}
                      className="sh-nav-item"
                    >
                      <span className="sh-nav-label">{label}</span>
                      <span className="sh-nav-arrow" aria-hidden="true">→</span>
                    </button>
                  </motion.div>
                ))}
              </nav>

              {/* Social links — bottom anchor */}
              <motion.div
                className="sh-overlay-social"
                variants={controlVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="sh-social-divider" aria-hidden="true" />
                <div className="sh-social-row">
                  {SOCIAL_LINKS.map(({ label, href, rel }) => (
                    <a
                      key={label}
                      href={href}
                      rel={rel}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      className="sh-social-link"
                    >
                      {label}
                      <span className="sh-social-arrow" aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Scoped styles ────────────────── */}
      <style>{`

        /* ══════════════════════════════════════
           HEADER BAR
        ══════════════════════════════════════ */
        .sh-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          background-color: #F4F1E9;
          /* No visible border at top */
          border-bottom: 1px solid transparent;
          transition: border-color 280ms ease, padding 280ms ease;
          padding: 1.375rem 0;
          box-sizing: border-box;
        }

        /* Subtle border appears on scroll — no shadow, no blur */
        .sh-bar--scrolled {
          border-bottom-color: #D3CEC2;
          padding: 1rem 0;
        }

        .sh-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
        }

        @media (min-width: 640px)  { .sh-inner { padding: 0 2rem;   } }
        @media (min-width: 1024px) { .sh-inner { padding: 0 3rem;   } }

        /* ══════════════════════════════════════
           WORDMARK
        ══════════════════════════════════════ */
        .sh-wordmark {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          /* Generous touch target */
          min-height: 44px;
          text-decoration: none;
        }
        .sh-wordmark:focus-visible {
          outline: 2px solid #B02038;
          outline-offset: 4px;
          border-radius: 2px;
        }

        .sh-name {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: clamp(1rem, 2vw, 1.125rem);
          font-weight: 650;
          letter-spacing: -0.02em;
          color: #151513;
          transition: opacity 220ms ease;
          line-height: 1;
        }
        .sh-wordmark:hover .sh-name {
          opacity: 0.65;
        }

        .sh-dot {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 1.1em;
          color: #B02038;
          line-height: 1;
          /* Optical alignment */
          margin-bottom: 0.05em;
        }

        /* ══════════════════════════════════════
           MENU BUTTON
        ══════════════════════════════════════ */
        .sh-menu-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.25rem 0;
          min-height: 44px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #151513;
          transition: opacity 200ms ease;
        }
        .sh-menu-btn:hover { opacity: 0.55; }
        .sh-menu-btn:focus-visible {
          outline: 2px solid #B02038;
          outline-offset: 4px;
          border-radius: 2px;
        }

        .sh-menu-arrow {
          display: inline-block;
          font-size: 12px;
          color: #B02038;
          transition: transform 220ms cubic-bezier(0.25, 0, 0, 1);
        }
        .sh-menu-btn:hover .sh-menu-arrow {
          transform: translate(2px, -2px);
        }

        /* ══════════════════════════════════════
           OVERLAY
        ══════════════════════════════════════ */
        .sh-overlay {
          position: fixed;
          inset: 0;
          z-index: 60;
          background-color: #F4F1E9;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .sh-overlay-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        @media (min-width: 640px)  { .sh-overlay-inner { padding: 0 2rem;   } }
        @media (min-width: 1024px) { .sh-overlay-inner { padding: 0 3rem;   } }

        /* ── Overlay top bar ── */
        .sh-overlay-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.375rem 0;
          border-bottom: 1px solid #D3CEC2;
          flex-shrink: 0;
        }

        .sh-wordmark--overlay .sh-name {
          color: #151513;
        }

        /* ── CLOSE button ── */
        .sh-close-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.25rem 0;
          min-height: 44px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #151513;
          transition: opacity 200ms ease;
        }
        .sh-close-btn:hover { opacity: 0.55; }
        .sh-close-btn:focus-visible {
          outline: 2px solid #B02038;
          outline-offset: 4px;
          border-radius: 2px;
        }

        .sh-close-x {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #B02038;
          line-height: 1;
        }

        /* ══════════════════════════════════════
           PRIMARY NAV ITEMS
        ══════════════════════════════════════ */
        .sh-overlay-nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2.5rem 0;
          gap: 0;
        }

        .sh-nav-item-wrap {
          overflow: hidden;
        }

        .sh-nav-item {
          display: inline-flex;
          align-items: baseline;
          gap: 0;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.3rem 0;
          width: 100%;
          text-align: left;
          /* No border-bottom on each item — whitespace is the separator */
        }
        .sh-nav-item:focus-visible {
          outline: 2px solid #B02038;
          outline-offset: 4px;
          border-radius: 2px;
        }

        .sh-nav-label {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #151513;
          text-transform: uppercase;
          transition: color 220ms ease,
                      transform 240ms cubic-bezier(0.25, 0, 0, 1);
          display: inline-block;
        }

        .sh-nav-arrow {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          color: #B02038;
          opacity: 0;
          transform: translate(-6px, 0);
          transition: opacity 220ms ease,
                      transform 240ms cubic-bezier(0.25, 0, 0, 1);
          display: inline-block;
          margin-left: 0.5rem;
          line-height: 1.1;
        }

        /* Hover state */
        .sh-nav-item:hover .sh-nav-label {
          color: #706C63;
          transform: translateX(3px);
        }
        .sh-nav-item:hover .sh-nav-arrow {
          opacity: 1;
          transform: translate(4px, 0);
        }

        /* Touch: no hover states */
        @media (hover: none) {
          .sh-nav-item:hover .sh-nav-label  { color: #151513; transform: none; }
          .sh-nav-item:hover .sh-nav-arrow  { opacity: 0; transform: translate(-6px, 0); }
        }

        /* ══════════════════════════════════════
           SOCIAL ROW
        ══════════════════════════════════════ */
        .sh-overlay-social {
          flex-shrink: 0;
          padding-bottom: 2rem;
        }

        .sh-social-divider {
          height: 1px;
          background-color: #D3CEC2;
          margin-bottom: 1.5rem;
        }

        .sh-social-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.25rem 1.75rem;
        }

        .sh-social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #706C63;
          text-decoration: none;
          transition: color 200ms ease;
        }
        .sh-social-link:hover { color: #151513; }
        .sh-social-link:focus-visible {
          outline: 2px solid #B02038;
          outline-offset: 3px;
          border-radius: 2px;
        }

        .sh-social-arrow {
          display: inline-block;
          font-size: 10px;
          color: #B02038;
          opacity: 0;
          transition: opacity 200ms ease, transform 220ms ease;
        }
        .sh-social-link:hover .sh-social-arrow {
          opacity: 1;
          transform: translate(2px, -2px);
        }

        /* ══════════════════════════════════════
           REDUCED MOTION
        ══════════════════════════════════════ */
        @media (prefers-reduced-motion: reduce) {
          .sh-bar,
          .sh-menu-arrow,
          .sh-nav-label,
          .sh-nav-arrow,
          .sh-social-link,
          .sh-social-arrow,
          .sh-close-btn,
          .sh-menu-btn {
            transition: none !important;
          }
        }

      `}</style>
    </>
  );
};
