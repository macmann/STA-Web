import { SectionContainer } from "@/components/SectionContainer";
import { speaking } from "@/data/siteContent";

const articleAndMediaFeatures = [...speaking.publications, ...speaking.media];
const speakingGroups = [
  {
    title: "Articles & Media Features",
    items: articleAndMediaFeatures
  },
  {
    title: "Speaking Engagements",
    items: speaking.engagements
  }
];

export default function SpeakingPage() {
  return (
    <SectionContainer
      eyebrow="Speaking & Media"
      title="Featured articles, media, and engagements"
      description="Selected platforms and events featuring Shin Thant Aung's sector perspectives. Each title links directly to its source."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {speakingGroups.map((group) => (
          <section key={group.title} className="rounded-xl border border-steel/20 bg-white/70 p-6 shadow-sm">
            <h3 className="font-serif text-xl text-ink">{group.title}</h3>
            <ul className="mt-5 space-y-3 text-sm text-steel/85">
              {group.items.map((item) => (
                <li key={item.url}>
                  <a
                    className="block rounded-lg border border-steel/15 px-4 py-3 font-medium text-ink underline-offset-4 hover:border-accent hover:text-accent hover:underline"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </SectionContainer>
  );
}
