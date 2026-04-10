import { SectionContainer } from "@/components/SectionContainer";
import { biography } from "@/data/siteContent";

export default function AboutPage() {
  return (
    <SectionContainer eyebrow="About" title="Professional Biography" description={biography.positioning}>
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-steel/85">
          {biography.summary.map((paragraph) => (
            <p key={paragraph} className="leading-8">
              {paragraph}
            </p>
          ))}
        </div>
        <aside className="rounded-xl border border-gray-200 bg-mist p-6">
          <h3 className="font-serif text-2xl text-ink">Education</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-steel/85">
            {biography.education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </SectionContainer>
  );
}
