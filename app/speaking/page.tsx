import { SectionContainer } from "@/components/SectionContainer";
import { speaking } from "@/data/siteContent";

export default function SpeakingPage() {
  return (
    <SectionContainer
      eyebrow="Speaking & Media"
      title="Publications, media features, and speaking engagements"
      description="Selected platforms and events featuring Shin Thant Aung's sector perspectives."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-xl border border-gray-200 p-6">
          <h3 className="font-serif text-xl text-ink">Publications</h3>
          <ul className="mt-4 space-y-2 text-sm text-steel/85">
            {speaking.publications.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-xl border border-gray-200 p-6">
          <h3 className="font-serif text-xl text-ink">Media Features</h3>
          <ul className="mt-4 space-y-2 text-sm text-steel/85">
            {speaking.media.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-xl border border-gray-200 p-6">
          <h3 className="font-serif text-xl text-ink">Speaking Engagements</h3>
          <ul className="mt-4 space-y-2 text-sm text-steel/85">
            {speaking.engagements.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </div>
    </SectionContainer>
  );
}
