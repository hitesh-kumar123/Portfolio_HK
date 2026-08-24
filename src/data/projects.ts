import smartRentImage from "@/assets/smartRent.png";
import SayloImage from "@/assets/Saylo.png";
import packGoImage from "@/assets/PackGo.png";
import weatherImage from "@/assets/Weather.png";
import simonGameImage from "@/assets/Simon_Game.png";
import spotifyCloneImage from "@/assets/Spotify_Clone.png";

export interface CaseStudy {
  overview: string;
  problem: string;
  approach: string;
  myRole: string;
  features: string[];
  technologies: string[];
  challenges: string[];
  solutions: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: "Full Stack" | "Full Stack + AI" | "Frontend" | "JavaScript";
  role: string;
  year: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  caseStudy: CaseStudy;
}

export const projectsData: Project[] = [
  {
    id: "smart-rent",
    number: "01",
    title: "Smart Rent System",
    tagline: "End-to-end property discovery, booking & rental management ecosystem.",
    category: "Full Stack",
    role: "Full Stack Architect & Developer",
    year: "2024",
    description:
      "A production-ready rental management web application enabling property owners to list accommodations and tenants to search, filter, and request bookings with automated state handling.",
    image: smartRentImage,
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST API"],
    githubUrl: "https://github.com/hitesh-kumar123/Smart-Rent",
    liveUrl: "https://smartrentsystem.netlify.app/",
    featured: true,
    caseStudy: {
      overview:
        "Smart Rent System addresses fragmented rental listing workflows by creating a unified MERN stack application connecting tenants directly with property hosts.",
      problem:
        "Traditional rental listing platforms often suffer from convoluted booking flows, lack of real-time availability sync, and slow multi-step checkout processes.",
      approach:
        "Designed a decoupled React single-page frontend paired with a modular Express REST API backend and MongoDB document schemas indexed for geospatial and filter queries.",
      myRole:
        "Designed the database schema, engineered all REST endpoints, developed the responsive React client, and deployed the full system.",
      features: [
        "Dynamic property search with price, type, and location filters",
        "Host dashboard for property management and listing controls",
        "Interactive booking request flow with state validation",
        "Responsive design optimized across mobile and desktop viewports"
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS"],
      challenges: [
        "Managing concurrent booking availability without race conditions",
        "Structuring responsive image galleries for property listings"
      ],
      solutions: [
        "Implemented atomic MongoDB status operations and request validation checks",
        "Utilized CSS grid layout rules with optimized image loading and fallbacks"
      ]
    }
  },
  {
    id: "saylo",
    number: "02",
    title: "Saylo — AI Interview Coach",
    tagline: "Intelligent mock interview preparation with structured feedback loops.",
    category: "Full Stack + AI",
    role: "Product Developer & Frontend Engineer",
    year: "2024",
    description:
      "An AI-powered technical interview preparation tool that parses resume profiles, generates contextual interview questions, and provides structured evaluation rubrics.",
    image: SayloImage,
    technologies: ["React", "AI Integration", "JavaScript", "HTML5", "CSS3", "Responsive UI"],
    githubUrl: "https://github.com/hitesh-kumar123/saylo",
    liveUrl: "https://saylo-ten.vercel.app/",
    featured: true,
    caseStudy: {
      overview:
        "Saylo is an interactive web tool built to bridge the gap in technical interview preparation by simulating realistic interview sessions.",
      problem:
        "Job seekers frequently lack access to personalized, technical mock interviews that adapt dynamically to their specific skill sets and resume history.",
      approach:
        "Constructed an intuitive interactive step-by-step interview experience that guides candidates through tailored question sets and immediate answer feedback.",
      myRole:
        "Conceptualized the application interface, built the React frontend components, and implemented the conversational interview state machine.",
      features: [
        "Resume-tailored question generation workflows",
        "Interactive question prompt interface with timers and notes",
        "Instant structured performance feedback suggestions",
        "Clean, distraction-free study environment"
      ],
      technologies: ["React", "JavaScript", "CSS3", "REST APIs", "Vercel"],
      challenges: [
        "Creating a distraction-free user flow that feels conversational and prompt",
        "Managing multi-stage form state without losing input progress"
      ],
      solutions: [
        "Engineered a persistent local session store and clear visual progress tracker",
        "Designed high-contrast, accessible typography for long reading sessions"
      ]
    }
  },
  {
    id: "packgo",
    number: "03",
    title: "PackGo",
    tagline: "Modern itinerary planner for flights, accommodations, and multi-day travels.",
    category: "Frontend",
    role: "Frontend Engineer",
    year: "2023",
    description:
      "A comprehensive travel itinerary and discovery web application that helps travelers search flight options, organize hotels, and structure detailed schedules.",
    image: packGoImage,
    technologies: ["React", "CSS3", "HTML5", "Responsive Layout", "Component Architecture"],
    githubUrl: "https://github.com/hitesh-kumar123/PackGo",
    liveUrl: "https://travelplans-eight.vercel.app/",
    featured: true,
    caseStudy: {
      overview:
        "PackGo simplifies travel logistics by combining trip search tools, destination exploration, and custom itinerary building in one cohesive interface.",
      problem:
        "Trip planning usually involves jumping between multiple browser tabs for flights, lodging, and day plans, leading to disorganized itineraries.",
      approach:
        "Engineered a unified visual dashboard with modular travel cards, trip timeline views, and intuitive search categorization.",
      myRole:
        "Built all React UI components, implemented responsive CSS architectures, and handled user trip state interactions.",
      features: [
        "Flight and accommodation search and comparison views",
        "Day-by-day itinerary creator with activity timelines",
        "Destination recommendation tiles and packing checklists",
        "Mobile-first responsive navigation"
      ],
      technologies: ["React", "CSS Modules", "HTML5", "JavaScript", "Vercel"],
      challenges: [
        "Building a dense information dashboard that stays legible on small mobile screens",
        "Smooth navigation transitions between plan overview and detail cards"
      ],
      solutions: [
        "Implemented collapsible section drawers and adaptive card grids",
        "Applied CSS transforms and transitions for instantaneous UI feedback"
      ]
    }
  },
  {
    id: "weather-app",
    number: "04",
    title: "Weather Forecast Application",
    tagline: "Live meteorological forecasting consuming global weather endpoints.",
    category: "Frontend",
    role: "Frontend Developer",
    year: "2023",
    description:
      "Dynamic weather web application delivering instant real-time atmospheric metrics, multi-day forecasting, and location search with clean status visuals.",
    image: weatherImage,
    technologies: ["React", "OpenWeather API", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/hitesh-kumar123/Weather_react_app.git",
    liveUrl: "https://raincheckr.netlify.app/",
    featured: false,
    caseStudy: {
      overview:
        "A focused web utility providing fast, reliable weather intelligence and responsive condition visualizations.",
      problem: "Many weather apps are cluttered with ads and slow down critical metric lookups.",
      approach: "Built a lightweight, single-view application consuming live OpenWeather API data with immediate search caching.",
      myRole: "End-to-end frontend development and API integration.",
      features: ["City search with error handling", "Temperature, humidity, and wind speed cards", "Multi-day trend forecast"],
      technologies: ["React", "REST API", "CSS3"],
      challenges: ["Handling asynchronous network errors and invalid city lookups gracefully"],
      solutions: ["Built intuitive toast feedback and loading states with cached fallback values"]
    }
  },
  {
    id: "simon-game",
    number: "05",
    title: "Simon Memory Game",
    tagline: "Classic interactive audio-visual sequence challenge.",
    category: "JavaScript",
    role: "Developer",
    year: "2022",
    description:
      "Interactive memory game engineered with vanilla JavaScript DOM manipulation, progressive difficulty logic, and synchronized audio feedback.",
    image: simonGameImage,
    technologies: ["JavaScript (ES6)", "HTML5", "CSS3", "Web Audio"],
    githubUrl: "https://github.com/hitesh-kumar123/Simon_Game.git",
    liveUrl: "https://simon-by-hitesh.netlify.app/",
    featured: false,
    caseStudy: {
      overview: "A clean recreation of the iconic Simon sequence memory game showcasing fundamental DOM event handling and state arrays.",
      problem: "Managing rapid sequence playback without event overlapping or desynchronized audio triggers.",
      approach: "Utilized asynchronous timeout queues and state locks to guarantee deterministic gameplay rounds.",
      myRole: "Complete implementation in vanilla JavaScript.",
      features: ["Progressive sequence generator", "Audio-visual button state flashes", "Score tracking and game-over reset"],
      technologies: ["JavaScript", "HTML5 Audio", "CSS3 Animations"],
      challenges: ["Preventing user clicks during computer turn playback"],
      solutions: ["Introduced a turn-state flag disabling user input during sequence animations"]
    }
  },
  {
    id: "spotify-clone",
    number: "06",
    title: "Spotify Web Player Replica",
    tagline: "High-fidelity responsive audio streaming player interface.",
    category: "Frontend",
    role: "Frontend Engineer",
    year: "2022",
    description:
      "Front-end replica of Spotify's desktop web application, exploring modern CSS grid structures, sidebar interactions, and track playback controls.",
    image: spotifyCloneImage,
    technologies: ["HTML5", "CSS3 Grid/Flexbox", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/hitesh-kumar123/Spotify_clone.git",
    liveUrl: "https://spotify-player-hitesh.netlify.app/",
    featured: false,
    caseStudy: {
      overview: "A frontend structural study reverse-engineering the UI density and playback layout of Spotify's desktop application.",
      problem: "Replicating complex multi-panel desktop layouts that scale gracefully to mobile viewports.",
      approach: "Engineered a responsive CSS Grid system with pinned player controls and fluid playlist scroll containers.",
      myRole: "UI structuring and CSS styling.",
      features: ["Sidebar navigation panel", "Album artwork and playlist grid", "Fixed bottom player controls bar"],
      technologies: ["HTML5", "CSS3", "JavaScript"],
      challenges: ["Fixed position player bar without occluding scrollable tracklists"],
      solutions: ["Calculated bottom padding offsets and nested scrollable container areas"]
    }
  }
];
