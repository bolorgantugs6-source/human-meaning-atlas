"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/explore", label: "Explore" },
  { href: "/compare", label: "Compare" },
  { href: "/database", label: "Database" },
  { href: "/map", label: "Origins" },
  { href: "/sources", label: "Sources" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-6 py-5 sm:px-8 sm:py-6">
      <Link
        href="/"
        onClick={() => setOpen(false)}
        className="font-serif text-base tracking-tight sm:text-lg"
      >
        The Human Meaning Atlas
      </Link>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-6 md:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm hover:text-accent"
          >
            {link.label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>

      {/* Mobile: theme toggle + hamburger */}
      <div className="flex items-center gap-3 md:hidden">
        <ThemeToggle />
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-border"
        >
          <span
            className={`block h-0.5 w-4 bg-foreground transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-4 bg-foreground transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-4 bg-foreground transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <nav className="absolute left-0 right-0 top-full z-50 flex flex-col gap-1 border-b border-border bg-background px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm hover:bg-border/40"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
