import fullStackCert from "@/assets/Certificates/Full Stack Development.png";
import gssocCert from "@/assets/Certificates/GSSOC.jpg";
import hack2skillCert from "@/assets/Certificates/Hack2skill-Certificate.png";
import azureCert from "@/assets/Certificates/Microsoft Azure.pdf.png";
import postmanCert from "@/assets/Certificates/Postman - Postman API Fundamentals Student Expert - 2025-09-27 (1).png";
import contributorBadge from "@/assets/Certificates/Contributor's badge.jpg";

export interface Certificate {
  id: string;
  number: string;
  title: string;
  issuer: string;
  category: "Full Stack" | "Open Source" | "Hackathon" | "Cloud" | "API Testing";
  year: string;
  image: string;
  description: string;
  verifyUrl: string;
}

export const certificatesData: Certificate[] = [
  {
    id: "full-stack-bootcamp",
    number: "01",
    title: "Full Stack Web Development",
    issuer: "Udemy",
    category: "Full Stack",
    year: "2023",
    image: fullStackCert,
    description:
      "Comprehensive bootcamp curriculum spanning MERN stack development, RESTful API architecture, authentication, and cloud deployment.",
    verifyUrl: "https://www.udemy.com/",
  },
  {
    id: "gssoc-contributor",
    number: "02",
    title: "GSSOC Contributor Certificate",
    issuer: "GirlScript Summer of Code",
    category: "Open Source",
    year: "2023",
    image: gssocCert,
    description:
      "Official contributor recognition for active code contributions, pull requests, issue resolution, and community collaboration in GSSOC.",
    verifyUrl: "https://gssoc.girlscript.tech/",
  },
  {
    id: "hack2skill",
    number: "03",
    title: "Hack2Skill Hackathon Certification",
    issuer: "Hack2Skill",
    category: "Hackathon",
    year: "2022",
    image: hack2skillCert,
    description:
      "Participation and project delivery certificate in technical build tracks and developer challenges hosted by Hack2Skill.",
    verifyUrl: "https://hack2skill.com/",
  },
  {
    id: "azure-fundamentals",
    number: "04",
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    category: "Cloud",
    year: "2022",
    image: azureCert,
    description:
      "Foundations of cloud computing, Azure architectural services, security controls, privacy governance, and cloud scalability.",
    verifyUrl: "https://learn.microsoft.com/",
  },
  {
    id: "postman-api",
    number: "05",
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    category: "API Testing",
    year: "2025",
    image: postmanCert,
    description:
      "API request creation, automated test assertions, collection scripting, environment variables, and schema verification workflows.",
    verifyUrl: "https://www.postman.com/",
  },
  {
    id: "github-contributor",
    number: "06",
    title: "Open Source Contributor Recognition",
    issuer: "GitHub",
    category: "Open Source",
    year: "2021",
    image: contributorBadge,
    description:
      "Contributor badge validating continuous open-source activity, commits, and collaborative repository maintenance across GitHub.",
    verifyUrl: "https://github.com/hitesh-kumar123",
  },
];
