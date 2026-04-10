import { profile } from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-3 px-6 text-sm text-steel/75 md:flex-row md:px-10">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Singapore · Jakarta · Bangkok · Kuala Lumpur</p>
      </div>
    </footer>
  );
}
