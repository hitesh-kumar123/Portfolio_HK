import React, { useEffect, useRef, useCallback } from "react";
import hiteshImage from "@/assets/Hitesh_Kumar.png";

// ─────────────────────────────────────────────
// Hero: Editorial Collision
// Color system: Paper #F4F1E9 | Ink #151513 | Wine #B02038 | Muted #706C63 | Border #D3CEC2
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
                {/* Hand-drawn artistic sketch & doodle background */}
                <div className="hero-portrait-doodles" aria-hidden="true">
                  <svg
                    viewBox="0 0 400 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hero-doodle-svg"
                  >
                    {/* Soft watercolor blob fill */}
                    <path
                      d="M200,65 C285,55 355,105 360,215 C365,325 295,410 195,415 C95,420 38,335 34,225 C30,115 115,75 200,65 Z"
                      fill="rgba(176, 32, 56, 0.08)"
                    />
                    
                    {/* Primary sketchy circle loop */}
                    <path
                      d="M 195,58 C 290,50 362,112 366,220 C 370,330 292,418 190,422 C 88,426 30,332 26,220 C 22,108 100,66 195,58 Z"
                      stroke="#B02038"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="420 12 180 8"
                      className="doodle-loop-main"
                    />

                    {/* Secondary rough overlap line */}
                    <path
                      d="M 210,48 C 305,42 375,118 378,232 C 380,345 285,430 180,432 C 75,434 20,325 24,208 C 28,90 115,54 218,52"
                      stroke="#151513"
                      strokeWidth="1.2"
                      strokeOpacity="0.35"
                      strokeLinecap="round"
                      className="doodle-loop-sub"
                    />

                    {/* Hand-drawn Sparkle Star (Top Right) */}
                    <g className="doodle-sparkle-tr">
                      <path
                        d="M 335,28 Q 335,52 359,52 Q 335,52 335,76 Q 335,52 311,52 Q 335,52 335,28 Z"
                        fill="#B02038"
                      />
                    </g>

                    {/* Small Star (Bottom Left) */}
                    <g className="doodle-sparkle-bl">
                      <path
                        d="M 42,390 Q 42,404 56,404 Q 42,404 42,418 Q 42,404 28,404 Q 42,404 42,390 Z"
                        fill="#B02038"
                        opacity="0.85"
                      />
                    </g>

                    {/* Playful sketch ray lines (Left shoulder) */}
                    <g stroke="#706C63" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" className="doodle-rays">
                      <line x1="45" y1="120" x2="20" y2="105" />
                      <line x1="38" y1="145" x2="12" y2="140" />
                      <line x1="42" y1="170" x2="16" y2="178" />
                    </g>

                    {/* Hand-drawn curly flourish / swirl (Bottom Right) */}
                    <path
                      d="M 320,385 C 352,395 372,422 350,444 C 328,460 302,438 318,416 C 334,394 365,425 382,410"
                      fill="none"
                      stroke="#B02038"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      opacity="0.85"
                      className="doodle-swirl"
                    />

                    {/* Crosshairs & Dots doodle accents */}
                    <g stroke="#151513" strokeWidth="1.6" strokeLinecap="round" opacity="0.4">
                      {/* Top Left cross */}
                      <line x1="72" y1="52" x2="72" y2="66" />
                      <line x1="65" y1="59" x2="79" y2="59" />
                      
                      {/* Right accent cross */}
                      <line x1="375" y1="165" x2="375" y2="177" />
                      <line x1="369" y1="171" x2="381" y2="171" />
                    </g>
                    
                    {/* Decorative dots */}
                    <circle cx="348" cy="115" r="2.5" fill="#B02038" opacity="0.6" />
                    <circle cx="68" cy="340" r="2" fill="#706C63" opacity="0.5" />
                    <circle cx="360" cy="330" r="2.5" fill="#151513" opacity="0.4" />

                    {/* Handwritten-style tag / annotation arrow */}
                    <g className="doodle-tag">
                      <path
                        d="M 115,22 C 145,12 195,16 230,28"
                        stroke="#B02038"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeDasharray="4 3"
                        fill="none"
                      />
                      <text
                        x="165"
                        y="12"
                        fill="#B02038"
                        fontSize="11"
                        fontFamily="'JetBrains Mono', monospace"
                        fontWeight="700"
                        letterSpacing="0.12em"
                        textAnchor="middle"
                      >
                        ✦ BUILDER ✦
                      </text>
                    </g>
                  </svg>
                </div>

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
          background-color: #B02038;
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
          font-weight: 700;
          /*
            Natural scale: gives the headline room to breathe.
            Avoiding extremes — no over-compression, no aggressive vw jumps.
          */
          font-size: clamp(2.2rem, 7.5vw, 3.75rem);
          line-height: 0.94;
          letter-spacing: -0.025em;
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
          color: #B02038;
          /* Same size as other lines — no awkward size break */
          padding-left: 0.08em;
          margin-top: 0;
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
          outline: 2px solid #B02038;
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
          outline: 2px solid #B02038;
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
          overflow: visible;
        }

        /* ── Doodle Drawing Background ── */
        .hero-portrait-doodles {
          position: absolute;
          top: -12%;
          left: -16%;
          width: 132%;
          height: 124%;
          pointer-events: none;
          z-index: 1;
          overflow: visible;
        }

        .hero-doodle-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .doodle-loop-main {
          transition: stroke-dashoffset 800ms ease;
        }

        .doodle-sparkle-tr {
          transform-origin: 335px 52px;
          animation: doodleFloat 4s ease-in-out infinite;
        }

        .doodle-sparkle-bl {
          transform-origin: 42px 404px;
          animation: doodleFloat 5.5s ease-in-out infinite reverse;
        }

        .doodle-swirl {
          transition: transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .doodle-tag {
          transition: transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .hero-portrait-outer:hover .doodle-swirl {
          transform: rotate(5deg) scale(1.04);
          transform-origin: 340px 410px;
        }

        .hero-portrait-outer:hover .doodle-tag {
          transform: translateY(-2px);
        }

        @keyframes doodleFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-4px) rotate(6deg);
          }
        }

        /* Sticker portrait — no frame, no box, natural PNG transparency */
        .hero-portrait-img {
          position: relative;
          z-index: 2;
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
          /* Natural colors — no filter */
          filter: drop-shadow(0 10px 24px rgba(21, 21, 19, 0.09));
          /* No border-radius — PNG cut-out shape shows through */
          border-radius: 0;
          user-select: none;
          -webkit-user-drag: none;
          transition: transform 350ms cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .hero-portrait-outer:hover .hero-portrait-img {
          transform: scale(1.02) rotate(-0.5deg);
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
            font-size: clamp(2.75rem, 7.8vw, 4.5rem);
            line-height: 0.95;
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
            font-size: clamp(3.5rem, 5.2vw, 6.25rem);
            line-height: 0.95;
            letter-spacing: -0.022em;
          }

          .hero-line-wine {
            /* Measured editorial offset — intentional, not accidental */
            padding-left: 1.25rem;
            margin-top: 0;
          }

          .hero-right-col {
            flex: 0 0 auto;
            justify-content: flex-end;
            align-items: flex-start;
            padding-top: 0.5rem;
          }
          .hero-portrait-outer {
            /* Bigger photo — confident, personal, not a thumbnail */
            width: clamp(240px, 22vw, 310px);
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
            font-size: clamp(4rem, 5.8vw, 7rem);
            line-height: 0.96;
          }
          .hero-portrait-outer {
            width: clamp(270px, 22vw, 340px);
          }
          .hero-right-col {
            padding-top: 0.5rem;
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
