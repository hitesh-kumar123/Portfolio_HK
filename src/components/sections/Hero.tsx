import React, { useEffect, useRef, useCallback } from "react";
import hiteshImage from "@/assets/Hitesh_Kumar.jpg";

// ─────────────────────────────────────────────
// Hero: Editorial Collision
// Color system: Paper #F4F1E9 | Ink #151513 | Wine #7C2638 | Muted #706C63 | Border #D3CEC2
// Fonts: Syne (display) | Plus Jakarta Sans (body) | JetBrains Mono (metadata)
// Scope: Hero section ONLY — no other components modified
// ─────────────────────────────────────────────

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Portrait subtle pointer parallax (desktop only, rAF-dampened)
  const portraitWrapperRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const targetOffset = useRef({ x: 0, y: 0 });
  const currentOffset = useRef({ x: 0, y: 0 });
  const isReducedMotion = useRef(false);
  const isDesktop = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    isReducedMotion.current = mq.matches;
    isDesktop.current = window.innerWidth >= 1024;
    const handler = (e: MediaQueryListEvent) => { isReducedMotion.current = e.matches; };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handlePointerMove = useCallback((e: MouseEvent) => {
    if (isReducedMotion.current || !isDesktop.current || !portraitWrapperRef.current) return;
    const rect = portraitWrapperRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / window.innerWidth;
    const dy = (e.clientY - cy) / window.innerHeight;
    targetOffset.current = { x: dx * 7, y: dy * 7 };
  }, []);

  const animatePortrait = useCallback(() => {
    if (!portraitWrapperRef.current) { rafRef.current = requestAnimationFrame(animatePortrait); return; }
    currentOffset.current.x += (targetOffset.current.x - currentOffset.current.x) * 0.07;
    currentOffset.current.y += (targetOffset.current.y - currentOffset.current.y) * 0.07;
    portraitWrapperRef.current.style.transform =
      `translate(${currentOffset.current.x.toFixed(2)}px, ${currentOffset.current.y.toFixed(2)}px)`;
    rafRef.current = requestAnimationFrame(animatePortrait);
  }, []);

  useEffect(() => {
    if (isReducedMotion.current || !isDesktop.current) return;
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    rafRef.current = requestAnimationFrame(animatePortrait);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [handlePointerMove, animatePortrait]);

  // Scroll parallax — headline drifts up, portrait drifts down slightly
  const headlineRef = useRef<HTMLDivElement>(null);
  const scrollParallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isReducedMotion.current) return;
      const y = window.scrollY;
      if (y > 400) return;
      if (headlineRef.current) {
        headlineRef.current.style.transform = `translateY(${(y * -0.05).toFixed(2)}px)`;
      }
      if (scrollParallaxRef.current) {
        scrollParallaxRef.current.style.transform =
          `translate(${currentOffset.current.x.toFixed(2)}px, ${(currentOffset.current.y + y * 0.04).toFixed(2)}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="hero-editorial"
      aria-label="Hero — Hitesh Kumar"
    >
      {/* ── Subtle Technical Grid Background ── */}
      <div className="hero-grid-bg" aria-hidden="true" />

      {/* ── Main Container ── */}
      <div className="hero-container">

        {/* ── Top Metadata Bar ── */}
        <div className="hero-top-meta hero-anim-0">
          <div className="hero-wine-line" aria-hidden="true" />
          <div className="hero-meta-pills">
            <span className="hero-meta-text">FULL STACK ENGINEER</span>
            <span className="hero-meta-sep" aria-hidden="true">·</span>
            <span className="hero-meta-text">PRODUCT ENGINEERING</span>
          </div>
        </div>

        {/* ── Primary Composition (editorial 12-col asymmetric) ── */}
        <div className="hero-composition">

          {/* Headline + body column */}
          <div className="hero-left-col" ref={headlineRef}>

            <h1 className="hero-headline" aria-label="Building Digital Products That Matter.">
              <span className="hero-line-clip hero-anim-1">
                <span className="hero-line hero-line-ink">BUILDING</span>
              </span>
              <span className="hero-line-clip hero-anim-2">
                <span className="hero-line hero-line-ink">DIGITAL</span>
              </span>
              <span className="hero-line-clip hero-anim-3">
                <span className="hero-line hero-line-ink">PRODUCTS</span>
              </span>
              <span className="hero-line-clip hero-anim-4">
                <span className="hero-line hero-line-wine">THAT MATTER.</span>
              </span>
            </h1>

            {/* Body + CTAs */}
            <div className="hero-body-group hero-anim-body">
              <p className="hero-body-text">
                I build scalable web products across frontend, backend,
                and AI-powered experiences.
              </p>
              <div className="hero-cta-row">
                <button
                  id="hero-cta-primary"
                  onClick={() => scrollTo("work")}
                  className="hero-btn-primary"
                  aria-label="View selected work"
                >
                  <span>VIEW SELECTED WORK</span>
                  <span className="hero-arrow-diag" aria-hidden="true">↗</span>
                </button>
                <button
                  id="hero-cta-scroll"
                  onClick={() => scrollTo("about")}
                  className="hero-btn-secondary"
                  aria-label="Scroll to explore"
                >
                  <span className="hero-underline-grow">SCROLL TO EXPLORE</span>
                  <span className="hero-arrow-down" aria-hidden="true">↓</span>
                </button>
              </div>
            </div>

          </div>

          {/* Portrait column */}
          <div className="hero-right-col hero-anim-portrait">
            <div className="hero-portrait-outer" ref={portraitWrapperRef}>
              <div ref={scrollParallaxRef} style={{ position: "relative", width: "100%", height: "100%" }}>
                <div className="hero-offset-frame" aria-hidden="true" />
                <div className="hero-portrait-frame">
                  <img
                    src={hiteshImage}
                    alt="Hitesh Kumar — Full Stack Engineer"
                    className="hero-portrait-img"
                    loading="eager"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Metadata Anchor ── */}
        <div className="hero-bottom-bar hero-anim-body">
          <div className="hero-bottom-group">
            <span className="hero-bottom-tag">FULL STACK</span>
            <span className="hero-sep">·</span>
            <span className="hero-bottom-tag">OPEN SOURCE</span>
            <span className="hero-sep">·</span>
            <span className="hero-bottom-tag">AI</span>
          </div>
          <div className="hero-bottom-group">
            <span className="hero-bottom-tag">INDIA</span>
            <span className="hero-sep">·</span>
            <span className="hero-bottom-tag">2026</span>
          </div>
        </div>

      </div>

      {/* ── Scoped CSS ── */}
      <style>{`

        /* ══════════════════════════════════════
           BASE
        ══════════════════════════════════════ */
        .hero-editorial {
          position: relative;
          min-height: 100svh;
          width: 100%;
          background-color: #F4F1E9;
          display: flex;
          flex-direction: column;
          padding-top: 6.5rem;
          /* Tighter bottom — the bottom bar is its own visual anchor */
          padding-bottom: 1.75rem;
          overflow-x: hidden;
          border-bottom: 1px solid #D3CEC2;
          box-sizing: border-box;
        }

        .hero-grid-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(to right, rgba(21,21,19,0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(21,21,19,0.025) 1px, transparent 1px);
          background-size: 64px 64px;
          z-index: 0;
        }

        .hero-container {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          /* Tighter: hero content should feel compact, not padded */
          justify-content: space-between;
          gap: 1.5rem;
          box-sizing: border-box;
        }

        /* ══════════════════════════════════════
           TOP METADATA
        ══════════════════════════════════════ */
        .hero-top-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-bottom: 1.125rem;
          border-bottom: 1px solid #D3CEC2;
        }
        .hero-wine-line {
          width: 1px;
          height: 1.75rem;
          background-color: #7C2638;
          flex-shrink: 0;
        }
        .hero-meta-pills {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .hero-meta-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: #706C63;
          text-transform: uppercase;
        }
        .hero-meta-sep {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #D3CEC2;
          user-select: none;
        }

        /* ══════════════════════════════════════
           COMPOSITION — desktop: 8 + 4 columns
        ══════════════════════════════════════ */
        .hero-composition {
          flex: 1;
          display: flex;
          flex-direction: column;
          /* Tighter gap between headline block and portrait on mobile */
          gap: 1.75rem;
          align-items: flex-start;
        }

        /* ══════════════════════════════════════
           LEFT COLUMN: headline + body
        ══════════════════════════════════════ */
        .hero-left-col {
          display: flex;
          flex-direction: column;
          /* Reduce gap between headline and body copy group */
          gap: 1.5rem;
          will-change: transform;
          width: 100%;
        }

        /* ══════════════════════════════════════
           HEADLINE
           Mobile-first safe font sizing.
           Words must NEVER overflow on any width.
        ══════════════════════════════════════ */
        .hero-headline {
          display: flex;
          flex-direction: column;
          margin: 0;
          padding: 0;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          /*
            Mobile safe: At 375px with 1.5rem (24px) padding each side,
            available width = 375 - 48 = 327px.
            'PRODUCTS' (8 chars) at -0.04em letter-spacing:
            safe font-size ≈ 327 / (8 * 0.55) ≈ 74px → use ~2rem min, 8.8vw preferred.
          */
          font-size: clamp(2.1rem, 8.8vw, 4rem);
          line-height: 0.88;
          letter-spacing: -0.04em;
          text-transform: uppercase;
        }

        .hero-line-clip {
          display: block;
          overflow: hidden;
        }
        .hero-line {
          display: block;
        }
        .hero-line-ink  { color: #151513; }
        .hero-line-wine {
          color: #7C2638;
          /* slightly smaller so 'THAT MATTER.' stays on one line */
          font-size: 0.8em;
          /*
            Subtle editorial offset on mobile: a small indent
            that reads as intentional rhythm break, not an error.
            Desktop override below increases this further.
          */
          padding-left: 0.18em;
          /* Pull it slightly toward the previous line — optical tension */
          margin-top: -0.04em;
        }

        /* ══════════════════════════════════════
           BODY TEXT + CTAs
        ══════════════════════════════════════ */
        .hero-body-group {
          display: flex;
          flex-direction: column;
          /* Tighter relationship between copy and CTA */
          gap: 1.25rem;
          max-width: 32rem;
        }
        .hero-body-text {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: clamp(0.9375rem, 1.5vw, 1.0625rem);
          font-weight: 400;
          line-height: 1.65;
          color: #706C63;
          margin: 0;
          /*
            Editorial left-rule: a very thin 1px wine line
            anchors the copy block without adding decoration.
          */
          padding-left: 0.875rem;
          border-left: 1px solid #D3CEC2;
        }

        .hero-cta-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1.25rem;
        }

        /* Primary: solid ink editorial button */
        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.8rem 1.5rem;
          background-color: #151513;
          color: #F4F1E9;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          border: 1px solid #151513;
          border-radius: 3px;
          cursor: pointer;
          transition: transform 240ms cubic-bezier(0.25, 0, 0, 1),
                      background-color 240ms ease;
        }
        .hero-btn-primary:hover { transform: translateY(-2px); }
        .hero-btn-primary:focus-visible {
          outline: 2px solid #7C2638;
          outline-offset: 3px;
        }
        .hero-arrow-diag {
          display: inline-block;
          transition: transform 250ms cubic-bezier(0.25, 0, 0, 1);
        }
        .hero-btn-primary:hover .hero-arrow-diag {
          transform: translate(4px, -4px);
        }

        /* Secondary: quiet text link with expanding underline */
        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: #706C63;
          transition: color 220ms ease;
        }
        .hero-btn-secondary:hover { color: #151513; }
        .hero-btn-secondary:focus-visible {
          outline: 2px solid #7C2638;
          outline-offset: 3px;
          border-radius: 2px;
        }
        .hero-underline-grow {
          position: relative;
        }
        .hero-underline-grow::after {
          content: '';
          position: absolute;
          left: 0; bottom: -2px;
          height: 1px; width: 0%;
          background-color: currentColor;
          transition: width 280ms cubic-bezier(0.25, 0, 0, 1);
        }
        .hero-btn-secondary:hover .hero-underline-grow::after { width: 100%; }
        .hero-arrow-down {
          display: inline-block;
          transition: transform 280ms cubic-bezier(0.25, 0, 0, 1);
        }
        .hero-btn-secondary:hover .hero-arrow-down { transform: translateY(3px); }

        /* ══════════════════════════════════════
           RIGHT COLUMN: portrait
        ══════════════════════════════════════ */
        .hero-right-col {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-shrink: 0;
        }
        .hero-portrait-outer {
          position: relative;
          /* mobile: comfortable width that won't overwhelm */
          width: clamp(140px, 44vw, 200px);
          will-change: transform;
        }

        /* Offset wine signature frame (subtle) */
        .hero-offset-frame {
          position: absolute;
          inset: 0;
          border: 1px solid #7C2638;
          border-radius: 2px;
          transform: translate(5px, 5px);
          z-index: 0;
          pointer-events: none;
        }

        .hero-portrait-frame {
          position: relative;
          z-index: 1;
          border: 1px solid #D3CEC2;
          border-radius: 2px;
          background-color: #EAE6DC;
          padding: 3px;
          overflow: hidden;
        }
        .hero-portrait-img {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          object-position: center top;
          border-radius: 1px;
          filter: grayscale(10%) contrast(1.03);
        }

        /* ══════════════════════════════════════
           BOTTOM METADATA
           Sits tight against the CTA block —
           reads as a footer within the Hero,
           not floating in dead space.
        ══════════════════════════════════════ */
        .hero-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding-top: 0.875rem;
          border-top: 1px solid #D3CEC2;
        }
        .hero-bottom-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .hero-bottom-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: #706C63;
          text-transform: uppercase;
        }
        .hero-sep {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          color: #D3CEC2;
          user-select: none;
        }

        /* ══════════════════════════════════════
           TABLET (640px+): moderate scale-up
        ══════════════════════════════════════ */
        @media (min-width: 640px) {
          .hero-editorial { padding-top: 7rem; padding-bottom: 2rem; }
          .hero-container { padding: 0 2rem; gap: 1.75rem; }
          .hero-headline {
            font-size: clamp(2.8rem, 9.5vw, 5rem);
          }
          .hero-portrait-outer {
            width: clamp(150px, 34vw, 210px);
          }
        }

        /* ══════════════════════════════════════
           DESKTOP (1024px+): 2-column editorial grid
           Layout: headline (~68%) | portrait (~28%), gap 4%
        ══════════════════════════════════════ */
        @media (min-width: 1024px) {
          .hero-editorial { padding-top: 7.5rem; padding-bottom: 2.25rem; }
          .hero-container  { padding: 0 3rem; gap: 2rem; }

          .hero-composition {
            flex-direction: row;
            /*
              Top-align portrait to the composition —
              portrait crown sits near the top of the headline
              rather than floating at vertical center.
              This pulls it into the headline's gravitational field.
            */
            align-items: flex-start;
            justify-content: space-between;
            /* Tighter gap: portrait reads as part of the headline's
               compositional block, not a separate column. */
            gap: 2rem;
          }

          .hero-left-col {
            flex: 1 1 0;
            min-width: 0;
            gap: 1.25rem;
          }

          .hero-headline {
            font-size: clamp(3.8rem, 6vw, 7rem);
            line-height: 0.87;
          }

          .hero-line-wine {
            /*
              Stronger editorial offset on desktop:
              'THAT MATTER.' reads as a visual break from the
              three-line stack above — intentional, not accidental.
            */
            padding-left: 2rem;
            margin-top: -0.02em;
          }

          .hero-right-col {
            flex: 0 0 auto;
            justify-content: flex-end;
            /* Slight top offset: portrait crown starts ~1.5rem below
               the composition top, creating a subtle vertical interplay
               with the headline's first line. */
            align-items: flex-start;
            padding-top: 1.5rem;
          }
          .hero-portrait-outer {
            width: clamp(180px, 17vw, 230px);
          }

          .hero-body-group {
            max-width: 30rem;
          }

          .hero-body-text {
            /* On desktop, left-rule is the editorial accent;
               the border colour steps up slightly from muted to border. */
            border-left-color: #B8B2A8;
          }
        }

        /* 1280px: allow slightly larger headline */
        @media (min-width: 1280px) {
          .hero-headline {
            font-size: clamp(4.5rem, 6.2vw, 7.5rem);
          }
          .hero-portrait-outer {
            width: clamp(200px, 17vw, 240px);
          }
          .hero-right-col {
            padding-top: 2rem;
          }
        }

        /* ══════════════════════════════════════
           ENTRANCE ANIMATIONS
        ══════════════════════════════════════ */
        @keyframes hfadeup {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hlinerev {
          from { transform: translateY(108%); }
          to   { transform: translateY(0%); }
        }
        @keyframes hportraitin {
          from { opacity: 0; transform: translateY(18px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .hero-anim-0 { animation: hfadeup 0.5s cubic-bezier(0.25,0,0,1) 0.15s both; }

        .hero-anim-1 .hero-line { animation: hlinerev 0.6s cubic-bezier(0.25,0,0,1) 0.30s both; }
        .hero-anim-2 .hero-line { animation: hlinerev 0.6s cubic-bezier(0.25,0,0,1) 0.42s both; }
        .hero-anim-3 .hero-line { animation: hlinerev 0.6s cubic-bezier(0.25,0,0,1) 0.54s both; }
        .hero-anim-4 .hero-line { animation: hlinerev 0.6s cubic-bezier(0.25,0,0,1) 0.66s both; }

        .hero-anim-portrait { animation: hportraitin 0.7s cubic-bezier(0.25,0,0,1) 0.82s both; }
        .hero-anim-body     { animation: hfadeup 0.55s cubic-bezier(0.25,0,0,1) 0.95s both; }

        /* ══════════════════════════════════════
           REDUCED MOTION
        ══════════════════════════════════════ */
        @media (prefers-reduced-motion: reduce) {
          .hero-anim-0,
          .hero-anim-1 .hero-line,
          .hero-anim-2 .hero-line,
          .hero-anim-3 .hero-line,
          .hero-anim-4 .hero-line,
          .hero-anim-portrait,
          .hero-anim-body {
            animation: none;
            opacity: 1;
            transform: none;
          }
          .hero-left-col { will-change: auto; }
        }

      `}</style>
    </section>
  );
};
