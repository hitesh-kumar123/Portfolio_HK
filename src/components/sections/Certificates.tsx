import { motion } from "framer-motion";
import fullStackCert from "@/assets/Certificates/Full Stack Development.png";
import gssocCert from "@/assets/Certificates/GSSOC.jpg";
import hack2skillCert from "@/assets/Certificates/Hack2skill-Certificate.png";
import azureCert from "@/assets/Certificates/Microsoft Azure.pdf.png";
import postmanCert from "@/assets/Certificates/Postman - Postman API Fundamentals Student Expert - 2025-09-27 (1).png";
import contributorBadge from "@/assets/Certificates/Contributor's badge.jpg";

const Certificates = () => {
  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "2023",
      image: fullStackCert,
      description: "Comprehensive bootcamp covering MERN stack development.",
    },
    {
      title: "GSSOC Contributor",
      issuer: "GirlScript Summer of Code",
      date: "2023",
      image: gssocCert,
      description: "Open source contribution program participation.",
    },
    {
      title: "Hack2Skill Certification",
      issuer: "Hack2Skill",
      date: "2022",
      image: hack2skillCert,
      description: "Recognition for participation in hackathons and coding events.",
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2022",
      image: azureCert,
      description: "Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
    },
    {
      title: "Postman API Fundamentals",
      issuer: "Postman",
      date: "2025",
      image: postmanCert,
      description: "Expertise in API development, testing, and documentation using Postman.",
    },
    {
      title: "Open Source Contributor",
      issuer: "GitHub",
      date: "2021",
      image: contributorBadge,
      description: "Active contributor badge for open source projects.",
    },
  ];

  return (
    <section id="certificates" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Certifications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Continuous learning is key to my growth. Here are some of the certifications
            I've earned to validate my skills and knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <a 
                href={cert.image} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative h-56 overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <span className="px-4 py-2 bg-background/90 backdrop-blur rounded-full text-sm font-medium text-primary shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    View Certificate
                  </span>
                </div>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </a>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-1">
                    {cert.title}
                  </h3>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground whitespace-nowrap ml-2">
                    {cert.date}
                  </span>
                </div>
                <p className="text-sm text-primary font-medium mb-2">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
