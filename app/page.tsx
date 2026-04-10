import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionContainer } from "@/components/SectionContainer";

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
    </>
  );
}
