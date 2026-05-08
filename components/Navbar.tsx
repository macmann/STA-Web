"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/siteContent";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Experience", "/experience"],
  ["Expertise", "/expertise"],
  ["Insights", "/insights"]
] as const;

const voiceItems = [
  ["Speaking Engagements", "/speaking"],
  ["Media Features", "/speaking/media"],
  ["Whitepaper Publications", "/speaking/whitepapers"]
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-accent/30 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:px-10">
        <Link href="/" className="pr-4 font-serif text-lg leading-none text-white sm:text-xl md:text-2xl">
          {profile.name}
        </Link>
        <button
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
          className="rounded-md border border-white/25 px-3 py-1 text-sm text-white md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          Menu
        </button>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
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
            <li>
              <Link href="/contact" className={`text-sm ${pathname === "/contact" ? "text-white" : "text-white/70 hover:text-white"}`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <nav id="mobile-nav" className={`${mobileMenuOpen ? "block" : "hidden"} border-t border-white/15 px-4 pb-4 md:hidden`}>
        <ul className="space-y-1 pt-3">
          {navItems.map(([label, href]) => {
            const active = pathname === href;
            return (
              <li key={`mobile-${href}`}>
                <Link
                  href={href}
                  className={`block rounded-md px-3 py-2 text-sm ${active ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li className="mt-3 px-3 text-xs uppercase tracking-[0.14em] text-white/60">Voice & Contributions</li>
          {voiceItems.map(([label, href]) => {
            const active = pathname === href;
            return (
              <li key={`mobile-${href}`}>
                <Link
                  href={href}
                  className={`block rounded-md px-3 py-2 text-sm ${active ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2">
            <Link
              href="/contact"
              className={`block rounded-md px-3 py-2 text-sm ${pathname === "/contact" ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
