import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X, Award, Maximize2 } from "lucide-react";
import { certificatesData, Certificate } from "@/data/certificates";

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeSlide, setActiveSlide] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Check scroll positions
  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const cardWidth = 350;
    const index = Math.min(
      certificatesData.length,
      Math.max(1, Math.round(scrollLeft / cardWidth) + 1)
    );
    setActiveSlide(index);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const slide = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = direction === "left" ? -370 : 370;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <>
      <section id="certificates" className="cf-section" aria-labelledby="cert-heading">
        <div className="cf-container">

          {/* ── Section Header ── */}
          <header className="cf-header">
            <div className="cf-header-eyebrow">
              <span className="cf-eyebrow-line" aria-hidden="true" />
              <span className="cf-eyebrow-text">CERTIFICATIONS</span>
            </div>

            <div className="cf-header-body">
              <h2 id="cert-heading" className="cf-headline">
                Certifications & Accreditations
              </h2>

              {/* Slider Navigation Arrows */}
              <div className="cf-nav-controls">
                <div className="cf-slide-indicator">
                  <span>{String(activeSlide).padStart(2, "0")}</span>
                  <span className="cf-indicator-sep">/</span>
                  <span className="cf-indicator-total">{String(certificatesData.length).padStart(2, "0")}</span>
                </div>

                <div className="cf-arrow-group">
                  <button
                    type="button"
                    onClick={() => slide("left")}
                    disabled={!canScrollLeft}
                    className="cf-arrow-btn"
                    aria-label="Scroll certificates left"
                  >
                    <ArrowLeft size={15} strokeWidth={2} />
                  </button>
                  <button
                    type="button"
                    onClick={() => slide("right")}
                    disabled={!canScrollRight}
                    className="cf-arrow-btn"
                    aria-label="Scroll certificates right"
                  >
                    <ArrowRight size={15} strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>

            <div className="cf-header-rule" aria-hidden="true" />
          </header>

          {/* ── Horizontal Filmstrip Gallery ── */}
          <div className="cf-slider-wrapper">
            <div 
              ref={sliderRef}
              className="cf-filmstrip"
              role="region"
              aria-label="Certificates gallery"
              tabIndex={0}
            >
              {certificatesData.map((cert) => (
                <article
                  key={cert.id}
                  className="cf-card-frame"
                >
                  {/* Gallery Card — Clean Canva Poster Style */}
                  <div 
                    className="cf-gallery-card"
                    onClick={() => setSelectedCert(cert)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View full ${cert.title} certificate`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedCert(cert);
                      }
                    }}
                  >
                    {/* Top Issuer Bar */}
                    <div className="cf-card-header">
                      <div className="cf-issuer-badge">
                        <Award size={13} className="cf-badge-icon" aria-hidden="true" />
                        <span>{cert.issuer}</span>
                      </div>
                      <span className="cf-card-year">{cert.year}</span>
                    </div>

                    {/* Certificate Image Frame */}
                    <div className="cf-image-mat">
                      <img
                        src={cert.image}
                        alt={`${cert.title} certificate`}
                        loading="lazy"
                        className="cf-image-asset"
                      />
                      
                      {/* Gentle Hover Overlay */}
                      <div className="cf-image-hover" aria-hidden="true">
                        <span className="cf-view-badge">
                          <Maximize2 size={12} strokeWidth={2.5} />
                          <span>EXPAND</span>
                        </span>
                      </div>
                    </div>

                    {/* Certificate Meta Details */}
                    <div className="cf-card-meta">
                      <h3 className="cf-title">{cert.title}</h3>
                      <p className="cf-desc">{cert.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Subtle Gradient Fades */}
            {canScrollRight && <div className="cf-edge-fade cf-edge-fade--right" aria-hidden="true" />}
            {canScrollLeft && <div className="cf-edge-fade cf-edge-fade--left" aria-hidden="true" />}
          </div>

        </div>

        {/* ── Scoped Styling ── */}
        <style>{`
          .cf-section {
            background-color: #F4F1E9;
            color: #151513;
            padding: clamp(4.5rem, 8vw, 7rem) 0;
            border-bottom: 1px solid #D3CEC2;
            position: relative;
            box-sizing: border-box;
            width: 100%;
            overflow: hidden;
          }

          .cf-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1.5rem;
            box-sizing: border-box;
          }

          /* ── Header ── */
          .cf-header {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: clamp(2rem, 3.5vw, 3rem);
          }

          .cf-header-eyebrow {
            display: flex;
            align-items: center;
            gap: 0.75rem;
          }

          .cf-eyebrow-line {
            width: 20px;
            height: 1.5px;
            background-color: #B02038;
          }

          .cf-eyebrow-text {
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #B02038;
          }

          .cf-header-body {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 1.25rem;
          }

          .cf-headline {
            font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
            font-size: clamp(1.85rem, 3.2vw, 2.5rem);
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: -0.02em;
            color: #151513;
            margin: 0;
          }

          /* Navigation Controls */
          .cf-nav-controls {
            display: flex;
            align-items: center;
            gap: 1.25rem;
          }

          .cf-slide-indicator {
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.08em;
            color: #151513;
            display: flex;
            align-items: center;
            gap: 4px;
          }

          .cf-indicator-sep {
            color: #D3CEC2;
          }

          .cf-indicator-total {
            color: #706C63;
          }

          .cf-arrow-group {
            display: flex;
            align-items: center;
            gap: 0.4rem;
          }

          .cf-arrow-btn {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            border: 1px solid #D3CEC2;
            background: #FFFFFF;
            color: #151513;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 180ms ease;
          }

          .cf-arrow-btn:hover:not(:disabled) {
            background: #151513;
            border-color: #151513;
            color: #F4F1E9;
          }

          .cf-arrow-btn:disabled {
            opacity: 0.35;
            cursor: not-allowed;
            border-color: #E0DBD0;
          }

          .cf-header-rule {
            width: 100%;
            height: 1px;
            background-color: #D3CEC2;
            margin-top: 0.5rem;
          }

          /* ── Filmstrip Horizontal Scroll ── */
          .cf-slider-wrapper {
            position: relative;
            margin: 0 -1.5rem;
            padding: 0.5rem 1.5rem 1.5rem 1.5rem;
          }

          .cf-filmstrip {
            display: flex;
            gap: 1.5rem;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            padding-bottom: 0.5rem;
            scrollbar-width: none;
            -ms-overflow-style: none;
            cursor: grab;
          }

          .cf-filmstrip::-webkit-scrollbar {
            display: none;
          }

          .cf-filmstrip:active {
            cursor: grabbing;
          }

          /* Edge Fades */
          .cf-edge-fade {
            position: absolute;
            top: 0;
            bottom: 1.5rem;
            width: 40px;
            pointer-events: none;
            z-index: 10;
          }

          .cf-edge-fade--left {
            left: 0;
            background: linear-gradient(to right, #F4F1E9, transparent);
          }

          .cf-edge-fade--right {
            right: 0;
            background: linear-gradient(to left, #F4F1E9, transparent);
          }

          /* ── Gallery Card (Canva Style) ── */
          .cf-card-frame {
            flex: 0 0 340px;
            scroll-snap-align: start;
          }

          @media (max-width: 480px) {
            .cf-card-frame {
              flex: 0 0 280px;
            }
          }

          .cf-gallery-card {
            background: #FAF8F2;
            border: 1px solid #D3CEC2;
            border-radius: 4px;
            padding: 1.15rem;
            display: flex;
            flex-direction: column;
            gap: 0.9rem;
            box-shadow: 0 3px 12px rgba(21, 21, 19, 0.03);
            transition: transform 220ms ease,
                        border-color 200ms ease,
                        box-shadow 220ms ease;
            cursor: pointer;
            user-select: none;
            height: 100%;
            box-sizing: border-box;
          }

          .cf-gallery-card:hover {
            transform: translateY(-4px);
            border-color: #151513;
            box-shadow: 0 10px 24px rgba(21, 21, 19, 0.07);
          }

          /* Card Header */
          .cf-card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .cf-issuer-badge {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #151513;
          }

          .cf-badge-icon {
            color: #B02038;
          }

          .cf-card-year {
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            font-weight: 600;
            color: #706C63;
          }

          /* Image Mat */
          .cf-image-mat {
            position: relative;
            background: #EFECE3;
            border: 1px solid #D3CEC2;
            border-radius: 3px;
            padding: 6px;
            aspect-ratio: 16 / 11;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .cf-image-asset {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 2px;
            border: 1px solid rgba(0, 0, 0, 0.05);
            display: block;
            transition: transform 300ms ease;
          }

          .cf-gallery-card:hover .cf-image-asset {
            transform: scale(1.02);
          }

          .cf-image-hover {
            position: absolute;
            inset: 0;
            background: rgba(21, 21, 19, 0.35);
            backdrop-filter: blur(2px);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 180ms ease;
          }

          .cf-gallery-card:hover .cf-image-hover {
            opacity: 1;
          }

          .cf-view-badge {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            background: #FFFFFF;
            color: #151513;
            font-family: 'JetBrains Mono', monospace;
            font-size: 9.5px;
            font-weight: 700;
            letter-spacing: 0.1em;
            padding: 6px 12px;
            border-radius: 3px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          }

          /* Card Meta */
          .cf-card-meta {
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
            flex: 1;
          }

          .cf-title {
            font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
            font-size: 1.05rem;
            font-weight: 650;
            letter-spacing: -0.015em;
            line-height: 1.35;
            color: #151513;
            margin: 0;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            min-height: 2.7rem;
          }

          .cf-desc {
            font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
            font-size: 13px;
            line-height: 1.6;
            color: #605C55;
            margin: 0;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          /* ── Fullscreen Inspection Lightbox ── */
          .cf-lightbox-backdrop {
            position: fixed;
            inset: 0;
            z-index: 999;
            background: rgba(21, 21, 19, 0.75);
            backdrop-filter: blur(6px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
          }

          .cf-lightbox-card {
            background: #F4F1E9;
            border: 1px solid #D3CEC2;
            border-radius: 4px;
            max-width: 850px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);
            position: relative;
            display: flex;
            flex-direction: column;
          }

          .cf-lightbox-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 1.5rem;
            border-bottom: 1px solid #D3CEC2;
            background: #FAF8F2;
          }

          .cf-lightbox-close {
            background: none;
            border: 1px solid #D3CEC2;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #151513;
            cursor: pointer;
            transition: all 180ms ease;
          }

          .cf-lightbox-close:hover {
            background: #151513;
            border-color: #151513;
            color: #F4F1E9;
          }

          .cf-lightbox-body {
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }

          .cf-lightbox-img-frame {
            background: #FFFFFF;
            border: 1px solid #D3CEC2;
            border-radius: 3px;
            padding: 6px;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
          }

          .cf-lightbox-img {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 2px;
          }

          .cf-lightbox-h3 {
            font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
            font-size: 1.25rem;
            font-weight: 700;
            color: #151513;
            letter-spacing: -0.015em;
            line-height: 1.3;
            margin: 0 0 0.4rem 0;
          }

          .cf-lightbox-desc {
            font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
            font-size: 13.5px;
            line-height: 1.65;
            color: #605C55;
            margin: 0;
          }

          @media (prefers-reduced-motion: reduce) {
            .cf-gallery-card,
            .cf-gallery-card:hover,
            .cf-image-asset,
            .cf-gallery-card:hover .cf-image-asset,
            .cf-arrow-btn {
              transform: none !important;
              transition: none !important;
            }
          }
        `}</style>
      </section>

      {/* ── High-Res Inspection Lightbox ── */}
      <AnimatePresence>
        {selectedCert && (
          <div 
            className="cf-lightbox-backdrop"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 14 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="cf-lightbox-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cf-lightbox-top">
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Award size={13} color="#B02038" />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 700, color: "#151513", textTransform: "uppercase" }}>
                    {selectedCert.issuer}
                  </span>
                  <span style={{ color: "#D3CEC2" }}>·</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 600, color: "#706C63" }}>
                    {selectedCert.year}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="cf-lightbox-close"
                  aria-label="Close certificate modal"
                >
                  <X size={15} />
                </button>
              </div>

              <div className="cf-lightbox-body">
                <div className="cf-lightbox-img-frame">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="cf-lightbox-img"
                  />
                </div>

                <div>
                  <h3 className="cf-lightbox-h3">{selectedCert.title}</h3>
                  <p className="cf-lightbox-desc">{selectedCert.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certificates;
