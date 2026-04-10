import { ReactNode } from "react";

type SectionContainerProps = {
  title?: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
};

export function SectionContainer({ title, eyebrow, description, children }: SectionContainerProps) {
  return (
    <section className="section-spacing">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        {(title || eyebrow || description) && (
          <header className="mb-10 max-w-3xl space-y-3">
            {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>}
            {title && <h2 className="font-serif text-3xl text-ink md:text-4xl">{title}</h2>}
            {description && <p className="text-base text-steel/80 md:text-lg">{description}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
