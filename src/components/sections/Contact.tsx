import { motion } from "framer-motion";
import {
  Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader,
  Clock, MessageSquare, Linkedin, Github, Zap, Star,
} from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// 🔧 Replace with your real EmailJS credentials
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

type FormStatus = "idle" | "loading" | "success" | "error";

/* ── Social proof testimonials ── */
const proofItems = [
  { icon: "⚡", text: "Reply within 24hrs" },
  { icon: "✓", text: "Free my project" },
  { icon: "+", text: "Available for freelance" },
];

/* ── Quick contact chips ── */
const quickLinks = [
  {
    icon: <Mail size={16} />,
    label: "Email",
    href: "mailto:hiteshdevkumar2003@gmail.com",
    color: "hover:border-cyan-500/50 hover:text-cyan-500",
  },
  {
    icon: <Linkedin size={16} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hitesh-kumar-hk/",
    color: "hover:border-blue-500/50 hover:text-blue-500",
  },
  {
    icon: <Github size={16} />,
    label: "GitHub",
    href: "https://github.com/hitesh-kumar123",
    color: "hover:border-purple-500/50 hover:text-purple-500",
  },
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current!, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const getButtonContent = () => {
    switch (status) {
      case "loading": return <><Loader size={17} className="animate-spin" /> Sending your message…</>;
      case "success": return <><CheckCircle size={17} /> Message Sent! I'll reply soon 🎉</>;
      case "error": return <><AlertCircle size={17} /> Something went wrong — Try again</>;
      default: return <>Let's Build Something ⚡</>;
    }
  };

  const getButtonClass = () => {
    const base = "w-full flex items-center justify-center gap-2 h-10 px-4 rounded-md font-medium text-sm transition-all duration-300";
    switch (status) {
      case "success": return `${base} bg-emerald-600 text-white cursor-default`;
      case "error": return `${base} bg-red-600 text-white cursor-default`;
      case "loading": return `${base} opacity-70 cursor-not-allowed bg-white text-black`;
      default: return `${base} bg-white hover:bg-white/90 text-black shadow-sm`;
    }
  };

  /* Steps for the form progress feel */
  const steps = [
    { field: "name", label: "Your Name" },
    { field: "email", label: "Email" },
    { field: "message", label: "Message" },
  ];
  const filledCount = [formData.name, formData.email, formData.message].filter(Boolean).length;

  return (
    <section id="contact" className="section-padding relative overflow-hidden dot-matrix">
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.08]"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }} />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[130px] opacity-[0.06]"
          style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/10 text-white/60 border border-white/5">
              ✦ GET IN TOUCH ✦
            </span>
          </div>
          <h2 className="section-title">
            <span className="text-white">Got a Project?</span> <span className="text-[#3b82f6]">Let's Talk.</span>
          </h2>
          <p className="text-base text-white/70 max-w-xl mx-auto mt-4 leading-normal">
            I'm always excited to hear about new opportunities. Whether it's a
            full project or just a quick question — drop me a message!
          </p>

          {/* Social proof pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {proofItems.map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold
                           bg-white/5 text-white border border-white/10"
              >
                <span className="text-white/60 font-bold">{item.icon}</span>
                {item.text}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* ── Grid: Left info + Right form ── */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* ── LEFT: Contact info (2/5) ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Availability card */}
            <div className="premium-card p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-bold text-lg">Current Status</h3>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-emerald-500/30 text-emerald-400">
                  ● AVAILABLE
                </div>
              </div>
              <p className="text-sm text-white/50 leading-normal mb-5">
                Currently open to <strong className="text-foreground">freelance projects</strong> and{" "}
                <strong className="text-foreground">full-time roles</strong>. I bring full-stack expertise and
                ship fast without sacrificing quality.
              </p>
              <div className="gradient-divider mb-5" />

              {/* Contact details */}
              <div className="space-y-4">
                <a
                  href="mailto:hiteshdevkumar2003@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Mail size={17} />
                  </div>
                  <div>
                    <p className="text-[11px] text-white/50 font-medium uppercase tracking-wide">Email</p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      hiteshdevkumar2003@gmail.com
                    </p>
                  </div>
                </a>

                <a href="tel:+919983318311" className="flex items-center gap-3 group">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Phone size={17} />
                  </div>
                  <div>
                    <p className="text-[11px] text-white/50 font-medium uppercase tracking-wide">Phone</p>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <p className="text-[11px] text-white/50 font-medium uppercase tracking-wide">Location</p>
                    <p className="text-sm font-semibold text-foreground">India 🇮🇳 — Remote Friendly</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick connect */}
            <div className="premium-card p-6">
              <h3 className="font-bold text-sm uppercase tracking-widest text-white/50 mb-4">Quick Connect</h3>
              <div className="flex flex-col gap-2.5">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border border-border text-white/60 text-sm font-medium transition-all duration-300 bg-secondary/50 ${link.color} hover:border-opacity-50 hover:bg-secondary`}
                  >
                    {link.icon}
                    {link.label}
                    <span className="ml-auto text-xs opacity-50">→</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Contact form (3/5) ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="premium-card p-8">
              {/* Form header */}
              <div className="flex items-start justify-between mb-7">
                <div>
                  <h3 className="text-xl font-bold mb-1">Send Me a Message</h3>
                  <p className="text-sm text-white/50">I read every message and reply personally.</p>
                </div>
                {/* Progress indicator */}
                <div className="flex items-center gap-1.5 mt-1">
                  {steps.map((s, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-500 ${i < filledCount
                        ? "bg-[#3b82f6] w-6"
                        : "bg-white/10 w-4"
                        }`}
                    />
                  ))}
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

                {/* Name field */}
                <div className="input-group">
                  <input
                    type="text"
                    id="contact-name"
                    name="from_name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder=" "
                    required
                    disabled={status === "loading"}
                    className="floating-input disabled:opacity-50 disabled:cursor-not-allowed"
                    autoComplete="name"
                  />
                  <label htmlFor="contact-name" className="floating-label">Your Name</label>
                </div>

                {/* Email field */}
                <div className="input-group">
                  <input
                    type="email"
                    id="contact-email"
                    name="from_email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder=" "
                    required
                    disabled={status === "loading"}
                    className="floating-input disabled:opacity-50 disabled:cursor-not-allowed"
                    autoComplete="email"
                  />
                  <label htmlFor="contact-email" className="floating-label">Email Address</label>
                </div>

                {/* Message field */}
                <div className="input-group">
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder=" "
                    required
                    rows={5}
                    disabled={status === "loading"}
                    className="floating-input resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ paddingTop: "1.8rem" }}
                  />
                  <label htmlFor="contact-message" className="floating-label floating-label-textarea">
                    Tell me about your project or idea…
                  </label>
                </div>

                {/* Status message */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400
                               bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40
                               px-4 py-3 rounded-xl text-sm font-semibold"
                  >
                    <CheckCircle size={16} />
                    Message sent! I'll reply within 24 hours — check your inbox 📬
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-600 dark:text-red-400
                               bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/40
                               px-4 py-3 rounded-xl text-sm font-semibold"
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email me directly.
                  </motion.div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={getButtonClass()}
                  id="contact-submit"
                >
                  {getButtonContent()}
                </button>

                {/* Trust line */}
                <p className="text-center text-xs text-white/40 font-medium">
                  🔒 Your info is safe. We spam? Never, personally.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;