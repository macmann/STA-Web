"use client";

import { SectionContainer } from "@/components/SectionContainer";
import { speaking } from "@/data/siteContent";

type EngagementCard = {
  title: string;
  imageUrl: string;
  linkText: string;
  href?: string;
};

function findGalleryImage(title: string): string {
  return speaking.gallery.find((item) => item.title === title)?.imageUrl ?? "";
}

function findEngagementLink(titlePattern: string): string | undefined {
  return speaking.engagements.find((item) => item.title.toLowerCase().includes(titlePattern.toLowerCase()))?.url;
}

function EngagementGrid({ title, items, highlight = false }: { title: string; items: EngagementCard[]; highlight?: boolean }) {
  return (
    <section className={`rounded-xl border p-4 ${highlight ? "border-[#2a8de4] border-[3px]" : "border-steel/20"}`}>
      <h3 className="mb-4 font-serif text-2xl text-steel/90">{title}</h3>
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <article key={`${title}-${item.title}`} className="overflow-hidden rounded-md border border-steel/20 bg-white/35 p-3">
            <div className="h-44 bg-white/40">
              {item.imageUrl ? <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover" loading="lazy" /> : null}
            </div>
            <div className="mt-3 space-y-2 text-sm text-steel/80">
              <p className="leading-snug">{item.title}</p>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer" className="block underline underline-offset-2">
                  {item.linkText}
                </a>
              ) : (
                <p className="underline underline-offset-2">{item.linkText}</p>
              )}
              <p className="text-right text-xs">See More</p>
              <p className="pt-4 text-right text-xs">See Less</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function SpeakingPage() {
  const automotive: EngagementCard[] = [
    {
      title: "Asia EV Technology Summit 2023",
      imageUrl: "https://i.ibb.co/27F8xt1D/Asia-EV-Technology-Summit-2023-2.jpg",
      linkText: "Asia EV Technology Summit 2023",
      href: findEngagementLink("Asia EV")
    },
    {
      title: "3rd Asia EV Technology Summit Thailand 2025",
      imageUrl: "https://i.ibb.co/fYLN0VQZ/3rd-Asia-EV-Technology-Summit-Thailand-2025.jpg",
      linkText: "3rd Asia EV Technology Summit Thailand 2025",
      href: findEngagementLink("3rd ASEAN Battery Technology Conference 2025")
    },
    {
      title: "ASEAN Battery Technology Conference 2025 - Phuket",
      imageUrl: "https://i.ibb.co/SXZ8xbq8/ASEAN-Battery-Technology-Conference-2025-Phuket.png",
      linkText: "ASEAN Battery Technology Conference 2025 - Phuket",
      href: findEngagementLink("battery")
    }
  ];

  const healthcare: EngagementCard[] = [
    {
      title: "Healthcare Asia Forum Bangkok 2023",
      imageUrl: findGalleryImage("Healthcare Asia Forum Bangkok 2023"),
      linkText: "Healthcare Asia Magazine",
      href: findEngagementLink("healthcare asia")
    },
    {
      title: "Healthcare Asia Summit 2024 (Singapore)",
      imageUrl: findGalleryImage("Healthcare Asia Summit 2024 Singapore"),
      linkText: "Healthcare Asia Summit 2024",
      href: findEngagementLink("healthcare asia summit")
    },
    {
      title: "Future Healthcare Philippines Summit 2024",
      imageUrl: findGalleryImage("Healthcare Asia"),
      linkText: "Future Healthcare Philippines Summit 2024",
      href: findEngagementLink("phil healthcare")
    },
    {
      title: "Malaysia International Healthcare (MIH) Mega Trends 2024",
      imageUrl: findGalleryImage("Malaysia International Healthcare (MIH) Mega Trends 2024"),
      linkText: "Malaysia International Healthcare (MIH) Mega Trends 2024",
      href: findEngagementLink("MIH")
    },
    {
      title: "Malaysia International Healthcare (MIH) Mega Trends 2025",
      imageUrl: findGalleryImage("Malaysia International Healthcare (MIH) Mega Trends 2025"),
      linkText: "Malaysia International Healthcare (MIH) Mega Trends 2025",
      href: findEngagementLink("MIH")
    },
    {
      title: "Fintech Festival Thailand 2023",
      imageUrl: "https://i.ibb.co/gZCFXL7D/Fintech-Festival-Thailand-2023-3.jpg",
      linkText: "Fintech Festival Thailand 2023",
      href: findEngagementLink("YCP")
    }
  ];

  const retail: EngagementCard[] = [
    {
      title: "Retail Asia Summit - Singapore 2023",
      imageUrl: findGalleryImage("Retail Asia"),
      linkText: "Retail Asia Summit - Singapore 2023",
      href: findEngagementLink("YCP")
    },
    {
      title: "Retail Asia Forum - Bangkok 2024",
      imageUrl: findGalleryImage("Retail Asia 2"),
      linkText: "Retail Asia Forum - Bangkok 2024",
      href: findEngagementLink("YCP")
    }
  ];

  const others: EngagementCard[] = [
    {
      title: "Insurance Asia Forum 2024",
      imageUrl: "https://i.ibb.co/j9MyMQjm/Insurance-Asia-Forum-2024.png",
      linkText: "2024 Insurance Asia Forum",
      href: findEngagementLink("Insurance Asia")
    },
    {
      title: "Insurance Summit 2025",
      imageUrl: findGalleryImage("Insurance Asia Forum 2025"),
      linkText: "Asian Banking and Finance",
      href: findEngagementLink("Asian Banking and Finance")
    }
  ];

  return (
    <SectionContainer eyebrow="Voice & Contributions" title="Speaking Engagements">
      <div className="space-y-4 rounded-2xl border border-steel/20 bg-[#dce5f7] p-4">
        <EngagementGrid title="Automotive" items={automotive} />
        <EngagementGrid title="Healthcare" items={healthcare} />
        <EngagementGrid title="Retail" items={retail} highlight />
        <EngagementGrid title="Others" items={others} />
      </div>
    </SectionContainer>
  );
}
