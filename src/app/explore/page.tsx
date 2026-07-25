import { SiteHeader } from "@/components/site-header";
import { QuestionCard } from "@/components/question-card";
import { questions } from "@/lib/questions";

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-5xl px-8 pb-24 pt-8">
        <h1 className="font-serif text-4xl">Explore by Question</h1>
        <p className="mt-3 max-w-2xl text-muted">
          Choose a question to see how different traditions have answered
          it — in their own terms, side by side.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {questions.map((q) => (
            <QuestionCard key={q.slug} {...q} />
          ))}
        </div>
      </section>
    </div>
  );
}