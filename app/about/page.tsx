import { SectionContainer } from "@/components/SectionContainer";
import { biography } from "@/data/siteContent";

export default function AboutPage() {
  return (
    <SectionContainer
      eyebrow="About"
      title="Professional Biography"
      description={biography.positioning}
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(241,245,249,0.86), rgba(241,245,249,0.86)), url('https://i.ibb.co/bjJdfp7L/Malaysia-International-Healthcare-MIH-Mega-Trends-2025.jpg')",
      }}
    >
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-steel/90">
          {biography.summary.map((paragraph) => (
            <p key={paragraph} className="leading-8">
              {paragraph}
            </p>
          ))}
        </div>
        <aside className="rounded-xl border border-steel/20 bg-mist/90 p-6 backdrop-blur-[1px]">
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
