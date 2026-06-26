import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal, ArrowDown, MapPin, Zap, Coffee, Star } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "@/assets/Hitesh_Kumar.jpg";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const CODE_LINES: { code: string; color: string }[] = [
  { code: `const developer = {`, color: "text-blue-400" },
  { code: `  name: "Hitesh Kumar",`, color: "text-white" },
  { code: `  stack: ["MERN", "TypeScript"],`, color: "text-indigo-400" },
  { code: `  availability: "OPEN_TO_WORK",`, color: "text-green-400" },
  { code: `  passion: "Ship high-value UI",`, color: "text-white" },
  { code: `};`, color: "text-blue-400" },
  { code: ``, color: "" },
  { code: `developer.init(); // ✅ compiled`, color: "text-white/30" },
];

const SOCIAL_LINKS = [
  { icon: <Github className="w-4 h-4" />, href: "https://github.com/hitesh-kumar123", label: "GitHub" },
  { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/hitesh-kumar-hk/", label: "LinkedIn" },
  { icon: <Mail className="w-4 h-4" />, href: "mailto:hiteshdevkumar2003@gmail.com", label: "Email" },
];

const TYPEWRITER_WORDS = [
  "people love using ❤️",
  "with the MERN stack 🛠️",
  "that scale beautifully ⚡",
  "with clean UI architecture 💡",
];

const METRICS = [
  { val: "20+", label: "Projects" },
  { val: "1+", label: "Yrs exp" },
  { val: "5+", label: "Certs" },
  { val: "3871", label: "LeetCode" },
];

const STACK_BADGES = ["React", "Node.js", "TypeScript", "MongoDB", "Express", "Tailwind"];

const CORNER_POS = [
  "top-2 left-2 border-t-2 border-l-2",
  "top-2 right-2 border-t-2 border-r-2",
  "bottom-2 left-2 border-b-2 border-l-2",
  "bottom-2 right-2 border-b-2 border-r-2",
];

/* ─────────────────────────────────────────────
   ANIMATED CODE BLOCK
───────────────────────────────────────────── */
const CodeBlock = () => {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= CODE_LINES.length) return;
    const t = setTimeout(() => setVisible(n => n + 1), 190);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="w-full h-full font-mono text-[12px] leading-[1.7] flex flex-col">
      {/* Chrome bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-black/50 flex-shrink-0">
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
      {/* Lines */}
      <div className="flex-1 p-4 bg-black/20 flex flex-col justify-center gap-[1px]">
        {CODE_LINES.slice(0, visible).map((line, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-white/10 w-3 text-right text-[9px] select-none flex-shrink-0">{i + 1}</span>
            <span className={line.color || "text-white/50"}>{line.code}</span>
          </div>
        ))}
        {visible < CODE_LINES.length && (
          <div className="flex items-center gap-3" aria-hidden="true">
            <span className="text-white/10 w-3 text-right text-[9px] select-none flex-shrink-0">{visible + 1}</span>
            <span className="inline-block w-[5px] h-[14px] rounded-sm bg-blue-400/80 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-24 pb-12 dot-matrix"
      aria-label="Hero introduction"
    >
      {/* ── Ambient glows ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.12]"
          style={{ background: "hsl(217 91% 60%)" }} />
        <div className="absolute bottom-[5%] left-[-8%] w-[400px] h-[400px] rounded-full blur-[130px] opacity-[0.08]"
          style={{ background: "hsl(239 84% 67%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* ════════════════════════════════════
            BENTO GRID — 12 col
        ════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 auto-rows-auto gap-4">

          {/* ── TILE A: Main intro — 8 cols, 2 rows ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 lg:row-span-2 premium-card p-8 md:p-10 flex flex-col justify-between min-h-[420px]"
          >
            {/* Top content */}
            <div>
              {/* Status eyebrow */}
              <div className="flex items-center gap-3 mb-7">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/5 text-white/50 border border-white/8">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                  Full stack engineer • Open to work
                </span>
              </div>

              {/* Heading */}
              <h1 className="mb-5 leading-[1.05]">
                <span className="block text-white/40 text-2xl sm:text-3xl font-semibold tracking-tight mb-1">
                  Hi, I'm
                </span>
                <span className="block text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.04em] text-white">
                  Hitesh Kumar
                </span>
              </h1>

              {/* Typewriter */}
              <p className="text-lg text-white/50 font-medium mb-5">
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
              <p className="text-[15px] text-white/45 leading-relaxed max-w-lg mb-7">
                Crafting clean, responsive, and performant web applications. Focused on user
                psychology, high-end aesthetics, and clean codebase architecture.
              </p>

              {/* Stack badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {STACK_BADGES.map(b => (
                  <span key={b}
                    className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-white/4 border border-white/8 text-white/40 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-200 cursor-default">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom: CTAs + socials */}
            <div className="border-t border-white/5 pt-6 flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                {/* Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => scrollTo("contact")}
                    className="btn-primary flex items-center gap-2 py-2.5 px-6 text-[13px] font-semibold"
                    aria-label="Hire Hitesh"
                  >
                    <Zap size={14} aria-hidden="true" />
                    Hire me
                  </button>
                  <button
                    onClick={() => scrollTo("projects")}
                    className="btn-ghost flex items-center gap-2 py-2.5 px-6 text-[13px] font-semibold"
                  >
                    Projects
                  </button>
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-2">
                  {SOCIAL_LINKS.map(l => (
                    <a key={l.label} href={l.href}
                      target="_blank" rel="noopener noreferrer"
                      aria-label={l.label}
                      className="w-9 h-9 rounded-xl border border-white/8 bg-white/3 hover:bg-white/8 text-white/40 hover:text-white transition-all duration-200 flex items-center justify-center">
                      {l.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Metrics inline */}
              <ul className="flex flex-wrap gap-x-6 gap-y-1 list-none" aria-label="Quick stats">
                {METRICS.map((m, i) => (
                  <li key={m.label} className="flex items-center gap-2 text-[11px] font-mono text-white/25">
                    {i > 0 && <span className="w-1 h-1 rounded-full bg-white/15" aria-hidden="true" />}
                    <span className="text-white/60 font-bold">{m.val}</span>
                    <span className="uppercase tracking-wider">{m.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ── TILE B: Profile photo — 4 cols, 1 row ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 premium-card p-5 flex flex-col group overflow-hidden min-h-[200px] lg:min-h-0"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between text-[9px] font-mono text-white/20 mb-3 tracking-widest uppercase flex-shrink-0"
              aria-hidden="true">
              <span>[ PROFILE_SYS ]</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                Active
              </span>
            </div>

            {/* Photo */}
            <div className="relative flex-1 rounded-xl overflow-hidden border border-white/5 bg-black/40 min-h-[180px]">
              <img
                src={profileImage}
                alt="Hitesh Kumar, Full Stack Engineer"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              {/* Corner brackets */}
              {CORNER_POS.map((cls, i) => (
                <div key={i}
                  className={`absolute w-3 h-3 border-blue-500/40 ${cls}`}
                  aria-hidden="true" />
              ))}
              {/* Scan line overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" aria-hidden="true" />
            </div>

            {/* Location */}
            <div className="flex items-center justify-center gap-1.5 mt-3 flex-shrink-0">
              <MapPin size={10} className="text-white/20" aria-hidden="true" />
              <span className="font-mono text-[9px] text-white/25 tracking-widest uppercase">Surat, India</span>
            </div>
          </motion.div>

          {/* ── TILE C: Code terminal — 2 cols ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 premium-card overflow-hidden flex flex-col min-h-[200px] lg:min-h-0"
            aria-label="Code snippet"
          >
            <CodeBlock />
          </motion.div>

          {/* ── TILE D: Status / vibe card — 2 cols ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 premium-card p-5 flex flex-col justify-between overflow-hidden min-h-[160px]"
          >
            <div>
              <div className="text-[9px] font-mono text-white/20 tracking-widest uppercase mb-3">Status</div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" aria-hidden="true" />
                <span className="text-[11px] font-semibold text-white/70">Available now</span>
              </div>
              <p className="text-[11px] text-white/30 leading-relaxed">
                Open to full-time roles and interesting freelance work.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5">
              <div className="flex items-center gap-1.5 text-[10px] text-white/20 font-mono">
                <Coffee size={10} aria-hidden="true" />
                <span>Fuelled by chai</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Scroll cue ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={() => scrollTo("about")}
            aria-label="Scroll down to about section"
            className="flex flex-col items-center gap-2 text-white/20 hover:text-blue-400 transition-colors duration-300 group"
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