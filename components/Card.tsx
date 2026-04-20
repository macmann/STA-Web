import { ReactNode } from "react";

type CardProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export function Card({ title, subtitle, children }: CardProps) {
  return (
    <article className="rounded-xl border border-steel/20 bg-white p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1">
      <h3 className="font-serif text-2xl text-ink">{title}</h3>
      {subtitle && <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{subtitle}</p>}
      {children && <div className="mt-4 text-sm leading-7 text-steel/85">{children}</div>}
    </article>
  );
}
