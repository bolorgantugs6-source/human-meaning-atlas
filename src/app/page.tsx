import { SiteHeader } from "@/components/site-header";
import { QuestionCard } from "@/components/question-card";
import { Button } from "@/components/ui/button";
import { questions } from "@/lib/questions";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-3xl px-8 pb-24 pt-12 text-center">
        <h1 className="animate-fade-in-up font-serif text-5xl leading-tight sm:text-6xl">
          How do we make sense of being human?
        </h1>
        <p
          className="animate-fade-in-up mx-auto mt-6 max-w-xl text-lg text-muted"
          style={{ animationDelay: "0.1s" }}
        >
          Across every culture and every century, people have wrestled with
          the same handful of questions — what suffering means, what happens
          when we die, whether we&apos;re truly free. The Human Meaning Atlas
          is a place to sit with how different traditions have answered
          them: side by side, on their own terms, without ranking one
          against another.
        </p>
        <div
          className="animate-fade-in-up mt-8"
          style={{ animationDelay: "0.2s" }}
        >
          <Link href="/explore">
            <Button>Begin Exploring</Button>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-8 pb-24">
        <h2 className="mb-6 text-center text-sm uppercase tracking-widest text-muted">
          Seven questions, countless answers
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {questions.map((q) => (
            <QuestionCard key={q.slug} {...q} />
          ))}
        </div>
      </section>
    </div>
  );
}