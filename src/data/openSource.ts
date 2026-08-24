export interface OpenSourceMilestone {
  year: string;
  role: string;
  organization: string;
  program: string;
  summary: string;
  contributions: string[];
  link?: { label: string; url: string };
}

export const openSourceTimeline: OpenSourceMilestone[] = [
  {
    year: "2024",
    role: "Project Admin",
    organization: "GirlScript Foundation",
    program: "GirlScript Summer of Code '24",
    summary:
      "Served as a Project Admin managing repository workflows, reviewing incoming pull requests, mentoring student developers, and maintaining code standards across project modules.",
    contributions: [
      "Reviewed and merged community pull requests",
      "Created issue roadmaps and labeled beginner-friendly tasks",
      "Mentored contributors on Git workflows and MERN architecture patterns",
      "Enforced code quality and documentation standards"
    ],
    link: { label: "GSSOC Portal", url: "https://gssoc.girlscript.tech/" }
  },
  {
    year: "2023",
    role: "Open Source Contributor",
    organization: "GirlScript Summer of Code",
    program: "GirlScript Summer of Code '23",
    summary:
      "Contributed production-ready code across multiple public repositories. Focused on responsive UI bug fixing, component refactoring, and feature implementations.",
    contributions: [
      "Resolved frontend accessibility and responsiveness bugs",
      "Implemented modular React components and styling enhancements",
      "Collaborated with maintainers through asynchronous code reviews"
    ],
    link: { label: "GSSOC Portal", url: "https://gssoc.girlscript.tech/" }
  },
  {
    year: "2022–Present",
    role: "Public Code Contributor",
    organization: "GitHub Community",
    program: "Public Repositories & Experiments",
    summary:
      "Continuously shipping open-source tools, full-stack prototypes, and code repositories on GitHub. Dedicated to learning in public and writing transparent, documented code.",
    contributions: [
      "Maintained 15+ public repositories",
      "Created reusable project boilerplates and UI experiments",
      "Engaged with developer issues and open-source feedback"
    ],
    link: { label: "GitHub Profile", url: "https://github.com/hitesh-kumar123" }
  }
];
