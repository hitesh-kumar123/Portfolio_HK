import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiGithub,
  SiPostman,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiGraphql
} from "react-icons/si";
import { type IconType } from "react-icons";

export interface SkillGroup {
  number: string;
  category: string;
  skills: {
    name: string;
    icon: IconType | null;
    color: string;
    context: string;
  }[];
}

export const toolboxGroups: SkillGroup[] = [
  {
    number: "01",
    category: "LANGUAGES",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", context: "Modern ES6+, Async/Await, Web APIs" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", context: "Type Safety, Interfaces, Generics" },
    ]
  },
  {
    number: "02",
    category: "BUILDING WITH",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB", context: "Component Architecture, Hooks, State" },
      { name: "Next.js", icon: SiNextdotjs, color: "#111111", context: "Server Components, App Router, SSR" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", context: "RESTful Services, Event Loop, Server Logic" },
      { name: "Express.js", icon: SiExpress, color: "#111111", context: "Routing, Middleware, API Architecture" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", context: "Design Tokens, Fluid Typography, Layouts" },
      { name: "Redux", icon: SiRedux, color: "#764ABC", context: "Predictable Global State Management" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098", context: "Typed Schemas, Queries & Mutations" },
    ]
  },
  {
    number: "03",
    category: "DATA",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", context: "Relational Schemas, Constraints, Indexes" },
      { name: "SQL", icon: SiMysql, color: "#00758F", context: "Complex Queries, Joins, Transactions" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", context: "NoSQL Schemas, Aggregations, Mongoose" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", context: "BaaS, Row Level Security, Realtime DB" },
    ]
  },
  {
    number: "04",
    category: "TOOLS",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032", context: "Version Control, Branching, Rebase" },
      { name: "GitHub", icon: SiGithub, color: "#111111", context: "PR Reviews, Issue Triage, Collaboration" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37", context: "API Testing, Collections, Automated Assertions" },
    ]
  },
  {
    number: "05",
    category: "EXPLORING",
    skills: [
      { name: "AI / LLM APIs", icon: null, color: "#4057FF", context: "Prompt Engineering, Gemini & OpenAI Integration" },
      { name: "Python", icon: SiPython, color: "#3776AB", context: "Automation, Data Parsing, Backend Scripting" },
    ]
  }
];
