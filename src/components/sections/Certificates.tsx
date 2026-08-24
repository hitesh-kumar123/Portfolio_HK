import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight, Award } from "lucide-react";
import { certificatesData, Certificate } from "@/data/certificates";
import { CertificateArchiveModal } from "../modals/CertificateArchiveModal";

const CERTS_PER_PAGE = 3;

export const Certificates: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  const totalPages = Math.ceil(certificatesData.length / CERTS_PER_PAGE);

  const paginatedCerts = certificatesData.slice(
    currentPage * CERTS_PER_PAGE,
    (currentPage + 1) * CERTS_PER_PAGE
  );

  return (
    <>
      <section
        id="certificates"
        className="section-container border-b border-[#D9D2C5] bg-[#F5F0E6]"
        aria-labelledby="cert-heading"
      >
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#D9D2C5]">
          <div>
            <span className="section-tag">
              07 — CERTIFICATES
            </span>
            <h2 id="cert-heading" className="display-title font-bold text-ink">
              Verified learning &amp; <br />
              <span className="text-cobalt">technical credentials</span>
            </h2>
          </div>

          <button
            onClick={() => setIsArchiveOpen(true)}
            className="btn-secondary"
          >
            <Award size={14} />
            <span>View All Credentials →</span>
          </button>
        </div>

        {/* ── Uniform Card Framing with Subtle Shadows ── */}
        <div className="min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {paginatedCerts.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 bg-[#EEE8DC] rounded-2xl border border-[#D9D2C5] hover:border-cobalt hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-5 group overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Uniform Framing */}
                    <div className="aspect-[4/3] overflow-hidden rounded-xl border border-[#D9D2C5] relative bg-white shadow-2xs">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-cobalt bg-cobalt/10 px-2.5 py-0.5 rounded">
                        {cert.category}
                      </span>
                      <span className="font-mono text-xs text-[#555048] font-bold">
                        {cert.year}
                      </span>
                    </div>

                    <h3 className="font-display text-lg text-ink font-bold leading-snug group-hover:text-cobalt transition-colors">
                      {cert.title}
                    </h3>

                    <p className="font-mono text-xs text-[#555048] font-semibold">
                      Issuer: {cert.issuer}
                    </p>

                    <p className="text-xs text-[#3A3630] leading-relaxed font-normal">
                      {cert.description}
                    </p>
                  </div>

                  {/* Verification CTA */}
                  <div className="pt-4 border-t border-[#D9D2C5]">
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
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Editorial Pagination Controller ── */}
        {totalPages > 1 && (
          <div className="mt-12 pt-6 border-t border-[#D9D2C5] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="text-[#555048] uppercase tracking-wider font-semibold">
              <span>PAGE </span>
              <strong className="text-ink">0{currentPage + 1}</strong>
              <span> / 0{totalPages}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                disabled={currentPage === 0}
                className="inline-flex items-center gap-1 px-4 py-2 border border-[#D9D2C5] bg-[#EEE8DC] font-mono text-xs font-bold uppercase tracking-wider rounded-full text-ink hover:text-cobalt hover:border-cobalt disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Previous page"
              >
                <ChevronLeft size={14} />
                PREV
              </button>

              <div className="flex items-center gap-1.5 px-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentPage
                        ? "w-8 bg-cobalt"
                        : "w-2 bg-[#D9D2C5] hover:bg-ink/40"
                    }`}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={currentPage === totalPages - 1}
                className="inline-flex items-center gap-1 px-4 py-2 border border-[#D9D2C5] bg-[#EEE8DC] font-mono text-xs font-bold uppercase tracking-wider rounded-full text-ink hover:text-cobalt hover:border-cobalt disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Next page"
              >
                NEXT
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Interactive Certificate Archive Modal */}
      <CertificateArchiveModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
      />
    </>
  );
};
