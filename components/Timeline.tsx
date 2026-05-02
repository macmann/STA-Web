import { experiences } from "@/data/siteContent";

export function Timeline() {
  return (
    <ol className="space-y-3 border-l border-[#c9d4e5] pl-6">
      {experiences.map((item) => (
        <li key={`${item.company}-${item.period}`} className="relative bg-[#d9e2f0]/70 px-5 py-4">
          <span className="absolute -left-[31px] top-3 h-2.5 w-2.5 rounded-full bg-[#1e4ed8]" aria-hidden />
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#49576d]">{item.period}</p>
          <h3 className="mt-1 font-serif text-[2rem]/[1.15] text-[#1f2937] md:text-[2.05rem]">{item.role}</h3>
          <p className="text-sm font-semibold text-[#1f4fc9]">{item.company}</p>
          <ul className="mt-3 space-y-1.5 pl-5 text-sm text-[#364152]">
            {item.achievements.map((achievement) => (
              <li key={achievement} className="list-disc">{achievement}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
