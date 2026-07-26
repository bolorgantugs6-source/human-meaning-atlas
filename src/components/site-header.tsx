import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between px-8 py-6">
      <Link href="/" className="font-serif text-lg tracking-tight">
        The Human Meaning Atlas
      </Link>
      <nav className="flex items-center gap-6">
        <Link href="/explore" className="text-sm hover:text-accent">
          Explore
        </Link>
        <Link href="/compare" className="text-sm hover:text-accent">
          Compare
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}