"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { origins } from "@/lib/origins";
import { databaseEntries } from "@/lib/database";

export default function MapPage() {
  const [selected, setSelected] = useState<string | null>(null);

  const entries = selected
    ? databaseEntries.filter((e) => e.tradition === selected)
    : [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-5xl px-8 pb-24 pt-8">
        <h1 className="font-serif text-4xl">Origins</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Each tradition began somewhere specific, at a specific moment in
          history. Select a point to see how that tradition answers each of
          the seven questions.
        </p>

        <div
          className="relative mt-10 aspect-[2/1] w-full rounded-2xl border border-border"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-border) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          {origins.map((origin) => (
            <button
              key={origin.tradition}
              onClick={() =>
                setSelected(
                  selected === origin.tradition ? null : origin.tradition
                )
              }
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${origin.x}%`, top: `${origin.y}%` }}
            >
              <span
                className={`block h-3 w-3 rounded-full transition-transform group-hover:scale-125 ${
                  selected === origin.tradition
                    ? "bg-accent"
                    : "bg-foreground"
                }`}
              />
              <span className="pointer-events-none absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100">
                {origin.tradition} — {origin.region}
              </span>
            </button>
          ))}
        </div>

        {selected ? (
          <div className="mt-10">
            <h2 className="font-serif text-2xl">{selected}</h2>
            <div className="mt-4 flex flex-col gap-4">
              {entries.map((entry, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border p-5"
                >
                  <span className="text-xs uppercase tracking-widest text-muted">
                    {entry.questionLabel}
                  </span>
                  <p className="mt-1 text-sm">{entry.facts}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="mt-10 text-center text-muted">
            Select a point on the map above to begin.
          </p>
        )}
      </section>
    </div>
  );
}