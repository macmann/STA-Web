"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { profile } from "@/data/siteContent";

export function Hero() {
  return (
    <section className="section-spacing">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[1.2fr_0.8fr] md:items-end md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Strategic Advisory for ASEAN</p>
          <h1 className="font-serif text-4xl leading-tight text-ink md:text-6xl">{profile.name}</h1>
          <p className="text-lg font-semibold text-steel">{profile.title}</p>
          <p className="max-w-2xl text-base leading-8 text-steel/80 md:text-xl">{profile.positioning}</p>
          <p className="max-w-2xl text-steel/80">{profile.intro}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-steel">
              Contact
            </Link>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-steel px-6 py-3 text-sm font-semibold text-steel hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-1 gap-4 rounded-2xl border border-steel/20 bg-mist p-6"
        >
          {profile.metrics.map((metric) => (
            <div key={metric.label} className="border-b border-gray-300 pb-4 last:border-none last:pb-0">
              <p className="font-serif text-3xl text-ink">{metric.value}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-steel/70">{metric.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
