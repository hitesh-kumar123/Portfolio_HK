import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Loader2, CheckCircle2, AlertCircle, Copy, Check, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

/* ─────────────────────────────────────────────
   Palette — Global Editorial Paper & Ink
   ───────────────────────────────────────────── */
const PAL = {
  paper:   "#F4F1E9",
  ink:     "#151513",
  muted:   "#706C63",
  border:  "#D3CEC2",
  wine:    "#B02038",
};

/* -- EmailJS config -- */
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";

type FormStatus = "idle" | "loading" | "success" | "error";

const INQUIRY_TYPES = [
  "Full-Stack Web App",
  "Frontend / UI",
  "Backend & APIs",
  "SDE Opportunity",
  "General Chat",
] as const;

const CHANNELS = [
  {
    id: "email",
    label: "EMAIL",
    text: "hiteshdevkumar2003@gmail.com",
    href: "mailto:hiteshdevkumar2003@gmail.com",
    copyable: true,
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    text: "linkedin.com/in/hitesh-kumar-hk",
    href: "https://www.linkedin.com/in/hitesh-kumar-hk/",
    copyable: false,
  },
  {
    id: "github",
    label: "GITHUB",
    text: "github.com/hitesh-kumar123",
    href: "https://github.com/hitesh-kumar123",
    copyable: false,
  },
  {
    id: "location",
    label: "LOCATION",
    text: "Ahmedabad, Gujarat, India · Remote Ready",
    href: null,
    copyable: false,
  },
];

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>("Full-Stack Web App");
  const [formData, setFormData] = useState({ from_name: "", from_email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ from_name: "", from_email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hiteshdevkumar2003@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="ct-section" aria-labelledby="contact-heading">
      <div className="ct-container">

        {/* ── Section Header ── */}
        <header className="ct-header">
          <div className="ct-header-eyebrow">
            <span className="ct-eyebrow-line" aria-hidden="true" />
            <span className="ct-eyebrow-text">GET IN TOUCH</span>
          </div>

          <div className="ct-header-body">
            <h2 id="contact-heading" className="ct-headline">
              Let&apos;s build something together.
            </h2>
            <p className="ct-subhead">
              Open for full-time SDE roles, freelance projects, and collaborations.
            </p>
          </div>

          <div className="ct-header-rule" aria-hidden="true" />
        </header>

        {/* ── Seamless Borderless Grid ── */}
        <div className="ct-grid">

          {/* LEFT: Live Status & Channels */}
          <div className="ct-left-col">
            
            {/* Live Availability Status */}
            <div className="ct-status-wrap">
              <div className="ct-status-pill">
                <span className="ct-status-dot" aria-hidden="true" />
                <span className="ct-status-badge">CURRENT STATUS</span>
              </div>
              <p className="ct-status-text">
                Available for Full-Time SDE Opportunities & Projects.
              </p>
              <div className="ct-timezone-row">
                <Clock size={12} className="ct-timezone-icon" aria-hidden="true" />
                <span>Ahmedabad, India · IST (UTC+5:30)</span>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="ct-channels-list" role="list">
              {CHANNELS.map((ch) => {
                const isEmail = ch.id === "email";
                const isLink  = !!ch.href;

                const content = (
                  <>
                    <div className="ct-ch-info">
                      <span className="ct-ch-label">{ch.label}</span>
                      <span className="ct-ch-val">{ch.text}</span>
                    </div>

                    <div className="ct-ch-action">
                      {isEmail && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleCopyEmail();
                          }}
                          className="ct-copy-btn"
                          aria-label="Copy email address"
                        >
                          {copied ? (
                            <><Check size={11} color="#2d6a4f" /><span>COPIED</span></>
                          ) : (
                            <><Copy size={11} /><span>COPY</span></>
                          )}
                        </button>
                      )}
                      {isLink && !isEmail && (
                        <ArrowUpRight size={15} strokeWidth={2} className="ct-ch-arrow" aria-hidden="true" />
                      )}
                    </div>
                  </>
                );

                return isLink ? (
                  <a
                    key={ch.id}
                    href={ch.href!}
                    target={ch.href!.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="ct-ch-row ct-ch-row--link"
                    role="listitem"
                    aria-label={`${ch.label}: ${ch.text}`}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={ch.id} className="ct-ch-row" role="listitem">
                    {content}
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT: Line-Based Message Form */}
          <div className="ct-right-col">
            <div className="ct-form-wrap">

              {/* Inquiry Topic Selector Pills */}
              <div className="ct-topics-wrap" role="group" aria-label="Select topic">
                {INQUIRY_TYPES.map((topic) => {
                  const isSelected = selectedTopic === topic;
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={`ct-topic-pill ${isSelected ? "ct-topic-pill--active" : ""}`}
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>

              {/* Minimal Line Form */}
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="ct-form">
                <input type="hidden" name="inquiry_type" value={selectedTopic} />

                {/* Name */}
                <div className="ct-field">
                  <label htmlFor="from_name" className="ct-label">
                    NAME <span className="ct-req">*</span>
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    placeholder="Your Name"
                    className="ct-line-input"
                    autoComplete="name"
                  />
                </div>

                {/* Email */}
                <div className="ct-field">
                  <label htmlFor="from_email" className="ct-label">
                    EMAIL <span className="ct-req">*</span>
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    placeholder="Your Email"
                    className="ct-line-input"
                    autoComplete="email"
                  />
                </div>

                {/* Message */}
                <div className="ct-field">
                  <label htmlFor="message" className="ct-label">
                    MESSAGE <span className="ct-req">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    disabled={status === "loading"}
                    placeholder="Your Message..."
                    className="ct-line-input ct-line-textarea"
                  />
                </div>

                {/* Status Feedback */}
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="ct-feedback ct-feedback--success"
                    >
                      <CheckCircle2 size={15} />
                      <span>Message received! I&apos;ll get back to you soon.</span>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="ct-feedback ct-feedback--error"
                    >
                      <AlertCircle size={15} />
                      <span>Could not send directly. Please email hiteshdevkumar2003@gmail.com</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="ct-submit-btn"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={14} className="ct-spin" />
                      <span>SENDING...</span>
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 size={14} />
                      <span>SENT</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <ArrowUpRight size={13} strokeWidth={2.5} className="ct-submit-arrow" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>

      {/* ── Scoped Styling (Clean, Borderless, Editorial) ── */}
      <style>{`
        .ct-section {
          background-color: #F4F1E9;
          color: #151513;
          padding: clamp(3.5rem, 5vw, 4.5rem) 0;
          position: relative;
          box-sizing: border-box;
          width: 100%;
        }

        .ct-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          box-sizing: border-box;
        }

        /* ── Header ── */
        .ct-header {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: clamp(1.75rem, 2.5vw, 2.25rem);
        }

        .ct-header-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .ct-eyebrow-line {
          width: 20px;
          height: 1.5px;
          background-color: #B02038;
        }

        .ct-eyebrow-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #B02038;
        }

        .ct-header-body {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
        }

        .ct-headline {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #151513;
          margin: 0;
          max-width: 600px;
        }

        .ct-subhead {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: clamp(0.925rem, 1.15vw, 1rem);
          color: #706C63;
          line-height: 1.65;
          max-width: 440px;
          margin: 0;
        }

        .ct-header-rule {
          width: 100%;
          height: 1px;
          background-color: #D3CEC2;
          margin-top: 0.5rem;
        }

        /* ── Main Grid (Seamless Split) ── */
        .ct-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: clamp(2rem, 3.5vw, 3rem);
          align-items: start;
        }

        @media (max-width: 900px) {
          .ct-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        /* ── Left Column: Status & Channel Rows ── */
        .ct-left-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        /* Status Wrap (No card box) */
        .ct-status-wrap {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-bottom: 1.15rem;
          border-bottom: 1px solid #D3CEC2;
        }

        .ct-status-pill {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ct-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #2D6A4F;
          box-shadow: 0 0 0 3px rgba(45, 106, 79, 0.2);
          display: inline-block;
          animation: ct-pulse 2s infinite ease-in-out;
        }

        @keyframes ct-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.75; }
        }

        .ct-status-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #2D6A4F;
        }

        .ct-status-text {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 13.5px;
          line-height: 1.6;
          color: #151513;
          margin: 0;
          font-weight: 550;
        }

        .ct-timezone-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #706C63;
        }

        .ct-timezone-icon {
          color: #B02038;
        }

        /* Channel Rows (Clean lines, zero card box) */
        .ct-channels-list {
          display: flex;
          flex-direction: column;
        }

        .ct-ch-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem 0;
          border-bottom: 1px solid #D3CEC2;
          text-decoration: none;
          color: #151513;
          transition: border-color 180ms ease;
        }

        .ct-ch-row--link:hover .ct-ch-val {
          color: #B02038;
        }

        .ct-ch-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }

        .ct-ch-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8A857D;
        }

        .ct-ch-val {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          color: #151513;
          transition: color 180ms ease;
        }

        .ct-ch-action {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .ct-copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #151513;
          background: #FFFFFF;
          border: 1px solid #D3CEC2;
          padding: 4px 8px;
          border-radius: 2px;
          cursor: pointer;
          transition: all 180ms ease;
        }

        .ct-copy-btn:hover {
          border-color: #B02038;
          color: #B02038;
        }

        .ct-ch-arrow {
          color: #706C63;
          transition: transform 180ms ease, color 180ms ease;
        }

        .ct-ch-row--link:hover .ct-ch-arrow {
          transform: translate(2px, -2px);
          color: #B02038;
        }

        /* ── Right Column: Line-Based Form (No Box) ── */
        .ct-form-wrap {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        /* Topic Pills */
        .ct-topics-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .ct-topic-pill {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 5px 10px;
          border-radius: 2px;
          background: #FFFFFF;
          color: #706C63;
          border: 1px solid #D3CEC2;
          cursor: pointer;
          transition: all 180ms ease;
        }

        .ct-topic-pill:hover {
          color: #151513;
          border-color: #151513;
        }

        .ct-topic-pill--active {
          background: #151513;
          color: #F4F1E9;
          border-color: #151513;
        }

        /* Line-Based Inputs */
        .ct-form {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
          margin-top: 0.25rem;
        }

        .ct-field {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .ct-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8A857D;
        }

        .ct-req {
          color: #B02038;
        }

        .ct-line-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #D3CEC2;
          border-radius: 0;
          padding: 7px 0;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 14px;
          color: #151513;
          outline: none;
          transition: border-color 180ms ease;
          box-sizing: border-box;
        }

        .ct-line-input::placeholder {
          color: #9A9490;
        }

        .ct-line-input:focus {
          border-bottom-color: #151513;
        }

        .ct-line-textarea {
          resize: vertical;
          min-height: 70px;
          line-height: 1.5;
        }

        /* Feedback Alerts */
        .ct-feedback {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 0;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          font-size: 12.5px;
          font-weight: 550;
        }

        .ct-feedback--success {
          color: #2D6A4F;
        }

        .ct-feedback--error {
          color: #B02038;
        }

        /* Submit Button */
        .ct-submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px 22px;
          background: #151513;
          color: #F4F1E9;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          border-radius: 3px;
          cursor: pointer;
          transition: background-color 180ms ease;
          align-self: flex-start;
        }

        .ct-submit-btn:hover:not(:disabled) {
          background-color: #B02038;
        }

        .ct-submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .ct-submit-arrow {
          transition: transform 180ms ease;
        }

        .ct-submit-btn:hover:not(:disabled) .ct-submit-arrow {
          transform: translate(2px, -2px);
        }

        .ct-spin {
          animation: ct-spin 1s linear infinite;
        }

        @keyframes ct-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* ── Prefers Reduced Motion ── */
        @media (prefers-reduced-motion: reduce) {
          .ct-submit-arrow,
          .ct-ch-arrow,
          .ct-status-dot {
            transition: none !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
