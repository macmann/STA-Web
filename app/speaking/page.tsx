"use client";

import { useState } from "react";
import { SectionContainer } from "@/components/SectionContainer";
import { speaking } from "@/data/siteContent";

type GalleryItem = (typeof speaking.gallery)[number];

type CategorizedItem = GalleryItem & {
  category: "Automotive" | "Healthcare" | "Retail" | "Others";
  year?: number;
  baseTitle: string;
  link?: string;
};

const categoryOrder: Array<CategorizedItem["category"]> = ["Automotive", "Healthcare", "Retail", "Others"];

function extractYear(title: string): number | undefined {
  const match = title.match(/\b(20\d{2})\b/);
  return match ? Number(match[1]) : undefined;
}

function normalizeBaseTitle(title: string): string {
  return title
    .replace(/\b20\d{2}\b/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function categorize(title: string): CategorizedItem["category"] {
  const normalized = title.toLowerCase();
  if (/(ev|battery|automotive|mobility)/.test(normalized)) return "Automotive";
  if (/(health|mih|med|care)/.test(normalized)) return "Healthcare";
  if (/retail/.test(normalized)) return "Retail";
  return "Others";
}

function findMatchingLink(baseTitle: string, year?: number): string | undefined {
  const normalizedBase = normalizeBaseTitle(baseTitle).toLowerCase();

  const yearSpecific = speaking.engagements.find((engagement) => {
    const engagementBase = normalizeBaseTitle(engagement.title).toLowerCase();
    const engagementYear = extractYear(engagement.title);
    return engagementBase.includes(normalizedBase) && (!year || engagementYear === year);
  });

  if (yearSpecific?.url) return yearSpecific.url;

  const baseMatch = speaking.engagements.find((engagement) =>
    normalizeBaseTitle(engagement.title).toLowerCase().includes(normalizedBase)
  );

  return baseMatch?.url;
}

function GroupTile({ imageUrl, items, expanded, onToggle }: { imageUrl?: string; items: CategorizedItem[]; expanded: boolean; onToggle?: () => void }) {
  const visibleItems = expanded ? items : items.slice(0, 1);
  const showToggle = items.length > 1;

  const card = (
    <article className="overflow-hidden rounded-2xl border border-steel/20 bg-white/35 p-4 transition hover:border-steel/40 hover:shadow-md">
      <div className="h-48 bg-white/40">
        {imageUrl ? <img src={imageUrl} alt={items[0].baseTitle} className="h-full w-full object-cover" loading="lazy" /> : null}
      </div>
      <div className="mt-4 space-y-2 text-sm text-steel/85">
        {visibleItems.map((item) => (
          <a key={item.title} href={item.link} target="_blank" rel="noreferrer" className="block underline underline-offset-2">
            {item.title}
          </a>
        ))}
        {showToggle ? (
          <button type="button" className="pt-1 text-sm font-medium text-steel underline" onClick={onToggle}>
            {expanded ? "See Less" : "See More"}
          </button>
        ) : null}
      </div>
    </article>
  );

  return <div className="rounded-2xl focus-within:ring-2 focus-within:ring-steel/60">{card}</div>;
}

export default function SpeakingPage() {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  const categorizedItems: CategorizedItem[] = speaking.gallery.map((item) => {
    const year = extractYear(item.title);
    const baseTitle = normalizeBaseTitle(item.title);
    return {
      ...item,
      year,
      baseTitle,
      category: categorize(item.title),
      link: findMatchingLink(baseTitle, year)
    };
  });

  const byCategory = categoryOrder.map((category) => {
    const items = categorizedItems.filter((item) => item.category === category);
    const grouped = Object.values(
      items.reduce<Record<string, CategorizedItem[]>>((acc, item) => {
        acc[item.baseTitle] = [...(acc[item.baseTitle] ?? []), item].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
        return acc;
      }, {})
    );

    return { title: category, groups: grouped };
  });

  return (
    <SectionContainer eyebrow="Voice & Contributions" title="Speaking Engagements" description="Event appearances across ASEAN growth sectors.">
      <div className="space-y-8">
        {byCategory.map((section) => (
          <section key={section.title} className="rounded-2xl border border-steel/20 bg-[#dce5f7] p-6">
          <h3 className="mb-4 font-serif text-3xl">{section.title}</h3>
          <div className="grid gap-5 md:grid-cols-3">
            {section.groups.map((group) => {
              const latest = group[0];
              const groupKey = `${section.title}-${latest.baseTitle}`;
              const expanded = expandedGroups[groupKey] ?? false;

              return (
                <div key={groupKey} className="space-y-2">
                  <GroupTile
                    imageUrl={latest.imageUrl}
                    items={group}
                    expanded={expanded}
                    onToggle={() => setExpandedGroups((prev) => ({ ...prev, [groupKey]: !expanded }))}
                  />
                </div>
              );
            })}
          </div>
          </section>
        ))}
      </div>
    </SectionContainer>
  );
}
