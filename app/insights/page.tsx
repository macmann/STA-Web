import { Card } from "@/components/Card";
import { SectionContainer } from "@/components/SectionContainer";
import { insights } from "@/data/siteContent";

export default function InsightsPage() {
  return (
    <SectionContainer
      eyebrow="Insights"
      title="Whitepapers and strategic commentary"
      description="An editorial hub for sector perspectives, executive frameworks, and market intelligence."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {insights.map((item) => (
          <Card key={item.title} title={item.title} subtitle={item.category}>
            <p>{item.excerpt}</p>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
