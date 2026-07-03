import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Layers } from "lucide-react";
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
    tags: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/hitesh-kumar123/Smart-Rent",
    liveUrl: "https://smartrentsystem.netlify.app/",
  },
  {
    title: "Saylo — AI Interview Coach",
    description:
      "AI-powered interview coach. Practice mock interviews, get tailored questions from your resume, and receive instant feedback.",
    image: SayloImage,
    tags: ["React", "AI", "HTML", "CSS"],
    githubUrl: "https://github.com/hitesh-kumar123/saylo",
    liveUrl: "https://saylo-ten.vercel.app/",
  },
  {
    title: "Weather Application",
    description:
      "React-based weather app fetching real-time data from a weather API with clean UI and responsive design.",
    image: weatherImage,
    tags: ["React", "CSS", "API", "JavaScript"],
    githubUrl: "https://github.com/hitesh-kumar123/Weather_react_app.git",
    liveUrl: "https://raincheckr.netlify.app/",
  },
  {
    title: "Simon Game",
    description:
      "Classic color memory game with vanilla JavaScript featuring sound effects and progressive difficulty levels.",
    image: simonGameImage,
    tags: ["HTML", "CSS", "JavaScript", "DOM"],
    githubUrl: "https://github.com/hitesh-kumar123/Simon_Game.git",
    liveUrl: "https://simon-by-hitesh.netlify.app/",
  },
  {
    title: "Spotify Clone",
    description:
      "Front-end clone of Spotify with responsive UI, showcasing modern CSS techniques and interface design.",
    image: spotifyCloneImage,
    tags: ["HTML", "CSS", "Responsive Design"],
    githubUrl: "https://github.com/hitesh-kumar123/Spotify_clone.git",
    liveUrl: "https://spotify-player-hitesh.netlify.app/",
  },
];

/* pair projects into pages: [0,1], [2,3], [4] */
const PAGES: (typeof projects)[] = [];
for (let i = 0; i < projects.length; i += 2) {
  PAGES.push(projects.slice(i, i + 2));
}

/* ── Single flip card ── */
const FlipCard = ({
  project,
  trigger,
}: {
  project: (typeof projects)[0];
  trigger: boolean;
}) => {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  /* flip when scroll brings card into view AND trigger is active */
  useEffect(() => {
    if (!trigger) { setFlipped(false); return; }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setFlipped(true); },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [trigger]);

  /* reset flip when page changes */
  useEffect(() => { setFlipped(false); }, [trigger]);

  return (
    <div
      ref={ref}
      className="w-full cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped((f) => !f)}
      role="button"
      aria-label={`${project.title} — click to ${flipped ? "see image" : "see details"}`}
    >
      <div
        style={{
          transition: "transform 0.65s cubic-bezier(0.22,1,0.36,1)",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateX(180deg)" : "rotateX(0deg)",
          position: "relative",
          height: "340px",
        }}
      >
        {/* FRONT — image */}
        <div
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          className="absolute inset-0 rounded-2xl overflow-hidden border border-white/8 bg-[#07070b]"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
              scroll or click to reveal
            </p>
          </div>
        </div>

        {/* BACK — details */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
          }}
          className="absolute inset-0 rounded-2xl border border-white/8 bg-[#07070b] p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-lg font-bold text-white mb-3 leading-tight">
              {project.title}
            </h3>
            <p className="text-[13px] text-white/50 leading-relaxed mb-5">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-[10px] font-mono rounded bg-white/5 border border-white/8 text-white/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/25 text-[12px] font-medium transition-all duration-200"
            >
              <Github size={13} />
              Code
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-[12px] font-medium hover:bg-white/90 transition-colors duration-200"
            >
              <ExternalLink size={13} />
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Projects section ── */
const Projects = () => {
  const [page, setPage] = useState(0);
  const [trigger, setTrigger] = useState(true);
  const total = PAGES.length;

  const goTo = (next: number) => {
    setTrigger(false);
    setTimeout(() => {
      setPage(next);
      setTrigger(true);
    }, 80);
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
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
              <Layers size={12} />
              Projects
            </span>
          </div>
          <h2 className="section-title">
            Things I've <span className="text-blue-400">Built</span>
          </h2>
          <p className="text-[15px] text-white/45 max-w-md mx-auto mt-4 leading-relaxed">
            Real-world projects shipped with clean code and high-end interfaces.
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
          {PAGES[page].map((project) => (
            <FlipCard key={project.title} project={project} trigger={trigger} />
          ))}

          {/* last page odd card — centered */}
          {PAGES[page].length === 1 && (
            <div className="hidden md:block" aria-hidden="true" />
          )}
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

          {/* dots */}
          <div className="flex items-center gap-2">
            {PAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to page ${i + 1}`}
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

        {/* Page counter */}
        <p className="text-center text-[11px] font-mono text-white/20 mt-4">
          {page + 1} / {total}
        </p>

        {/* GitHub CTA */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/hitesh-kumar123"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <Github size={14} />
            View all on GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;