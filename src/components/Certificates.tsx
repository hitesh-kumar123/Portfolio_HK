import { Award, ExternalLink } from "lucide-react";
import gssocCert from "../assets/Certificates/GSSOC.jpg";
import hack2skillCert from "../assets/Certificates/Hack2skill-Certificate.png";
import postmanCert from "../assets/Certificates/Postman - Postman API Fundamentals Student Expert - 2025-09-27 (1).png";
import azureCert from "../assets/Certificates/Microsoft Azure.pdf.png";
import fullStackCert from "../assets/Certificates/Full Stack Development.png";
import contributorBadge from "../assets/Certificates/Contributor's badge.jpg";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "GSSOC Contributor",
      description: "GirlScript Summer of Code Contributor Certificate",
      image: gssocCert,
      issuer: "GirlScript Foundation",
      date: "2025",
    },
    {
      id: 2,
      title: "Hack2Skill",
      description: "Hackathon Participation Certificate",
      image: hack2skillCert,
      issuer: "Hack2Skill",
      date: "2025",
    },
    {
      id: 3,
      title: "Postman API Expert",
      description: "Postman API Fundamentals Student Expert",
      image: postmanCert,
      issuer: "Postman",
      date: "2025",
    },
    {
      id: 4,
      title: "Microsoft Azure",
      description: "Microsoft Azure Fundamentals",
      image: azureCert,
      issuer: "Microsoft",
      date: "2025",
    },
    {
      id: 5,
      title: "Full Stack Development",
      description: "Full Stack Web Development Course",
      image: fullStackCert,
      issuer: "Udemy",
      date: "2024",
    },
    {
      id: 6,
      title: "Contributor Badge",
      description: "Open Source Contributor Badge",
      image: contributorBadge,
      issuer: "Open Source",
      date: "2025",
    },
  ];

  return (
    <section
      id="certificates"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 fade-in-up animate">
          <h2 className="section-title text-reveal">
            <span className="stagger-1">C</span>
            <span className="stagger-2">e</span>
            <span className="stagger-3">r</span>
            <span className="stagger-4">t</span>
            <span className="stagger-5">i</span>
            <span className="stagger-1">f</span>
            <span className="stagger-2">i</span>
            <span className="stagger-3">c</span>
            <span className="stagger-4">a</span>
            <span className="stagger-5">t</span>
            <span className="stagger-1">e</span>
            <span className="stagger-2">s</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 slide-up animate stagger-1">
            Recognitions and certifications earned throughout my journey
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((cert, index) => (
            <a
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.id}
              className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50 block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden bg-secondary/20 relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Award className="w-12 h-12 text-white mb-2 mx-auto" />
                    <span className="text-white font-medium text-sm px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">
                      View Certificate
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {cert.date}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {cert.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-medium text-primary">
                  <Award className="w-3 h-3" />
                  {cert.issuer}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
