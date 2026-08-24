import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Search } from "lucide-react";
import { certificatesData, Certificate } from "@/data/certificates";

interface CertificateArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORIES = ["All", "Full Stack", "Open Source", "Hackathon", "Cloud", "API Testing"] as const;

export const CertificateArchiveModal: React.FC<CertificateArchiveModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const filteredCerts = certificatesData.filter((c) => {
    const matchesCategory =
      selectedCategory === "All" || c.category === selectedCategory;
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-[#F5F0E6] rounded-3xl border border-[#D9D2C5] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#D9D2C5] bg-[#EEE8DC]">
              <span className="font-mono text-xs font-bold text-cobalt uppercase tracking-wider">
                All Verified Credentials ({certificatesData.length})
              </span>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-[#D9D2C5] flex items-center justify-center text-ink bg-white hover:bg-ink hover:text-white transition-colors"
                aria-label="Close Certificate Archive"
              >
                <X size={16} />
              </button>
            </div>

            {/* Filter and Search Bar */}
            <div className="px-6 sm:px-8 py-4 border-b border-[#D9D2C5] bg-[#EEE8DC]/50 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider rounded-full transition-all border ${
                      selectedCategory === category
                        ? "bg-cobalt text-white border-cobalt shadow-xs"
                        : "bg-white text-ink border-[#D9D2C5] hover:border-black/30"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="relative min-w-[240px]">
                <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#555048]" />
                <input
                  type="text"
                  placeholder="Search by issuer or name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-[#D9D2C5] rounded-full pl-9 pr-4 py-2 font-mono text-xs text-ink placeholder-[#555048] focus:outline-none focus:border-cobalt"
                />
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 flex-1">
              {filteredCerts.length === 0 ? (
                <div className="py-12 text-center text-[#555048] text-sm font-medium">
                  No certificates match your search criteria.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCerts.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-6 bg-[#EEE8DC] rounded-2xl border border-[#D9D2C5] hover:border-cobalt hover:shadow-lg transition-all duration-200 flex flex-col justify-between group space-y-3"
                    >
                      <div className="space-y-3">
                        <div className="aspect-[4/3] overflow-hidden rounded-xl border border-[#D9D2C5] bg-white relative">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-cobalt bg-cobalt/10 px-2.5 py-0.5 rounded">
                            {cert.category}
                          </span>
                          <span className="font-mono text-xs text-[#555048] font-bold">
                            {cert.year}
                          </span>
                        </div>

                        <h3 className="font-display text-base text-ink font-bold leading-snug group-hover:text-cobalt transition-colors">
                          {cert.title}
                        </h3>

                        <p className="font-mono text-xs text-[#555048] font-semibold">
                          Issuer: {cert.issuer}
                        </p>

                        <p className="text-xs text-[#3A3630] leading-relaxed">
                          {cert.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#D9D2C5]">
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-cobalt hover:underline"
                        >
                          <span>Verify Credential</span>
                          <ExternalLink size={13} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 py-4 border-t border-[#D9D2C5] bg-[#EEE8DC] flex items-center justify-between font-mono text-xs text-[#555048]">
              <span>Archive contains {filteredCerts.length} of {certificatesData.length} credentials</span>
              <button
                onClick={onClose}
                className="font-bold text-ink hover:text-cobalt transition-colors uppercase tracking-wider"
              >
                Close Archive [ESC]
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
