import { SectionContainer } from "@/components/SectionContainer";
import { profile } from "@/data/siteContent";

export default function ContactPage() {
  return (
    <SectionContainer
      eyebrow="Contact"
      title="Start a strategic conversation"
      description="Connect for advisory engagements, speaking invitations, or collaboration opportunities across ASEAN."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <form className="rounded-xl border border-steel/20 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            <label className="grid gap-2 text-sm text-ink">
              Full name
              <input
                type="text"
                name="name"
                required
                className="rounded-lg border border-steel/30 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm text-ink">
              Email
              <input
                type="email"
                name="email"
                required
                className="rounded-lg border border-steel/30 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
                placeholder="you@company.com"
              />
            </label>
            <label className="grid gap-2 text-sm text-ink">
              Message
              <textarea
                name="message"
                required
                rows={5}
                className="rounded-lg border border-steel/30 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
                placeholder="Tell me about your project or inquiry"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-steel"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="rounded-xl border border-steel/20 bg-mist p-6 text-sm text-steel/85">
          <p>
            <span className="font-semibold text-ink">LinkedIn:</span>{" "}
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="text-accent hover:text-ink">
              linkedin.com/in/shinthantaung
            </a>
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
