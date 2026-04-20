import { SectionContainer } from "@/components/SectionContainer";
import { profile } from "@/data/siteContent";

export default function ContactPage() {
  return (
    <SectionContainer
      eyebrow="Contact"
      title="Start a strategic conversation"
      description="Connect for advisory engagements, speaking invitations, or collaboration opportunities across ASEAN."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 rounded-xl border border-steel/20 bg-mist p-6 text-sm text-steel/85">
          <p>
            <span className="font-semibold text-ink">Email:</span> {profile.contact.email}
          </p>
          <p>
            <span className="font-semibold text-ink">LinkedIn:</span>{" "}
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="text-accent hover:text-ink">
              linkedin.com/in/shinthantaung
            </a>
          </p>
        </div>
        <form className="space-y-4 rounded-xl border border-steel/20 p-6" aria-label="Contact form">
          <label className="block text-sm">
            Name
            <input type="text" className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2" />
          </label>
          <label className="block text-sm">
            Email
            <input type="email" className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2" />
          </label>
          <label className="block text-sm">
            Message
            <textarea className="mt-2 min-h-28 w-full rounded-md border border-gray-300 px-3 py-2" />
          </label>
          <button type="submit" className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white hover:bg-steel">
            Send inquiry
          </button>
        </form>
      </div>
    </SectionContainer>
  );
}
