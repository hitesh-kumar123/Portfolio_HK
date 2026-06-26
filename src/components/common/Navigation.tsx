import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "home",         label: "Home" },
  { id: "about",        label: "About" },
  { id: "projects",     label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact",      label: "Contact" },
];

const Navigation = () => {
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection,    setActiveSection]    = useState("home");


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const scrollPos = window.scrollY + 280;
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* ── Navbar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-60"
      >
        <div
          className={`nav-pill px-3 py-2 transition-all duration-500 ${
            isScrolled
              ? "shadow-lg shadow-black/10 dark:shadow-black/40"
              : "shadow-none"
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            aria-label="Go to top"
            className="relative group mr-1 text-[#3b82f6] font-black text-xl px-2 py-1"
          >
            HK
          </button>

          {/* Divider */}
          <div className="hidden md:block w-px h-5 bg-border mx-1" />

          {/* Desktop nav items */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeSection === id
                    ? "text-white bg-[#3b82f6]"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="hidden md:block w-px h-5 bg-border mx-1" />

          {/* Right controls */}
          <div className="hidden md:flex items-center gap-2">
            {/* Hire me CTA */}
            <a
              href="mailto:hiteshdevkumar2003@gmail.com"
              className="bg-white text-black px-4 py-1.5 text-xs rounded-md font-medium hover:bg-white/90 transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 md:hidden ml-1">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="theme-toggle !p-2"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMobileMenuOpen ? "close" : "open"}
                  initial={{ rotate: -30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 30, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile backdrop ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-20 left-4 right-4 z-50 md:hidden glass-card overflow-hidden"
          >
            <div className="p-2 flex flex-col gap-1">
              {navItems.map(({ id, label }, i) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeSection === id
                      ? "bg-[#3b82f6]/10 text-[#3b82f6]"
                      : "text-white/50 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {label}
                </motion.button>
              ))}

              <div className="gradient-divider my-1" />

              <a
                href="mailto:hiteshdevkumar2003@gmail.com"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#3b82f6] text-white w-full text-center py-3.5 mt-1 rounded-xl font-medium"
              >
                Hire Me — Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;