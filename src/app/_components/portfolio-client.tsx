"use client";

import React, { useState, useEffect } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
  FiDownload,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MotionWrap from "@/app/_components/motion-wrap";
import SectionHeader from "@/app/_components/section-header";
import PortfolioNavbar from "@/app/_components/portfolio-navbar";
import AboutSection from "@/app/_components/about-section";
import {
  heroPhrases,
  heroTagline,
  statusBadge,
  projects,
  experiences,
  education,
  certifications,
  skillCategories,
  contactInfo,
  siteCopy,
} from "@/app/_components/portfolio-data";

type FormStatus = "idle" | "loading" | "success" | "error";

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-md border border-brand-100 bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">
    {children}
  </span>
);

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(15,28,46,0.04)] md:p-8 ${className}`}
  >
    {children}
  </div>
);

const PortfolioClient: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    const activePhrase = heroPhrases[currentPhrase];
    if (!activePhrase) return;

    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentChar < activePhrase.length) {
          setCurrentChar((prev) => prev + 1);
          setDisplayText(activePhrase.substring(0, currentChar + 1));
        } else if (isDeleting && currentChar > 0) {
          setCurrentChar((prev) => prev - 1);
          setDisplayText(activePhrase.substring(0, currentChar - 1));
        } else if (isDeleting && currentChar === 0) {
          setIsDeleting(false);
          setCurrentPhrase((prev) => (prev + 1) % heroPhrases.length);
        } else {
          setIsDeleting(true);
        }
      },
      isDeleting ? 40 : 90,
    );

    return () => clearTimeout(timeout);
  }, [currentChar, currentPhrase, isDeleting]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 72;
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      setFormStatus("error");
      return;
    }

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${contactInfo.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _subject: `Portfolio inquiry from ${name}`,
            _template: "table",
          }),
        },
      );

      if (!response.ok) throw new Error("Failed to send");

      setFormStatus("success");
      form.reset();
    } catch {
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`,
      );
      window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
      setFormStatus("idle");
    }
  };

  const renderProjectCard = (project: (typeof projects)[0]) => (
    <Card key={project.id} className="flex h-full flex-col">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          {project.category && (
            <div className="mb-2">
              <Tag>{project.category}</Tag>
            </div>
          )}
          <h3 className="font-display text-xl font-semibold text-ink">
            {project.title}
          </h3>
          {project.company && (
            <p className="mt-1 text-sm text-ink-muted">{project.company}</p>
          )}
        </div>
        <span className="shrink-0 text-xs font-medium text-ink-muted/80">
          {project.period}
        </span>
      </div>
      <p className="mb-5 text-sm leading-relaxed text-ink-muted">
        {project.description}
      </p>
      <ul className="mb-5 space-y-2 text-sm text-ink-muted">
        {project.responsibilities.slice(0, 3).map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mb-4 text-xs text-ink-muted/70">Team: {project.teamSize}</p>
      <div className="mt-auto flex flex-wrap items-center gap-2">
        {project.tools.slice(0, 5).map((tool) => (
          <Tag key={tool}>{tool}</Tag>
        ))}
        {project.tools.length > 5 && (
          <span className="text-xs text-ink-muted">
            +{project.tools.length - 5} more
          </span>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-700 transition hover:text-brand-600"
          >
            Visit
            <FiArrowUpRight size={14} />
          </a>
        )}
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-surface-muted text-ink">
      <PortfolioNavbar
        isOpen={isMobileMenuOpen}
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onNavigate={scrollToSection}
        cvUrl={contactInfo.cvUrl}
        linkedinUrl={contactInfo.linkedin}
      />

      <section
        id="home"
        className="relative overflow-hidden border-b border-slate-200/70 bg-white pt-16"
      >
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-slate-100 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {statusBadge}
            </span>

            <h1 className="font-display mb-4 text-5xl leading-[1.05] font-semibold text-ink md:text-6xl lg:text-7xl">
              Bariq Firjatullah
            </h1>
            <p className="mb-5 text-xl font-medium text-brand-700 md:text-2xl">
              {displayText}
              <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-brand-500 align-middle" />
            </p>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              {heroTagline}
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                <FaLinkedin size={16} />
                Connect on LinkedIn
              </a>
              <a
                href={contactInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand-200 hover:bg-brand-50"
              >
                <FiDownload size={16} />
                Download CV
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand-200 hover:bg-brand-50"
              >
                Send a Message
              </button>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-muted">
              <a
                href={contactInfo.phoneHref}
                className="inline-flex items-center gap-2 transition hover:text-brand-700"
              >
                <FiPhone size={15} />
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 transition hover:text-brand-700"
              >
                <FiMail size={15} />
                {contactInfo.email}
              </a>
              <span className="inline-flex items-center gap-2">
                <FiMapPin size={15} />
                {contactInfo.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      <MotionWrap>
        <section
          id="experience"
          className="border-y border-slate-200/70 bg-white py-24"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeader
              label={siteCopy.experience.label}
              title={siteCopy.experience.title}
              description={siteCopy.experience.description}
            />
            <div className="relative space-y-0">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative grid gap-4 border-l-2 border-brand-100 py-8 pl-8 md:grid-cols-[180px_1fr] md:gap-8 md:pl-10"
                >
                  <span className="absolute top-10 left-0 h-3 w-3 -translate-x-[7px] rounded-full border-2 border-white bg-brand-600" />
                  {index < experiences.length - 1 && (
                    <span className="absolute top-10 left-0 h-full w-0.5 -translate-x-px bg-brand-100" />
                  )}
                  <div>
                    <p className="text-sm font-semibold text-brand-700">
                      {exp.period}
                    </p>
                  </div>
                  <Card className="p-6 md:p-7">
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {exp.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-brand-600">
                      {exp.company}
                    </p>
                    <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-ink-muted">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </MotionWrap>

      <MotionWrap>
        <section id="skills" className="py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeader
              label={siteCopy.skills.label}
              title={siteCopy.skills.title}
              description={siteCopy.skills.description}
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skillCategories.map((category) => (
                <Card key={category.name}>
                  <h3 className="mb-4 font-display text-lg font-semibold text-ink">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </MotionWrap>

      <section
        id="projects"
        className="border-y border-slate-200/70 bg-white py-24"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <MotionWrap>
            <SectionHeader
              label={siteCopy.projects.label}
              title={siteCopy.projects.title}
              description={siteCopy.projects.description}
            />
          </MotionWrap>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <MotionWrap key={project.id} delay={index * 0.04}>
                {renderProjectCard(project)}
              </MotionWrap>
            ))}
          </div>
        </div>
      </section>

      <MotionWrap>
        <section id="education" className="py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeader
              label={siteCopy.education.label}
              title={siteCopy.education.title}
              description={siteCopy.education.description}
            />
            <div className="grid gap-5 md:grid-cols-2">
              <Card>
                <h3 className="mb-6 text-sm font-semibold tracking-wide text-brand-600 uppercase">
                  Education
                </h3>
                {education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                      <h4 className="font-display text-lg font-semibold text-ink">
                        {edu.school}
                      </h4>
                      <span className="text-sm text-ink-muted">
                        {edu.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-ink-muted">{edu.degree}</p>
                  </div>
                ))}
              </Card>
              <Card>
                <h3 className="mb-6 text-sm font-semibold tracking-wide text-brand-600 uppercase">
                  Certifications
                </h3>
                <div className="space-y-5">
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5 last:border-0 last:pb-0"
                    >
                      <div>
                        <h4 className="font-medium text-ink">{cert.name}</h4>
                        <p className="mt-1 text-sm text-ink-muted">
                          {cert.issuer}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                        {cert.year}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>
      </MotionWrap>

      <MotionWrap>
        <section
          id="contact"
          className="border-t border-slate-200/70 bg-gradient-to-b from-brand-50/40 to-surface-muted py-24 pb-32"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeader
              label={siteCopy.contact.label}
              title={siteCopy.contact.title}
              description={siteCopy.contact.description}
              align="center"
            />
            <div className="grid gap-6 lg:grid-cols-5">
              <Card className="lg:col-span-2">
                <h3 className="mb-6 font-display text-xl font-semibold text-ink">
                  Reach me directly
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: <FaLinkedin size={18} />,
                      label: "LinkedIn",
                      value: "linkedin.com/in/bariq-firjatullah",
                      href: contactInfo.linkedin,
                    },
                    {
                      icon: <FiMail size={18} />,
                      label: "Email",
                      value: contactInfo.email,
                      href: `mailto:${contactInfo.email}`,
                    },
                    {
                      icon: <FiPhone size={18} />,
                      label: "Phone",
                      value: contactInfo.phone,
                      href: contactInfo.phoneHref,
                    },
                    {
                      icon: <FiDownload size={18} />,
                      label: "CV / Resume",
                      value: "Download PDF",
                      href: contactInfo.cvUrl,
                    },
                    {
                      icon: <FaGithub size={18} />,
                      label: "GitHub",
                      value: "github.com/bariqfirjatullah1803",
                      href: contactInfo.github,
                    },
                    {
                      icon: <FiMapPin size={18} />,
                      label: "Location",
                      value: contactInfo.location,
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-wide text-ink-muted uppercase">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-0.5 text-sm font-medium text-ink transition hover:text-brand-700"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-sm font-medium text-ink">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="lg:col-span-3">
                <h3 className="mb-6 font-display text-xl font-semibold text-ink">
                  Send a message
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-ink"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-300 focus:bg-white focus:ring-2 focus:ring-brand-100"
                      placeholder="Your name"
                      required
                      disabled={formStatus === "loading"}
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-ink"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-300 focus:bg-white focus:ring-2 focus:ring-brand-100"
                      placeholder="your@email.com"
                      required
                      disabled={formStatus === "loading"}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-ink"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-300 focus:bg-white focus:ring-2 focus:ring-brand-100"
                      placeholder="Tell me about the role, project, or opportunity..."
                      required
                      disabled={formStatus === "loading"}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={formStatus === "loading"}
                      className="w-full rounded-full bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                    >
                      {formStatus === "loading"
                        ? "Sending..."
                        : "Send Message"}
                    </button>
                    {formStatus === "success" && (
                      <p className="mt-3 text-sm font-medium text-emerald-600">
                        Message sent! I&apos;ll get back to you soon.
                      </p>
                    )}
                    {formStatus === "error" && (
                      <p className="mt-3 text-sm font-medium text-red-600">
                        Something went wrong. Please email me directly at{" "}
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="underline"
                        >
                          {contactInfo.email}
                        </a>
                      </p>
                    )}
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </MotionWrap>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
          <p className="text-sm text-ink-muted">
            © 2026 Bariq Firjatullah · Full-Stack Developer · Malang, Indonesia
          </p>
          <div className="flex gap-4">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition hover:text-brand-700"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition hover:text-brand-700"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-ink-muted transition hover:text-brand-700"
            >
              <FiMail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioClient;
