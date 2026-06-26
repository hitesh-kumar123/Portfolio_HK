import { ExternalLink, Github, Star, Layers } from "lucide-react";
import { motion } from "framer-motion";
import weatherImage from "@/assets/Weather.png";
import simonGameImage from "@/assets/Simon_Game.png";
import spotifyCloneImage from "@/assets/Spotify_Clone.png";
import smartRentImage from "@/assets/smartRent.png";
import SayloImage from "@/assets/Saylo.png";

const projects = [
  {
    title: "Smart Rent System",
    description:
      "A full-stack Smart Rent System for property listings, bookings, and rental management with React, Node.js, and MongoDB.",
    image: smartRentImage,
    tags: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
    githubUrl: "https://github.com/hitesh-kumar123/Smart-Rent",
    liveUrl: "https://smartrentsystem.netlify.app/",
    featured: true,
    status: "Live",
  },
  {
    title: "Saylo — AI Interview Coach",
    description:
      "AI-powered interview coach and career prep companion. Practice face-to-face mock interviews, get tailored questions from your resume, and receive instant actionable feedback.",
    image: SayloImage,
    tags: ["React", "AI", "HTML", "CSS"],
    githubUrl: "https://github.com/hitesh-kumar123/saylo",
    liveUrl: "https://saylo-ten.vercel.app/",
    featured: true,
    status: "Live",
  },
  {
    title: "Weather Application",
    description:
      "React-based weather app fetching real-time data from a weather API with beautiful UI and responsive design.",
    image: weatherImage,
    tags: ["React", "CSS", "API", "JavaScript"],
    githubUrl: "https://github.com/hitesh-kumar123/Weather_react_app.git",
    liveUrl: "https://raincheckr.netlify.app/",
    featured: false,
    status: "Live",
  },
  {
    title: "Simon Game",
    description:
      "Classic color memory game with vanilla JavaScript featuring sound effects and progressive difficulty levels.",
    image: simonGameImage,
    tags: ["HTML", "CSS", "JavaScript", "DOM"],
    githubUrl: "https://github.com/hitesh-kumar123/Simon_Game.git",
    liveUrl: "https://simon-by-hitesh.netlify.app/",
    featured: false,
    status: "Live",
  },
  {
    title: "Spotify Clone",
    description:
      "Front-end clone of Spotify with responsive UI, showcasing modern CSS techniques and user interface design.",
    image: spotifyCloneImage,
    tags: ["HTML", "CSS", "Responsive Design"],
    githubUrl: "https://github.com/hitesh-kumar123/Spotify_clone.git",
    liveUrl: "https://spotify-player-hitesh.netlify.app/",
    featured: false,
    status: "Live",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
              <Layers size={12} />
              Featured Projects
            </span>
          </div>
          <h2 className="section-title">
            Things I've <span className="text-gradient">Built</span>
          </h2>
          <p className="text-base text-white/70 max-w-xl mx-auto mt-4 leading-normal">
            Real-world projects shipped with clean code, solid architectures, and 
            high-end user interfaces.
          </p>
        </motion.div>

        {/* Featured Projects Grid (Top 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#07070b] rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl"
              >
                {/* Badges */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-[#CCFF00] text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                  <Star size={11} fill="currentColor" />
                  Featured
                </div>

                <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-[#00FFCC]/90 text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                  Live
                </div>

                {/* Grayscale to Color Image */}
                <div className="project-img-container h-56">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img-filter w-full h-full object-cover"
                  />
                  
                  {/* Floating Action Links on Hover */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-background/90 border border-white/5 rounded-full text-xs font-bold uppercase tracking-wider text-foreground hover:text-primary hover:scale-105 transition-all duration-300"
                    >
                      <Github size={14} /> Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary border border-primary text-black rounded-full text-xs font-bold uppercase tracking-wider hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/50 mb-5 leading-normal min-h-[40px]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-[10px] font-bold font-mono uppercase rounded-full bg-white/5 text-white/70 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Projects Grid (3-columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#07070b] rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-xl"
              >
                {/* Live Badge */}
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1 bg-[#00FFCC]/90 text-black text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  <span className="w-1 h-1 rounded-full bg-black animate-pulse" />
                  Live
                </div>

                {/* Grayscale to Color Image */}
                <div className="project-img-container h-44">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img-filter w-full h-full object-cover"
                  />
                  
                  {/* Floating Action Links on Hover */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-background/90 border border-white/5 rounded-full text-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                      aria-label="View Source Code"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-primary rounded-full text-black hover:scale-110 transition-all duration-300"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-base font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/50 mb-4 leading-normal min-h-[36px]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 text-[9px] font-bold font-mono uppercase rounded bg-white/5 text-white/50 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-base text-white/70 mb-5">Explore more of my source code directories on GitHub.</p>
          <a
            href="https://github.com/hitesh-kumar123"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <Github size={16} />
            <span>Check Github Logs</span>
            <span className="text-white/70">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;