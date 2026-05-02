import { SectionContainer } from "@/components/SectionContainer";
import { profile } from "@/data/siteContent";

export default function ContactPage() {
  return (
    <SectionContainer
      eyebrow="Contact"
      title="Start a strategic conversation"
      description="Connect for advisory engagements, speaking invitations, or collaboration opportunities across ASEAN."
    >
      <div className="rounded-xl border border-steel/20 bg-mist p-6 text-sm text-steel/85">
        <p>
          <span className="font-semibold text-ink">LinkedIn:</span>{" "}
          <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="text-accent hover:text-ink">
            linkedin.com/in/shinthantaung
          </a>
        </p>
      </div>
    </SectionContainer>
  );
}
