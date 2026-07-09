"use client";

import { BiMenu, BiX } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

interface PortfolioNavbarProps {
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: (sectionId: string) => void;
  cvUrl: string;
  linkedinUrl: string;
}

export default function PortfolioNavbar({
  isOpen,
  onToggle,
  onNavigate,
  cvUrl,
  linkedinUrl,
}: PortfolioNavbarProps) {
  return (
    <nav className="fixed z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <button
            onClick={() => onNavigate("home")}
            className="font-display text-lg font-semibold text-ink"
          >
            Bariq<span className="text-brand-600">.</span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-brand-200 hover:bg-brand-50 sm:inline-flex"
            >
              <FiDownload size={14} />
              CV
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600 sm:inline-flex"
            >
              <FaLinkedin size={14} />
              LinkedIn
            </a>
            <button
              onClick={onToggle}
              className="rounded-lg p-2 text-ink-muted transition hover:bg-slate-100 lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <BiX size={22} /> : <BiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-ink-muted transition hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </button>
            ))}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white"
            >
              <FaLinkedin size={14} />
              Connect on LinkedIn
            </a>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-ink"
            >
              <FiDownload size={14} />
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
