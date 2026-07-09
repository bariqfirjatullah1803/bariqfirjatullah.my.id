"use client";

import { FiCode, FiDatabase, FiLayers, FiServer } from "react-icons/fi";
import MotionWrap from "@/app/_components/motion-wrap";
import SectionHeader from "@/app/_components/section-header";
import { aboutContent, siteCopy } from "@/app/_components/portfolio-data";

const highlights = [
  { icon: FiLayers, ...aboutContent.whyHireMe[0]! },
  { icon: FiDatabase, ...aboutContent.whyHireMe[1]! },
  { icon: FiServer, ...aboutContent.whyHireMe[2]! },
  { icon: FiCode, ...aboutContent.whyHireMe[3]! },
];

export default function AboutSection() {
  const [lead, ...rest] = aboutContent.paragraphs;

  return (
    <MotionWrap>
      <section
        id="about"
        className="relative overflow-hidden py-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-brand-50)_0%,_transparent_55%)]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-brand-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader
            label={siteCopy.about.label}
            title={siteCopy.about.title}
            description={siteCopy.about.description}
          />

          <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,28,46,0.06)] backdrop-blur-sm md:p-12">
            <div className="mb-10 max-w-3xl">
              <p className="font-display mb-6 text-2xl leading-snug font-medium text-ink md:text-3xl">
                {lead}
              </p>
              <div className="space-y-5 border-t border-slate-100 pt-8">
                {rest.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-relaxed text-ink-muted md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="relative mb-10">
              <div className="absolute inset-0 flex items-center" aria-hidden>
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm font-semibold tracking-wide text-brand-600 uppercase">
                  What I bring to the table
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group flex gap-5 rounded-2xl border border-slate-100 bg-slate-50/60 p-5 transition duration-300 hover:border-brand-200 hover:bg-brand-50/50 hover:shadow-md md:items-center md:p-6"
                  >
                    <div className="flex shrink-0 items-center gap-4">
                      <span className="font-display text-3xl font-semibold text-brand-200 transition group-hover:text-brand-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700 text-white shadow-sm transition group-hover:scale-105">
                        <Icon size={22} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </MotionWrap>
  );
}
