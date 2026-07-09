export const heroPhrases = [
  "Web Developer",
  "Backend Developer",
  "Full-Stack Developer",
  "DevOps Engineer",
];

export const heroTagline =
  "I build web products that hold up in production — solid backends, clean APIs, and deployments that don't slow your team down.";

export const statusBadge = "Open to interesting opportunities";

export const aboutContent = {
  title: "Web Developer",
  paragraphs: [
    "I build software that works in the real world — not just on localhost. That means APIs designed with intent, databases that won't become a bottleneck, and frontends wired to backends that actually make sense.",
    "My work spans company sites, LMS platforms, subscription systems, and internal tools. Whether I'm owning the backend, jumping in full-stack, or setting up Docker and CI/CD for a clean release — I take responsibility until it's live.",
    "I'm not interested in code for code's sake. I care about shipping features that perform, deploy predictably, and stay easy to maintain as the product grows.",
  ],
  whyHireMe: [
    {
      title: "Full-stack capable",
      description:
        "React, Node.js, Laravel — comfortable across the stack when the project needs it.",
    },
    {
      title: "Backend-first mindset",
      description:
        "API design, database modeling, and third-party integrations built to last.",
    },
    {
      title: "DevOps-ready",
      description:
        "Docker, CI/CD, VPS, and Nginx — I ship code, not just write it.",
    },
    {
      title: "Team player",
      description:
        "Used to working with PM, QA, and frontend devs in sprint-based delivery.",
    },
  ],
};

export interface Project {
  id: number;
  title: string;
  company?: string;
  period: string;
  description: string;
  responsibilities: string[];
  teamSize: string;
  tools: string[];
  liveUrl?: string;
  category?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "UjianAI",
    company: "PT Skyshi Digital Indonesia",
    period: "Dec 2025 – Feb 2026",
    description:
      "AI-powered solution that enables users to upload exam or quiz images and instantly receive generated answers along with clear explanations.",
    responsibilities: [
      "Designing and implementing AI workflows in Dify to process image-based questions into structured outputs.",
      "Engineering and refining prompts (OpenAI & Gemini) to improve accuracy and response consistency.",
      "Developing automation test tools to validate AI responses across multiple question image scenarios.",
      "Performing evaluation and iterative improvements based on testing results to ensure output reliability.",
    ],
    teamSize: "3 people (1 QA, 2 Full Stack)",
    tools: ["Dify", "OpenAI", "Gemini", "JavaScript"],
    category: "AI Platform",
  },
  {
    id: 2,
    title: "GetHired",
    company: "PT Skyshi Digital Indonesia",
    period: "Nov 2025 – Dec 2025",
    description:
      "Career preparation platform with civil service and state-owned enterprise tryouts, programmer tests, and CV makers, equipped with the AI Mentor feature.",
    responsibilities: [
      "Optimizing and improving AI chatbot prompts (Dify & OpenAI) to enhance accuracy, relevance, and consistency of responses.",
      "Designing and developing automation test scripts (JavaScript) to periodically test chatbot stability and consistency.",
      "Evaluating and tuning the performance of AI Mentor based on test results.",
      "Collaborating with QA in testing, debugging, and validation of features prior to deployment.",
    ],
    teamSize: "3 people (1 QA, 2 Full Stack)",
    tools: ["Dify", "OpenAI", "JavaScript"],
  },
  {
    id: 3,
    title: "ANArag",
    company: "PT Skyshi Digital Indonesia",
    period: "Oct 2025 – Dec 2025",
    description:
      "Platform that streamlines and automates document retrieval for recommendation processes across organizational divisions using Generative AI.",
    responsibilities: [
      "Migrate and reimplement front-end design using a new template with React.js.",
      "Upgrade RagFlow to the latest version and ensure compatibility with existing systems.",
      "Create and improve deployment scripts (Docker & server configuration) for release stability.",
      "Perform testing, debugging, and coordination with PM & QA to ensure smooth deployment.",
    ],
    teamSize: "4 people (1 PM, 1 QA, 2 Full Stack)",
    tools: ["React.js", "Node.js", "Docker", "RagFlow"],
  },
  {
    id: 4,
    title: "ANArise",
    company: "PT Skyshi Digital Indonesia",
    period: "Aug 2025 – Nov 2025",
    description:
      "Digital assessment and talent development platform for companies to identify, evaluate, and nurture top-tier developer talent through project-based simulations.",
    responsibilities: [
      "Developing front-end features using React.js & Vue.js and building RESTful APIs with Node.js.",
      "Performing testing, debugging, performance optimization, and application deployment.",
      "Collaborating with PM & QA in sprint-based development.",
    ],
    teamSize: "4 people (1 PM, 1 QA, 2 Full Stack)",
    tools: ["React.js", "Node.js", "Vue.js"],
    category: "SaaS Platform",
  },
  {
    id: 5,
    title: "LMS Bootcamp Karisma Academy",
    company: "PT Karisma Garuda Mulia",
    period: "Feb 2025 – Jul 2025",
    description:
      "Learning Management System specifically for bootcamp classes, supporting learning process, participant management, and payment system integration.",
    responsibilities: [
      "Developed backend APIs using Laravel and Hono.",
      "Managed MySQL database and implemented object storage using Minio.",
      "Integrated the Xendit API to process payments.",
      "Managed deployment via Docker and GitHub CI/CD to a VPS.",
    ],
    teamSize: "4 people (3 Frontend, 1 Backend)",
    tools: [
      "Laravel",
      "Hono",
      "Next.js",
      "MySQL",
      "Docker",
      "Minio",
      "Xendit API",
      "VPS",
    ],
    liveUrl: "https://karismaacademy.com/",
    category: "LMS",
  },
  {
    id: 6,
    title: "Product Sales & Catalog Website",
    company: "Freelance",
    period: "Apr 2025 – May 2025",
    description:
      "Product sales and catalog website designed to display product listings, details, and facilitate the ordering process.",
    responsibilities: [
      "Sole Full-Stack Developer responsible for the entire project lifecycle.",
      "Developed backend using Laravel and frontend with React.js.",
      "Designed and managed MySQL database for product and transaction data.",
      "Deployed to cPanel with CI/CD using GitHub Actions.",
    ],
    teamSize: "1 person",
    tools: ["Laravel", "React.js", "MySQL", "cPanel", "GitHub Actions"],
    liveUrl: "https://entrepreneurid.my.id/",
  },
  {
    id: 7,
    title: "LMS Prakerja Karisma Academy",
    company: "PT Karisma Garuda Mulia",
    period: "Dec 2023 – May 2024",
    description:
      "Internal web application for webinar and self-learning video course management with third-party APIs from Prakerja and Flip.",
    responsibilities: [
      "Developed and managed server-side logic using Hono, Laravel, and MySQL.",
      "Fully responsible for integrating third-party APIs from Prakerja and Flip.",
      "Collaborated with Frontend Developer to ensure smooth API integration.",
      "Implemented CI/CD workflow using GitHub Actions for automated VPS deployment.",
    ],
    teamSize: "2 people (1 Backend, 1 Frontend)",
    tools: [
      "React",
      "Hono",
      "Laravel",
      "MySQL",
      "VPS",
      "GitHub Actions",
      "API Prakerja",
      "API Flip",
    ],
  },
  {
    id: 8,
    title: "Gym Subscription Project",
    company: "Freelance",
    period: "Apr 2024 – May 2024",
    description:
      "Subscription management system for a gym, covering member registration, payment management, and class scheduling.",
    responsibilities: [
      "Sole Full-Stack Developer responsible for the entire development lifecycle.",
      "Developed frontend using React.js and backend API with Laravel.",
      "Designed and managed MySQL database for member and transaction data.",
      "Deployed to cPanel with CI/CD using GitHub Actions.",
    ],
    teamSize: "1 person",
    tools: ["Laravel", "React.js", "MySQL", "cPanel", "GitHub Actions"],
  },
  {
    id: 9,
    title: "Company Profile & Clinic Reservation",
    company: "Freelance",
    period: "Dec 2023 – Jan 2024",
    description:
      "Company profile website for a clinic with online reservation feature for patients to view services and book appointments digitally.",
    responsibilities: [
      "Sole Full-Stack Developer responsible for design to deployment.",
      "Developed backend using CodeIgniter and UI with Bootstrap.",
      "Deployed to cPanel with CI/CD using GitHub Actions.",
    ],
    teamSize: "1 person",
    tools: ["CodeIgniter", "Bootstrap", "cPanel", "GitHub Actions"],
  },
];

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  bullets: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "PT Skyshi Digital Indonesia",
    period: "Aug 2025 – Present",
    bullets: [
      "Developed and maintained full-stack web applications using modern web technologies.",
      "Built and optimized backend services, including API development, database design, and system integration.",
      "Managed DevOps processes such as deployment setup, CI/CD pipeline configuration, and server environment maintenance.",
      "Implemented and maintained application deployment workflows to ensure scalability and system reliability.",
      "Assisted in AI prompt adjustment and optimization to improve AI-generated outputs for internal tools.",
    ],
    technologies: [
      "React",
      "Vue",
      "Node.js",
      "Docker",
      "Dify",
      "OpenAI",
      "CI/CD",
    ],
  },
  {
    id: 2,
    title: "Instructor & Web Developer",
    company: "PT Karisma Garuda Mulia",
    period: "Sep 2022 – Jul 2025",
    bullets: [
      "Taught and mentored over 50 participants in web development (HTML, CSS, JS, PHP, Laravel, React).",
      "Managed server infrastructure (VPS), including Nginx, Docker, and CI/CD with GitHub Actions.",
      "Developed a curriculum tailored to industry needs.",
      "Built and managed an internal web application for course management.",
    ],
    technologies: ["Laravel", "React", "Docker", "Nginx", "CI/CD", "MySQL"],
  },
  {
    id: 3,
    title: "Data Entry",
    company: "PT SiCepat Express Indonesia",
    period: "Sep 2021 – Sep 2022",
    bullets: [
      "Managed and ensured the accuracy of package shipping data in the system.",
      "Coordinated with the logistics team to expedite the shipping process.",
      "Maintained the efficiency of the data entry process to improve operational productivity.",
    ],
    technologies: [
      "Data Management",
      "Logistics Coordination",
      "System Operations",
    ],
  },
  {
    id: 4,
    title: "Web Developer",
    company: "CV. RedLevl Mediatama",
    period: "Dec 2019 – Dec 2020",
    bullets: [
      "Developed a company profile website using PHP and CodeIgniter.",
      "Created SEO-optimized article content.",
      "Implemented a backlinking strategy for off-page SEO.",
    ],
    technologies: ["PHP", "CodeIgniter", "SEO", "MySQL"],
  },
];

export interface Education {
  id: number;
  school: string;
  degree: string;
  period: string;
}

export const education: Education[] = [
  {
    id: 1,
    school: "SMKN 4 Malang",
    degree: "Software Engineer",
    period: "May 2018 – May 2021",
  },
];

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  year: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Pemrograman Web Level 4 KKNI",
    issuer: "LSK",
    year: "2022",
  },
  {
    id: 2,
    name: "DevOps Engineer",
    issuer: "Digital Skola",
    year: "2025",
  },
];

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages & Frameworks",
    skills: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "React",
      "Vue",
      "PHP",
      "Laravel",
      "CodeIgniter",
    ],
  },
  {
    name: "Backend & API",
    skills: [
      "RESTful API",
      "MySQL",
      "Authentication",
      "Third-party Integration",
    ],
  },
  {
    name: "DevOps",
    skills: ["Docker", "CI/CD (GitHub Actions)", "VPS", "Nginx"],
  },
  {
    name: "AI & Tools",
    skills: [
      "OpenAI",
      "Dify",
      "Prompt Engineering",
      "Automation Testing",
    ],
  },
  {
    name: "Other",
    skills: ["Git", "SEO Basics", "Problem Solving", "Team Collaboration"],
  },
];

export const siteCopy = {
  about: {
    label: "About",
    title: "Built to ship. Engineered to last.",
    description:
      "Backend depth, full-stack range, and the DevOps know-how to get it live.",
  },
  experience: {
    label: "Experience",
    title: "Track record that speaks",
    description:
      "Product companies, education, and freelance — real ownership from development to deployment.",
  },
  skills: {
    label: "Skills",
    title: "The stack behind the work",
    description:
      "Frontend, backend, infrastructure, and the tools I use to deliver production-ready software.",
  },
  projects: {
    label: "Projects",
    title: "Work worth showing",
    description:
      "Web apps, platforms, and systems — built for real users, not just portfolios.",
  },
  education: {
    label: "Education",
    title: "Foundation & credentials",
    description:
      "Software engineering background with certifications that back the skills.",
  },
  contact: {
    label: "Contact",
    title: "Have something in mind?",
    description:
      "Open to the right opportunity — full-time, remote, or project-based. Connect on LinkedIn or drop a message below.",
  },
};

export const contactInfo = {
  phone: "+62 851 7300 1803",
  phoneHref: "tel:+6285173001803",
  email: "bariqfirjatullah1803@gmail.com",
  location: "Malang, East Java",
  linkedin: "https://linkedin.com/in/bariq-firjatullah",
  github: "https://github.com/bariqfirjatullah1803",
  website: "https://bariqfirjatullah.my.id",
  cvUrl:
    "https://drive.google.com/file/d/1gBoRcBhVxRZamP4Xq58n3PEE-RUZ8KMX/view?usp=sharing",
};
