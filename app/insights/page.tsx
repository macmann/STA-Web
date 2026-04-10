import { Card } from "@/components/Card";
import { SectionContainer } from "@/components/SectionContainer";
import { insights } from "@/data/siteContent";

const insightCategories = ["Healthcare", "Automotive / EV", "Financial Services"] as const;

export default function InsightsPage() {
  return (
    <SectionContainer
      eyebrow="Insights"
      title="Sector intelligence and executive briefings"
      description="Upcoming publications organized by priority sectors."
    >
      <div className="space-y-8">
        {insightCategories.map((category) => {
          const categoryItems = insights.filter((item) => item.category === category);
          return (
            <section key={category} className="space-y-4">
              <h3 className="font-serif text-2xl text-ink">{category}</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {categoryItems.map((item) => (
                  <Card key={item.title} title={item.title} subtitle={item.status}>
                    <p>{item.excerpt}</p>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </SectionContainer>
  );
}
