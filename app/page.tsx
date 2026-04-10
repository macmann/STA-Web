import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionContainer } from "@/components/SectionContainer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionContainer
        eyebrow="Trusted by Leaders"
        title="Designed for high-consequence decisions"
        description="I partner with C-suites, investors, and boards to make strategic moves that hold up under pressure."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Portfolio and growth strategy for regional expansion",
            "Commercial due diligence and investment thesis validation",
            "Transformation programs with measurable value delivery"
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
