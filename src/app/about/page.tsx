import { SiteHeader } from "@/components/site-header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-2xl px-8 pb-24 pt-8">
        <h1 className="font-serif text-4xl">About &amp; Methodology</h1>

        <div className="mt-8 flex flex-col gap-8 text-muted">
          <div>
            <h2 className="font-serif text-2xl text-foreground">Mission</h2>
            <p className="mt-3">
              The Human Meaning Atlas is a comparative, academically grounded
              exploration of how different religions, philosophies, and
              cultures have answered humanity&apos;s biggest questions —
              meaning, suffering, death, consciousness, morality, free
              will, and identity. It is not designed to rank, promote, or
              argue for any one tradition. The goal is understanding: to
              show how differently — and how carefully — people have
              thought about being human.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-foreground">
              Facts vs. interpretation
            </h2>
            <p className="mt-3">
              Every entry on this site distinguishes between two things:
              what a tradition&apos;s core texts, practices, or historical
              consensus actually hold, and how scholars have interpreted or
              contextualized that position. The first is presented as
              closely as possible to how the tradition itself would state
              it. The second is explicitly attributed to scholarly
              interpretation, not stated as settled fact. This separation
              is a deliberate structural choice, not just a stylistic one —
              it is built into how every entry is written.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-foreground">
              Current scope
            </h2>
            <p className="mt-3">
              This project currently covers five traditions — Christianity,
              Buddhism, Islam, Judaism, and Stoicism — across seven core
              questions. This is a deliberate starting scope, not a claim
              that these are the only traditions worth including. Additional
              traditions and questions are planned as the project grows.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-foreground">
              On avoiding oversimplification
            </h2>
            <p className="mt-3">
              Every tradition included here contains significant internal
              diversity — denominational, historical, and regional. Where
              possible, entries try to reflect points of broad consensus
              while noting where meaningful disagreement exists within a
              tradition, rather than presenting a single view as
              representative of the whole.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-foreground">
              A living project
            </h2>
            <p className="mt-3">
              This site is actively being built and researched. Content is
              added deliberately, one question and one tradition at a
              time, rather than generated in bulk — the aim is care over
              speed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}