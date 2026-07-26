"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { questions } from "@/lib/questions";
import { content } from "@/lib/content";
import { allTraditions } from "@/lib/traditions";

const MAX_SELECTED = 3;

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(tradition: string) {
    setSelected((prev) => {
      if (prev.includes(tradition)) {
        return prev.filter((t) => t !== tradition);
      }
      if (prev.length >= MAX_SELECTED) return prev;
      return [...prev, tradition];
    });
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-8 pb-24 pt-8">
        <h1 className="font-serif text-4xl">Compare Traditions</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Select up to three traditions to see how they answer each of the
          seven questions, side by side.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {allTraditions.map((tradition) => {
            const isSelected = selected.includes(tradition);
            const isDisabled = !isSelected && selected.length >= MAX_SELECTED;
            return (
              <button
                key={tradition}
                onClick={() => toggle(tradition)}
                disabled={isDisabled}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  isSelected
                    ? "border-accent bg-accent text-background"
                    : "border-border hover:border-accent"
                } ${isDisabled ? "opacity-40" : ""}`}
              >
                {tradition}
              </button>
            );
          })}
        </div>

        {selected.length === 0 ? (
          <p className="mt-16 text-center text-muted">
            Select at least one tradition above to begin comparing.
          </p>
        ) : (
          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="w-40 text-left text-xs uppercase tracking-widest text-muted">
                    Question
                  </th>
                  {selected.map((tradition) => (
                    <th
                      key={tradition}
                      className="border-b border-border px-4 pb-3 text-left font-serif text-lg"
                    >
                      {tradition}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {questions.map((q) => (
                  <tr key={q.slug}>
                    <td className="border-b border-border py-4 pr-4 align-top text-sm font-medium text-muted">
                      {q.prompt}
                    </td>
                    {selected.map((tradition) => {
                      const entry = content[q.slug]?.traditions.find(
                        (t) => t.tradition === tradition
                      );
                      return (
                        <td
                          key={tradition}
                          className="border-b border-border px-4 py-4 align-top text-sm"
                        >
                          {entry ? entry.facts : "—"}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}