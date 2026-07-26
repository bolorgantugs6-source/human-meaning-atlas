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

        <div className="relative mt-10 aspect-[2/1] w-full overflow-hidden rounded-2xl border border-border">
          <svg
            viewBox="0 0 1000 500"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="1000" height="500" fill="var(--color-background)" />
            <g fill="var(--color-border)">
              {/* North America */}
              <path d="M28,69.5 L69,53 L222,41.5 L264,83.5 L347,111 L306,125 L278,180.5 L236,166.5 L181,166.5 L189,186 L264,208.5 L278,225 L153,125 L139,97 Z" />
              {/* South America */}
              <path d="M278,225 L403,264 L403,272 L375,319.5 L347,347 L311,394.5 L311,403 L300,361 L306,305.5 L278,264 L286,236 Z" />
              {/* Europe */}
              <path d="M472,147 L494,116.5 L486,97 L528,55.5 L583,55.5 L611,97 L597,125 L564,144.5 L533,133.5 L500,144.5 Z" />
              {/* Africa */}
              <path d="M450,191.5 L528,147 L589,164 L639,216.5 L617,264 L550,347 L533,300 L458,236 Z" />
              {/* Asia */}
              <path d="M597,125 L667,41.5 L972,55.5 L944,83.5 L889,139 L833,166.5 L792,222 L778,250 L714,228 L689,189 L639,180.5 L625,208.5 L597,139 Z" />
              {/* Australia */}
              <path d="M814,289 L875,280.5 L903,291.5 L925,328 L889,355.5 L819,344.5 L814,311 Z" />
            </g>
          </svg>

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
                className={`block h-3 w-3 rounded-full ring-4 ring-background transition-transform group-hover:scale-125 ${
                  selected === origin.tradition
                    ? "bg-accent"
                    : "bg-foreground"
                }`}
              />
              <span className="pointer-events-none absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
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
                <div key={i} className="rounded-2xl border border-border p-5">
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