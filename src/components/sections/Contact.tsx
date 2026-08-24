import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, CheckCircle, AlertCircle, Loader2, ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

type FormStatus = "idle" | "loading" | "success" | "error";

const TICKER_ITEMS = [
  "Available for full-time engineering roles",
  "Open for freelance web app builds",
  "MERN Stack specialist",
  "Based in India • Remote ready globally",
  "Response guaranteed within 24 hours",
  "Open source contributor & collaborator",
];

const DIRECT_CHANNELS = [
  { label: "Email", text: "hiteshdevkumar2003@gmail.com", href: "mailto:hiteshdevkumar2003@gmail.com", icon: Mail },
  { label: "LinkedIn", text: "linkedin.com/in/hitesh-kumar-hk", href: "https://www.linkedin.com/in/hitesh-kumar-hk/", icon: Linkedin },
  { label: "GitHub", text: "github.com/hitesh-kumar123", href: "https://github.com/hitesh-kumar123", icon: Github },
  { label: "Location", text: "Surat, Gujarat, India (Remote Available)", href: null, icon: MapPin },
];

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ from_name: "", from_email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

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

  return (
    <section
      id="contact"
      className="section-container bg-[#F5F0E6] relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* ── Section Header Tag ── */}
      <span className="section-tag">
        08 — CONTACT
      </span>

      {/* ── Main Contact Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left: Statement & Channels */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 id="contact-heading" className="display-title font-bold text-ink">
              Have something <br />
              worth building? <br />
              <span className="text-cobalt">let's talk.</span>
            </h2>

            <p className="text-base text-[#3A3630] leading-relaxed font-normal max-w-md">
              Whether you are looking to hire a Full Stack Developer, need a freelance MVP built from scratch, or want to collaborate on open-source software.
            </p>
          </div>

          {/* Status Pill Card */}
          <div className="p-6 bg-[#EEE8DC] rounded-2xl border border-[#D9D2C5] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#555048]">
                Availability Status
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-[10px] font-bold bg-white text-cobalt uppercase tracking-wider rounded-full border border-[#D9D2C5]">
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt" />
                Available Now
              </span>
            </div>
            <p className="text-xs text-[#3A3630] leading-relaxed">
              Accepting full-time remote engineering roles and select freelance projects for 2026.
            </p>
          </div>

          {/* Direct Rails */}
          <div className="space-y-3 pt-2">
            <span className="block font-mono text-xs font-bold uppercase tracking-wider text-[#555048] mb-3">
              Direct Channels
            </span>
            {DIRECT_CHANNELS.map((ch) => {
              const Icon = ch.icon;
              return ch.href ? (
                <a
                  key={ch.label}
                  href={ch.href}
                  target={ch.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 bg-[#EEE8DC] rounded-xl border border-[#D9D2C5] text-sm text-ink hover:border-cobalt hover:text-cobalt transition-colors group"
                >
                  <Icon size={16} className="text-cobalt group-hover:scale-110 transition-transform" />
                  <span className="font-bold">{ch.label}:</span>
                  <span className="text-[#3A3630] group-hover:text-cobalt truncate font-medium">{ch.text}</span>
                  <ArrowUpRight size={14} className="ml-auto text-[#555048] group-hover:text-cobalt" />
                </a>
              ) : (
                <div
                  key={ch.label}
                  className="flex items-center gap-3 p-3.5 bg-[#EEE8DC] rounded-xl border border-[#D9D2C5] text-sm text-[#3A3630]"
                >
                  <Icon size={16} className="text-cobalt" />
                  <span className="font-bold text-ink">{ch.label}:</span>
                  <span className="truncate font-medium">{ch.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7 bg-[#EEE8DC] rounded-2xl border border-[#D9D2C5] p-8 sm:p-12">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-2">
              <label
                htmlFor="from_name"
                className="block font-mono text-xs font-bold uppercase tracking-wider text-ink"
              >
                Name <span className="text-cobalt">*</span>
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                disabled={status === "loading"}
                placeholder="Jane Doe"
                className="w-full bg-[#F5F0E6] border border-[#D9D2C5] rounded-xl p-4 text-sm text-ink placeholder-[#555048]/60 focus:outline-none focus:border-cobalt focus:bg-white transition-all"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="from_email"
                className="block font-mono text-xs font-bold uppercase tracking-wider text-ink"
              >
                Email <span className="text-cobalt">*</span>
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                disabled={status === "loading"}
                placeholder="jane@example.com"
                className="w-full bg-[#F5F0E6] border border-[#D9D2C5] rounded-xl p-4 text-sm text-ink placeholder-[#555048]/60 focus:outline-none focus:border-cobalt focus:bg-white transition-all"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block font-mono text-xs font-bold uppercase tracking-wider text-ink"
              >
                Message <span className="text-cobalt">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                disabled={status === "loading"}
                placeholder="Tell me about your project or opportunity..."
                className="w-full bg-[#F5F0E6] border border-[#D9D2C5] rounded-xl p-4 text-sm text-ink placeholder-[#555048]/60 focus:outline-none focus:border-cobalt focus:bg-white transition-all resize-none"
              />
            </div>

            {/* Status Notifications */}
            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-white border border-cobalt text-cobalt rounded-xl text-xs font-semibold flex items-center gap-2"
                >
                  <CheckCircle size={16} className="text-cobalt" />
                  <span>Message sent successfully! I will reply within 24 hours.</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs font-semibold flex items-center gap-2"
                >
                  <AlertCircle size={16} className="text-rose-600" />
                  <span>Submission failed. Please email hiteshdevkumar2003@gmail.com directly.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="btn-primary w-full py-4 text-xs font-mono tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>SENDING...</span>
                </>
              ) : status === "success" ? (
                <span>MESSAGE SENT ✓</span>
              ) : (
                <>
                  <span>SEND MESSAGE →</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>

      {/* ── Marquee Ticker ── */}
      <div className="overflow-hidden border-y border-[#D9D2C5] bg-[#EEE8DC] py-4 mt-20 -mx-6 sm:-mx-8 lg:-mx-12">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider text-[#555048] flex-shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt" />
              <span>{item}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
