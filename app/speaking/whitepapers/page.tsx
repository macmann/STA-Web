import { SectionContainer } from "@/components/SectionContainer";
import { speaking } from "@/data/siteContent";

export default function WhitepapersPage() {
  const featured = speaking.whitepapers;

  return (
    <SectionContainer eyebrow="Voice & Contributions" title="Whitepaper Publications" description="Strategy papers and sector thought leadership.">
      <section className="rounded-2xl border border-steel/20 bg-[#dce5f7] p-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
          {featured.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="block max-w-[260px] overflow-hidden rounded-md border border-steel/20 bg-white/55 p-3 transition hover:border-steel/40 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-steel/60"
            >
              <article>
                <div className="aspect-[3/4] w-full overflow-hidden rounded-sm border border-steel/15 bg-white/80">
                  {item.imageUrl ? <img src={item.imageUrl} alt={item.title} className="h-full w-full object-contain" /> : null}
                </div>
                <p className="pt-4 text-sm text-steel/85">{item.title}</p>
              </article>
            </a>
          ))}
        </div>
      </section>
    </SectionContainer>
  );
}
