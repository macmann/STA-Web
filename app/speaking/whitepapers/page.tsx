import { SectionContainer } from "@/components/SectionContainer";
import { speaking } from "@/data/siteContent";

export default function WhitepapersPage() {
  const featured = [
    { ...speaking.publications[6], imageUrl: speaking.gallery[7]?.imageUrl },
    { ...speaking.publications[7], imageUrl: "https://i.ibb.co/v4Yw2w3/Nextcontinent-AI-in-Healthcare-Whitepaper.png" }
  ];

  return (
    <SectionContainer eyebrow="Voice & Contributions" title="Whitepaper Publications" description="Strategy papers and sector thought leadership.">
      <section className="rounded-2xl border border-steel/20 bg-[#dce5f7] p-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:max-w-2xl">
          {featured.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-xl border border-steel/20 bg-white/35 transition hover:border-steel/40 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-steel/60"
            >
              <article>
                <div className="h-60 bg-white/40">
                  {item.imageUrl ? <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover" /> : null}
                </div>
                <p className="p-4 text-sm text-steel/85">{item.title}</p>
              </article>
            </a>
          ))}
        </div>
      </section>
    </SectionContainer>
  );
}
