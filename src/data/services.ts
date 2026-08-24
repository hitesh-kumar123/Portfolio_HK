export interface ServiceOffering {
  number: string;
  title: string;
  shortSummary: string;
  description: string;
  deliverables: string[];
}

export const servicesList: ServiceOffering[] = [
  {
    number: "01",
    title: "Full Stack Web Applications",
    shortSummary: "End-to-end web apps with MERN stack, robust authentication, and high performance.",
    description:
      "I design and engineer complete web applications from database architecture to responsive frontend views using React, Node.js, Express, and MongoDB. I focus on clean maintainable code and scalable REST APIs.",
    deliverables: ["Custom MERN Platforms", "Authentication & Role Systems", "Database Design & Queries", "Production Deployments"]
  },
  {
    number: "02",
    title: "Frontend Experiences",
    shortSummary: "Responsive, accessible, and fast user interfaces with modern micro-interactions.",
    description:
      "I craft fluid, accessible, and interactive user interfaces using React, TypeScript, and Tailwind CSS. Every screen is designed intentionally for desktop, tablet, and mobile devices.",
    deliverables: ["Fluid Component Systems", "Mobile-First Responsive Layouts", "Micro-Interactions & Animations", "Performance Optimization"]
  },
  {
    number: "03",
    title: "Backend & APIs",
    shortSummary: "Structured RESTful APIs, data validation, and third-party integrations.",
    description:
      "I construct modular backend services with Node.js and Express, architect MongoDB data schemas, handle third-party webhooks, and secure API endpoints with proper middleware.",
    deliverables: ["RESTful API Architecture", "MongoDB Data Modeling", "Third-Party Integrations", "Security & Validation Middleware"]
  },
  {
    number: "04",
    title: "AI-Powered Features",
    shortSummary: "Integrating LLM APIs and prompt workflows into web applications.",
    description:
      "I integrate practical AI capabilities into web products — from intelligent resume analysis and mock interview coaches to dynamic text generators and contextual assistants.",
    deliverables: ["LLM API Integration", "Contextual Prompt Workflows", "Intelligent Form Parsing", "Interactive AI Utilities"]
  },
  {
    number: "05",
    title: "Existing Product Improvements",
    shortSummary: "Refactoring legacy codebases, resolving UI bugs, and boosting load speeds.",
    description:
      "I audit, refactor, and debug existing React and Node.js applications — eliminating rendering bottlenecks, resolving responsive bugs, and modernizing component architecture.",
    deliverables: ["Performance Audits", "Codebase Modernization", "Responsive Bug Fixing", "Component Architecture Polish"]
  }
];
