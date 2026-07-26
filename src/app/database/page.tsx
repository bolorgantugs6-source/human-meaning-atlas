"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { databaseEntries } from "@/lib/database";
import { allTraditions } from "@/lib/traditions";
import { questions } from "@/lib/questions";

export default function DatabasePage() {
  const [query, setQuery] = useState("");
  const [traditionFilter, setTraditionFilter] = useState<string | null>(null);
  const [questionFilter, setQuestionFilter] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return databaseEntries.filter((entry) => {
      if (traditionFilter && entry.tradition !== traditionFilter) return false;
      if (questionFilter && entry.questionSlug !== questionFilter) return false;
      if (!q) return true;
      const haystack =
        `${entry.tradition} ${entry.questionLabel} ${entry.facts} ${entry.interpretation}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [query, traditionFilter, questionFilter]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-8 pb-24 pt-8">
        <h1 className="font-serif text-4xl">Database</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Search across every tradition&apos;s answers, or filter by
          tradition and question.
        </p>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search — try 'karma', 'resurrection', 'virtue'..."
          className="mt-8 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          {allTraditions.map((t) => (
            <button
              key={t}
              onClick={() =>
                setTraditionFilter(traditionFilter === t ? null : t)
              }
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                traditionFilter === t
                  ? "border-accent bg-accent text-background"
                  : "border-border hover:border-accent"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {questions.map((q) => (
            <button
              key={q.slug}
              onClick={() =>
                setQuestionFilter(questionFilter === q.slug ? null : q.slug)
              }
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                questionFilter === q.slug
                  ? "border-accent bg-accent text-background"
                  : "border-border hover:border-accent"
              }`}
            >
              {q.label}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted">
          {results.length} {results.length === 1 ? "result" : "results"}
        </p>

        <div className="mt-4 flex flex-col gap-4">
          {results.map((entry, i) => (
            <Link
              key={i}
              href={`/explore/${entry.questionSlug}`}
              className="rounded-2xl border border-border p-5 transition-colors hover:border-accent"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg">{entry.tradition}</span>
                <span className="text-xs uppercase tracking-widest text-muted">
                  {entry.questionLabel}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted">{entry.facts}</p>
            </Link>
          ))}
          {results.length === 0 && (
            <p className="text-muted">No matches. Try a different term.</p>
          )}
        </div>
      </section>
    </div>
  );
}