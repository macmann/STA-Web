import { experiences } from "@/data/siteContent";

export function Timeline() {
  return (
    <ol className="space-y-10 border-l border-gray-200 pl-6">
      {experiences.map((item) => (
        <li key={`${item.company}-${item.period}`} className="relative">
          <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-accent" aria-hidden />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-steel/70">{item.period}</p>
          <h3 className="mt-1 font-serif text-2xl text-ink">{item.role}</h3>
          <p className="text-sm font-semibold text-accent">{item.company}</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-steel/85">
            {item.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
