import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, MapPin, Linkedin, Github,
  CheckCircle, AlertCircle, Loader, X,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

type FormStatus = "idle" | "loading" | "success" | "error";

const TICKER_ITEMS = [
  "Open to work",
  "MERN Stack Engineer",
  "Available for freelance",
  "Based in India",
  "Reply within 24hrs",
  "Full-time roles welcome",
  "Clean code · Fast ship",
];

const QUICK_LINKS = [
  { icon: <Mail size={15} />, label: "hiteshdevkumar2003@gmail.com", href: "mailto:hiteshdevkumar2003@gmail.com" },
  { icon: <Linkedin size={15} />, label: "linkedin.com/in/hitesh-kumar-hk", href: "https://www.linkedin.com/in/hitesh-kumar-hk/" },
  { icon: <Github size={15} />, label: "github.com/hitesh-kumar123", href: "https://github.com/hitesh-kumar123" },
  { icon: <MapPin size={15} />, label: "Surat, India — Remote Friendly", href: null },
];

/* ── Infinite ticker ── */
const Ticker = () => {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]; // duplicate for seamless loop
  return (
    <div className="overflow-hidden border-y border-white/5 py-3 mb-16 relative">
      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-[11px] font-mono text-white/30 uppercase tracking-widest flex-shrink-0">
            <span className="w-1 h-1 rounded-full bg-white/15 flex-shrink-0" aria-hidden="true" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

/* ── Contact form modal ── */
const ContactModal = ({ onClose }: { onClose: () => void }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ from_name: "", from_email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  /* close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

  const btnLabel = {
    idle: "Send message",
    loading: "Sending…",
    success: "Message sent",
    error: "Try again",
  }[status];

  const btnClass = {
    idle: "bg-white text-black hover:bg-white/90",
    loading: "bg-white/70 text-black cursor-not-allowed",
    success: "bg-green-600 text-white cursor-default",
    error: "bg-red-600 text-white",
  }[status];

  return (
    /* backdrop */
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* modal */}
      <motion.div
        className="relative w-full max-w-lg bg-[#07070b] border border-white/10 rounded-2xl p-7 z-10"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={e => e.stopPropagation()}
      >
        {/* close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-lg border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-200"
        >
          <X size={15} />
        </button>

        <h3 className="text-lg font-bold text-white mb-1">Send a message</h3>
        <p className="text-[13px] text-white/40 mb-6">I read every message and reply personally.</p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              id="modal-name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder=" "
              required
              disabled={status === "loading"}
              className="floating-input disabled:opacity-50"
              autoComplete="name"
            />
            <label htmlFor="modal-name" className="floating-label">Your name</label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="modal-email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder=" "
              required
              disabled={status === "loading"}
              className="floating-input disabled:opacity-50"
              autoComplete="email"
            />
            <label htmlFor="modal-email" className="floating-label">Email address</label>
          </div>

          <div className="relative">
            <textarea
              id="modal-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              required
              rows={4}
              disabled={status === "loading"}
              className="floating-input resize-none disabled:opacity-50"
              style={{ paddingTop: "1.8rem" }}
            />
            <label htmlFor="modal-message" className="floating-label floating-label-textarea">
              Tell me about your project…
            </label>
          </div>

          {status === "success" && (
            <div className="flex items-center gap-2 text-green-400 bg-green-500/10 border border-green-500/20 px-4 py-3 rounded-xl text-[13px] font-medium">
              <CheckCircle size={15} />
              Sent! I'll reply within 24 hours.
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-xl text-[13px] font-medium">
              <AlertCircle size={15} />
              Something went wrong. Email me directly.
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className={`w-full flex items-center justify-center gap-2 h-10 rounded-lg text-[13px] font-semibold transition-colors duration-200 ${btnClass}`}
          >
            {status === "loading" && <Loader size={14} className="animate-spin" />}
            {status === "success" && <CheckCircle size={14} />}
            {btnLabel}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

/* ── Contact section ── */
const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="section-padding relative overflow-hidden" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="flex justify-center mb-4">
              <span className="section-tag">Contact</span>
            </div>
            <h2 id="contact-heading" className="section-title">
              <span className="text-white">Got a Project?</span>{" "}
              <span className="text-blue-400">Let's Talk.</span>
            </h2>
            <p className="text-[15px] text-white/45 max-w-md mx-auto mt-4 leading-relaxed">
              Whether it's a full project or a quick question — I'm always open to new opportunities.
            </p>
          </motion.div>

          {/* Ticker */}
          <Ticker />

          {/* Info grid + CTA */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Left — contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <div className="premium-card p-6">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-sm font-bold text-white">Current Status</h3>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg border border-green-500/20 bg-green-500/10 text-green-400 uppercase tracking-widest">
                    Available
                  </span>
                </div>
                <p className="text-[13px] text-white/45 leading-relaxed mb-5">
                  Open to full-time roles and freelance projects. I bring full-stack expertise and ship fast without sacrificing quality.
                </p>
                <div className="space-y-3">
                  {QUICK_LINKS.map((link) =>
                    link.href ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-[13px] text-white/40 hover:text-white transition-colors duration-200 group"
                      >
                        <span className="text-white/20 group-hover:text-white/60 transition-colors duration-200">
                          {link.icon}
                        </span>
                        {link.label}
                      </a>
                    ) : (
                      <div key={link.label} className="flex items-center gap-3 text-[13px] text-white/40">
                        <span className="text-white/20">{link.icon}</span>
                        {link.label}
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* Right — CTA card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="premium-card p-8 flex flex-col items-center text-center gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Let's build something</h3>
                  <p className="text-[13px] text-white/40 leading-relaxed max-w-xs mx-auto">
                    Click below to open the message form. I read every message and reply personally.
                  </p>
                </div>

                <button
                  onClick={() => setModalOpen(true)}
                  className="px-8 py-3 rounded-xl bg-white text-black text-[13px] font-semibold hover:bg-white/90 transition-colors duration-200"
                >
                  Send a message
                </button>

                <p className="text-[11px] font-mono text-white/20">
                  Or reach out directly — hiteshdevkumar2003@gmail.com
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Contact;