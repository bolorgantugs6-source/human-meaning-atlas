import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { questions } from "@/lib/questions";
import { content } from "@/lib/content";
import { synthesis } from "@/lib/synthesis";

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const question = questions.find((q) => q.slug === slug);
  const data = content[slug];

  if (!question) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-8 pb-24 pt-8">
        <span className="text-xs uppercase tracking-widest text-muted">
          {question.label}
        </span>
        <h1 className="mt-2 font-serif text-4xl">{question.prompt}</h1>

        {data ? (
          <>
            <p className="mt-6 text-lg text-muted">{data.intro}</p>
            {synthesis[slug] && (
              <div className="mt-8 rounded-2xl border border-accent/40 bg-accent/5 p-5">
                <span className="text-xs font-medium uppercase tracking-widest text-accent">
                  AI-generated synthesis
                </span>
                <p className="mt-2 text-sm">{synthesis[slug]}</p>
              </div>
            )}
            <div className="mt-10 flex flex-col gap-6">
              {data.traditions.map((t) => (
                <div
                  key={t.tradition}
                  className="rounded-2xl border border-border p-6"
                >
                  <h2 className="font-serif text-2xl">{t.tradition}</h2>
                  <div className="mt-4">
                    <span className="text-xs font-medium uppercase tracking-widest text-accent">
                      What the tradition holds
                    </span>
                    <p className="mt-1 text-foreground">{t.facts}</p>
                  </div>
                  <div className="mt-4">
                    <span className="text-xs font-medium uppercase tracking-widest text-muted">
                      Scholarly interpretation
                    </span>
                    <p className="mt-1 text-muted">{t.interpretation}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="mt-6 text-muted">
            Content for this question is still being researched and added.
          </p>
        )}
      </section>
    </div>
  );
}