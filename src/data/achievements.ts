export interface AchievementRecord {
  id: string;
  year: string;
  title: string;
  organization: string;
  status: string;
  description: string;
  link?: { text: string; url: string };
}

export const achievementsList: AchievementRecord[] = [
  {
    id: "odoo-hackathon",
    year: "2026",
    title: "Odoo National Hackathon",
    organization: "Odoo",
    status: "Selected for Final Round",
    description:
      "Selected for the final round of the national hackathon, developing enterprise workflow solutions under timed challenge constraints alongside top developer teams.",
  },
  {
    id: "gssoc-admin",
    year: "2026",
    title: "GirlScript Summer of Code",
    organization: "GirlScript Foundation",
    status: "Project Admin",
    description:
      "Recognized for leadership as Project Admin managing repository workflows, reviewing community pull requests, issue triage, and mentoring newcomer contributors.",
    link: { text: "GSSOC Portal", url: "https://gssoc.girlscript.tech/" }
  },
  {
    id: "gcp-arcade",
    year: "2025",
    title: "Google Cloud Arcade",
    organization: "Google Cloud",
    status: "Participation / Recognition",
    description:
      "Completed hands-on cloud labs and challenges across Google Cloud infrastructure, deployment pipelines, IAM security, and cloud computing resources.",
  },
  {
    id: "github-community",
    year: "2024–Present",
    title: "Open Source Ecosystem",
    organization: "GitHub Community",
    status: "Active Contributor",
    description:
      "Continuously building, sharing, and maintaining public repositories, developer utilities, and contributing to open-source software on GitHub.",
    link: { text: "GitHub Profile", url: "https://github.com/hitesh-kumar123" }
  }
];
