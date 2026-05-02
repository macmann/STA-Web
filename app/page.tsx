import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SectionContainer } from "@/components/SectionContainer";
import { biography } from "@/data/siteContent";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section
        className="section-spacing border-b border-steel/15 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(232, 238, 246, 0.84), rgba(232, 238, 246, 0.84)), url('https://i.ibb.co/4ZBhPbMy/bg.jpg')"
        }}
      >
        <SectionContainer
          eyebrow="Value Proposition"
          title="Advisory support for strategic moves that require precision"
          description="Supporting executive teams and investors with actionable strategy across ASEAN markets."
          className="!py-0"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "50+ consulting projects delivered across ASEAN markets",
              "10+ years of emerging market consulting experience",
              "Cross-industry advisory spanning healthcare, automotive, financial services, energy, and technology"
            ].map((item) => (
              <p key={item} className="rounded-lg border border-steel/20 bg-white/35 p-5 text-sm leading-7 text-steel/85">
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
      </section>
      <SectionContainer
        eyebrow="About"
        title="Professional background"
        description={biography.positioning}
      >
        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div className="overflow-hidden rounded-xl border border-steel/20 bg-mist">
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
