import { Heart, Github, Linkedin, Mail, ArrowUp, Twitter, Zap } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/hitesh-kumar123", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/hitesh-kumar-hk/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hiteshdevkumar2003@gmail.com", label: "Email" },
];

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Certificates", id: "certificates" },
  { label: "Contact", id: "contact" },
];

const skills = ["React", "Node.js", "MongoDB", "Express", "TypeScript", "Tailwind CSS"];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden">
      {/* ── CTA banner strip (above main footer) ── */}
      <div
        className="relative py-14 px-4 overflow-hidden bg-[#0f0f0f]"
      >
        {/* Glow orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-[100px] opacity-[0.03] bg-white" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-[100px] opacity-[0.03] bg-[#3b82f6]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-semibold tracking-widest uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
              AVAILABLE FOR PROJECTS
            </div>
            <h2
              className="text-4xl font-bold tracking-tight text-white mb-5"
            >
              Let's Build Something{" "}
              <span style={{
                background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Amazing
              </span>
            </h2>
            <p className="text-base text-white/70 mb-8 max-w-lg mx-auto leading-normal">
              Have an idea? I'm one message away. Let's turn your vision into a
              product people love.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:hiteshdevkumar2003@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                ⚡ Start a Project
              </a>
              <a
                href="https://www.linkedin.com/in/hitesh-kumar-hk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-all duration-300"
              >
                Connect on LinkedIn →
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div
        className="relative bg-[#0a0a0a]"
      >
        {/* Top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Top grid ── */}
          <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/6">

            {/* Brand column */}
            <div className="lg:col-span-1 flex flex-col gap-4">
              <button
                onClick={scrollToTop}
                className="text-3xl font-bold w-fit transition-all duration-300 hover:opacity-80 text-[#3b82f6]"
              >
                HK
              </button>
              <p className="text-white/50 text-sm leading-normal max-w-[200px]">
                Full Stack Dev building fast, beautiful, and scalable web products.
              </p>
              {/* Open to work badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-emerald-500/30 text-emerald-400 w-fit">
                ● Open to work
              </div>

              {/* Social icons */}
              <div className="flex gap-2 mt-1">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="p-2.5 rounded-xl border border-white/8 text-white/50 hover:text-white hover:border-white/25 hover:bg-white/6 transition-all duration-300 hover:-translate-y-1"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation column */}
            <div>
              <p className="text-white/30 text-[11px] font-bold uppercase tracking-[0.15em] mb-5">Navigation</p>
              <div className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="text-white/55 hover:text-white text-sm transition-colors duration-200 text-left w-fit hover:translate-x-1 transition-transform"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills column */}
            <div>
              <p className="text-white/30 text-[11px] font-bold uppercase tracking-[0.15em] mb-5">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium text-white/55 border border-white/8 hover:border-primary/40 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact column */}
            <div>
              <p className="text-white/30 text-[11px] font-bold uppercase tracking-[0.15em] mb-5">Contact</p>
              <div className="flex flex-col gap-3">
                <a href="mailto:hiteshdevkumar2003@gmail.com"
                  className="text-white/55 hover:text-white text-sm transition-colors duration-200 break-all">
                  hiteshdevkumar2003@gmail.com
                </a>
                <span className="text-white/55 text-sm">India 🇮🇳</span>
              </div>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5">
            <span className="text-white/30 text-xs">© {year} Hitesh Kumar. All rights reserved.</span>

            <span className="flex items-center gap-1.5 text-white/30 text-xs">
              Made with <Heart className="w-3 h-3 text-red-400" fill="currentColor" /> and React
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;