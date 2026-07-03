import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award, ChevronLeft, ChevronRight } from "lucide-react";
import fullStackCert from "@/assets/Certificates/Full Stack Development.png";
import gssocCert from "@/assets/Certificates/GSSOC.jpg";
import hack2skillCert from "@/assets/Certificates/Hack2skill-Certificate.png";
import azureCert from "@/assets/Certificates/Microsoft Azure.pdf.png";
import postmanCert from "@/assets/Certificates/Postman - Postman API Fundamentals Student Expert - 2025-09-27 (1).png";
import contributorBadge from "@/assets/Certificates/Contributor's badge.jpg";

const ISSUER_STYLES: Record<string, { badge: string; text: string }> = {
  Udemy: { badge: "bg-purple-500/10 border-purple-500/20", text: "text-purple-400" },
  "GirlScript Summer of Code": { badge: "bg-orange-500/10 border-orange-500/20", text: "text-orange-400" },
  Hack2Skill: { badge: "bg-blue-500/10  border-blue-500/20", text: "text-blue-400" },
  Microsoft: { badge: "bg-sky-500/10   border-sky-500/20", text: "text-sky-400" },
  Postman: { badge: "bg-amber-500/10 border-amber-500/20", text: "text-amber-400" },
  GitHub: { badge: "bg-white/5      border-white/10", text: "text-white/60" },
};

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2023",
    image: fullStackCert,
    description: "Comprehensive bootcamp covering MERN stack development.",
    verifyUrl: "https://www.udemy.com/",
  },
  {
    title: "GSSOC Contributor",
    issuer: "GirlScript Summer of Code",
    date: "2023",
    image: gssocCert,
    description: "Open source contribution program — top contributor.",
    verifyUrl: "https://gssoc.girlscript.tech/",
  },
  {
    title: "Hack2Skill Certification",
    issuer: "Hack2Skill",
    date: "2022",
    image: hack2skillCert,
    description: "Recognition for participation in hackathons and coding events.",
    verifyUrl: "https://hack2skill.com/",
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2022",
    image: azureCert,
    description: "Cloud services fundamentals with Microsoft Azure.",
    verifyUrl: "https://learn.microsoft.com/",
  },
  {
    title: "Postman API Fundamentals",
    issuer: "Postman",
    date: "2025",
    image: postmanCert,
    description: "Expert-level API development, testing and documentation.",
    verifyUrl: "https://www.postman.com/",
  },
  {
    title: "Open Source Contributor",
    issuer: "GitHub",
    date: "2021",
    image: contributorBadge,
    description: "Active contributor badge for open source projects.",
    verifyUrl: "https://github.com/hitesh-kumar123",
  },
];

/* 2 cols × 3 rows per page → page 1: [0,1,2,3], page 2: [4,5]
   but we want 3+3 split so chunk by 4? No — 2 cols means 3 rows = 6 per page.
   All 6 fit on page 1 if we do 3+3. User said 2 columns 3+3 split = page1: certs 0-2 left col + 0-2 right, 
   actually: 2 columns means each page shows 4 cards (2×2) or all 6 (2×3).
   User said "3+3 split" = page1: 3 certs, page2: 3 certs, 2 columns each. */
const PAGES: (typeof certificates)[] = [
  certificates.slice(0, 3),
  certificates.slice(3, 6),
];

/* ── Single flip card ── */
const CertCard = ({ cert }: { cert: (typeof certificates)[0] }) => {
  const style = ISSUER_STYLES[cert.issuer] ?? ISSUER_STYLES["GitHub"];

  return (
    <div
      className="w-full"
      style={{ perspective: "1000px" }}
      role="group"
      aria-label={cert.title}
    >
      <div
        className="relative"
        style={{
          height: "320px",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "rotateX(180deg)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "rotateX(0deg)";
        }}
      >
        {/* FRONT — certificate image */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-white/8 bg-[#07070b]"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
              hover to view details
            </p>
          </div>
        </div>

        {/* BACK — details */}
        <div
          className="absolute inset-0 rounded-2xl border border-white/8 bg-[#07070b] p-6 flex flex-col justify-between"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
          }}
        >
          {/* Top: issuer badge + date */}
          <div className="flex items-center justify-between mb-4">
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-lg border text-[10px] font-mono font-bold uppercase tracking-wider ${style.badge} ${style.text}`}
            >
              {cert.issuer}
            </span>
            <span className="text-[10px] font-mono text-white/30 border border-white/8 px-2 py-1 rounded-lg">
              {cert.date}
            </span>
          </div>

          {/* Title */}
          <div className="flex-1">
            <h3 className="text-base font-bold text-white leading-snug mb-3">
              {cert.title}
            </h3>
            <p className="text-[13px] text-white/45 leading-relaxed">
              {cert.description}
            </p>
          </div>

          {/* View certificate link */}
          <div className="pt-4 border-t border-white/5">
            <a
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-[12px] font-medium hover:bg-white/90 transition-colors duration-200"
            >
              <ExternalLink size={12} />
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Certificates section ── */
const Certificates = () => {
  const [page, setPage] = useState(0);
  const total = PAGES.length;

  const goTo = (next: number) => setPage(next);

  return (
    <section
      id="certificates"
      className="section-padding relative overflow-hidden"
      aria-labelledby="cert-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <span className="section-tag">
              <Award size={12} />
              Certifications
            </span>
          </div>
          <h2 id="cert-heading" className="section-title">
            Proof of <span className="text-blue-400">Learning</span>
          </h2>
          <p className="text-[15px] text-white/45 max-w-md mx-auto mt-4 leading-relaxed">
            Continuous education — validating technical capability across platforms.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        >
          {PAGES[page].map((cert) => (
            <CertCard key={cert.title} cert={cert} />
          ))}
        </motion.div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
            aria-label="Previous page"
            className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex items-center gap-2">
            {PAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Page ${i + 1}`}
                className={`rounded-full transition-all duration-200 ${i === page
                  ? "w-5 h-1.5 bg-white"
                  : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(page + 1)}
            disabled={page === total - 1}
            aria-label="Next page"
            className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <p className="text-center text-[11px] font-mono text-white/20 mt-4">
          {page + 1} / {total}
        </p>

      </div>
    </section>
  );
};

export default Certificates;