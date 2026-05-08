import { SectionContainer } from "@/components/SectionContainer";
import { speaking } from "@/data/siteContent";

export default function WhitepapersPage() {
  const featured = speaking.whitepapers;

  return (
    <SectionContainer eyebrow="Voice & Contributions" title="Whitepaper Publications" description="Strategy papers and sector thought leadership.">
      <section className="rounded-2xl border border-steel/20 bg-[#dce5f7] p-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
          {featured.map((item) => (
            <article
              key={item.url}
              className="block max-w-[260px] overflow-hidden rounded-md border border-steel/20 bg-white/55 p-3 transition hover:border-steel/40 hover:shadow-md"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${item.title} whitepaper`}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-steel/60"
              >
                <div className="aspect-[2/3] w-full overflow-hidden rounded-sm border border-steel/15 bg-white/80">
                  {item.imageUrl ? <img src={item.imageUrl} alt={item.title} className="h-full w-full object-contain" /> : null}
                </div>
              </a>
              <div className="pt-4 text-sm text-steel/85">
                <p>{item.title}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block font-medium text-steel underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-steel/60"
                >
                  Read whitepaper
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SectionContainer>
  );
}
