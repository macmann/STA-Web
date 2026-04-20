import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SectionContainer } from "@/components/SectionContainer";
import { biography } from "@/data/siteContent";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionContainer
        eyebrow="Value Proposition"
        title="Advisory support for strategic moves that require precision"
        description="Supporting executive teams and investors with actionable strategy across ASEAN markets."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "50+ consulting projects delivered across ASEAN markets",
            "10+ years of emerging market consulting experience",
            "Cross-industry advisory spanning healthcare, automotive, financial services, energy, and technology"
          ].map((item) => (
            <p key={item} className="rounded-lg border border-gray-200 p-5 text-sm leading-7 text-steel/85">
              {item}
            </p>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/experience" className="text-sm font-semibold text-accent hover:text-ink">
            View full experience →
          </Link>
        </div>
      </SectionContainer>
      <SectionContainer
        eyebrow="About"
        title="Professional background"
        description={biography.positioning}
      >
        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-mist">
            <Image
              src="https://i.ibb.co/C3gcFdy5/MIH-Megatrends-2024.jpg"
              alt="Shin Thant Aung speaking at MIH Megatrends 2024"
              width={1200}
              height={900}
              unoptimized
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-5 text-steel/85">
            {biography.summary.slice(0, 2).map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
            <Link href="/about" className="inline-flex text-sm font-semibold text-accent hover:text-ink">
              Read full biography →
            </Link>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
