import { SectionContainer } from "@/components/SectionContainer";
import { speaking } from "@/data/siteContent";

export default function WhitepapersPage() {
  return (
    <SectionContainer eyebrow="Voice & Contributions" title="Whitepaper Publications" description="Strategy papers and sector thought leadership.">
      <section className="rounded-2xl border border-steel/20 bg-[#dce5f7] p-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {speaking.publications.slice(0, 10).map((item, idx) => (
            <article key={item.url} className="overflow-hidden rounded-xl border border-steel/20 bg-white/35">
              <div className="h-60 bg-white/40">
                {speaking.gallery[idx] ? <img src={speaking.gallery[idx].imageUrl} alt={item.title} className="h-full w-full object-cover" /> : null}
              </div>
              <p className="p-4 text-sm text-steel/85">{item.title}</p>
            </article>
          ))}
        </div>
      </section>
    </SectionContainer>
  );
}
