import { motion } from "framer-motion";
import {
  User, Code, Database, Globe, Layout,
  Server, Smartphone, GitBranch, Cpu,
} from "lucide-react";

const SKILLS = [
  { name: "React", icon: <Code size={14} /> },
  { name: "Node.js", icon: <Server size={14} /> },
  { name: "MongoDB", icon: <Database size={14} /> },
  { name: "Tailwind CSS", icon: <Layout size={14} /> },
  { name: "JavaScript", icon: <Code size={14} /> },
  { name: "HTML / CSS", icon: <Globe size={14} /> },
  { name: "Responsive Design", icon: <Smartphone size={14} /> },
  { name: "Git / GitHub", icon: <GitBranch size={14} /> },
  { name: "Express.js", icon: <Server size={14} /> },
  { name: "REST APIs", icon: <Cpu size={14} /> },
];

const TIMELINE = [
  {
    year: "2021",
    tag: "INIT",
    title: "Coding journey started",
    desc: "Wrote my first HTML page. Got hooked on programming logic — spent nights learning responsive styling and vanilla JavaScript algorithms.",
  },
  {
    year: "2022",
    tag: "BUILD",
    title: "Logic & core foundations",
    desc: "Built classic logic games and front-end clones using vanilla JS DOM manipulation. Developed an eye for clean CSS architecture.",
  },
  {
    year: "2023",
    tag: "RUN",
    title: "MERN bootcamp & open source",
    desc: "Graduated bootcamp. Shifted to React, Node.js, Express, and MongoDB. Contributed to open source under GirlScript Summer of Code.",
  },
  {
    year: "2024",
    tag: "DEPLOY",
    title: "Full-stack solutions shipped",
    desc: "Built and deployed Smart Rent System and data-driven Weather Apps — mastering REST APIs, database queries, and cloud deployments.",
  },
  {
    year: "2025",
    tag: "INTEGRATE",
    title: "AI & emerging architectures",
    desc: "Shipped Saylo, an AI-powered interview coach. Integrating generative AI models with polished UI micro-interactions.",
  },
];

const BIO_LINES = [
  "I'm Hitesh Kumar — a full-stack engineer based in India.",
  "I specialize in the MERN stack and build highly responsive, performant web apps.",
  "Focused on speed, modularity, and micro-interactions that feel alive.",
  "Off the keyboard: visual design trends, emerging UI standards, cloud setups.",
];

const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SkillBar = ({
  skill,
  index,
}: {
  skill: (typeof SKILLS)[0];
  index: number;
}) => (
  <div className="flex items-center gap-3">
    <span className="text-white/30">{skill.icon}</span>
    <span className="text-xs font-medium text-white/50 w-32 flex-shrink-0">{skill.name}</span>
    <div className="flex-1 h-[2px] bg-white/5 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full"
        style={{
          width: `${70 + index * 3 > 95 ? 95 : 70 + index * 3}%`,
          background: "linear-gradient(90deg, hsl(217 91% 60%) 0%, hsl(239 84% 67%) 100%)",
        }}
      />
    </div>
  </div>
);

const About = () => (
  <section
    id="about"
    className="section-padding relative overflow-hidden"
    aria-labelledby="about-heading"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Section header */}
      <FadeUp className="text-center mb-20">
        <div className="flex justify-center mb-4">
          <span className="section-tag">
            <User size={12} aria-hidden="true" />
            About me
          </span>
        </div>
        <h2 id="about-heading" className="section-title">
          <span className="text-white">Who I</span>{" "}
          <span className="text-blue-400">am</span>
        </h2>
      </FadeUp>

      {/* Row 1: Bio + Stats */}
      <div className="grid lg:grid-cols-12 gap-6 mb-8">

        {/* Bio terminal */}
        <FadeUp delay={0.05} className="lg:col-span-7">
          <div className="h-full premium-card overflow-hidden">
            <div className="flex items-center px-5 py-3 border-b border-white/5 bg-black/30">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                {["bg-red-500/40", "bg-yellow-500/40", "bg-green-500/40"].map((c, i) => (
                  <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                ))}
              </div>
              <span className="font-mono text-[10px] text-white/25 tracking-widest uppercase mx-auto">
                biography.log
              </span>
            </div>
            <div className="p-6 md:p-8 font-mono space-y-4">
              {BIO_LINES.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  className="text-sm text-white/65 leading-relaxed"
                >
                  <span className="text-white/20 select-none mr-2">&gt;</span>
                  {line}
                </motion.p>
              ))}
              <div className="flex items-center gap-2 mt-2" aria-hidden="true">
                <span className="text-white/20 select-none">&gt;</span>
                <span className="inline-block w-2 h-4 bg-blue-500/70 animate-pulse rounded-sm" />
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Stat cards + status */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "20+", label: "Projects built", sub: "shipped & live" },
              { num: "3871", label: "LeetCode rating", sub: "problem solving" },
              { num: "8+", label: "Certifications", sub: "verified skills" },
              { num: "1+", label: "Years experience", sub: "continuous growth" },
            ].map((s, i) => (
              <FadeUp key={s.label} delay={0.1 + i * 0.07}>
                <div className="premium-card p-5">
                  <div className="text-2xl font-bold tracking-tight text-white mb-0.5">
                    {s.num}
                  </div>
                  <div className="text-[11px] font-semibold text-white/70 leading-tight">
                    {s.label}
                  </div>
                  <div className="text-[10px] text-white/25 font-mono mt-0.5">{s.sub}</div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <div className="premium-card p-5 flex items-center gap-4">
              <div className="w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                <span className="w-2 h-2 rounded-full bg-green-400" aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white/80">Currently</div>
                <div className="text-[11px] text-white/40 font-mono mt-0.5">
                  Open to full-time & freelance roles
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Skills panel */}
      <FadeUp delay={0.1} className="mb-24">
        <div className="premium-card p-7 md:p-8">
          <h3 className="text-sm font-bold text-white mb-6 pb-4 border-b border-white/5">
            Technical skills
          </h3>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {SKILLS.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </FadeUp>

      {/* Journey timeline */}
      <FadeUp className="mb-14 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          My <span className="text-blue-400">journey log</span>
        </h3>
      </FadeUp>

      <div className="relative max-w-2xl mx-auto pl-8 sm:pl-10">
        <div
          className="absolute left-[3px] sm:left-[4px] top-2 bottom-2 w-px"
          style={{
            background:
              "linear-gradient(to bottom, hsl(217 91% 60%), hsl(239 84% 67% / 0.3), transparent)",
          }}
          aria-hidden="true"
        />

        <ol className="space-y-8 list-none">
          {TIMELINE.map((item, i) => (
            <motion.li
              key={item.year}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                className="absolute -left-[31px] sm:-left-[33px] top-4 w-2 h-2 rounded-full border border-blue-500 bg-background"
                aria-hidden="true"
              />
              <div className="premium-card p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="font-mono text-[10px] text-blue-400 font-bold px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                    {item.year}
                  </span>
                  <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
                    {item.tag}
                  </span>
                  <h4 className="text-sm font-semibold text-white/90 tracking-tight w-full sm:w-auto sm:ml-auto">
                    {item.title}
                  </h4>
                </div>
                <p className="text-[13px] text-white/45 leading-relaxed">{item.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>

    </div>
  </section>
);

export default About;