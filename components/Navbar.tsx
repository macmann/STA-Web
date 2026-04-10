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
  ["Speaking", "/speaking"],
  ["Contact", "/contact"]
] as const;

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="font-serif text-xl text-ink">
          {profile.name}
        </Link>
        <nav>
          <ul className="hidden gap-6 md:flex">
            {navItems.map(([label, href]) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link href={href} className={`text-sm ${active ? "text-ink" : "text-steel/70 hover:text-ink"}`}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
