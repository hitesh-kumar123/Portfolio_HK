export interface ExploringItem {
  id: string;
  topic: string;
  category: string;
  status: string;
  description: string;
  tag: string;
}

export const currentlyExploringList: ExploringItem[] = [
  {
    id: "ai-llms",
    topic: "AI & LLM APIs",
    category: "Intelligent Workflows",
    status: "Active Builds",
    description: "Integrating Gemini & OpenAI APIs into responsive React web tools for automated analysis and contextual assistants.",
    tag: "AI"
  },
  {
    id: "open-source",
    topic: "Open Source Ecosystems",
    category: "Community Collaboration",
    status: "Ongoing Contributions",
    description: "Contributing to developer tooling, reviewing community PRs, and maintaining public project repositories.",
    tag: "Open Source"
  },
  {
    id: "hackathons",
    topic: "Hackathons & Rapid Builds",
    category: "Engineering Challenges",
    status: "Participation",
    description: "Participating in timed developer hackathons and problem-solving tracks to prototype fast production apps.",
    tag: "Events"
  },
  {
    id: "nextjs-typescript",
    topic: "Modern Frontend Frameworks",
    category: "Core Stack Evolution",
    status: "Continuous Learning",
    description: "Exploring server components, edge functions, and advanced TypeScript patterns for high-performance web systems.",
    tag: "Web Tech"
  }
];
