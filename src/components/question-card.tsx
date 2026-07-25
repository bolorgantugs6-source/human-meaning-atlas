import Link from "next/link";

export function QuestionCard({
  slug,
  label,
  prompt,
}: {
  slug: string;
  label: string;
  prompt: string;
}) {
  return (
    <Link
      href={`/explore/${slug}`}
      className="group flex flex-col gap-1 rounded-2xl border border-border p-5 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
    >
      <span className="text-xs uppercase tracking-widest text-muted">
        {label}
      </span>
      <span className="font-serif text-lg transition-colors group-hover:text-accent">
        {prompt}
      </span>
    </Link>
  );
}