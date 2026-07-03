import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal, ArrowDown, MapPin } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "@/assets/Hitesh_Kumar.jpg";

const CODE_LINES: { code: string; color: string }[] = [
  { code: `const developer = {`, color: "text-blue-400" },
  { code: `  name: "Hitesh Kumar",`, color: "text-white" },
  { code: `  stack: ["MERN", "TypeScript"],`, color: "text-indigo-400" },
  { code: `  availability: "OPEN_TO_WORK",`, color: "text-green-400" },
  { code: `  passion: "Ship high-value UI",`, color: "text-white" },
  { code: `};`, color: "text-blue-400" },
  { code: ``, color: "" },
  { code: `developer.init(); // compiled`, color: "text-white/30" },
];

const SOCIAL_LINKS = [
  { icon: <Github className="w-4 h-4" />, href: "https://github.com/hitesh-kumar123", label: "GitHub" },
  { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/hitesh-kumar-hk/", label: "LinkedIn" },
  { icon: <Mail className="w-4 h-4" />, href: "mailto:hiteshdevkumar2003@gmail.com", label: "Email" },
];

const TYPEWRITER_WORDS = [
  "people love using",
  "with the MERN stack",
  "that scale beautifully",
  "with clean UI architecture",
];

const STACK_BADGES = ["React", "Node.js", "TypeScript", "MongoDB", "Express", "Tailwind"];

const CodeBlock = () => {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= CODE_LINES.length) return;
    const t = setTimeout(() => setVisible((n) => n + 1), 190);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="w-full h-full font-mono text-[12px] leading-[1.7] flex flex-col rounded-xl overflow-hidden border border-white/8 bg-black/30">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-black/40 flex-shrink-0">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <span className="text-[10px] text-white/25 tracking-wider flex items-center gap-1.5">
          <Terminal size={9} aria-hidden="true" />
          system.ts
        </span>
      </div>
      <div className="flex-1 p-4 flex flex-col justify-center gap-[1px]">
        {CODE_LINES.slice(0, visible).map((line, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-white/10 w-3 text-right text-[9px] select-none flex-shrink-0">
              {i + 1}
            </span>
            <span className={line.color || "text-white/50"}>{line.code}</span>
          </div>
        ))}
        {visible < CODE_LINES.length && (
          <div className="flex items-center gap-3" aria-hidden="true">
            <span className="text-white/10 w-3 text-right text-[9px] select-none flex-shrink-0">
              {visible + 1}
            </span>
            <span className="inline-block w-[5px] h-[14px] rounded-sm bg-blue-400/80 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
};

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-24 pb-12"
      aria-label="Hero introduction"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.08]"
          style={{ background: "hsl(217 91% 60%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Status */}
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/5 text-white/50 border border-white/8">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" aria-hidden="true" />
                Full stack engineer · Open to work
              </span>
            </div>

            {/* Heading */}
            <div>
              <p className="text-white/35 text-xl font-medium tracking-tight mb-1">
                Hi, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-[-0.04em] text-white leading-[1.05]">
                Hitesh Kumar
              </h1>
            </div>

            {/* Typewriter */}
            <p className="text-base text-white/50 font-medium">
              I build things{" "}
              <span className="text-white font-semibold">
                <Typewriter
                  words={TYPEWRITER_WORDS}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1600}
                />
              </span>
            </p>

            {/* Description */}
            <p className="text-[15px] text-white/55 leading-relaxed max-w-md">
              Crafting clean, responsive, and performant web applications. Focused on
              user psychology, high-end aesthetics, and clean codebase architecture.
            </p>

            {/* Stack badges */}
            <div className="flex flex-wrap gap-2">
              {STACK_BADGES.map((b) => (
                <span
                  key={b}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/4 border border-white/8 text-white/40 cursor-default"
                >
                  {b}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={() => scrollTo("contact")}
                className="px-6 py-2.5 rounded-lg bg-white text-black text-[13px] font-semibold hover:bg-white/90 transition-colors duration-200"
                aria-label="Hire Hitesh"
              >
                Hire me
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="px-6 py-2.5 rounded-lg border border-white/15 text-white/70 text-[13px] font-semibold hover:border-white/30 hover:text-white transition-all duration-200"
              >
                View projects
              </button>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={l.label}
                  className="w-9 h-9 rounded-xl border border-white/8 bg-white/3 hover:bg-white/8 text-white/40 hover:text-white transition-all duration-200 flex items-center justify-center"
                >
                  {l.icon}
                </a>
              ))}
              <span className="ml-2 text-[11px] text-white/20 font-mono">
                <MapPin size={10} className="inline mr-1 text-white/15" aria-hidden="true" />
                Surat, India
              </span>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6"
          >
            {/* Photo */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full p-[2px]"
                style={{ background: "linear-gradient(135deg, #10b981, #6366f1, #3b82f6)" }}
                aria-hidden="true"
              >
                <div className="w-full h-full rounded-full bg-black" />
              </div>
              <div className="absolute inset-[3px] rounded-full overflow-hidden">
                <img
                  src={profileImage}
                  alt="Hitesh Kumar, Full Stack Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Code block */}
            <div className="w-full max-w-sm min-h-[200px]">
              <CodeBlock />
            </div>
          </motion.div>

        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => scrollTo("about")}
            aria-label="Scroll down to about section"
            className="flex flex-col items-center gap-2 text-white/20 hover:text-white/50 transition-colors duration-300 group"
          >
            <span className="text-[9px] font-mono tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4" aria-hidden="true" />
            </motion.div>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;