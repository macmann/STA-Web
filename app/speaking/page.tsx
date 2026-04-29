import { SectionContainer } from "@/components/SectionContainer";
import { speaking } from "@/data/siteContent";

function Tile({ title, imageUrl, link }: { title: string; imageUrl?: string; link?: string }) {
  const card = (
    <article className="overflow-hidden rounded-2xl border border-steel/20 bg-white/35 transition hover:border-steel/40 hover:shadow-md">
      <div className="h-48 bg-white/40">
        {imageUrl ? <img src={imageUrl} alt={title} className="h-full w-full object-cover" loading="lazy" /> : null}
      </div>
      <div className="p-4 text-sm text-steel/85">
        <p className="min-h-12">{title}</p>
      </div>
    </article>
  );

  if (!link) return card;

  return (
    <a href={link} target="_blank" rel="noreferrer" className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-steel/60">
      {card}
    </a>
  );
}

export default function SpeakingPage() {
  return (
    <SectionContainer
      eyebrow="Voice & Contributions"
      title="Speaking Engagements"
      description="Event appearances across ASEAN growth sectors."
    >
      <section className="rounded-2xl border border-steel/20 bg-[#dce5f7] p-6">
        <h3 className="mb-4 font-serif text-3xl">Automotive</h3>
        <div className="grid gap-5 md:grid-cols-3">
          {speaking.gallery.slice(2, 8).map((item, idx) => (
            <Tile key={item.title} title={item.title} imageUrl={item.imageUrl} link={speaking.engagements[idx % speaking.engagements.length]?.url} />
          ))}
        </div>
      </section>
    </SectionContainer>
  );
}
