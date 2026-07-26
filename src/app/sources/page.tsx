import { SiteHeader } from "@/components/site-header";
import { sources } from "@/lib/sources";

export default function SourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-2xl px-8 pb-24 pt-8">
        <h1 className="font-serif text-4xl">Sources</h1>
        <p className="mt-3 text-muted">
          The primary texts and reference works consulted for each
          tradition represented on this site. This project is a work in
          progress — claim-by-claim citation is a planned next step, and
          this list currently reflects general sourcing rather than
          line-by-line footnotes.
        </p>
        <div className="mt-10 flex flex-col gap-8">
          {Object.entries(sources).map(([tradition, list]) => (
            <div key={tradition}>
              <h2 className="font-serif text-2xl">{tradition}</h2>
              <ul className="mt-2 flex flex-col gap-1 text-sm text-muted">
                {list.map((s) => (
                  <li key={s.title}>
                    {s.author ? `${s.author}, ` : ""}
                    <span className="italic">{s.title}</span>
                    {s.type === "primary" ? " — primary text" : ""}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}