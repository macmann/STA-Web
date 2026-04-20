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
        <article className="rounded-xl border border-steel/20 p-6">
          <h3 className="font-serif text-xl text-ink">Publications</h3>
          <ul className="mt-4 space-y-2 text-sm text-steel/85">
            {speaking.publications.map((item) => (
              <li key={item.url}>
                •{" "}
                <a className="underline-offset-2 hover:underline" href={item.url} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-xl border border-steel/20 p-6">
          <h3 className="font-serif text-xl text-ink">Media Features</h3>
          <ul className="mt-4 space-y-2 text-sm text-steel/85">
            {speaking.media.map((item) => (
              <li key={item.url}>
                •{" "}
                <a className="underline-offset-2 hover:underline" href={item.url} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-xl border border-steel/20 p-6">
          <h3 className="font-serif text-xl text-ink">Speaking Engagements</h3>
          <ul className="mt-4 space-y-2 text-sm text-steel/85">
            {speaking.engagements.map((item) => (
              <li key={item.url}>
                •{" "}
                <a className="underline-offset-2 hover:underline" href={item.url} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </div>
      <article className="mt-8 rounded-xl border border-steel/20 p-6">
        <h3 className="font-serif text-xl text-ink">Photo Gallery</h3>
        <p className="mt-2 text-sm text-steel/85">Highlights from featured media and speaking events.</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {speaking.gallery.map((item) => (
            <figure key={item.imageUrl} className="overflow-hidden rounded-lg border border-steel/20 bg-white">
              <img alt={item.title} className="h-48 w-full object-cover" loading="lazy" src={item.imageUrl} />
              <figcaption className="p-3 text-xs text-steel/85">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </article>
    </SectionContainer>
  );
}
