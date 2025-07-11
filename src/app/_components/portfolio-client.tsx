"use client";

import React, { useState, useEffect } from "react";
import { FiGitBranch, FiDatabase, FiTerminal, FiMail } from "react-icons/fi";
import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNginx,
  SiAmazon,
  SiCloudflare,
  SiHono,
} from "react-icons/si";
import { BiMenu, BiX } from "react-icons/bi";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import MotionWrap from "@/app/_components/motion-wrap";

interface Project {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  backend: string;
  frontend?: string;
  devops: string;
  githubUrl?: string;
  demoUrl?: string;
  docsUrl?: string;
  liveUrl?: string;
}

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

type Tech = {
  name: string;
  icon: React.JSX.Element;
};

interface TechStack {
  backend: Tech[];
  frontend: Tech[];
  devops: Tech[];
}

const phrases = [
  "Backend Engineer",
  "Full-Stack Developer",
  "DevOps Engineer",
  "Software Engineer",
];

const PortfolioClient: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  const handleSubmit = () => {
    console.log("submit");
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Artiknesia - Art Marketplace",
      imageUrl: "https://picsum.photos/200/300?random=1",
      description:
        "A full-stack e-commerce platform connecting artists with collectors. Features artist profiles, artwork galleries, and a secure transaction system.",
      backend: "Laravel, MySQL",
      frontend: "Tailwind CSS, Livewire",
      devops: "CPanel",
      liveUrl: "https://artiknesia.com/", // <-- Ganti dengan URL Demo Anda
    },
    {
      id: 2,
      title: "Karisma Academy - LMS",
      imageUrl: "https://picsum.photos/200/300?random=2",
      description:
        "Designed and developed the core backend architecture for a bootcamp-style Learning Management System, handling course enrollment, materials, and student progress.",
      backend: "MySQL, Hono.js",
      frontend: "Next.js, Tailwind CSS",
      devops: "Docker, Nginx, CI/CD (GitHub Actions)",
      liveUrl: "https://karismaacademy.com/", // <-- Ganti dengan URL Demo Anda
    },
    {
      id: 3,
      title: "EntrepreneurID - E-commerce",
      imageUrl: "https://picsum.photos/200/300?random=3",
      description:
        "A specialized e-commerce website for plumbing supplies. Developed full-stack, from product catalogs and cart functionality to order processing.",
      backend: "Laravel, MySQL",
      frontend: "React.js, Tailwind CSS",
      devops: "CI/CD (GitHub Actions), CPanel",
      liveUrl: "entrepreneurid.my.id", // <-- Ganti dengan URL Live Anda
    },
    {
      id: 4,
      title: "Istana Safira - Company Profile",
      imageUrl: "https://picsum.photos/200/300?random=4",
      description:
        "An elegant and responsive company profile website for a real estate business in Malang. Showcases property types, galleries, and lead generation forms.",
      backend: "Codeigniter, MySQL",
      frontend: "Bootstrap",
      devops: "CPanel", // Vercel sangat cocok untuk Next.js
      liveUrl: "https://istanasafira.com/", // <-- Ganti dengan URL Live Anda
    },
    {
      id: 5,
      title: "Material Data Forecasting System",
      imageUrl: "https://picsum.photos/200/300?random=5",
      description:
        "A full-stack application to forecast material requirements based on historical data. Features data input, processing, and visualization dashboards.",
      backend: "Codeigniter, MySQL",
      frontend: "Bootstrap",
      devops: "CPanel",
      githubUrl: "https://github.com/bariqfirjatullah1803/Aplikasi-Forecasting-Data-Bahan", // <-- Ganti dengan URL GitHub Anda
    },
    {
      id: 6,
      title: "Best Gym Malang - Membership Portal",
      imageUrl: "https://picsum.photos/200/300?random=6",
      description:
        "A web portal for a local gym. Allows members to manage their subscriptions, view class schedules, and book sessions online, increasing engagement.",
      backend: "Laravel, MySQL",
      frontend: "React, Tailwind CSS",
      devops: "CPanel",
    },
  ];

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Instructor & Web Developer",
      company: "PT. Karisma Garuda Mulia",
      period: "Sep 2022 - Jul 2025",
      description:
        "Taught and mentored 50+ participants in web development. Managed server infrastructure (VPS), including Nginx configuration, Docker containerization, and CI/CD pipelines with GitHub Actions. Developed curriculum and built an internal course management application.",
      technologies: ["Laravel", "React", "Docker", "Nginx", "CI/CD", "MySQL"],
    },
    {
      id: 2,
      title: "Data Entry",
      company: "PT. Sicepat Express Indonesia",
      period: "Sep 2021 - Sep 2022",
      description:
        "Managed and ensured the accuracy of package shipping data. Coordinated with the logistics team to expedite delivery processes and maintained data entry efficiency to improve operational productivity.",
      technologies: [
        "Data Management",
        "Logistics Coordination",
        "System Operations",
      ],
    },
    {
      id: 3,
      title: "Web Developer",
      company: "CV. RedLevl Mediatama",
      period: "Dec 2019 - Dec 2020",
      description:
        "Developed and maintained company profile websites using PHP and CodeIgniter. Created SEO-optimized article content and implemented off-page SEO strategies through backlinking to improve search rankings.",
      technologies: ["PHP", "CodeIgniter", "SEO", "Content Creation", "MySQL"],
    },
  ];

  const techStack: TechStack = {
    backend: [
      { name: "Laravel", icon: <FaLaravel size={20} /> },
      { name: "Node.js", icon: <FaNodeJs size={20} /> },
      { name: "Hono.js", icon: <SiHono size={20} /> },
      { name: "Express", icon: <FiGitBranch size={20} /> },
      { name: "MySQL", icon: <FiDatabase size={20} /> },
      { name: "Redis", icon: <SiRedis size={20} /> },
    ],
    frontend: [
      { name: "React", icon: <FaReact size={20} /> },
      { name: "Next.js", icon: <SiNextdotjs size={20} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
      { name: "JavaScript", icon: <SiJavascript size={20} /> },
      { name: "TypeScript", icon: <SiTypescript size={20} /> },
      {
        name: "HTML5 & CSS3",
        icon: (
          <div style={{ display: "flex", gap: "2px" }}>
            <SiHtml5 size={18} />
            <SiCss3 size={18} />
          </div>
        ),
      },
    ],
    devops: [
      { name: "Docker", icon: <FaDocker size={20} /> },
      { name: "Nginx", icon: <SiNginx size={20} /> },
      { name: "CI/CD (GitHub Actions)", icon: <FaGithub size={20} /> },
      { name: "AWS", icon: <SiAmazon size={20} /> },
      { name: "Cloudflare", icon: <SiCloudflare size={20} /> },
      { name: "Linux Server", icon: <FiTerminal size={20} /> },
    ],
  };

  useEffect(() => {
    const activePhrase = phrases[currentPhrase];
    if (!activePhrase) return;

    const timeout = setTimeout(
      () => {
        // 1. Sedang mengetik (menambah karakter)
        if (!isDeleting && currentChar < activePhrase.length) {
          setCurrentChar((prev) => prev + 1);
          setDisplayText(activePhrase.substring(0, currentChar + 1));
        }
        // 2. Sedang menghapus (mengurangi karakter)
        else if (isDeleting && currentChar > 0) {
          setCurrentChar((prev) => prev - 1);
          setDisplayText(activePhrase.substring(0, currentChar - 1));
        }
        // 3. Kondisi transisi (selesai mengetik atau selesai menghapus)
        else {
          // Hanya ganti frasa SETELAH selesai menghapus (currentChar === 0)
          if (isDeleting && currentChar === 0) {
            setIsDeleting(false); // Berhenti menghapus
            setCurrentPhrase((prev) => (prev + 1) % phrases.length); // Pindah ke frasa berikutnya
          }
          // Jika tidak, berarti sudah selesai mengetik, maka mulai hapus
          else {
            setIsDeleting(true); // Mulai menghapus
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [currentChar, currentPhrase, isDeleting]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navigation */}
      <nav className="fixed z-50 w-full border-b border-gray-800 bg-black/70 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text font-mono text-xl font-bold text-transparent">
                bariq@portfolio:~$
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden space-x-8 md:flex">
              <button
                onClick={() => scrollToSection("home")}
                className="font-mono text-gray-300 transition hover:text-white"
              >
                ./home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="font-mono text-gray-300 transition hover:text-white"
              >
                ./about
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="font-mono text-gray-300 transition hover:text-white"
              >
                ./projects
              </button>
              <button
                onClick={() => scrollToSection("tech")}
                className="font-mono text-gray-300 transition hover:text-white"
              >
                ./tech
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="font-mono text-gray-300 transition hover:text-white"
              >
                ./experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="font-mono text-gray-300 transition hover:text-white"
              >
                ./contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMobileMenuOpen ? <BiX size={24} /> : <BiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-b border-gray-800 bg-black/95 px-4 pb-4 backdrop-blur-md md:hidden">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="py-2 text-left font-mono text-gray-300 transition hover:text-white"
              >
                ./home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="py-2 text-left font-mono text-gray-300 transition hover:text-white"
              >
                ./about
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="py-2 text-left font-mono text-gray-300 transition hover:text-white"
              >
                ./projects
              </button>
              <button
                onClick={() => scrollToSection("tech")}
                className="py-2 text-left font-mono text-gray-300 transition hover:text-white"
              >
                ./tech
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="py-2 text-left font-mono text-gray-300 transition hover:text-white"
              >
                ./experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="py-2 text-left font-mono text-gray-300 transition hover:text-white"
              >
                ./contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex min-h-screen items-center pt-16">
        <div className="mx-auto w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-gray-700 bg-gray-950/70 p-8 backdrop-blur-md md:p-12">
            <div className="mb-4 font-mono text-green-400">$ whoami</div>
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              Bariq Firjatullah
            </h1>
            <div className="mb-6 text-2xl font-semibold md:text-3xl">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                {/* Ganti dengan state animasi Anda, misal: "Full-Stack Developer" */}
                {displayText}
              </span>
              <span className="ml-1 inline-block h-6 w-2 animate-pulse bg-green-400"></span>
              <span className="text-gray-400"> | </span>
              <span className="text-gray-300">
                Full-Stack & DevOps Enthusiast
              </span>
            </div>
            <p className="mb-8 max-w-2xl text-lg text-gray-300">
              I build scalable web applications and manage the entire
              development lifecycle, from teaching and curriculum development to
              deploying and maintaining server infrastructure with Docker,
              Nginx, and CI/CD.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="rounded bg-gradient-to-r from-green-400 to-cyan-400 px-6 py-3 font-mono font-bold text-black transition hover:opacity-90"
              >
                view_projects.sh
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="rounded border border-gray-600 px-6 py-3 font-mono font-bold text-gray-300 transition hover:bg-gray-950"
              >
                contact_me.sh
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <MotionWrap>
        <section id="about" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-2 font-mono text-3xl font-bold text-gray-300">
              ./about
            </h2>
            <div className="mb-8 h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-400"></div>

            <div className="grid items-center gap-12 rounded-xl border border-gray-700 bg-gray-950/70 p-8 backdrop-blur-md md:grid-cols-2 md:p-12">
              <div>
                <h3 className="mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
                  Developer & Instructor
                </h3>
                <p className="mb-4 text-gray-300">
                  My journey in technology is driven by a passion for both
                  building and teaching. As a developer, I specialize in
                  creating robust full-stack applications. As an instructor, I
                  enjoy breaking down complex concepts to help others grow.
                </p>
                <p className="mb-4 text-gray-300">
                  This dual role gives me a unique perspective, allowing me to
                  understand technology at a fundamental level while staying
                  focused on practical, real-world applications and efficient
                  development workflows.
                </p>
                <p className="text-gray-300">
                  When I&#39;m not coding or teaching, I&#39;m exploring new
                  DevOps tools, contributing to open-source, or documenting my
                  learning journey.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-green-400 to-cyan-400 opacity-20 blur"></div>
                <div className="relative rounded-xl border border-gray-700 bg-gray-950/70 p-6 backdrop-blur-md">
                  <div className="mb-2 font-mono text-sm text-gray-400">
                    # core_stack.txt
                  </div>
                  <div className="space-y-3">
                    {[
                      "TypeScript & Node.js",
                      "React.js & Next.js",
                      "PHP (Laravel)",
                      "Docker & Nginx",
                      "CI/CD (GitHub Actions)",
                      "SQL & Database Management",
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center">
                        <div className="mr-2 h-3 w-3 rounded-full bg-green-400"></div>
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MotionWrap>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <MotionWrap>
            <h2 className="mb-2 font-mono text-3xl font-bold text-gray-300">
              ./projects
            </h2>
            <div className="mb-8 h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-400"></div>
          </MotionWrap>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <MotionWrap key={project.id} delay={index * 0.1}>
                <div className="h-full rounded-xl border border-gray-700 bg-gray-800/70 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:transform hover:shadow-lg hover:shadow-green-400/10">
                  <div className="mb-4 flex items-center">
                    <h3 className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
                      {project.title}
                    </h3>
                  </div>
                  <p className="mb-4 text-gray-300">{project.description}</p>
                  <div className="mb-4 space-y-1 font-mono text-xs text-gray-400">
                    <div>
                      <span className="text-green-400">Backend:</span>{" "}
                      {project.backend}
                    </div>
                    {project.frontend && (
                      <div>
                        <span className="text-cyan-400">Frontend:</span>{" "}
                        {project.frontend}
                      </div>
                    )}
                    <div>
                      <span className="text-purple-400">DevOps:</span>{" "}
                      {project.devops}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 space-x-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="rounded bg-gray-800 px-3 py-1 font-mono text-xs transition hover:bg-gray-700"
                      >
                        github
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        className="rounded bg-gray-800 px-3 py-1 font-mono text-xs transition hover:bg-gray-700"
                      >
                        demo
                      </a>
                    )}
                    {project.docsUrl && (
                      <a
                        href={project.docsUrl}
                        className="rounded bg-gray-800 px-3 py-1 font-mono text-xs transition hover:bg-gray-700"
                      >
                        docs
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="rounded bg-gray-800 px-3 py-1 font-mono text-xs transition hover:bg-gray-700"
                      >
                        live
                      </a>
                    )}
                  </div>
                </div>
              </MotionWrap>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <MotionWrap>
        <section id="tech" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-2 font-mono text-3xl font-bold text-gray-300">
              ./tech_stack
            </h2>
            <div className="mb-8 h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-400"></div>

            <div className="rounded-xl border border-gray-700 bg-gray-950/70 p-8 backdrop-blur-md">
              <div className="grid gap-8 md:grid-cols-3">
                {/* Kolom Backend */}
                <div>
                  <h3 className="mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text font-mono text-xl font-bold text-transparent">
                    Backend
                  </h3>
                  <div className="space-y-4">
                    {techStack.backend.map((tech) => (
                      <div key={tech.name} className="flex items-center gap-3">
                        <span className="text-green-400">{tech.icon}</span>
                        <span className="text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Kolom Frontend */}
                <div>
                  <h3 className="mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text font-mono text-xl font-bold text-transparent">
                    Frontend
                  </h3>
                  <div className="space-y-4">
                    {techStack.frontend.map((tech) => (
                      <div key={tech.name} className="flex items-center gap-3">
                        <span className="text-cyan-400">{tech.icon}</span>
                        <span className="text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Kolom DevOps */}
                <div>
                  <h3 className="mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text font-mono text-xl font-bold text-transparent">
                    DevOps
                  </h3>
                  <div className="space-y-4">
                    {techStack.devops.map((tech) => (
                      <div key={tech.name} className="flex items-center gap-3">
                        <span className="text-purple-400">{tech.icon}</span>
                        <span className="text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MotionWrap>

      {/* Experience Section */}
      <MotionWrap>
        <section id="experience" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-2 font-mono text-3xl font-bold text-gray-300">
              ./experience
            </h2>
            <div className="mb-8 h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-400"></div>

            <div className="rounded-xl border border-gray-700 bg-gray-950/70 p-8 backdrop-blur-md">
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={exp.id} className="relative pl-8">
                    <div className="absolute top-0 left-0 h-4 w-4 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-green-400 to-cyan-400"></div>
                    {index < experiences.length - 1 && (
                      <div className="absolute top-4 left-0 h-full w-0.5 -translate-x-1/2 transform bg-gradient-to-b from-green-400 to-cyan-400"></div>
                    )}
                    <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
                        {exp.title}
                      </h3>
                      <div className="font-mono text-sm text-gray-400">
                        {exp.period}
                      </div>
                    </div>
                    <div className="mb-2 font-mono text-sm text-cyan-400">
                      {exp.company}
                    </div>
                    <p className="mb-3 text-gray-300">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded bg-gray-950 px-2 py-1 font-mono text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </MotionWrap>

      {/* Contact Section */}
      <MotionWrap>
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-2 font-mono text-3xl font-bold text-gray-300">
              ./contact
            </h2>
            <div className="mb-8 h-1 w-20 bg-gradient-to-r from-green-400 to-cyan-400"></div>

            <div className="grid gap-12 rounded-xl border border-gray-700 bg-gray-950/70 p-8 backdrop-blur-md md:grid-cols-2 md:p-12">
              <div>
                <h3 className="mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
                  Get in Touch
                </h3>
                <p className="mb-6 text-gray-300">
                  Interested in collaborating or have questions about my work?
                  Feel free to reach out through any of the channels below.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-950">
                      <FiMail className="text-green-400" size={20} />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-gray-400">
                        Email
                      </div>
                      <a
                        href="mailto:bariqfirjatullah1803@gmail.com"
                        className="text-gray-300 transition hover:text-white"
                      >
                        bariqfirjatullah1803@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-950">
                      <FaGithub className="text-green-400" size={20} />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-gray-400">
                        GitHub
                      </div>
                      <a
                        href="https://github.com/bariqfirjatullah1803"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 transition hover:text-white"
                      >
                        github.com/bariqfirjatullah1803
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-950">
                      <FaLinkedin className="text-green-400" size={20} />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-gray-400">
                        LinkedIn
                      </div>
                      <a
                        href="https://linkedin.com/in/bariq-firjatullah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 transition hover:text-white"
                      >
                        linkedin.com/in/bariq-firjatullah
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block font-mono text-sm text-gray-400"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded border border-gray-700 bg-gray-950 px-4 py-2 text-white focus:border-transparent focus:ring-2 focus:ring-green-400 focus:outline-none"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block font-mono text-sm text-gray-400"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded border border-gray-700 bg-gray-950 px-4 py-2 text-white focus:border-transparent focus:ring-2 focus:ring-green-400 focus:outline-none"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1 block font-mono text-sm text-gray-400"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded border border-gray-700 bg-gray-950 px-4 py-2 text-white focus:border-transparent focus:ring-2 focus:ring-green-400 focus:outline-none"
                      placeholder="Your message"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded bg-gradient-to-r from-green-400 to-cyan-400 px-6 py-3 font-mono font-bold text-black transition hover:opacity-90"
                  >
                    send_message.sh
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </MotionWrap>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-700 bg-gray-950/70 py-8 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 font-mono text-gray-400 md:mb-0">
              $ echo &#34;© 2023 Bariq Firjatullah. All systems
              operational.&#34;
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 transition hover:text-white">
                <FaGithub size={20} />
              </a>
              <a href="#" className="text-gray-400 transition hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 transition hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 transition hover:text-white">
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioClient;
