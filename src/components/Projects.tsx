import { ExternalLink, Github } from "lucide-react";
import weatherImage from "../assets/Weather.png";
import simonGameImage from "../assets/Simon_Game.png";
import Spotify_Clone from "../assets/Spotify_Clone.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Weather Application",
      description:
        "A React-based weather app fetching real-time data from a weather API with beautiful UI and responsive design.",
      image: weatherImage,
      technologies: ["React", "CSS", "API", "JavaScript"],
      githubUrl: "https://github.com/hitesh-kumar123/Weather_react_app.git",
      liveUrl: "https://raincheckr.netlify.app/",
      featured: true,
    },
    {
      id: 2,
      title: "Simon Game",
      description:
        "A classic color memory game built with vanilla JavaScript featuring sound effects and progressive difficulty levels.",
      image: simonGameImage,
      technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
      githubUrl: "https://github.com/hitesh-kumar123/Simon_Game.git",
      liveUrl: "https://simon-by-hitesh.netlify.app/",
      featured: true,
    },
    {
      id: 3,
      title: "Spotify Clone",
      description:
        "A front-end clone of Spotify with responsive UI, showcasing modern CSS techniques and user interface design.",
      image: Spotify_Clone, // No image provided for this project
      technologies: ["HTML", "CSS", "Responsive Design"],
      githubUrl: "https://github.com/hitesh-kumar123/Spotify_clone.git",
      liveUrl: "https://spotify-player-hitesh.netlify.app/",
      featured: true,
    },
  ];

  return (
    <section
      id="projects"
      className="section-padding bg-gradient-to-b from-secondary/30 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 fade-in-up animate">
          <h2 className="section-title">My Projects</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            A showcase of my technical skills and creative problem-solving
            through real-world applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card fade-in-up animate ${
                project.featured ? "lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-40 sm:h-48 bg-secondary/50 flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    <div className="text-center">
                      <Github className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 opacity-50" />
                      <span className="text-xs sm:text-sm">Code Available</span>
                    </div>
                  </div>
                )}

                {/* Overlay with links */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 sm:gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 bg-white rounded-full text-primary hover:bg-gray-100 transition-colors duration-300"
                    title="View on GitHub"
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-3 bg-white rounded-full text-primary hover:bg-gray-100 transition-colors duration-300"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-primary text-xs sm:text-sm py-2 px-3 sm:px-4 flex items-center gap-1.5 sm:gap-2 justify-center"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-success text-xs sm:text-sm py-2 px-3 sm:px-4 flex items-center gap-1.5 sm:gap-2 justify-center"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 fade-in-up animate">
          <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
            Want to see more of my work or collaborate on a project?
          </p>
          <a
            href="https://github.com/hitesh-kumar123"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-primary inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
