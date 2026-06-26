import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink, Award } from "lucide-react";
import fullStackCert from "@/assets/Certificates/Full Stack Development.png";
import gssocCert from "@/assets/Certificates/GSSOC.jpg";
import hack2skillCert from "@/assets/Certificates/Hack2skill-Certificate.png";
import azureCert from "@/assets/Certificates/Microsoft Azure.pdf.png";
import postmanCert from "@/assets/Certificates/Postman - Postman API Fundamentals Student Expert - 2025-09-27 (1).png";
import contributorBadge from "@/assets/Certificates/Contributor's badge.jpg";

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2023",
    image: fullStackCert,
    description: "Comprehensive bootcamp covering MERN stack development.",
    issuerColor: "text-[#CCFF00]",
  },
  {
    title: "GSSOC Contributor",
    issuer: "GirlScript Summer of Code",
    date: "2023",
    image: gssocCert,
    description: "Open source contribution program — top contributor.",
    issuerColor: "text-[#00FFCC]",
  },
  {
    title: "Hack2Skill Certification",
    issuer: "Hack2Skill",
    date: "2022",
    image: hack2skillCert,
    description: "Recognition for participation in hackathons and coding events.",
    issuerColor: "text-[#CCFF00]",
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2022",
    image: azureCert,
    description: "Cloud services fundamentals with Microsoft Azure.",
    issuerColor: "text-[#00FFCC]",
  },
  {
    title: "Postman API Fundamentals",
    issuer: "Postman",
    date: "2025",
    image: postmanCert,
    description: "Expert-level API development, testing and documentation.",
    issuerColor: "text-[#CCFF00]",
  },
  {
    title: "Open Source Contributor",
    issuer: "GitHub",
    date: "2021",
    image: contributorBadge,
    description: "Active contributor badge for open source projects.",
    issuerColor: "text-[#00FFCC]",
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="section-padding relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Title ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-4">
            <span className="section-tag">
              <Award size={12} />
              Certifications
            </span>
          </div>
          <h2 className="section-title">
            Proof of <span className="text-gradient">Learning</span>
          </h2>
          <p className="text-base text-white/70 max-w-xl mx-auto mt-4 leading-normal">
            Continuous engineering education. Validating technical capability and system knowledge.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-[#07070b] rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Grayscale to color certificate image */}
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[4/3] w-full overflow-hidden bg-black/50"
              >
                {/* Hover overlay link */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <span className="flex items-center gap-2 px-4 py-2 bg-background/90 border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ExternalLink size={12} />
                    Verify Log
                  </span>
                </div>
                
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="project-img-filter w-full h-full object-cover"
                />
              </a>

              {/* Card content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-bold group-hover:text-primary transition-colors leading-tight flex-1 mr-2">
                    {cert.title}
                  </h3>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white/55 whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>

                {/* Verified issuer */}
                <div className="flex items-center gap-1.5 mb-3">
                  <BadgeCheck size={14} className={`${cert.issuerColor} flex-shrink-0`} />
                  <p className={`text-xs font-bold font-mono uppercase tracking-wider ${cert.issuerColor}`}>
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-sm text-white/50 leading-normal line-clamp-2 min-h-[32px]">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statistics panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 max-w-2xl mx-auto p-6 rounded-3xl border border-white/5 bg-white/2 flex flex-wrap justify-around gap-6 text-center"
        >
          {[
            { value: "6+", label: "Total Certificates" },
            { value: "3+", label: "Education Platforms" },
            { value: "2021–2025", label: "Learning Span" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-2xl font-black text-gradient leading-none mb-1 font-mono">{stat.value}</p>
              <p className="text-[10px] text-white/50 font-mono uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Certificates;