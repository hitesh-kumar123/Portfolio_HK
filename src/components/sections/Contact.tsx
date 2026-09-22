import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Loader2, CheckCircle, AlertCircle, Copy, Check } from "lucide-react";
import emailjs from "@emailjs/browser";

/* -- EmailJS config (unchanged) -- */
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";

type FormStatus = "idle" | "loading" | "success" | "error";

/* -- Real contact channels from repository -- */
const CHANNELS = [
  {
    id: "email",
    label: "EMAIL",
    text: "hiteshdevkumar2003@gmail.com",
    href: "mailto:hiteshdevkumar2003@gmail.com",
    copyable: true,
  },
  {
    id: "github",
    label: "GITHUB",
    text: "github.com/hitesh-kumar123",
    href: "https://github.com/hitesh-kumar123",
    copyable: false,
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    text: "linkedin.com/in/hitesh-kumar-hk",
    href: "https://www.linkedin.com/in/hitesh-kumar-hk/",
    copyable: false,
  },
  {
    id: "location",
    label: "LOCATION",
    text: "Ahmedabad, Gujarat, India",
    href: null,
    copyable: false,
  },
];

/* ---------------------------------------------
   Palette � matches global editorial system
   --------------------------------------------- */
const PAL = {
  paper:   "#F4F1E9",
  surface: "#FAF8F2",
  ink:     "#151513",
  muted:   "#706C63",
  border:  "#D3CEC2",
  wine:    "#B02038",
};

export const Contact: React.FC = () => {
  const formRef  = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ from_name: "", from_email: "", message: "" });
  const [status, setStatus]     = useState<FormStatus>("idle");
  const [copied, setCopied]     = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current!, EMAILJS_PUBLIC_KEY);
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
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{ background: PAL.paper }}
    >
      {/* -- Scoped styles -- */}
      <style>{`
        .ctc-mono    { font-family: 'JetBrains Mono', 'Fira Mono', monospace; }
        .ctc-display { font-family: 'Syne', sans-serif; }

        /* Channel rows */
        .ctc-channel {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid ${PAL.border};
          text-decoration: none;
          transition: transform 0.2s ease;
        }
        .ctc-channel:first-child { border-top: 1px solid ${PAL.border}; }
        @media (hover: hover) {
          .ctc-channel[href]:hover { transform: translateY(-3px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ctc-channel { transition: none !important; }
          .ctc-channel[href]:hover { transform: none !important; }
        }

        /* Channel text underline expand */
        .ctc-channel-text {
          position: relative;
          display: inline-block;
          color: ${PAL.ink};
          font-size: clamp(0.9rem, 1.6vw, 1.1rem);
          font-weight: 600;
          line-height: 1.3;
        }
        .ctc-channel-text::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0;
          width: 0; height: 1px;
          background: ${PAL.wine};
          transition: width 0.26s ease;
        }
        .ctc-channel[href]:hover .ctc-channel-text::after { width: 100%; }
        .ctc-channel[href]:focus-visible .ctc-channel-text::after { width: 100%; }
        @media (prefers-reduced-motion: reduce) { .ctc-channel-text::after { transition: none; } }

        /* Channel arrow */
        .ctc-arrow { transition: transform 0.2s ease; color: ${PAL.muted}; }
        .ctc-channel[href]:hover .ctc-arrow { transform: translate(3px, -3px); color: ${PAL.wine}; }
        @media (prefers-reduced-motion: reduce) {
          .ctc-arrow { transition: none; }
          .ctc-channel[href]:hover .ctc-arrow { transform: none; }
        }

        /* Channel focus ring */
        .ctc-channel:focus-visible {
          outline: 2px solid ${PAL.wine};
          outline-offset: 6px;
          border-radius: 2px;
        }

        /* Form inputs */
        .ctc-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid ${PAL.border};
          padding: 12px 0;
          font-family: inherit;
          font-size: 15px;
          color: ${PAL.ink};
          outline: none;
          transition: border-color 0.2s;
          border-radius: 0;
          -webkit-appearance: none;
        }
        .ctc-input::placeholder { color: ${PAL.muted}; }
        .ctc-input:focus { border-color: ${PAL.ink}; }
        .ctc-input:disabled { opacity: 0.5; cursor: not-allowed; }
        @media (prefers-reduced-motion: reduce) { .ctc-input { transition: none; } }

        /* CTA button */
        .ctc-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: ${PAL.ink};
          color: ${PAL.paper};
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          transition: transform 0.22s ease, background 0.22s;
          width: 100%;
          justify-content: center;
        }
        .ctc-btn:hover { transform: translateY(-2px); background: ${PAL.wine}; }
        .ctc-btn:focus-visible {
          outline: 2px solid ${PAL.wine};
          outline-offset: 4px;
        }
        .ctc-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
        @media (prefers-reduced-motion: reduce) {
          .ctc-btn { transition: none; }
          .ctc-btn:hover { transform: none; }
        }

        /* Copy button */
        .ctc-copy {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${PAL.muted};
          background: none;
          border: 1px solid ${PAL.border};
          border-radius: 2px;
          padding: 3px 8px;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }
        .ctc-copy:hover { border-color: ${PAL.wine}; color: ${PAL.wine}; }
        .ctc-copy:focus-visible { outline: 2px solid ${PAL.wine}; outline-offset: 3px; border-radius: 2px; }
        @media (prefers-reduced-motion: reduce) { .ctc-copy { transition: none; } }

        /* Layout */
        .ctc-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 80px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .ctc-grid { grid-template-columns: 1fr; gap: 64px 0; }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 40px" }}>

        {/* -- Top headline area -- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{ paddingBottom: 64, borderBottom: `1px solid ${PAL.border}`, marginBottom: 64 }}
        >
          <h2
            id="contact-heading"
            className="ctc-display"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
              fontWeight: 800,
              color: PAL.ink,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            LET'S MAKE
            <br />
            SOMETHING{" "}
            <span style={{ color: PAL.wine }}>USEFUL.</span>
          </h2>
        </motion.div>

        {/* -- Two-column editorial body -- */}
        <div className="ctc-grid">

          {/* LEFT: contact channels */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="ctc-mono"
              style={{ fontSize: 11, color: PAL.muted, lineHeight: 1.8, marginBottom: 40, maxWidth: 360 }}
            >
              If you have a project worth building, a role that needs
              filling, or an idea worth discussing � reach out directly.
            </p>

            {/* Channel list */}
            <div role="list">
              {CHANNELS.map((ch) => {
                const isEmail = ch.id === "email";
                const isLink  = !!ch.href;

                const inner = (
                  <>
                    <div>
                      <p
                        className="ctc-mono"
                        style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: PAL.muted, marginBottom: 3 }}
                      >
                        {ch.label}
                      </p>
                      <span className="ctc-channel-text">{ch.text}</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                      {/* Copy-to-clipboard for email */}
                      {isEmail && (
                        <button
                          className="ctc-copy"
                          onClick={(e) => { e.preventDefault(); handleCopyEmail(); }}
                          aria-label="Copy email address"
                          tabIndex={0}
                        >
                          {copied
                            ? <><Check size={9} /><span>COPIED</span></>
                            : <><Copy size={9} /><span>COPY</span></>
                          }
                        </button>
                      )}
                      {isLink && (
                        <ArrowUpRight size={16} strokeWidth={2} className="ctc-arrow" aria-hidden="true" />
                      )}
                    </div>
                  </>
                );

                return isLink ? (
                  <a
                    key={ch.id}
                    role="listitem"
                    className="ctc-channel"
                    href={ch.href!}
                    target={ch.href!.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={`${ch.label}: ${ch.text}`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={ch.id} role="listitem" className="ctc-channel" style={{ cursor: "default" }}>
                    {inner}
                  </div>
                );
              })}
            </div>

            {/* Primary CTA */}
            <div style={{ marginTop: 40 }}>
              <a
                href="mailto:hiteshdevkumar2003@gmail.com"
                className="ctc-btn"
                style={{ display: "inline-flex", width: "auto", textDecoration: "none" }}
                aria-label="Start a conversation via email"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight size={13} strokeWidth={2.5} style={{ transition: "transform 0.2s ease" }} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT: EmailJS form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="ctc-mono"
              style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: PAL.muted, marginBottom: 32 }}
            >
              OR SEND A MESSAGE DIRECTLY
            </p>

            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div style={{ marginBottom: 28 }}>
                <label htmlFor="from_name" className="ctc-mono" style={{ display: "block", fontSize: 9.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: PAL.muted, marginBottom: 8 }}>
                  Name *
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  placeholder="Your name"
                  className="ctc-input"
                  autoComplete="name"
                />
              </div>

              <div style={{ marginBottom: 28 }}>
                <label htmlFor="from_email" className="ctc-mono" style={{ display: "block", fontSize: 9.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: PAL.muted, marginBottom: 8 }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  placeholder="your@email.com"
                  className="ctc-input"
                  autoComplete="email"
                />
              </div>

              <div style={{ marginBottom: 32 }}>
                <label htmlFor="message" className="ctc-mono" style={{ display: "block", fontSize: 9.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: PAL.muted, marginBottom: 8 }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={status === "loading"}
                  placeholder="Describe your project or opportunity..."
                  className="ctc-input"
                  style={{ resize: "vertical", lineHeight: 1.7 }}
                />
              </div>

              {/* Status feedback */}
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="ctc-mono"
                    style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 10.5, color: "#2d6a4f", marginBottom: 20, padding: "12px 0", borderTop: `1px solid ${PAL.border}` }}
                  >
                    <CheckCircle size={14} />
                    <span>Message sent successfully. I'll be in touch shortly.</span>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="ctc-mono"
                    style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 10.5, color: PAL.wine, marginBottom: 20, padding: "12px 0", borderTop: `1px solid ${PAL.border}` }}
                  >
                    <AlertCircle size={14} />
                    <span>Submission failed. Email hiteshdevkumar2003@gmail.com directly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="ctc-btn"
              >
                {status === "loading" ? (
                  <><Loader2 size={14} style={{ animation: "spin 1s linear infinite" }} /><span>SENDING�</span></>
                ) : status === "success" ? (
                  <span>MESSAGE SENT ?</span>
                ) : (
                  <><span>SEND MESSAGE</span><ArrowUpRight size={13} strokeWidth={2.5} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* -- Bottom rule -- */}
        <div
          style={{ marginTop: 80, paddingTop: 32, borderTop: `1px solid ${PAL.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}
        >
          <p className="ctc-mono" style={{ fontSize: 10, color: PAL.muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Ahmedabad, Gujarat, India � Remote available
          </p>
          <p className="ctc-mono" style={{ fontSize: 10, color: PAL.border }}>
            hiteshdevkumar2003@gmail.com
          </p>
        </div>

      </div>
    </section>
  );
};



