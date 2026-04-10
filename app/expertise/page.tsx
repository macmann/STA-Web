import { Card } from "@/components/Card";
import { SectionContainer } from "@/components/SectionContainer";
import { industries } from "@/data/siteContent";

export default function ExpertisePage() {
  return (
    <SectionContainer
      eyebrow="Expertise"
      title="Sector depth with functional precision"
      description="Focused advisory across industries where strategic clarity and disciplined execution define market leadership."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {industries.map((industry) => (
          <Card key={industry.name} title={industry.name}>
            <ul className="list-disc space-y-2 pl-5">
              {industry.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
