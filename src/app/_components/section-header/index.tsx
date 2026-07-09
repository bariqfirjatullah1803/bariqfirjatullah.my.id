interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-brand-600 uppercase">
        <span className="h-px w-6 bg-brand-500" />
        {label}
      </p>
      <h2 className="font-display text-3xl leading-tight font-semibold text-ink md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
    </div>
  );
}
