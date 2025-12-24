import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import weatherImage from "@/assets/Weather.png";
import simonGameImage from "@/assets/Simon_Game.png";
import spotifyCloneImage from "@/assets/Spotify_Clone.png";
import smartRentImage from "@/assets/smartRent.png";
import SayloImage from "@/assets/Saylo.png";

const Projects = () => {
  const projects = [
     {
      title: "Smart Rent System",
      description:
        "A full-stack Smart Rent System for property listings, bookings, and rental management with React, Node.js, and MongoDB.",
      image: smartRentImage,
      tags: ["HTML", "CSS", "Responsive Design", "JavaScript", "React", "Node.js", "MongoDB" , "Express" ,"RESTful APIs"],
      githubUrl: "https://github.com/hitesh-kumar123/Smart-Rent",
      liveUrl: "https://smartrentsystem.netlify.app/",
    },

    {
      title: "Saylo",
      description:
        "SAYLO is your AI-powered interview coach and career prep companion. Practice realistic, face-to-face mock interviews, get tailored questions from your resume, and receive instant, actionable feedback on content, delivery, and confidence. Upload your resume for targeted drills, track your progress with performance metrics, and review your interview.",
      image: SayloImage,
      tags: ["HTML", "CSS", "Responsive Design"],
      githubUrl: "https://github.com/hitesh-kumar123/saylo",
      liveUrl: "https://saylo-ten.vercel.app/",
    },
    {
      title: "Weather Application",
      description:
        "A React-based weather app fetching real-time data from a weather API with beautiful UI and responsive design.",
      image: weatherImage,
      tags: ["React", "CSS", "API", "JavaScript"],
      githubUrl: "https://github.com/hitesh-kumar123/Weather_react_app.git",
      liveUrl: "https://raincheckr.netlify.app/",
    },
    {
      title: "Simon Game",
      description:
        "A classic color memory game built with vanilla JavaScript featuring sound effects and progressive difficulty levels.",
      image: simonGameImage,
      tags: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
      githubUrl: "https://github.com/hitesh-kumar123/Simon_Game.git",
      liveUrl: "https://simon-by-hitesh.netlify.app/",
    },
    {
      title: "Spotify Clone",
      description:
        "A front-end clone of Spotify with responsive UI, showcasing modern CSS techniques and user interface design.",
      image: spotifyCloneImage,
      tags: ["HTML", "CSS", "Responsive Design"],
      githubUrl: "https://github.com/hitesh-kumar123/Spotify_clone.git",
      liveUrl: "https://spotify-player-hitesh.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Here are some of my recent works that showcase my skills and passion
            for building impactful web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-background/90 backdrop-blur-sm rounded-full text-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                    aria-label="View Source Code"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-background/90 backdrop-blur-sm rounded-full text-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                    aria-label="View Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
