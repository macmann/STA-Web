"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/siteContent";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Experience", "/experience"],
  ["Expertise", "/expertise"],
  ["Insights", "/insights"],
  ["Contact", "/contact"]
] as const;

const voiceItems = [
  ["Speaking Engagements", "/speaking"],
  ["Media Features", "/speaking/media"],
  ["Whitepaper Publications", "/speaking/whitepapers"]
] as const;

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-accent/30 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        <Link href="/" className="font-serif text-xl leading-none text-white md:text-2xl">
          {profile.name}
        </Link>
        <nav>
          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map(([label, href]) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link href={href} className={`text-sm ${active ? "text-white" : "text-white/70 hover:text-white"}`}>
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="group relative">
              <Link
                href="/speaking"
                className={`text-sm ${pathname.startsWith("/speaking") ? "text-white" : "text-white/70 hover:text-white"}`}
              >
                Voice & Contributions
              </Link>
              <div className="invisible absolute right-0 top-full mt-2 w-64 border border-steel/20 bg-white opacity-0 shadow-soft transition-all group-hover:visible group-hover:opacity-100">
                {voiceItems.map(([label, href]) => (
                  <Link key={href} href={href} className="block px-4 py-3 text-sm text-ink hover:bg-mist">
                    {label}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
