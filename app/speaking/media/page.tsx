"use client";

import { useState } from "react";
import { SectionContainer } from "@/components/SectionContainer";
import { speaking } from "@/data/siteContent";

export default function MediaPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const healthcareItems = speaking.publications.filter((item) =>
    ["Healthcare Asia Magazine", "Healthcare Asia (Issuu)"].includes(item.title)
  );
  const retailItems = speaking.publications.filter((item) => item.title === "Retail Asia");
  const imageByTitle: Record<string, string | undefined> = {
    "Healthcare Asia Magazine": speaking.gallery.find((item) => item.title === "Healthcare Asia Magazine")?.imageUrl,
    "Healthcare Asia (Issuu)": speaking.gallery.find((item) => item.title === "Healthcare Asia")?.imageUrl,
    "Retail Asia": speaking.gallery.find((item) => item.title === "Retail Asia")?.imageUrl
  };

  return (
    <SectionContainer eyebrow="Voice & Contributions" title="Media Features" description="Selected interviews and features.">
      <div className="space-y-8">
        <section className="rounded-2xl border border-steel/20 bg-[#dce5f7] p-6">
          <h3 className="mb-5 font-serif text-3xl">Healthcare</h3>
          <div className="grid gap-5 md:grid-cols-3">
            <article className="overflow-hidden rounded-xl border border-steel/20 bg-white/35 p-4 transition hover:border-steel/40 hover:shadow-md">
              <div className="h-44 bg-white/40">{imageByTitle[healthcareItems[0]?.title] ? <img src={imageByTitle[healthcareItems[0].title]} alt="Healthcare" className="h-full w-full object-cover" /> : null}</div>
              <div className="mt-4 space-y-2 text-sm text-steel/85">
                {(expandedSections.healthcare ? healthcareItems : healthcareItems.slice(0, 1)).map((item) => (
                  <a key={item.url} href={item.url} target="_blank" rel="noreferrer" className="block underline underline-offset-2">
                    {item.title}
                  </a>
                ))}
                {healthcareItems.length > 1 ? (
                  <button type="button" className="text-sm font-medium text-steel underline" onClick={() => setExpandedSections((prev) => ({ ...prev, healthcare: !prev.healthcare }))}>
                    {expandedSections.healthcare ? "See Less" : "See More"}
                  </button>
                ) : null}
              </div>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-steel/20 bg-[#dce5f7] p-6">
          <h3 className="mb-5 font-serif text-3xl">Retail</h3>
          <div className="grid gap-5 md:grid-cols-3">
            <article className="overflow-hidden rounded-xl border border-steel/20 bg-white/35 p-4 transition hover:border-steel/40 hover:shadow-md">
              <div className="h-44 bg-white/40">{imageByTitle[retailItems[0]?.title] ? <img src={imageByTitle[retailItems[0].title]} alt="Retail" className="h-full w-full object-cover" /> : null}</div>
              <div className="mt-4 space-y-2 text-sm text-steel/85">
                {(expandedSections.retail ? retailItems : retailItems.slice(0, 1)).map((item) => (
                  <a key={item.url} href={item.url} target="_blank" rel="noreferrer" className="block underline underline-offset-2">
                    {item.title}
                  </a>
                ))}
              </div>
            </article>
          </div>
        </section>
        </div>
    </SectionContainer>
  );
}
