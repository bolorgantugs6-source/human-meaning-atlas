import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-8 py-12 text-foreground">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <div className="mx-auto mt-24 max-w-2xl text-center">
        <h1 className="font-serif text-5xl">The Human Meaning Atlas</h1>
        <p className="mt-4 text-muted">
          How different traditions answer humanity&apos;s biggest questions.
        </p>
        <Button className="mt-8">Explore</Button>
      </div>
    </main>
  );
}