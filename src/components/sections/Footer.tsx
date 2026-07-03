import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/hitesh-kumar123", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/hitesh-kumar-hk/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hiteshdevkumar2003@gmail.com", label: "Email" },
];

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Certificates", id: "certificates" },
  { label: "Contact", id: "contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Left: brand */}
          <button
            onClick={scrollToTop}
            className="text-xl font-bold text-white/60 hover:text-white transition-colors duration-200"
            aria-label="Scroll to top"
          >
            HK
          </button>

          {/* Center: nav */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-[12px] text-white/30 hover:text-white/70 transition-colors duration-200"
              >
                {link.label}
              </button> 
            ))}
          </div>

          {/* Right: socials */}
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-8 h-8 rounded-xl border border-white/8 flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom: copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
          <p className="text-[11px] text-white/20 font-mono">
            © {year} Hitesh Kumar · Surat, India
          </p>
          {/* <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-7 h-7 rounded-lg border border-white/8 flex items-center justify-center text-white/25 hover:text-white hover:border-white/20 transition-all duration-200"
          >
            <ArrowUp size={12} />
          </button> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;