import { SectionContainer } from "@/components/SectionContainer";
import { speaking } from "@/data/siteContent";

export default function MediaPage() {
  return (
    <SectionContainer eyebrow="Voice & Contributions" title="Media Features" description="Selected interviews and features.">
      <section className="rounded-2xl border border-steel/20 bg-[#dce5f7] p-6">
        <h3 className="mb-5 font-serif text-3xl">Healthcare</h3>
        <div className="grid gap-5 md:grid-cols-3">
          {speaking.publications.slice(0, 6).map((item, idx) => (
            <article key={item.url} className="overflow-hidden rounded-xl border border-steel/20 bg-white/35">
              <div className="h-44 bg-white/40">{speaking.gallery[idx] ? <img src={speaking.gallery[idx].imageUrl} alt={item.title} className="h-full w-full object-cover" /> : null}</div>
              <div className="p-4">
                <p className="text-sm text-steel/85">{item.title}</p>
                <a href={item.url} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-steel/85 underline">
                  See More
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SectionContainer>
  );
}
