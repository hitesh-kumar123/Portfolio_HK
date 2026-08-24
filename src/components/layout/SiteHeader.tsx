import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteNavItems } from "@/data/navigation";

export const SiteHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const scrollPos = window.scrollY + 200;

      if (window.scrollY < 200) {
        setActiveSection("home");
        return;
      }

      for (const { id } of siteNavItems) {
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

  const scrollTo = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? "bg-[#F4F0E8]/90 backdrop-blur-md border-b border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-4"
          : "bg-transparent py-6 sm:py-8"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-3 group text-left"
            aria-label="Hitesh Kumar Home"
          >
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink group-hover:text-cobalt transition-colors">
              Hitesh Kumar<span className="text-cobalt font-bold">.</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-black/[0.08] shadow-sm" aria-label="Main Navigation">
            {siteNavItems.map(({ id, label }) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 ${isActive
                    ? "text-white bg-cobalt shadow-sm"
                    : "text-ink/70 hover:text-ink hover:bg-black/5"
                    }`}
                >
                  <span>{label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-cobalt transition-all duration-200 shadow-sm group"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 md:hidden rounded-full border border-black/15 text-ink bg-white/80 hover:bg-ink hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[76px] left-4 right-4 z-40 bg-[#F4F0E8] border border-black/10 rounded-2xl p-6 shadow-2xl md:hidden space-y-4"
          >
            <nav className="space-y-1">
              {siteNavItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left py-3 px-4 rounded-xl text-sm font-semibold uppercase tracking-wider transition-colors ${activeSection === id ? "bg-cobalt text-white" : "text-ink/80 hover:bg-black/5"
                    }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            <button
              onClick={() => scrollTo("contact")}
              className="w-full py-3.5 bg-ink text-white rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-cobalt transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
