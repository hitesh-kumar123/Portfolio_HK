import React from "react";
import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

interface SocialItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const SOCIAL_ITEMS: SocialItem[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hitesh-kumar-hk/",
    icon: <Linkedin size={18} strokeWidth={2} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/hitesh-kumar123",
    icon: <Github size={18} strokeWidth={2} />,
  },
  {
    name: "Email",
    href: "mailto:hiteshdevkumar2003@gmail.com",
    icon: <Mail size={18} strokeWidth={2} />,
  },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer aria-label="Site footer" className="ft-cta-wrap">
      {/* Top ambient luxury hairline glow */}
      <div className="ft-cta-glow-line" aria-hidden="true" />

      <div className="ft-cta-container">

        {/* ── Giant Magnetic CTA Headline ── */}
        <div className="ft-cta-hero">
          <div className="ft-cta-eyebrow">
            <span className="ft-cta-dot" aria-hidden="true" />
            <span>HAVE AN IDEA OR SDE OPPORTUNITY?</span>
          </div>

          <a
            href="mailto:hiteshdevkumar2003@gmail.com"
            className="ft-cta-big-link"
            aria-label="Let's work together — Send an email"
          >
            <span className="ft-cta-big-text">LET&apos;S WORK TOGETHER</span>
            <div className="ft-cta-big-arrow-box" aria-hidden="true">
              <ArrowUpRight size={36} strokeWidth={2.2} className="ft-cta-big-arrow" />
            </div>
          </a>
        </div>

        {/* ── Mid-Row: Floating Socials & Back to Top ── */}
        <div className="ft-cta-mid-row">

          {/* Borderless Floating Socials */}
          <div className="ft-cta-socials">
            {SOCIAL_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="ft-cta-social-link"
                aria-label={`${item.name} profile`}
              >
                <span className="ft-cta-social-icon">{item.icon}</span>
                <span className="ft-cta-social-name">{item.name}</span>
                <ArrowUpRight size={14} strokeWidth={2} className="ft-cta-social-arrow" aria-hidden="true" />
              </a>
            ))}
          </div>

          {/* Elevate Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="ft-cta-top-btn"
            aria-label="Scroll back to top of page"
          >
            <span className="ft-cta-top-txt">BACK TO TOP</span>
            <div className="ft-cta-top-icon-circle">
              <ArrowUp size={14} strokeWidth={2.5} className="ft-cta-top-arrow" />
            </div>
          </button>

        </div>

        {/* ── Bottom Precision Bar ── */}
        <div className="ft-cta-bottom-bar">
          <p className="ft-cta-copyright">
            © {currentYear} HITESH KUMAR · ALL RIGHTS RESERVED
          </p>

          <p className="ft-cta-location">
            AHMEDABAD, INDIA · REMOTE WORLDWIDE
          </p>
        </div>

      </div>

      {/* ── Scoped Styling ── */}
      <style>{`
        .ft-cta-wrap {
          background-color: #0E0D0C;
          color: #FAF8F2;
          width: 100%;
          position: relative;
          box-sizing: border-box;
          padding: clamp(4rem, 7vw, 6.5rem) 0 2rem;
          overflow: hidden;
        }

        .ft-cta-glow-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(176, 32, 56, 0.5) 30%,
            rgba(250, 248, 242, 0.35) 50%,
            rgba(176, 32, 56, 0.5) 70%,
            transparent 100%
          );
        }

        .ft-cta-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: clamp(3rem, 5vw, 4.5rem);
        }

        /* ── Giant CTA Headline ── */
        .ft-cta-hero {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .ft-cta-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          color: #B02038;
          text-transform: uppercase;
        }

        .ft-cta-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #B02038;
          box-shadow: 0 0 0 2px rgba(176, 32, 56, 0.3);
          display: inline-block;
        }

        .ft-cta-big-link {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          color: #FAF8F2;
          gap: 1.5rem;
          cursor: pointer;
          transition: all 260ms ease;
          width: 100%;
          border-bottom: 1px solid #24221F;
          padding-bottom: 2rem;
        }

        .ft-cta-big-text {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: clamp(2.4rem, 6.2vw, 5.2rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.03em;
          color: #FAF8F2;
          transition: color 240ms ease, transform 240ms ease;
        }

        .ft-cta-big-arrow-box {
          width: clamp(54px, 6vw, 76px);
          height: clamp(54px, 6vw, 76px);
          border-radius: 50%;
          border: 1px solid #33302B;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #181715;
          color: #FAF8F2;
          flex-shrink: 0;
          transition: all 260ms ease;
        }

        .ft-cta-big-arrow {
          transition: transform 260ms ease, color 260ms ease;
        }

        .ft-cta-big-link:hover .ft-cta-big-text {
          color: #B02038;
          transform: translateX(6px);
        }

        .ft-cta-big-link:hover .ft-cta-big-arrow-box {
          background-color: #B02038;
          border-color: #B02038;
          box-shadow: 0 8px 30px rgba(176, 32, 56, 0.45);
          transform: scale(1.06);
        }

        .ft-cta-big-link:hover .ft-cta-big-arrow {
          transform: translate(3px, -3px);
          color: #FFFFFF;
        }

        /* ── Mid Row: Socials & Back to Top ── */
        .ft-cta-mid-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.75rem;
        }

        .ft-cta-socials {
          display: flex;
          align-items: center;
          gap: clamp(1.25rem, 3vw, 2.5rem);
          flex-wrap: wrap;
        }

        .ft-cta-social-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          text-decoration: none;
          color: #9E9A90;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 14px;
          font-weight: 600;
          transition: color 200ms ease, transform 200ms ease;
        }

        .ft-cta-social-icon {
          color: #706C62;
          transition: color 200ms ease, transform 200ms ease;
          display: flex;
          align-items: center;
        }

        .ft-cta-social-arrow {
          color: #4A4842;
          transition: color 200ms ease, transform 200ms ease;
        }

        .ft-cta-social-link:hover {
          color: #FAF8F2;
          transform: translateY(-2px);
        }

        .ft-cta-social-link:hover .ft-cta-social-icon {
          color: #B02038;
          transform: scale(1.15);
        }

        .ft-cta-social-link:hover .ft-cta-social-arrow {
          color: #B02038;
          transform: translate(2px, -2px);
        }

        /* Elevate Button */
        .ft-cta-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          color: #9E9A90;
          font-family: 'JetBrains Mono', monospace;
          transition: all 200ms ease;
        }

        .ft-cta-top-txt {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: color 200ms ease;
        }

        .ft-cta-top-icon-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #2E2D2A;
          background: #181715;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FAF8F2;
          transition: all 220ms ease;
        }

        .ft-cta-top-arrow {
          transition: transform 220ms ease;
        }

        .ft-cta-top-btn:hover .ft-cta-top-txt {
          color: #FAF8F2;
        }

        .ft-cta-top-btn:hover .ft-cta-top-icon-circle {
          background-color: #B02038;
          border-color: #B02038;
          box-shadow: 0 4px 16px rgba(176, 32, 56, 0.4);
          transform: translateY(-2px);
        }

        .ft-cta-top-btn:hover .ft-cta-top-arrow {
          transform: translateY(-2px);
        }

        /* ── Bottom Precision Bar ── */
        .ft-cta-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid #1C1B19;
        }

        .ft-cta-copyright,
        .ft-cta-location {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: #63605A;
          letter-spacing: 0.06em;
          margin: 0;
        }

        @media (max-width: 768px) {
          .ft-cta-big-link {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.25rem;
          }
          .ft-cta-mid-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
          .ft-cta-socials {
            width: 100%;
            justify-content: space-between;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ft-cta-big-link,
          .ft-cta-big-text,
          .ft-cta-big-arrow-box,
          .ft-cta-big-arrow,
          .ft-cta-social-link,
          .ft-cta-social-icon,
          .ft-cta-social-arrow,
          .ft-cta-top-btn,
          .ft-cta-top-icon-circle,
          .ft-cta-top-arrow {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;